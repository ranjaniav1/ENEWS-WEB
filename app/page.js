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
import GoogleAd from "./components/features/GoogleAd";

export default function Home() {
  const { themeData } = useThemeContext();

  useEffect(() => {
    document.title = "Enews - Latest news & Updates";
  }, []);

  return (
    <main className="flex flex-col justify-between" style={{ background: themeData?.background }}>
      <Head>
        <title>Enews - Latest news & Updates</title>
        <meta
          name="description"
          content="Stay informed with Enews. Get the latest updates on popular, recent, tech, travel, and breaking news, 24/7."
        />
      </Head>

      <Banner />

      {/* ✅ Display Ad Banner (1200x90) */}
      <div className="my-6 flex justify-center">
        <GoogleAd
          adSlot="1338579894"
          style={{ display: "inline-block", width: 1200, height: 90 }}
        />
      </div>
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
