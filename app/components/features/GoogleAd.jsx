"use client";

import { useEffect, useRef } from "react";

const GoogleAd = ({ adSlot, style, format = "auto" }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        console.log("🔁 Attempting to load AdSense ad...");
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log("✅ adsbygoogle.push() called for slot:", adSlot);
      } catch (e) {
        console.error("❌ AdSense push failed:", e);
      }
    }
  }, [adSlot, format]);

  return (
    <ins
      className="adsbygoogle"
      style={style || { display: "block" }}
      data-ad-client="ca-pub-6580779703282784"
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive="true"
      ref={adRef}
    />
  );
};

export default GoogleAd;
