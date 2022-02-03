import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatNew from "./CatNew";

Enzyme.configure({ adapter: new Adapter() });

describe("when Cat New Component renders...", () => {
  it("I can see a h2 tag", () => {
    const renderedCatNew = shallow(<CatNew />);
    const renderedCatNewRoute = renderedCatNew.find("h2").text();
    expect(renderedCatNewRoute).toEqual("Create New Cat");
  });
});
