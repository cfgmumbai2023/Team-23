import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { Button } from "reactstrap";

const VideoTable = ({ videos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [link, setLink] = useState("");
  console.log(videos.videos);
  console.log(link);
  return (
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
          {videos?.videos?.map((video, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{video.title}</td>
                <td>physics</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setLink(video.finalUrl);
                    setModalOpen(true);
                  }}
                >
                  {video.finalUrl}
                </td>
              </tr>
            );
          })}

          <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
            <iframe
              width={600}
              height={600}
              src={`${link}`}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
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
        </tbody>
      </table>
    </div>
  );
};

export default VideoTable;
