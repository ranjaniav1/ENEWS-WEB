"use client";

import React from "react";

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Disclaimer</h1>

      <p className="text-gray-700 mb-4">
        All the information on this website —{" "}
        <a href="https://enews-varsani.vercel.app" className="text-blue-600 underline">
          enews-varsani.vercel.app
        </a>{" "}
        — is published in good faith and for general information purpose only. Enews Varsani does not make any warranties about the completeness, reliability, and accuracy of this information.
      </p>

      <p className="text-gray-700 mb-4">
        Any action you take upon the information you find on this website is strictly at your own risk. Enews Varsani will not be liable for any losses and/or damages in connection with the use of our website.
      </p>

      <p className="text-gray-700 mb-4">
        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links, we have no control over the content and nature of these sites.
      </p>

      <p className="text-gray-700 mb-4">
        Please be also aware that when you leave our website, other sites may have different privacy policies and terms. Be sure to check their policies before engaging in any business or uploading information.
      </p>

      <p className="text-gray-700">
        By using our website, you hereby consent to our disclaimer and agree to its terms.
      </p>
    </div>
  );
}
