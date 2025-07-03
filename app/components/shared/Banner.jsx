"use client";
import React from "react";
import GoogleAd from "../features/GoogleAd";

const Banner = () => {
  return (
   
      <div className="w-full max-w-[1200px] h-[90px] mx-auto flex justify-center items-center rounded-lg overflow-hidden shadow-lg bg-white">
        <GoogleAd
          adSlot="1338579894"
          style={{
            display: "block",
            width: "100%",
            height: 90,
          }}
        />
      </div>
  
  );
};

export default Banner;
