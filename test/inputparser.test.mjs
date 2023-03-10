import { expect } from "chai";
import { readInputFile } from "../src/inputparser.mjs";

describe("Test input parser", () => {
  it("read input file", () => {
    let data = readInputFile("./test/blinker.rle");
    expect(data.length).to.not.equal(0);
  });
});
