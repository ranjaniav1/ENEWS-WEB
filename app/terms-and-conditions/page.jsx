"use client";

import React from "react";
import Link from "next/link";
import { useThemeContext } from "../context/ThemeContext";

export default function TermsPage() {
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
  };

  const sectionHeadingStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: themeData?.text?.primary,
    marginTop: "2rem",
    marginBottom: "0.75rem",
  };

  const paragraphStyle = {
    color: themeData?.text?.secondary,
    fontSize: "1rem",
    lineHeight: "1.75rem",
    marginBottom: "1rem",
  };

  const linkStyle = {
    color: themeData?.text?.link || "#3b82f6",
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Terms & Conditions</h1>

      <p style={paragraphStyle}>
        Welcome to <strong>Enews Varsani</strong>! These terms and conditions outline the rules and regulations for the use of our website, located at{" "}
        <Link href="https://enews-varsani.vercel.app" target="_blank" style={linkStyle}>
          enews-varsani.vercel.app
        </Link>.
      </p>

      <p style={paragraphStyle}>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use Enews Varsani if you do not agree to all of the terms and conditions stated on this page.
      </p>

      <h2 style={sectionHeadingStyle}>1. Use of the Site</h2>
      <p style={paragraphStyle}>
        You agree to use Enews Varsani only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the site. You must not misuse the content or services provided.
      </p>

      <h2 style={sectionHeadingStyle}>2. Intellectual Property</h2>
      <p style={paragraphStyle}>
        All content on Enews Varsani including text, images, logos, and graphics is the intellectual property of Enews Varsani unless otherwise stated. You may not reproduce, republish, or redistribute content without proper permission.
      </p>

      <h2 style={sectionHeadingStyle}>3. Content Accuracy</h2>
      <p style={paragraphStyle}>
        While we strive for accuracy, Enews Varsani does not guarantee that all content is free from errors. News and articles are for informational purposes only and should not be taken as professional advice.
      </p>

      <h2 style={sectionHeadingStyle}>4. External Links</h2>
      <p style={paragraphStyle}>
        Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
      </p>

      <h2 style={sectionHeadingStyle}>5. Limitation of Liability</h2>
      <p style={paragraphStyle}>
        Enews Varsani is not liable for any damages arising from the use or inability to use the website or its content, including but not limited to indirect or consequential damages.
      </p>

      <h2 style={sectionHeadingStyle}>6. Changes to Terms</h2>
      <p style={paragraphStyle}>
        We may update these Terms & Conditions from time to time. Any changes will be posted on this page with a revised date.
      </p>

      <h2 style={sectionHeadingStyle}>7. Contact Us</h2>
      <p style={paragraphStyle}>
        If you have any questions about these Terms, please{" "}
        <Link href="/contact" style={linkStyle}>
          contact us
        </Link>.
      </p>
    </div>
  );
}
