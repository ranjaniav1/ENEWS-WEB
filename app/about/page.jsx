"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        About Enews Varsani
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Welcome to <strong>Enews Varsani</strong> — your trusted digital destination for fresh, reliable, and trending news. Powered by modern technology and curated with care, we bring you stories that matter — from breaking headlines to in-depth coverage across categories.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        Our mission is to empower readers with timely and accurate information across technology, entertainment, politics, and more. We strive to ensure unbiased reporting and a clean reading experience, making news accessible for everyone.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li>📰 Real-time, ad-safe news updates</li>
        <li>📱 Mobile-first design for smooth reading</li>
        <li>✅ Google AdSense-approved content policies</li>
        <li>🌐 Covers India and global news stories</li>
        <li>🔍 SEO-optimized articles for discoverability</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
      <p className="text-gray-700 mb-6">
        Enews Varsani is an independent web news platform created and maintained by passionate developers and content curators. We combine technical performance with editorial simplicity to deliver a no-clutter, content-rich experience for readers.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stay Connected</h2>
      <p className="text-gray-700">
        We're constantly growing and open to feedback. For questions, partnerships, or contributions, feel free to{" "}
        <a href="/contact" className="text-blue-600 underline">
          contact us here
        </a>.
      </p>
    </div>
  );
}
