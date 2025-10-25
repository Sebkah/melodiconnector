#!/usr/bin/env node
const fs = require("fs").promises;
const path = require("path");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const doRestore = args.includes("--restore");

async function walkAndSwap(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkAndSwap(full);
      continue;
    }

    if (entry.isFile() && entry.name === "package.publish.json") {
      const publishPath = full;
      const destPath = path.join(path.dirname(full), "package.json");
      console.log(
        (dryRun ? "[dry-run] " : "") + `Merging ${publishPath} -> ${destPath}`
      );
      const publishRaw = await fs.readFile(publishPath, "utf8");
      const publishJson = JSON.parse(publishRaw);

      let existingJson = {};
      try {
        const existingRaw = await fs.readFile(destPath, "utf8");
        existingJson = JSON.parse(existingRaw);
      } catch (e) {
        // no existing package.json, will create from publish
        existingJson = {};
      }

      // shallow merge: top-level keys in publishJson replace existing keys entirely
      const merged = { ...existingJson, ...publishJson };
      const changes = collectTopLevelChanges(existingJson, merged);
      if (changes.length === 0) {
        console.log("  No changes to apply.");
        continue;
      }

      console.log("  Changed keys:");
      for (const c of changes) console.log("   -", c);

      if (!dryRun) {
        // create a backup if one doesn't already exist
        const backupPath = destPath + ".bak";
        try {
          await fs.access(backupPath);
          // backup already exists, do nothing
        } catch (e) {
          try {
            // if original exists, copy it
            await fs.access(destPath);
            const original = await fs.readFile(destPath, "utf8");
            await fs.writeFile(backupPath, original, "utf8");
          } catch (e2) {
            // original didn't exist — mark backup as missing
            await fs.writeFile(backupPath, "<<MISSING>>", "utf8");
          }
        }

        // keep a stable formatting
        await fs.writeFile(
          destPath,
          JSON.stringify(merged, null, 2) + "\n",
          "utf8"
        );
      }
    }
  }
}

async function restoreBackups(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await restoreBackups(full);
      continue;
    }

    if (entry.isFile() && entry.name === "package.json.bak") {
      const backupPath = full;
      const pkgDir = path.dirname(full);
      const destPath = path.join(pkgDir, "package.json");
      console.log(`Restoring ${backupPath} -> ${destPath}`);
      const raw = await fs.readFile(backupPath, "utf8");
      if (raw === "<<MISSING>>") {
        // original did not exist, remove created package.json if present
        try {
          await fs.unlink(destPath);
        } catch (e) {
          // ignore
        }
      } else {
        await fs.writeFile(destPath, raw, "utf8");
      }
      // remove backup
      await fs.unlink(backupPath);
    }
  }
}

function collectTopLevelChanges(oldObj, newObj) {
  const changes = [];
  const keys = new Set([
    ...Object.keys(oldObj || {}),
    ...Object.keys(newObj || {}),
  ]);
  for (const key of keys) {
    const oldVal = oldObj ? oldObj[key] : undefined;
    const newVal = newObj ? newObj[key] : undefined;
    if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
      changes.push(key);
    }
  }
  return changes;
}

(async function main() {
  try {
    const repoRoot = path.resolve(__dirname, "..");
    const possibleRoots = [
      path.join(repoRoot, "packages"),
      path.join(repoRoot, "apps"),
    ];
    if (doRestore) {
      for (const root of possibleRoots) {
        try {
          await fs.access(root);
          await restoreBackups(root);
        } catch (e) {
          // directory doesn't exist, skip
        }
      }
      console.log("Restore completed.");
      return;
    }

    for (const root of possibleRoots) {
      try {
        await fs.access(root);
        await walkAndSwap(root);
      } catch (e) {
        // directory doesn't exist, skip
      }
    }
    console.log((dryRun ? "[dry-run] " : "") + "Swap completed.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
