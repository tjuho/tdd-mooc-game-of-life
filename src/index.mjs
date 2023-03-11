import { readInputFile, readWidth, readHeight, readState, stateToMatrix } from "./inputparser.mjs";
import { expand, shrink, step } from "./evolution.mjs";
import { matrixToRLE } from "./rlewriter.mjs";

const args = process.argv;
if (args.length !== 4){
  console.log("usage: npm start [rlefile] [count]");
  throw "Error";
}
const file = args[2];
const count = parseInt(args[3]);
const inputData = readInputFile(file);
const inputWidth = readWidth(inputData);
const inputHeight = readHeight(inputData);
const inputState = readState(inputData);
let matrix = stateToMatrix(inputState, inputWidth, inputHeight);
for (let i = 0; i < count; i++){
  matrix = step(matrix);
}
const output = matrixToRLE(matrix);
console.log(output);