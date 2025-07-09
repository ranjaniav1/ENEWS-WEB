"use client";

import { useEffect, useRef } from "react";

const GoogleAd = ({ adSlot, style, format = "auto" }) => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && adRef.current?.innerHTML.trim().length === 0) {
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
      data-ad-format={format}
      data-full-width-responsive="true"
      ref={adRef}
    />
  );
};

export default GoogleAd;
