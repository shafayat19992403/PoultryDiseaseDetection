import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-10 border-t border-gray-100 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <p className="text-base text-gray-700">
            Poultry Disease Diagnosis System <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <Link href="/" className="text-gray-500 font-bold">
              About us
            </Link>
          </div>
          <div className="footer__link">
            <Link href="/" className="text-gray-500 font-bold">
              How does it work?
            </Link>
          </div>
          <div className="footer__link">
            <Link href="/" className="text-gray-500 font-bold">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
