import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header'
import App from '../App'

Enzyme.configure({adapter: new Adapter()})

describe("when Header renders ",() => {
  it("has a className = Header-navLabels", () => {
    const renderedHeader = shallow(<Header/>)
    const renderedHeadered = renderedHeader.find('className=Header-navLabels')
    console.log(renderedHeadered.debug());
    expect(renderedHeadered.length).toEqual(1)
  })
})
