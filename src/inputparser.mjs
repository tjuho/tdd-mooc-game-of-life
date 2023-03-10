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

export function stateToMatrix(stateString, width, height) {
  let res = [];
  for (let h = 0; h < height; h++) {
    res[h] = Array(width).fill(false);
  }
  let x = 0;
  let y = 0;
  let repeat = 1;
  for (let idx = 0; idx < stateString.length; idx++){
    const ch = stateString[idx];
    if (isNumber(ch)){
      if (repeat === 1){
        repeat = parseInt(ch);
      } else {
        repeat = repeat * 10 + parseInt(ch);
      }
    } else if (ch === 'o') {
      for (let r = 0; r < repeat; r++){
        console.log(res[y]);
        res[y][x++] = true;
      }
      repeat = 1;
    } else if (ch === 'b') {
      x = x+repeat;
      repeat = 1;
    } else if (ch === '$') {
      y = y+repeat;
      x = 0;
      repeat = 1;
    } else if (ch === '!') {
      break;
    } else {
      console.log("should not reach here", ch);
      break;
    }
  }
  return res;
}

function isNumber(char) {
  return /^\d$/.test(char);
}