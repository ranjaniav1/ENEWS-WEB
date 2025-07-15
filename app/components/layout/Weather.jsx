"use client";

import React, { useState } from "react";
import { Container } from "@mui/material";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Icons from "../shared/Icons";
import ThemeButton from "../features/ThemeButton";
import { useThemeContext } from "@/app/context/ThemeContext";
import Link from "next/link";

const Weather = () => {
  const { themeData, config } = useThemeContext();
  const getCurrentDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <div
      style={{
        background: themeData?.background?.navigation,
        // color: themeData?.text,
        padding: "10px 0",
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="gap-2"
      >
        {/* Left Side - Current Date and Calendar Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: themeData?.background?.button || "#f39c12",
            color: themeData?.text?.button || "#ffffff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
            fontWeight: "bold",
            borderRadius: config?.borderRadius,
            fontSize: "small",
            padding: "5px",
          }}
        >
          <span>{getCurrentDate()}</span>
        </div>

        {/* Right Side - Social Icons */}
        <div style={{ alignItems: "center" }} className="flex gap-2">
          {/* <Link href="/drawing" className="text-lg font-bold">
            🎨 
          </Link> */}
          <ThemeButton />
          <Icons
            icon={<GitHubIcon  />}
            href="https://github.com/ranjaniav1/"
            ariaLabel="Visit our GitHub page"
          />
          <Icons
            icon={<LinkedInIcon/>}
            href="https://www.linkedin.com/in/varsaniranjani"
            ariaLabel="Visit our LinkedIn profile"
          />
          <Icons
            icon={<InstagramIcon/>}
            href="https://www.instagram.com/varsaniranjani/"
            ariaLabel="Visit our Instagram page"
          />
        </div>
      </Container>
    </div>
  );
};

export default Weather;
