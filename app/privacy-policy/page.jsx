"use client";

import React from "react";
import Link from "next/link";
import { useThemeContext } from "../context/ThemeContext";

export default function PrivacyPolicyPage() {
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
        Privacy Policy
      </h1>

      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        At <strong>Enews Varsani</strong>, accessible from{" "}
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
        </Link>
        , one of our main priorities is the privacy of our visitors. This Privacy Policy document describes the types of information that is collected and recorded by Enews Varsani and how we use it.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.75rem" }}>1. Log Files</h2>
      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        Enews Varsani follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, ISP, date/time, and referring/exit pages. This data is used for analytics and site management.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.75rem" }}>2. Cookies and Web Beacons</h2>
      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        Like any other website, Enews Varsani uses "cookies" to store information including visitor preferences and the pages they visit. This helps optimize user experience.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.75rem" }}>3. Google AdSense</h2>
      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        Google, as a third-party vendor, uses cookies to serve ads on our site. Their use of the DART cookie enables ad targeting based on prior visits. You may opt out by visiting Google’s{" "}
        <Link
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: themeData?.text?.link || "#2563eb",
            textDecoration: "underline",
          }}
        >
          Ads Privacy Policy
        </Link>.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.75rem" }}>4. Third-Party Privacy Policies</h2>
      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        Enews Varsani’s Privacy Policy does not apply to other advertisers or websites. Please refer to their policies for detailed information.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.75rem" }}>5. Children's Information</h2>
      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        We do not knowingly collect personal information from children under 13. We encourage parents to monitor their children's internet activity.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.75rem" }}>6. Consent</h2>
      <p style={{ marginBottom: "1.25rem", color: themeData?.text?.secondary }}>
        By using our website, you consent to our Privacy Policy and agree to its terms.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.75rem" }}>7. Updates</h2>
      <p style={{ color: themeData?.text?.secondary }}>
        We may update this policy occasionally. Changes will be posted on this page.
      </p>
    </div>
  );
}
