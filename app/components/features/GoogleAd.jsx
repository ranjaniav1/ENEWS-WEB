"use client";

import { useEffect, useRef } from "react";

const GoogleAd = ({ adSlot, style, format = "auto",onAdLoad }) => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && adRef.current?.innerHTML.trim().length === 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }

      // Check after 1s if ad loaded any content
      const timer = setTimeout(() => {
        const hasContent = adRef.current?.innerHTML.trim().length > 0;
        if (onAdLoad) {
          onAdLoad(hasContent); // true if ad has content, false otherwise
        }
      }, 1000);

      return () => clearTimeout(timer);
    } catch (e) {
      console.error("Adsense error", e);
      if (onAdLoad) onAdLoad(false); // notify failure
    }
  }, [adSlot, format, onAdLoad]);

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
