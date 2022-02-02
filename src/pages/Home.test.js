import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App'
import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

describe("Check For Home Component...",() => {
  it("As a developer, I have test coverage on my Home component.", () => {
    const renderedApp = shallow(<App/>)
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    expect(renderedHomeRoute.length).toEqual(1)
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
})
