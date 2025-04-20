// "use client";
// import { useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import CustomButton from "./CustomButton";

// const Index = ({ setPrediction, setProb }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   // const [prediction, setPrediction] = useState("");
//   const [imagePath, setImagePath] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
//   // const [prob, setProb] = useState(0.0);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedFile) {
//       alert("Please select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:5000/predict",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       console.log(response);
//       setPrediction(String(response.data.prediction));
//       setProb(response.data.prediction_probability);
//       setImagePath(response.data.image_path);
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onImageLoad = (e) => {
//     const { width, height } = e.target;
//     setImgDimensions({ width, height });
//   };

//   return (
//     <div className="max-w-3xl mx-left p-6 space-y-6 mt-20">
//       <h1 className="text-3xl font-bold text-left text-black">
//         Poultry Disease Image Classifier
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col items-start space-y-4"
//       >
//         {selectedFile && (
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold text-gray-700">
//               Image Preview:
//             </h2>
//             <img
//               src={URL.createObjectURL(selectedFile)} // This will create a temporary URL for the selected file
//               alt="Preview"
//               className="rounded-lg shadow-lg mt-2 w-full max-w-xs object-contain"
//               style={{ maxHeight: "300px" }} // Limit the height for better layout control
//             />
//           </div>
//         )}

//         <input
//           type="file"
//           onChange={handleFileChange}
//           accept="image/*"
//           className="border-2 border-gray-300 rounded-lg p-2 text-sm max-w-xs"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className={`bg-primary-blue text-white rounded-full py-3 px-6 font-semibold transition duration-300 ease-in-out transform ${
//             loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//           } w-auto text-left`}
//         >
//           {loading ? "Uploading..." : "Upload and Predict"}
//         </button>
//       </form>
//       {/*
//       {prediction && (
//         <div className="mt-8 text-center space-y-4">
//           <h2 className="text-xl font-medium text-gray-700">
//             Prediction:{" "}
//             {prediction === "1"
//               ? "Unhealthy"
//               : prediction === "2"
//               ? "Healthy"
//               : "Loading..."}{" "}
//             with a probability of {prob * 100}%
//           </h2>

//           {imagePath && (
//             <div>
//               <Image
//                 src={`http://127.0.0.1:5000/${imagePath}`}
//                 alt="Uploaded Image"
//                 onLoad={onImageLoad}
//                 width={imgDimensions.width}
//                 height={imgDimensions.height}
//                 className="mx-auto rounded-lg shadow-xl mt-6"
//               />
//             </div>
//           )}
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Index;
