import fs from "fs"

export function readInputFile(path) {
  return fs.readFileSync(path);
}
