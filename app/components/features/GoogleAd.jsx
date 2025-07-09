"use client";

import React, { useEffect, useRef } from "react";

const GoogleAd = ({ adSlot, style, format }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    try {
      // Check if ad content is already rendered to avoid duplicate push
      if (adRef.current.innerHTML.trim().length === 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style || { display: "block" }}
      data-ad-client="ca-pub-6580779703282784"
      data-ad-slot={adSlot}
      data-ad-format={format || "auto"}
      data-full-width-responsive="true"
      ref={adRef}
    />
  );
};

export default GoogleAd;
