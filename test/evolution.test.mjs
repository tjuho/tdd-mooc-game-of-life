import { expect } from "chai";
import { expand } from "../src/evolution.mjs";

describe("Game of life evolution tests", () => {
  it("Expand the area", () => {
    expect([[true, true, true]]).to.equal([[false, false, false, false, false],[false, true, true, true, false],[false, false, false, false, false]]);
  });
});
