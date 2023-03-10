import fs from "fs"

export function readInputFile(path) {
  return fs.readFileSync(path);
}

export function readWidth(data) {
  return -1;
}

export function readHeight(data) {
  return -1;
}