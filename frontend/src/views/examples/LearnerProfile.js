/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
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
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col> 
                     
                 </Row>
                 <Row> 
                  <div className="text-center mt-5">
                    <h3>
                      Jessica Jones{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                  </div>
                  </Row>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
 
                    </Row>
                    <Row className="justify-content-center">
                    <form>

<div className="form-group">
  <label for="Name">Name</label>
  <input type="text" className="form-control" id="Name" placeholder="your name" />
</div>
<div className="form-row">
<div className="form-group col-md-6">
  <label for="inputEmail4">Email</label>
  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
</div>
<div className="form-group col-md-6">
  <label for="inputPassword4">Password</label>
  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
</div>
</div>
<div className="form-group">
  <label for="Subject">Subject</label>
  <input type="text" className="form-control" id="class" placeholder="Subject" />
</div>
<div className="form-group">
  <label for="tag">Tag for Video</label>
  <input type="text" className="form-control" id="tag" placeholder="Tag" />
</div>

<div className="form-group">
  <label for="language">Language</label>
  <input type="text" className="form-control" id="School" placeholder="language" />
</div>
<div className="form-group">
  <label for="language">Content</label>
  <input type="file" className="form-control" id="Content" placeholder="Content" />
</div>
  
 


<button type="submit" className="btn btn-primary">Upload Video</button>

</form>  
                    </Row>
                  </div>
                </div>
              </Card> 
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;