import { expect } from "chai";
import { expand, shrink } from "../src/evolution.mjs";

describe("Game of life evolution tests", () => {
  it("Expand the state area in every direction", () => {
    expect(expand([[true, true, true]])).to.deep.equal([[false, false, false, false, false],[false, true, true, true, false],[false, false, false, false, false]]);
  });
  it("Shrink away empty horizontal and vertical lines from the area", () => {
    expect(shrink([[false, false, false, false, false],[false, true, true, true, false],[false, false, false, false, false]]).to.deep.equal([[true, true, true]]));
  });
});
