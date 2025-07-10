"use client";

import React from "react";

import Link from "next/link";
import { Container } from "@mui/material";
import { PopularSkeleton } from "../features/Skeleton";
import Card1 from "../cards/Card1";
import { useHomeContext, } from "@/app/utils/useHome";
const PopularCards = () => {
  const { homeData: news, loading } = useHomeContext();
  const popular = news?.popularNews;


  if (loading || !popular) {
    return <PopularSkeleton />;
  }

  const articles = popular;

  return (
    <Container maxWidth="xl">
      <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 2fr 1fr" }}>
        {/* Left Side Cards */}
        <div className="flex flex-col gap-2">
          {articles.slice(0, 2).map((article) => (
            <Link key={article._id} href={`/news/${article.slug}`}>
              <Card1
                article={article}
                category={article.category?.name}
                title={article.title}
                imageUrl={article.image_url}
                className="h-[245px]"
              />
            </Link>
          ))}
        </div>

        {/* Center Big Card */}
        <div>
          <Link href={`/news/${articles[2].slug}`}>
            <Card1
              article={articles[2]}
              category={articles[2].category?.name}
              title={articles[2].title}
              imageUrl={articles[2].image_url}
              className="h-[500px]"
            />

          </Link>
        </div>

        {/* Right Side Cards */}
        <div className="flex flex-col gap-2">
          {articles.slice(3, 5).map((article) => (
            <Link key={article._id} href={`/news/${article.slug}`}>
              <Card1
                article={article}
                category={article.category?.name}
                title={article.title}
                imageUrl={article.image_url}
                className="h-[245px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularCards;
