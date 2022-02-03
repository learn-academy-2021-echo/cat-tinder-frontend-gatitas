import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatIndex from "./CatIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("when Cat Index Component renders...", () => {
  it("I can see a h2 tag", () => {
    const renderedCatIndex = shallow(<CatIndex />);
    const renderedCatIndexRoute = renderedCatIndex.find("h2").text()
    expect(renderedCatIndexRoute).toEqual("Cat Index Page");
  });
});
