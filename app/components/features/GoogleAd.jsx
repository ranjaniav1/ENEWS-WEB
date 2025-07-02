"use client";

import React, { useEffect, useRef } from "react";



const GoogleAd = ({ adSlot, style, format }) => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      // Ensure adsbygoogle is available
      if (typeof window !== "undefined" && (window.adsbygoogle = window.adsbygoogle || [])) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <>
      {/* Include AdSense script only once in _app.tsx or root layout */}
      <ins
        className="adsbygoogle"
        style={style || { display: "block" }}
        data-ad-client="ca-pub-6580779703282784"
        data-ad-slot={adSlot}
        data-ad-format={format || undefined}
        ref={adRef}
      ></ins>
    </>
  );
};

export default GoogleAd;
