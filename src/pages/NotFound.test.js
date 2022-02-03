import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import NotFound from "./NotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("when Not Found renders", () => {
  it("has a div matching id = NotFound-container", () => {
    const renderedNotFound = shallow(<NotFound />);
    const renderedNotFoundRoute = renderedNotFound.find(
      '[id="NotFound-container"]'
    );
    expect(renderedNotFoundRoute.length).toEqual(1);
  });
});
