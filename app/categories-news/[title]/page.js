"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import Link from "next/link";
import { TravelSkeleton } from "@/app/components/features/Skeleton";
import Card5 from "@/app/components/cards/Card5";
import Breadcumps from "@/app/components/shared/Breadcrumbs";
import { useThemeContext } from "@/app/context/ThemeContext";
import { useArticleCollection } from "@/app/utils/useArticleCollection";
import GoogleAd from "@/app/components/features/GoogleAd";
import { ADS } from "@/app/utils/adConfig";

const CategoryPage = () => {
  const { title } = useParams();
  const { themeData } = useThemeContext();
  const { article, loading } = useArticleCollection(title);

  const pageTitle = title ? `Enews - ${title} News` : "Enews - Latest News";
  const pageDescription = title
    ? `Read the latest ${title} news articles and updates from around the world.`
    : "Stay informed with the latest news and updates from Enews.";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div style={{ background: themeData?.background }}>
      {/* Meta tags for SEO */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <Breadcumps heading={title} />
      <div className=" flex justify-center">
        <GoogleAd
          adSlot={ADS.HOME_BOTTOM_MULTIPLEX} // ✅ Display Banner slot
          style={{ display: "inline-block", width: "100%", height: 90, textAligh: "center" }}
        />
      </div>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {loading ? (
          <TravelSkeleton />
        ) : !article?.length ? (
          <Typography variant="h6" align="center" color="error">
            No news articles found
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {article.map((articleItem, index) => (
              < React.Fragment key={articleItem._id}>
                <Grid item xs={12} sm={6} md={3}>
                  <Link
                    href={`/news/${articleItem.slug}`}
                    aria-label={`Read article: ${articleItem.title}`}
                    passHref
                  >
                    <Card5
                      category={articleItem.category?.name}
                      title={articleItem.title}
                      imageUrl={articleItem.image_url}
                      article={articleItem}
                      height="250px"
                    />
                  </Link>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        )}
      </Container>

    </div>


  );
};

export default CategoryPage;
