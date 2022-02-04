import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatEdit from "./CatEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("when Cat Edit Component renders...", () => {
  it("I can see submitted change from false to true", () => {
    const renderedCatEdit = shallow(<CatEdit />);
    expect(renderedCatEdit.this.state.submitted.text()).to.equal("false");
    renderedCatEdit.update();
    expect(renderedCatEdit.text()).to.equal("true");
  });
});
