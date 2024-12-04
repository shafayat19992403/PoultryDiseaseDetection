"use client";
import React from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Are You Worried About Your Chick?</h1>
        <p className="hero__subtitle">
          Find out your poultrys health just here!!
        </p>
        <CustomButton
          title="Try Us Here"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        ></CustomButton>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/chicken.png"
            alt="hero"
            fill
            className="object-contain"
          ></Image>
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
