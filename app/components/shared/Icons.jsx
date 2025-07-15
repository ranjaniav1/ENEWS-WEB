"use client";
import { useThemeContext } from "@/app/context/ThemeContext";
import Link from "next/link";
import React from "react";

const Icons = ({ onClick, icon, href, sx = {}, ariaLabel }) => {
  const { themeData } = useThemeContext();

  const iconContent = (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        color: themeData?.icon?.main,
        cursor: "pointer",
        textDecoration: "none",
        transition: "all 0.3s ease-in-out",
        ...sx,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      aria-label={ariaLabel}
    >
      {icon}
    </div>
  );

  // ✅ Conditionally render with or without <Link>
  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {iconContent}
    </Link>
  ) : (
    iconContent
  );
};

export default Icons;
