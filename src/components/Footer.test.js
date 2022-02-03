import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App'
import Footer from './Footer'

Enzyme.configure({adapter: new Adapter()})

describe("Check For Footer Component...",() => {
  it("As a developer, I have test coverage on my Footer component.", () => {
    const renderedApp = shallow(<App/>)
    const renderedFooter = renderedApp.find('Footer')
    expect(renderedFooter.length).toEqual(1)
  })
})
