import { readInputFile, readWidth, readHeight, readState, stateToMatrix } from "./inputparser.mjs";
import { expand, shrink, step } from "./evolution.mjs";
import { matrixToRLE } from "./rlewriter.mjs";

const args = process.argv;
console.log(args);
if (args.length !== 4){
  console.log("usage: start [rlefile] [count]");
}
const file = args[2];
const count = parseInt(args[3]);
console.log(file);
console.log(count);
const inputData = readInputFile(file);
const inputWidth = readWidth(inputData);
const inputHeight = readHeight(inputData);
const inputState = readState(inputData);
let matrix = stateToMatrix(inputState);
for (let i = 0; i < count; i++){
  matrix = step(matrix);
}
const output = matrixToRLE(matrix);
console.log(output);