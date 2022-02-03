import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatShow from "./CatShow";

Enzyme.configure({ adapter: new Adapter() });

describe("when Cat Show Component renders...", () => {
  it("I can see a h2 tag", () => {
    const renderedCatShow = shallow(<CatShow />);
    const renderedCatShowRoute = renderedCatShow.find("h2").text();
    expect(renderedCatShowRoute).toEqual("Cat Show Page");
  });
});
