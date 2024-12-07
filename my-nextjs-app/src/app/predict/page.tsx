"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Index from "@/components/Index";

const page = () => {
  const [prediction, setPrediction] = useState("");
  const [prob, setProb] = useState(0.0);
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Health Diagnosis</h1>
        <p className="hero__subtitle">
          Upload your chicken&apos;s fecel image to predict health.
        </p>
        <Index setPrediction={setPrediction} setProb={setProb} />
      </div>
      <div className="flex-1 pt-56 padding-x">
        {prediction && (
          <div className="mt-16 text-center space-y-4">
            <h2 className="text-2xl font-extrabold text-white">
              Prediction:{" "}
              {prediction === "1"
                ? "Unhealthy"
                : prediction === "2"
                ? "Healthy"
                : "Loading..."}{" "}
              with a probability of {Math.trunc(prob * 10000 * 100) / 10000}%{" "}
              {/* This truncates to 4 decimal places */}
            </h2>
          </div>
        )}
      </div>
      <div className="hero__image-overlay"></div>
    </div>
  );
};

export default page;
