import React from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  constructor() {
    super();
    this.state = {
      show1: false,
      show2: false,
      show3: false,
    };
    this.showModal1 = this.showModal1.bind(this);
    this.hideModal1 = this.hideModal1.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.hideModal2 = this.hideModal2.bind(this);
    this.showModal3 = this.showModal3.bind(this);
    this.hideModal3 = this.hideModal3.bind(this);
  }

  showModal1 = () => {
    this.setState({ show1: true });
  };

  hideModal1 = () => {
    this.setState({ show1: false });
  };

  showModal2 = () => {
    this.setState({ show2: true });
  };

  hideModal2 = () => {
    this.setState({ show2: false });
  };

  showModal3 = () => {
    this.setState({ show3: true });
  };

  hideModal3 = () => {
    this.setState({ show3: false });
  };

  render() {

    
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 text-center">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-user" />
                          </div>
                          <h6 className="text-primary text-uppercase">Admin</h6>

                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={this.showModal1}
                          >
                            Login
                          </Button>
                        </CardBody>
                      </Card>
                      <Modal
                        open={this.state.show1}
                        onClose={this.hideModal1}
                        center
                      >
                        <Card className="bg-secondary shadow border-0">
                          <CardHeader className="bg-white pb-5">
                            <div className="text-muted text-center mb-3">
                              <small>Sign in with</small>
                            </div>
                            <div className="btn-wrapper text-center">
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/github.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Github</span>
                              </Button>
                              <Button
                                className="btn-neutral btn-icon ml-1"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/google.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Google</span>
                              </Button>
                            </div>
                          </CardHeader>
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              <small>Or sign in with credentials</small>
                            </div>
                            <Form role="form">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Email" type="email" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id=" customCheckLogin"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor=" customCheckLogin"
                                >
                                  <span>Remember me</span>
                                </label>
                              </div>
                              <div className="text-center">
                                <Button
                                  className="my-4"
                                  color="primary"
                                  type="button"
                                >
                                  Sign in
                                </Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                        <Row className="mt-3">
                          <Col xs="6">
                            <a
                              className="text-light"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <small>Forgot password?</small>
                            </a>
                          </Col>
                          <Col className="text-right" xs="6">
                            <a
                              className="text-light"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <small>Create new account</small>
                            </a>
                          </Col>
                        </Row>
                      </Modal>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 text-center">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="fa fa-book" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Learner
                          </h6>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={this.showModal2}
                          >
                            Login
                          </Button>
                        </CardBody>
                      </Card>
                      <Modal
                        open={this.state.show2}
                        onClose={this.hideModal2}
                        center
                      >
                        <Card className="bg-secondary shadow border-0">
                          <CardHeader className="bg-white pb-5">
                            <div className="text-muted text-center mb-3">
                              <small>Sign in with</small>
                            </div>
                            <div className="btn-wrapper text-center">
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/github.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Github</span>
                              </Button>
                              <Button
                                className="btn-neutral btn-icon ml-1"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/google.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Google</span>
                              </Button>
                            </div>
                          </CardHeader>
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              <small>Or sign in with credentials</small>
                            </div>
                            <Form role="form">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Email" type="email" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id=" customCheckLogin"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor=" customCheckLogin"
                                >
                                  <span>Remember me</span>
                                </label>
                              </div>
                              <div className="text-center">
                                <Button
                                  className="my-4"
                                  color="primary"
                                  type="button"
                                  href="learner-profile"
                                >
                                  Sign in
                                </Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                        <Row className="mt-3">
                          <Col xs="6">
                            <a
                              className="text-light"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <small>Forgot password?</small>
                            </a>
                          </Col>
                          <Col className="text-right" xs="6">
                            <a
                              className="text-light"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <small>Create new account</small>
                            </a>
                          </Col>
                        </Row>
                      </Modal>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 text-center">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-plus" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Creator
                          </h6>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={this.showModal3}
                          >
                            Login
                          </Button>
                        </CardBody>
                      </Card>
                      <Modal
                        open={this.state.show3}
                        onClose={this.hideModal3}
                        center
                      >
                        <Card className="bg-secondary shadow border-0">
                          <CardHeader className="bg-white pb-5">
                            <div className="text-muted text-center mb-3">
                              <small>Sign in with</small>
                            </div>
                            <div className="btn-wrapper text-center">
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/github.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Github</span>
                              </Button>
                              <Button
                                className="btn-neutral btn-icon ml-1"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/google.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Google</span>
                              </Button>
                            </div>
                          </CardHeader>
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              <small>Or sign in with credentials</small>
                            </div>
                            <Form role="form">
                              <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input placeholder="Email" type="email" />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id=" customCheckLogin"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor=" customCheckLogin"
                                >
                                  <span>Remember me</span>
                                </label>
                              </div>
                              <div className="text-center">
                                <Button
                                  className="my-4"
                                  color="primary"
                                  type="button"
                                  href="creator-profile"
                                >
                                  Sign in
                                </Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                        <Row className="mt-3">
                          <Col xs="6">
                            <a
                              className="text-light"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <small>Forgot password?</small>
                            </a>
                          </Col>
                          <Col className="text-right" xs="6">
                            <a
                              className="text-light"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <small>Create new account</small>
                            </a>
                          </Col>
                        </Row>
                      </Modal>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
//I want the login button to redirect me to the creator profile?