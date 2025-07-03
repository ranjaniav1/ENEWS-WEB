"use client";
import React from "react";
import GoogleAd from "../features/GoogleAd";

const Banner = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-[1200px] h-[90px] flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
        <GoogleAd
          adSlot="1338579894"
          style={{
            display: "inline-block",
            width: 1200,
            height: 90,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
