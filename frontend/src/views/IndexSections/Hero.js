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
import classnames from "classnames";
// reactstrap components
import { Button, Container, Row, Col,   FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
 
// ...
const options1 = [
  { label: 'Class 1', value: 1},
  { label: 'Class 2', value: 2},
  { label: 'Class 3', value: 3},
  { label: 'Class 4', value: 4},
  { label: 'Class 5', value: 5},
  { label: 'Class 6', value: 6},
  { label: 'Class 7', value: 7},
  { label: 'Class 8', value: 8},
  { label: 'Class 9', value: 9},
  { label: 'Class 10', value: 10},
  { label: 'Class 11', value: 11},
  { label: 'Class 12', value: 12},

];
const options2 = [
  { label: 'Assamese', value: 1},
  { label: 'Bengali', value: 2 },
  { label: 'Gujarati', value: 3},
  { label: 'Hindi', value: 4 },
  { label: 'Kannada', value:5 },
  { label: 'Kashmiri', value: 6},
  { label: 'Konkani', value: 7 },
  { label: 'Malayalam', value: 8 },
  { label: 'Manipuri', value: 9 },
  { label: 'Marathi', value: 10},
  { label: 'Nepali', value: 11 },
  { label: 'Oriya', value: 12 },
  { label: 'Punjabi', value: 13},
  { label: 'Sanskrit', value: 14},
  { label: 'Sindhi', value: 15 },
  { label: 'Tamil', value:16 },
  { label: 'Telugu', value: 17 },
  { label: 'Urdu ', value: 18  },
  { label: 'Bodo', value: 19},
  { label: 'Santhali', value: 20},
  { label: 'Maithili ', value: 21  },
  { label: 'Dogri ', value:22 },
];
const options3 = [
  { label: 'Environmental Science', value: 1 },
  { label: 'English', value: 2 },
  { label: 'Mathematics', value: 3},
  { label: 'Hindi', value: 4 },
  { label: 'Social science  ',value: 5 },
  { label: 'science', value: 6},
  { label: 'Humanities', value: 7 },
  { label: 'Mathematics-Computing', value: 8 },
  { label: 'Vocational Education', value:  9 },
  { label: 'Physical Education', value: 10 },
  { label: 'Arts ', value: 11  },
];




class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      searchState: '',
    };

  }
  render() {

    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
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
                      onFocus={(e) => this.setState({ searchFocused: true })}
                      onBlur={(e) => this.setState({ searchFocused: false })}
                      // onChange={(e) =>  }
                    />
                  </InputGroup>
                </FormGroup>

                
                  
                  
                   
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/argon-react-white.png")}
                      style={{ width: "200px" }}
                    /> */}
                    {/*
                    <p className="lead text-white">
                      A beautiful Design System for Bootstrap 4. It's Free and
                      Open Source.
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">Download React</span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/creativetimofficial/argon-design-system-react"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Star us</span>
                          on Github
                        </span>
                      </Button>
                    </div>
                     */}
                     {/* <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <p className="text-white font-weight-bold mb-0 mr-2">
                        Team 23:)
                      </p>
                    </div> */}
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                {/* <Col className="text-center mb-4" md="4">
                  <ReactMultiSelectCheckboxes options={options1} />
                  </Col>
                  <Col className="text-center mb-4" md="4">
                  <ReactMultiSelectCheckboxes options={options2} />
                  </Col>
                  <Col className="text-center mb-4" md="4">
                  <ReactMultiSelectCheckboxes options={options3} />
                  </Col> */}
                </Row>
                <Row className="align-items-center justify-content-center mt-4">
                
                <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                        >
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
            
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-black"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div> */}
          </section>
        </div>
        
        <div className="position-relative">
              <section className="section section-shaped" style={{maxWidth:'80vw', margin:'auto',maxHeight:'20px !important',overflow:'scroll'}}>
              <table class="table" style={{textAlign:'center'}}>
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
                  <td>Class 12th physics refraction video</td>
                  <td>Physics</td>
                  <td>https:localhost/8002</td>
                  </tr>
                  <tr>
                  <th scope="row">3</th>
                  <td>Best video english synonyms</td>
                  <td>English</td>
                  <td>https:localhost/8003</td>
                  </tr>
                  
              </tbody>
              </table>
              </section>
              </div>
      </>
    );
  }
}

export default Hero;
