import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <h1>this is the header</h1>
        <div>
          <Navbar color="primary" dark expand="md" fixed="top" light>
            <NavbarBrand>
              <Link to="/" className="Header-navLabels">
                Cat Tinder
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link to="/catindex" className="Header-navLabels">
                      View Cats
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/catshow" className="Header-navLabels">
                      About Me
                    </Link>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    <span className="Header-navLabels">Matches</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Most Recent</DropdownItem>
                    <DropdownItem>View Messages</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>View Likes</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Log Out</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}
