"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const [prob, setProb] = useState(0.0);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response);
      setPrediction(String(response.data.prediction));
      setProb(response.data.prediction_probability);
      setImagePath(response.data.image_path);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const onImageLoad = (e) => {
    const { width, height } = e.target;
    setImgDimensions({ width, height });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Image Classifier</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload and Predict"}
        </button>
      </form>

      {prediction && (
        <div style={{ marginTop: "20px" }}>
          <h2>
            Prediction:
            {prediction === "1"
              ? " Unhealthy "
              : prediction === "2"
              ? " Healthy"
              : " Loading... "}
            with the probability of {prob * 100}%
          </h2>

          <Image
            src={`http://127.0.0.1:5000/${imagePath}`}
            alt="Uploaded"
            onLoad={onImageLoad}
            style={{ marginTop: "20px" }}
            width={imgDimensions.width}
            height={imgDimensions.height}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
