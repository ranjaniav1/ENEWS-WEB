"use client";

import React from "react";
import Link from "next/link";
import { useThemeContext } from "../context/ThemeContext";

export default function AboutPage() {
  const { themeData } = useThemeContext();

  const containerStyle = {
    maxWidth: "768px",
    margin: "0 auto",
    padding: "40px 16px",
    color: themeData?.text?.primary,
  };

  const headingStyle = {
    fontSize: "2.25rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: themeData?.text?.primary,
  };

  const sectionHeadingStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginTop: "2rem",
    marginBottom: "1rem",
    color: themeData?.text?.primary,
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    marginBottom: "1.5rem",
    color: themeData?.text?.secondary,
  };

  const listStyle = {
    paddingLeft: "1.5rem",
    color: themeData?.text?.secondary,
    marginBottom: "1.5rem",
  };

  const linkStyle = {
    color: themeData?.text?.link || "#3b82f6",
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Enews Varsani</h1>

      <p style={paragraphStyle}>
        Welcome to <strong>Enews Varsani</strong> — your trusted digital destination for fresh, reliable, and trending news. Powered by modern technology and curated with care, we bring you stories that matter — from breaking headlines to in-depth coverage across categories.
      </p>

      <h2 style={sectionHeadingStyle}>Our Mission</h2>
      <p style={paragraphStyle}>
        Our mission is to empower readers with timely and accurate information across technology, entertainment, politics, and more. We strive to ensure unbiased reporting and a clean reading experience, making news accessible for everyone.
      </p>

      <h2 style={sectionHeadingStyle}>Why Choose Us?</h2>
      <ul style={listStyle}>
        <li>📰 Real-time, ad-safe news updates</li>
        <li>📱 Mobile-first design for smooth reading</li>
        <li>✅ Google AdSense-approved content policies</li>
        <li>🌐 Covers India and global news stories</li>
        <li>🔍 SEO-optimized articles for discoverability</li>
      </ul>

      <h2 style={sectionHeadingStyle}>Who We Are</h2>
      <p style={paragraphStyle}>
        Enews Varsani is an independent web news platform created and maintained by passionate developers and content curators. We combine technical performance with editorial simplicity to deliver a no-clutter, content-rich experience for readers.
      </p>

      <h2 style={sectionHeadingStyle}>Stay Connected</h2>
      <p style={paragraphStyle}>
        We're constantly growing and open to feedback. For questions, partnerships, or contributions, feel free to{" "}
        <Link href="/contact" style={linkStyle}>
          contact us here
        </Link>.
      </p>
    </div>
  );
}
