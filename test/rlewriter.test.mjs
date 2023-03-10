import { expect } from "chai";
import { matrixToRLE } from "../src/rlewriter.mjs";

describe("Test RLE writer with blinker", () => {
  const matrix = [[true, true, true]];
  it("matrix to rle", () => {
    expect(matrixToRLE(matrix)).to.equal("3o!");
  });
});
