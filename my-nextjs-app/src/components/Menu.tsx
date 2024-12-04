"use client";
// import { div } from "framer-motion/client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
// import Image from "next/image";
import { AnimatePresence } from "framer-motion";
const Menu = () => {
  return (
    <div className="flex justify-center bg-transparent px-3 py-12">
      <FlyoutLink href="#">
        <h1 className="font-bold text-2xl">Menu</h1>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative"
    >
      <Link className="relative text-white" href={href}>
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-out"
        ></span>
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            intial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12  bg-violet-900 bg-opacity-80 text-white"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
            <div className="w-64 p-6 shadow-xl">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/dataset"
                    className="text-white font-bold text-xl hover:text-blue-100 transition duration-200 ease-in-out"
                  >
                    Our Dataset
                  </Link>
                </li>
                <li>
                  <Link
                    href="/metrics"
                    className="text-white font-bold text-xl hover:text-blue-100 transition duration-200 ease-in-out"
                  >
                    Our Model Metrics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/predict"
                    className="text-white font-bold text-xl hover:text-blue-100 transition duration-200 ease-in-out"
                  >
                    Predict Chicken health
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
