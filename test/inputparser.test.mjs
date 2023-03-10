import { expect } from "chai";
import { readInputFile, readWidth, readHeight, readState } from "../src/inputparser.mjs";

describe("Test input parser", () => {
  it("read input file", () => {
    let data = readInputFile("./test/blinker.rle");
    expect(data.length).to.not.equal(0);
  });
  it("read width", () => {
    let data = readInputFile("./test/blinker.rle");
    expect(readWidth(data)).to.equal(3);
  });
  it("read height", () => {
    let data = readInputFile("./test/blinker.rle");
    expect(readHeight(data)).to.equal(1);
  });
  it("read state", () => {
    let data = readInputFile("./test/blinker.rle");
    expect(readState(data)).to.equal("3o!");
  });
});
