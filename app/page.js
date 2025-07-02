"use client";

import { useEffect } from "react";
import Head from "next/head";
import BreakingNews from "./components/sections/BreakingNews";
import Banner from "./components/shared/Banner";
import Heading from "./components/shared/Heading";
import PopularCards from "./components/sections/PopularNews";
import RecentNews from "./components/sections/RecentNews";
import Technology from "./components/sections/Technology";
import Travels from "./components/sections/Travels";
import LazyComponent from "./components/shared/LazyComponent";
import { useThemeContext } from "./context/ThemeContext";

export default function Home() {
  const { themeData } = useThemeContext();

  useEffect(() => {
    document.title = "Enews - Latest news & Updates";
  }, []);

  return (
    <main className="flex flex-col justify-between" style={{ background: themeData?.background }}>
      <Head>
        <title>Enews - Latest News & Updates</title>
        <meta name="description" content="Stay informed with Enews – your source for the latest updates and trending news." />
        <meta name="keywords" content="latest news, trending news, breaking news, Enews, technology news, travel updates" />
        <meta name="author" content="Varsani Ranjani" />
        <meta name="publisher" content="Enews" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="50L3twObn6mAQFc3lcnWjGG9Urb1r-fS7ZOVlTL66nA" />
        <link rel="canonical" href="https://enews-varsani.vercel.app/" />
        <meta property="og:title" content="Enews - Latest News & Updates" />
        <meta property="og:description" content="Stay informed with Enews – your source for the latest updates and trending news." />
        <meta property="og:url" content="https://enews-varsani.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://enews-varsani.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enews - Latest News & Updates" />
        <meta name="twitter:description" content="Get the latest trending news with Enews." />
        <meta name="twitter:image" content="https://enews-varsani.vercel.app/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6580779703282784"
          crossOrigin="anonymous"
        ></script>
      </Head>


      <Banner />


      <div className="hidden md:block">
        <Heading
          title={"Popular News"}
          subtitle={"Popular News Here"}
          buttonText={"View More Popular News"}
          link="/categories-news/popular"
        />
      </div>

      <LazyComponent component={PopularCards} />
      <Heading
        title={"Recent News"}
        subtitle={"Recent News Here"}
        buttonText={"View More Recent News"}
        link="/categories-news/recent"
      />
      <LazyComponent component={RecentNews} />
      <Heading
        title={"Technology"}
        subtitle={"Tech News Here"}
        buttonText={"View More Technology News"}
        link="/categories-news/technology"
      />
      <LazyComponent component={Technology} />
      <Heading
        title={"Travels"}
        subtitle={"Travels"}
        buttonText={"View More Travel News"}
        link="/categories-news/travel"
      />
      <LazyComponent component={Travels} />
      <Banner />
      <Heading
        title={"Breaking News"}
        subtitle={"Breaking News Here"}
        buttonText={"View More Breaking News"}
        link="/categories-news/breaking"
      />
      <LazyComponent component={BreakingNews} />
    </main>
  );
}
