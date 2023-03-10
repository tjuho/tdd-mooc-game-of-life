import { expect } from "chai";
import { expand, shrink, step } from "../src/evolution.mjs";

describe("Game of life evolution tests with blinker", () => {
  it("Expand the state area in every direction", () => {
    expect(expand([[true, true, true]])).to.deep.equal([[false, false, false, false, false],[false, true, true, true, false],[false, false, false, false, false]]);
  });
  it("Shrink away empty horizontal and vertical lines from the sides of the area", () => {
    expect(shrink([[false, false, false, false, false],[false, true, true, true, false],[false, false, false, false, false]])).to.deep.equal([[true, true, true]]);
  });
  it("Move a step", () => {
    expect(step([[true, true, true]])).to.deep.equal([[true], [true], [true]]);
  });
});

describe("Game of life evolution tests with glider", () => {
  const glidermat = [[false,true,false],[false,false,true],[true,true,true]];
  const expanded = [[false, false, false, false, false],[false, false, true, false, false],[false, false, false, true, false],[false, true, true, true, false],[false, false, false, false, false]];
  it("Expand the state area in every direction", () => {
    expect(expand(glidermat)).to.deep.equal(expanded);
  });
  it("Shrink away empty horizontal and vertical lines from the sides of the area", () => {
    expect(shrink(expanded)).to.deep.equal(glidermat);
  });
  it("Move a step", () => {
    expect(step(glidermat)).to.deep.equal([[true,false,true], [false,true,true], [false,true,false]]);
  });
  it("After four steps glider should be the same as when started", () => {
    expect(step(step(step(step(glidermat))))).to.deep.equal(glidermat);
  });
});
