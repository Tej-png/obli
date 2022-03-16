import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import UploadForm from "../components/UploadForm.jsx/UploadForm";
import Card from "../components/Card/Card";
import useFirestore from "../hooks/useFirestore";
import { doc, deleteDoc } from "firebase/firestore";
import { projectFireStore } from "../firebase/config";

const Upload = ({ width }) => {
  const { docs } = useFirestore("images");
  const [deleteDocs, setDeteleDocs] = useState([]);

  const handleSelect = async (id) => {
    setDeteleDocs([...deleteDocs, id]);
  };
  const handleDelete = () => {
    if (deleteDocs) {
      deleteDocs.map((file) => {
        deleteDoc(doc(projectFireStore, "images", file));
      });
    }
  };

  const handleDeSelect = () => {
    setDeteleDocs([]);
  };

  return (
    <div className="upload-form">
      <NavBar width={width}></NavBar>

      <div className="container cards upload-img">
        <div className="upload-content row">
          <UploadForm></UploadForm>
        </div>
        <button
          className="btn btn-danger img-delete-btn"
          onClick={handleDelete}
        >
          delete
        </button>
        <button
          className="btn btn-danger img-delete-btn"
          onClick={handleDeSelect}
        >
          deselect
        </button>
        {docs && (
          <div className="row">
            {docs.map((card) => (
              <div
                key={card.id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                onClick={() => handleSelect(card.id)}
              >
                <Card url={card.url}></Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
