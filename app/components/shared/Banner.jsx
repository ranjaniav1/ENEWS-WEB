"use client";
import React from "react";

import GoogleAd from "../features/GoogleAd";

const Banner = ({ title, href }) => {
 

  return (
  
        <GoogleAd
                 adSlot="1338579894"
                 style={{ display: "inline-block", width: 1200, height: 90 }}
               />
     
  

  );
};

export default Banner;
