import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="hero relative">
      <div className="flex-1 pt-36 padding-x">
        <div className="hero__title">Our Dataset</div>
        <div className="hero__subtitle font-bold">Name of Our Dataset:</div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-5">
          Poultry Birds Poo Imagery Dataset for Health Status Prediction: A Case
          of South-West Nigeria
        </h2>

        <div className="mt-6 space-y-4">
          <Link
            href="https://www.sciencedirect.com/science/article/pii/S2352340923006170"
            className="text-primary-blue text-lg md:text-xl font-semibold hover:underline transition duration-300"
          >
            Click here to go to the dataset's paper.
          </Link>
          <br />
          <Link
            href="https://data.mendeley.com/datasets/8pnbzpt2k9/1"
            className="text-primary-blue text-lg md:text-xl font-semibold hover:underline transition duration-300"
          >
            Click here to download the dataset
          </Link>
        </div>
      </div>
      <div className="hero__image-overlay_3"></div>
    </div>
  );
};

export default page;
