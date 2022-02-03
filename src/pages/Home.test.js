import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("when Home Component renders...", () => {
  it("I can see a h1 tag", () => {
    const renderedHome = shallow(<Home />);
    const renderedHomeRoute = renderedHome.find("h1").text();
    expect(renderedHomeRoute).toEqual("Home!!!");
  });
});
