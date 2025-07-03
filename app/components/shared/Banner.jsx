"use client";
import React from "react";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/app/context/ThemeContext";
import GoogleAd from "../features/GoogleAd";

const Banner = ({ title, href }) => {
  const { config, settings } = useThemeContext();
  const router = useRouter();

  return (
    <Container
      maxWidth="xl"
      disableGutters
      className="mt-4"
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        height: "90px",
        width: "100%",
      }}
    >
      <div className="flex justify-center items-center w-[1200px] h-[90px] rounded-lg overflow-hidden shadow-lg">
        <GoogleAd
          adSlot="1338579894"
          style={{ display: "inline-block", width: 1200, height: 90 }}
        />
      </div>
    </Container>
  );
};

export default Banner;
