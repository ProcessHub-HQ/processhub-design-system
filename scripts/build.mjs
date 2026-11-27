import { copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const cssFiles = ["tokens.css", "base.css", "components.css"];

await Promise.all(
  cssFiles.map((file) =>
    copyFile(path.join(root, "src", file), path.join(root, "dist", file)),
  ),
);
