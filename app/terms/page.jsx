"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Terms & Conditions</h1>

      <p className="text-gray-700 mb-4">
        Welcome to <strong>Enews Varsani</strong>! These terms and conditions outline the rules and regulations for the use of our website, located at{" "}
        <a href="https://enews-varsani.vercel.app" className="text-blue-600 underline">
          enews-varsani.vercel.app
        </a>.
      </p>

      <p className="text-gray-700 mb-4">
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use Enews Varsani if you do not agree to all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Use of the Site</h2>
      <p className="text-gray-700 mb-4">
        You agree to use Enews Varsani only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the site. You must not misuse the content or services provided.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        All content on Enews Varsani including text, images, logos, and graphics is the intellectual property of Enews Varsani unless otherwise stated. You may not reproduce, republish, or redistribute content without proper permission.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Content Accuracy</h2>
      <p className="text-gray-700 mb-4">
        While we strive for accuracy, Enews Varsani does not guarantee that all content is free from errors. News and articles are for informational purposes only and should not be taken as professional advice.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. External Links</h2>
      <p className="text-gray-700 mb-4">
        Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        Enews Varsani is not liable for any damages arising from the use or inability to use the website or its content, including but not limited to indirect or consequential damages.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Changes to Terms</h2>
      <p className="text-gray-700 mb-4">
        We may update these Terms & Conditions from time to time. Any changes will be posted on this page with a revised date.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about these Terms, please{" "}
        <a href="/contact" className="text-blue-600 underline">
          contact us
        </a>.
      </p>
    </div>
  );
}
