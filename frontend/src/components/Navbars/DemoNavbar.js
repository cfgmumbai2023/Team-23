import React from "react";
import { Link } from "react-router-dom";
import MultilingualSelector from "components/MultilingualSelector";

import Headroom from "headroom.js";

import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  NavItem,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
            
          >
            <MultilingualSelector/>
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/JEETfinalLOGO.webp")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Login/SignUp</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Sign-Up
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Languages</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Hindi
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        English
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        English
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        English
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        English
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        English
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        English
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <Button
                      className="btn-icon btn-2 ml-1"
                      color="primary"
                      type="button"
                      href="tel:+4444488888"
                    >
                      No School? Call Us
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      className="btn-icon btn-2 ml-1"
                      color="primary"
                      type="button"
                      href="https://chatcn-4033a.firebaseapp.com/"
                      target="_blank"
                    >
                      Chat with Us
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
