"use client";

import { useEffect } from "react";
import Head from "next/head";
import BreakingNews from "./components/sections/BreakingNews";
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
        <title>Enews - Latest news & Updates</title>
        <meta
          name="description"
          content="Stay informed with Enews. Get the latest updates on popular, recent, tech, travel, and breaking news, 24/7."
        />
      </Head>


      <div className="hidden md:block">
        <Heading
          title={"Popular News"}
          subtitle="Top trending stories everyone is reading"
          buttonText="Browse Popular Stories"
          link="/categories-news/popular"
        />
      </div>

      <LazyComponent component={PopularCards} />
      <Heading
        title={"Recent News"}
        subtitle="Latest headlines and daily updates"
        buttonText="Catch Up on Recent News"
        link="/categories-news/recent"
      />
      <LazyComponent component={RecentNews} />
      <Heading
        title={"Technology"}
        subtitle="Stay ahead with innovations and gadgets"
        buttonText="Explore Tech Innovations"
        link="/categories-news/technology"
      />
      <LazyComponent component={Technology} />
      <Heading
        title={"Travels"}
        subtitle="Wanderlust stories, tips & destinations"
        buttonText="Discover Travel Articles"
        link="/categories-news/travel"
      />
      <LazyComponent component={Travels} />

      <Heading
        title={"Breaking News"}
        subtitle="Urgent updates as events unfold"
        buttonText={"Stay Updated on Breaking News"}
        link="/categories-news/breaking"
      />
      <LazyComponent component={BreakingNews} />
    </main>
  );
}
