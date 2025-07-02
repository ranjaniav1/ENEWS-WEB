"use client";

import { Inter } from "next/font/google";
import ClientLayout from "./layout/ClientLayout";
import { Toaster } from "react-hot-toast";
import "./styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";
import { FavoritesProvider } from "./context/FavoritesContext";
import { HomeProvider } from "./utils/useHome";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Stay informed with Enews – your source for the latest updates and trending news." />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6580779703282784"
          crossOrigin="anonymous"
        ></script>

        {/* AdSense Ad Block Recovery */}
        <script
          async
          src="https://fundingchoicesmessages.google.com/i/pub-6580779703282784?ers=1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function signalGooglefcPresent() {
                  if (!window.frames['googlefcPresent']) {
                    if (document.body) {
                      const iframe = document.createElement('iframe');
                      iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                      iframe.style.display = 'none';
                      iframe.name = 'googlefcPresent';
                      document.body.appendChild(iframe);
                    } else {
                      setTimeout(signalGooglefcPresent, 0);
                    }
                  }
                }
                signalGooglefcPresent();
              })();
            `,
          }}
        />

        <title>Enews - Latest News & Updates</title>
      </head>
      <body className={inter.className}>
        <Toaster />
        <AuthProvider>
          <ThemeProvider>
            <CssBaseline />
            <HomeProvider>
              <FavoritesProvider>
                <ClientLayout>{children}</ClientLayout>
              </FavoritesProvider>
            </HomeProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
