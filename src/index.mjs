import { readInputFile, readWidth, readHeight, readState, stateToMatrix } from "./inputparser.mjs";

const args = process.argv;
console.log(args);
if (args.length !== 4){
  console.log("usage: start [rlefile] [count]");
}
const file = args[2];
const count = parseInt(args[3]);

const inputData = readInputFile(file);
const inputWidth = readWidth(inputData);
const inputHeight = readHeight(inputData);
const inputState = readState(inputData);
const inputMatrix = stateToMatrix(inputState);