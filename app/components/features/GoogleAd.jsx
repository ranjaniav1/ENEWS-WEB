"use client";

import { useEffect, useRef } from "react";

const GoogleAd = ({ adSlot, style, format = "auto", onAdLoad }) => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});

        // Check ad render immediately after pushing
        requestAnimationFrame(() => {
          const hasContent = adRef.current?.innerHTML.trim().length > 0;
          if (onAdLoad) {
            onAdLoad(hasContent);
          }
        });
      }
    } catch (e) {
      console.error("Adsense error", e);
      if (onAdLoad) onAdLoad(false);
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
