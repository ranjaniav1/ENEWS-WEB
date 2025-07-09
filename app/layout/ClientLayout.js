"use client";

import { useEffect } from "react";
import Weather from "../components/layout/Weather";
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useThemeContext } from "../context/ThemeContext";
import GoogleAd from "../components/features/GoogleAd";
import { ADS } from "../utils/adConfig";
export default function ClientLayout({ children }) {
  const { themeData } = useThemeContext();

  useEffect(() => { }, [themeData])

  return (
    <div style={{ background: themeData?.background?.body }}>
      <Weather />
      <Navigation />
      <Header />
      {children}
       <GoogleAd
        adSlot={ADS.HOME_BOTTOM_MULTIPLEX}
        style={{
          display: "block",
          textAlign: "center",
          margin: "50px auto",
          width: "100%",
          maxWidth: "728px",
        }}
        format="autorelaxed"
      />
      <Footer />
    </div>
  );
}
