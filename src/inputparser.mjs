import fs from "fs"

export function readInputFile(path) {
  return fs.readFileSync(path, "utf-8");
}

export function readWidth(data) {
  let res = data.match(/\sx\s=\s(\d+)/);
  return res ? parseInt(res[1]) : null;
}

export function readHeight(data) {
  let res = data.match(/\sy\s=\s(\d+)/);
  return res ? parseInt(res[1]) : null;
}

export function readState(data) {
  let res = "";
  let lines = data.split("\n");
  for (let i = lines.length-1; i >= 0; i--) {
    let line = lines[i];
    if (line.includes("x = ")) {
      break;
    }
    res = line + res;
  }
  return res.replace("\r","");
}

export function stateToMatrix(stateString) {
  let res = [[]];
  return res;
}