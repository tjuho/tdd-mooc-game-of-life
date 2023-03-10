import { expect } from "chai";
import { expand } from "../src/evolution.mjs";

describe("Game of life evolution tests", () => {
  it("Expand the state area in every direction", () => {
    expect(expand([[true, true, true]])).to.deep.equal([[false, false, false, false, false],[false, true, true, true, false],[false, false, false, false, false]]);
  });
});
