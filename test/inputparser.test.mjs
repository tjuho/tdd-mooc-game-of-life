import { expect } from "chai";
import { readInputFile, readWidth, readHeight, readState, stateToMatrix } from "../src/inputparser.mjs";

describe("Test input parser with blinker", () => {
  const data = readInputFile("./test/blinker.rle");
  it("read input file", () => {
    expect(data.length).to.not.equal(0);
  });
  it("read width", () => {
    expect(readWidth(data)).to.equal(3);
  });
  it("read height", () => {
    expect(readHeight(data)).to.equal(1);
  });
  it("read state", () => {
    expect(readState(data)).to.equal("3o!");
  });
  it("test changing input state string to matrix", () => {
    const w = readWidth(data);
    const h = readHeight(data);
    const state = readState(data);
    expect(stateToMatrix(state, w, h)).to.deep.equal([[true, true, true]]);
  });
});
describe("Test input parser with multiline state blinker", () => {
  const data = readInputFile("./test/blinker1.rle");
  it("read state with many rows", () => {
    expect(readState(data)).to.equal("3o!3o!");
  });
});
