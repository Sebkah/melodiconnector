#!/usr/bin/env node
const fs = require("fs").promises;
const path = require("path");

const dryRun = process.argv.includes("--dry-run");

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
        (dryRun ? "[dry-run] " : "") + `Swapping ${publishPath} -> ${destPath}`
      );
      if (!dryRun) {
        const content = await fs.readFile(publishPath, "utf8");
        await fs.writeFile(destPath, content, "utf8");
      }
    }
  }
}

(async function main() {
  try {
    const repoRoot = path.resolve(__dirname, "..");
    const possibleRoots = [
      path.join(repoRoot, "packages"),
      path.join(repoRoot, "apps"),
    ];
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
