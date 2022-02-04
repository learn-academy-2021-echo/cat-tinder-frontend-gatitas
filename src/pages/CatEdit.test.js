import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatEdit from "./CatEdit";
import cat from "../mockCat";

Enzyme.configure({ adapter: new Adapter() });

describe("when Cat Edit Component renders...", () => {
  it("I can see a h2 tag", () => {
    const renderedCatEdit = shallow(<CatEdit cat={cat} />);
    const renderedCatEditRoute = renderedCatEdit.find("h2");
    expect(renderedCatEditRoute.length).toEqual(1);
  });
});
