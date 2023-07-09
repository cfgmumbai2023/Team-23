import React, { useState } from "react";
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

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SearchBar from "components/SearchBar";
import VideoTable from "components/VideoTable";

// class Hero extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show1: false,
//       videos: [],
//     };

//     this.showModal1 = this.showModal1.bind(this);
//     this.hideModal1 = this.hideModal1.bind(this);
//   }

//   render() {
//     console.log(this.state.videos)
//     return (
//       <>

//         {/* {this.state.videos.map(video=>{
// return (
// <VideoTable video = {video}/>
// )
// })} */}
//       </>
//     );
//   }
// }

// export default Hero;

const Hero = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  return (
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
                <SearchBar setVideos={setVideos} />
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
     
      <VideoTable videos={videos} />
     
    </div>
  );
};

export default Hero;
