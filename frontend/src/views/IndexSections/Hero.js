import React from "react";
import classnames from "classnames";

import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      show1: false,
    };
    this.showModal1 = this.showModal1.bind(this);
    this.hideModal1 = this.hideModal1.bind(this);
  }

  showModal1 = () => {
    this.setState({ show1: true });
  };

  hideModal1 = () => {
    this.setState({ show1: false });
  };

  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-hero section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <FormGroup
                      className={classnames({
                        //focused: this.state.searchFocused,
                      })}
                    >
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Search"
                          type="text"
                          onFocus={(e) =>
                            this.setState({ searchFocused: true })
                          }
                          onBlur={(e) =>
                            this.setState({ searchFocused: false })
                          }
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="align-items-center justify-content-center mt-4">
                  <Button className="btn-icon mb-3 mb-sm-0" color="info">
                    <span className="btn-inner--icon mr-1">
                      <i className="fa fa-code" />
                    </span>
                    <span className="btn-inner--text">Submit Search</span>
                  </Button>
                </Row>

                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <p className="text-white font-weight-bold mb-0 mr-2">
                        Team 23:)
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>

        <div
          className="position-relative"
          style={{
            maxWidth: "80vw",
            marginLeft: "auto",
            marginRight: "auto",
            maxHeight: "30vh",
            overflowY: "scroll",
            overflowX: "hidden",
            marginTop: "5vh",
          }}
        >
          <table class="table" style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Tags</th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>

                <td>Class 10th geography plants video</td>
                <td>Social Science</td>
                <td>https:localhost/8001</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Class 10th physics light</td>
                <td>physics</td>
                <td style={{cursor:'pointer'}} onClick={this.showModal1}>https:localhost/8001</td>
              </tr>
              <Modal open={this.state.show1} onClose={this.hideModal1} center>
              <iframe
                  width={600}
                  height={600}
                  src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowfullscreen
                  title='video'
              />
              <br></br>
              <Button
                    className="btn-icon btn-2 ml-1"
                    color="primary"
                    type="button"
                  >
                    Notes
                  </Button>
                  <Button
                    className="btn-icon btn-2 ml-1"
                    color="primary"
                    type="button"
                  >
                    PPT
                  </Button>
              </Modal>


              <tr>
                <th scope="row">3</th>
                <td>Best video english synonyms</td>
                <td>English</td>
                <td>https:localhost/8003</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Hero;
