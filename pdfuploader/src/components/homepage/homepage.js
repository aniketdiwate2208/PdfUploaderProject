import React, { useState } from "react";
import "./homepage.css";
import axios from "axios";
import BASE_URL from "../../apiconfig";
import { useRef } from "react";
const Homepage = ({ setLoginUser }) => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("email", localStorage.getItem("email"));
    formData.append("pdf", file);

    try {
      await axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully!");
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div className="homepage">
      <h1>PDF File Uploader</h1>
      <br></br>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button onClick={handleUpload}>Upload</button>
      <br></br>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};
export default Homepage;
