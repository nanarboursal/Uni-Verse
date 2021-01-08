import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./Navbar.css";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="user-nav">
      <Navbar light expand="md">
        <NavbarBrand className="logo d-flex align-items-end" href="/">
          Uni-Verse
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto the-nav" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="nav-itemz">
                Profile
              </DropdownToggle>
              <DropdownMenu right>
                {/* <DropdownItem href="/">View Profile</DropdownItem> */}
                <DropdownItem className="item-nav" href="/">Your Matches</DropdownItem>
                <DropdownItem className="item-nav" href="/">Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="nav-itemz">
                Sign In
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="item-nav" href="/signUp">Sign Up</DropdownItem>
                <DropdownItem className="item-nav" href="/logIn">Log In</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
