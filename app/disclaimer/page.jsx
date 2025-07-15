"use client";

import React from "react";
import Link from "next/link";
import { useThemeContext } from "../context/ThemeContext";

export default function DisclaimerPage() {
  const { themeData } = useThemeContext();

  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "2.5rem 1rem",
        color: themeData?.text?.primary,
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        Disclaimer
      </h1>

      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        All the information on this website —{" "}
        <Link
          href="https://enews-varsani.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: themeData?.text?.link || "#2563eb",
            textDecoration: "underline",
          }}
        >
          enews-varsani.vercel.app
        </Link>{" "}
        — is published in good faith and for general information purposes only. Enews Varsani does not make any warranties about the completeness, reliability, and accuracy of this information.
      </p>

      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        Any action you take upon the information you find on this website is strictly at your own risk. Enews Varsani will not be liable for any losses and/or damages in connection with the use of our website.
      </p>

      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links, we have no control over the content and nature of these sites.
      </p>

      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        Please be also aware that when you leave our website, other sites may have different privacy policies and terms. Be sure to check their policies before engaging in any business or uploading information.
      </p>

      <p style={{ color: themeData?.text?.secondary }}>
        By using our website, you hereby consent to our disclaimer and agree to its terms.
      </p>
    </div>
  );
}
