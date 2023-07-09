import React from "react";
import { Card, Container, Row, Col } from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class CreatorProfile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    
                  </Row>
                  <Row className="mt-5 py-5 justify-content-center">
                    <div className="text-center mt-5">
                      <h3>
                        Sunita{" "}
                        <span className="font-weight-light">, 27</span>
                      </h3>
                      <div className="h6 font-weight-300">
                        <i className="ni location_pin mr-2" />
                     Mumbai,  India
                      </div>
                      <div className="h6 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                      Can teach Maths and Science
                      </div>
                      <div>
                        <i className="ni education_hat mr-2" />
                        University of Computer Science
                      </div>
                    </div>
                  </Row>
                  <div className="mt-1 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        Teacher at ABC School,Mumbai
                        </p>
                      </Col>
                    </Row>
                    <Row className="border-top justify-content-center">
                      <h3>Upload a video!</h3>
                    </Row>
                    <Row className="justify-content-center">
                      <form>
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
                          <label for="tag">Tag for Video</label>
                          <input
                            type="text"
                            className="form-control"
                            id="tag"
                            placeholder="Tag"
                          />
                        </div>

                        <div className="form-group">
                          <label for="language">Language</label>
                          <input
                            type="text"
                            className="form-control"
                            id="language"
                            placeholder="language"
                          />
                        </div>
                        <div className="form-group">
                          <label for="URL">URL</label>
                          <input
                            type="text"
                            className="form-control"
                            id="URL"
                            placeholder="URL"
                          />
                        </div>
                        <div className="form-group">
                          <label for="Content">Content</label>
                          <input
                            type="file"
                            className="form-control"
                            id="Content"
                            placeholder="Content"
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Upload Video
                        </button>
                      </form>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default CreatorProfile;
