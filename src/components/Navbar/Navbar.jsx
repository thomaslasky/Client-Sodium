import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeNavbar() {
    if (this.state.isOpen == true) {
      this.toggle();
    }
  }

  render() {
    return (
      /*TODO space content on the bar*/
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand className="d-block d-md-none" href="/">
            Sodium Cycle
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto w-100 justify-content-around " navbar>
              <NavItem>
                <Link to="/" onClick={this.closeNavbar} className="nav-link">
                  Xubaka
                </Link>
              </NavItem>
              <NavItem>
                <NavLink>Gallerie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Technologie</NavLink>
              </NavItem>
              <NavItem>
                <Link
                  to="/who-are-we"
                  onClick={this.closeNavbar}
                  className="nav-link"
                >
                  Qui sommes nous ?
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/preorder"
                  onClick={this.closeNavbar}
                  className="nav-link"
                >
                  Précommande
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/contact"
                  onClick={this.closeNavbar}
                  className="nav-link"
                >
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand className="d-none d-md-block" href="/">
            Sodium Cycle
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
