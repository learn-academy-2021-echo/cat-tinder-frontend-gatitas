import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
    <h1>this is the header</h1>
    // <div>
    // <Navbar
    //   color="primary"
    //   dark
    //   expand="md"
    //   fixed="top"
    //   light
    // >
    //   <NavbarBrand href="/">
    //     Cat Tinder
    //   </NavbarBrand>
    //   <NavbarToggler onClick={function noRefCheck(){}} />
    //   <Collapse navbar>
    //     <Nav
    //       className="me-auto"
    //       navbar
    //     >
    //       <NavItem>
    //         <NavLink href="/catshow/">
    //           View Cats
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink href="https://github.com/reactstrap/reactstrap">
    //           About Me
    //         </NavLink>
    //       </NavItem>
    //       <UncontrolledDropdown
    //         inNavbar
    //         nav
    //       >
    //         <DropdownToggle
    //           caret
    //           nav
    //         >
    //           Matches
    //         </DropdownToggle>
    //         <DropdownMenu right>
    //           <DropdownItem>
    //             Most Recent
    //           </DropdownItem>
    //           <DropdownItem>
    //             View Messages
    //           </DropdownItem>
    //           <DropdownItem divider />
    //           <DropdownItem>
    //             View Likes
    //           </DropdownItem>
    //         </DropdownMenu>
    //       </UncontrolledDropdown>
    //     </Nav>
    //     <NavbarText>
    //       Log Out
    //     </NavbarText>
    //   </Collapse>
    // </Navbar>
    // </div>
  )
  }
}
