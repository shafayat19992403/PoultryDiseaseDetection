"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Index from "@/components/Index";

const PredictionComponent = () => {
  const [prediction, setPrediction] = useState("1"); // Example prediction value
  const [prob, setProb] = useState(0.875); // Example probability value
  const [circleDashoffset, setCircleDashoffset] = useState(440); // Initial value for dashoffset

  useEffect(() => {
    // Calculate the correct offset for the circle stroke based on the probability
    const radius = 70; // radius of the circle
    const circumference = 2 * Math.PI * radius; // circumference of the circle
    const offset = circumference - prob * circumference;
    setCircleDashoffset(offset); // Update the offset based on the probability
  }, [prob]);

  // Define transition settings for the animation
  const slideAnimation = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 25 },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { type: "spring", stiffness: 150, damping: 25 },
    },
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      {/* Title Section */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <h1 className="text-3xl font-semibold text-gray-800">
          Poultry Disease Diagnosis
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Upload your chicken&apos;s fecal image to predict health.
        </p>
      </motion.div>
      <Index setPrediction={setPrediction} setProb={setProb} />
      {/* Prediction Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-lg shadow-lg text-white"
        {...slideAnimation}
      >
        <h2 className="text-xl font-semibold mb-4">Prediction:</h2>
        <div className="space-y-2">
          <motion.p
            className="text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {prediction === "1"
              ? "Unhealthy"
              : prediction === "2"
              ? "Healthy"
              : "Loading..."}{" "}
            with a probability of {Math.trunc(prob * 10000) / 10000}%
          </motion.p>
        </div>

        {/* Half Circle Progress Indicator */}
        <div className="relative mt-6 flex justify-center items-center">
          <svg
            width="160"
            height="80"
            viewBox="0 0 160 80"
            className="transform rotate-180"
          >
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="transparent"
              stroke="#e0e0e0"
              strokeWidth="10"
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="440"
              style={{
                strokeDashoffset: circleDashoffset,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            />
          </svg>
          <div className="absolute text-center text-white font-bold text-2xl">
            {Math.trunc(prob * 10000) / 100}% {/* Display percentage */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PredictionComponent;
