import { expect } from "chai";
import { matrixToRLE } from "../src/rlewriter.mjs";

describe("Test RLE writer with blinker", () => {
  const matrix = [[true, true, true]];
  it("matrix to rle", () => {
    expect(matrixToRLE(matrix)).to.equal("3o!");
  });
});

describe("Test RLE writer with glider", () => {
  const matrix = [[false,true,false],[false,false,true],[true,true,true]];
  it("matrix to rle", () => {
    expect(matrixToRLE(matrix)).to.equal("bob$2bo$3o!");
  });
});
