import React, { useState } from "react";
import axios from "axios";

const UploadVideo = ({ show, setShow }) => {
  const [videos, setVideos] = useState([]);
  const initialValue = {
    title: "",
    duration: "",
    uploadDate: "",
    views: "",
    category: "",
  };
  const [videoDetail, setVideoDetail] = useState(initialValue);

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    for (let item in videoDetail) {
      formdata.append(`${item}`, videoDetail[item]);
    }

    axios
      .post("http://localhost:8080/api/video/create", formdata)
      .then((success) => {
        alert("Submitted successfully");
        setShow({ ...show, upload: !show.upload });
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            onChange={(e) => setVideoDetail({...videoDetail, title: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="views">duration</label>
          <input
            type="time"
            name="duration"
            id="duration"
            className="form-control"
            onChange={(e) =>
              setVideoDetail({ ...videoDetail, duration: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="uploadDate">upload date</label>
          <input
            type="date"
            name="uploadDate"
            id="uploadDate"
            className="form-control"
            onChange={(e) =>
              setVideoDetail({ ...videoDetail, uploadDate: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="views">views</label>
          <input
            type="text"
            name="views"
            id="views"
            className="form-control"
            onChange={(e) =>
              setVideoDetail({ ...videoDetail, views: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">category</label>
          <input
            type="category"
            name="category"
            id="category"
            className="form-control"
            onChange={(e) =>
              setVideoDetail({ ...videoDetail, category: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={() => setShow({ ...show, upload: !show.upload })}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default UploadVideo;
