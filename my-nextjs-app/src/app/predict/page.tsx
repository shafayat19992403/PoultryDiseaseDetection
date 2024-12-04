"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Index from "@/components/Index";

const page = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Health Diagnosis</h1>
        <p className="hero__subtitle">
          Upload your chicken&apos;s fecel image to predict health.
        </p>
        <Index />
      </div>
      <div className="hero__image-overlay"></div>
    </div>
  );
};

export default page;
