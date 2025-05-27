"use client";
import React, { useState } from "react";
import { Button, Divider, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useThemeContext } from "@/app/context/ThemeContext";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  const { config, settings } = useThemeContext();


  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <img
            width="130"
            src={settings?.footerLogo || "/logo.png"}
            alt="logo"
            className="mb-4 cursor-pointer"
            onClick={() => window.location.href = "/"}
          />
          <Typography variant="body2" className="text-sm leading-relaxed text-gray-300">
            News Web is your source for reliable and real-time news covering technology, sports, politics, health, and entertainment.
          </Typography>
        </div>

        {/* Quick Links */}
        <div>
          <Typography variant="h6" className="text-lg font-semibold mb-4">Quick Links</Typography>
          <Divider className="bg-gray-600 mb-2" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories-news/live-news">Live News</Link></li>
            <li><Link href="/categories-news/breaking-news">Breaking News</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <Typography variant="h6" className="text-lg font-semibold mb-4">Top Categories</Typography>
          <Divider className="bg-gray-600 mb-2" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/categories-news/technology">Technology</Link></li>
            <li><Link href="/categories-news/politics">Politics</Link></li>
            <li><Link href="/categories-news/sports">Sports</Link></li>
            <li><Link href="/categories-news/health">Health</Link></li>
            <li><Link href="/categories-news/business">Business</Link></li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <Typography variant="h6" className="text-lg font-semibold mb-4">Stay Updated</Typography>
          <Divider className="bg-gray-600 mb-4" />
         
          <div className="flex gap-3 mt-4 text-white">
            <a href="#" target="_blank" rel="noreferrer"><Facebook /></a>
            <a href="#" target="_blank" rel="noreferrer"><Twitter /></a>
            <a href="#" target="_blank" rel="noreferrer"><Instagram /></a>
            <a href="#" target="_blank" rel="noreferrer"><YouTube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© {new Date().getFullYear()} News Web. All rights reserved.</p>
        {/* <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookie-policy">Cookies</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
