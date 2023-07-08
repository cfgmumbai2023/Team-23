import React from "react";

import classnames from "classnames";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

import Login from "./Login";

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
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Admin
                          </h6>
                          
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
                        <Login />
                      </Modal>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
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
                        <form>
                          <div className="form-group">
                            <label for="Name">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="Email"
                              placeholder="your name"
                            />
                          </div>
                          <div className="form-group">
                            <label for="Subject">Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              id="class"
                              placeholder="Subject"
                            />
                          </div>

                          <div className="form-group">
                            <label for="language">Language</label>
                            <input
                              type="text"
                              className="form-control"
                              id="School"
                              placeholder="language"
                            />
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Create Video
                          </button>
                        </form>
                      </Modal>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
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
                        <form>
                          <div className="form-group">
                            <label for="Name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="Name"
                              placeholder="your name"
                            />
                          </div>
                          <div className="form-group">
                            <label for="Subject">Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              id="class"
                              placeholder="Subject"
                            />
                          </div>

                          <div className="form-group">
                            <label for="language">Language</label>
                            <input
                              type="text"
                              className="form-control"
                              id="School"
                              placeholder="language"
                            />
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Create Video
                          </button>
                        </form>
                        {/* <h2>Simple centered modal</h2> */}
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
