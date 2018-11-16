import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
  import { Link } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        /*TODO space content on the bar*/
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand className="d-block d-sm-none" href="/">Sodium Cycle</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto w-100 justify-content-between pr-5 pl-5" navbar>
              <NavItem>
                <NavLink>Xubaka</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Gallerie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Technologie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Qui sommes nous ?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Précommande</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand className="d-none d-sm-block" href="/">Sodium Cycle</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
