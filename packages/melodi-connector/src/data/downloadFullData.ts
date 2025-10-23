import AdmZip from "adm-zip";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import Papa from "papaparse";
import type { CatalogEntry } from "../types/catalogTypes";
import type { DatasetIdentifier } from "../types/generalTypes";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const defaultMelodiConfig = {
  dataExportPath: "src/data",
};

export type MelodiConfigType = typeof defaultMelodiConfig;

function findConfigFile(startDir: string): string | null {
  let currentDir = startDir;
  const configFileName = "melodi.connector.config.ts";

  while (true) {
    const configPath = path.join(currentDir, configFileName);
    if (existsSync(configPath)) {
      return configPath;
    }

    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) {
      // Reached root
      break;
    }
    currentDir = parentDir;
  }

  return null;
}

export async function loadConfig() {
  const configPath = findConfigFile(__dirname);
  if (!configPath) {
    throw new Error("Config file not found");
  }

  const configModule = await import(
    pathToFileURL(path.resolve(configPath)).href
  );

  // If no config found, use default
  const config = configModule.config ?? defaultMelodiConfig;

  console.log(`Using config from ${configPath}:`, config);

  return config;
}

export type MetadataRecord = Record<string, Record<string, string>>;

export type Manifest = [{ id: string; downloadedAt: string }];

export async function downloadAndExtractZip(
  id: DatasetIdentifier,
  force = false
) {
  // Find the closest config file
  const config = await loadConfig();
  const extractPath = `${config.dataExportPath}/datasetFiles/${id}`;

  // Check the manifest
  const manifestPath = `${config.dataExportPath}/datasetFiles/manifest.json`;
  if (existsSync(manifestPath)) {
    const manifestContent = readFileSync(manifestPath, "utf-8");
    const manifest = JSON.parse(manifestContent) as Manifest;
    if (manifest.find((entry) => entry.id === id) && !force) {
      console.log(`Dataset ${id} already downloaded, skipping...`);
      return;
    }
  }

  try {
    const response = await fetch(`https://api.insee.fr/melodi/catalog/all`);
    const data: CatalogEntry[] = await response.json();
    const entry = data.find((e) => e.identifier === id);

    if (!entry) {
      console.log(`Entry not found for ${id}`);
      return null;
    }

    const res = await fetch(entry.product[0]!.accessURL!);
    const rawfileContent = await res.arrayBuffer();

    mkdirSync(extractPath, { recursive: true });
    const zip = new AdmZip(Buffer.from(rawfileContent));
    zip.extractAllTo(extractPath, true);

    // Update the manifest
    if (existsSync(manifestPath)) {
      const manifestContent = readFileSync(manifestPath, "utf-8");
      const manifest = JSON.parse(manifestContent) as Manifest;
      manifest.push({ id, downloadedAt: new Date().toISOString() });
      writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
    } else {
      const manifest: Manifest = [
        { id, downloadedAt: new Date().toISOString() },
      ];
      writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
    }
  } catch (error) {
    console.error(`Error downloading/extracting for ${id}:`, error);
    return null;
  }
}

export const extractMetaData = async (id: DatasetIdentifier) => {
  const config = await loadConfig();
  await downloadAndExtractZip(id);
  try {
    // Parse the metadata CSV
    const metadataCsvPath = `${config.dataExportPath}/datasetFiles/${id}/${id}_metadata.csv`;
    if (existsSync(metadataCsvPath)) {
      const csvContent = readFileSync(metadataCsvPath, "utf-8");
      const parsedCsv = Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
      });
      const transformedData: MetadataRecord = {};
      parsedCsv.data.forEach((row: any) => {
        const { COD_VAR, COD_MOD, LIB_MOD } = row;
        if (!transformedData[COD_VAR]) {
          transformedData[COD_VAR] = {};
        }
        transformedData[COD_VAR][COD_MOD] = LIB_MOD;
      });

      console.log(`Transformed metadata for ${id}:`, transformedData);
      return transformedData;
    } else {
      console.log(`Metadata CSV not found for ${id}`);
      return null;
    }
  } catch (error) {
    console.error(`Error downloading/extracting for ${id}:`, error);
    return null;
  }
};
