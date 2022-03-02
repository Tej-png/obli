import React from "react";
import { useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import './UploadForm.css'

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/jpeg", "image/png"];
  const handeUpload = (e) => {
    // it will only selected the first photo
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setImage(selected);
      setError(null);
    } else {
      setImage(null);
      setError("please select an image(png or jpeg)");
    }
  };
  return (
    <form className="upload col-xl-12">
      <div className="header">
        <h1>Welcome Sid!</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
          porttitor blandit.
        </h2>
      </div>
      <label>
        <input type="file" onChange={handeUpload}></input>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {image && <h1>{image.name}</h1>}
        {image && <ProgressBar file={image} setFile={setImage} error={error}></ProgressBar>}
      </div>
    </form>
  );
};

export default UploadForm;
