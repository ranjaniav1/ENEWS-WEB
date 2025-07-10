import React, { useState } from "react";
import Link from "next/link";
import Card4 from "@/app/components/cards/Card4";
import { useThemeContext } from "@/app/context/ThemeContext";
import GoogleAd from "../features/GoogleAd";
import { ADS } from "@/app/utils/adConfig";

const RelatedNews = ({ articles }) => {
  const { themeData } = useThemeContext()
  const [showAd, setShowAd] = useState(false);
  return (
    <div>
      <div className="text-xs md:text-lg font-semibold px-3 py-1 rounded-lg mb-4" style={{
        backgroundColor: themeData?.background?.button,
        color: themeData?.text?.button,
      }}>
        Related News
      </div>
      <div className="space-y-4">
        {articles.length > 0 ? (
          articles.map((article) => (
            <Link href={`/news/${article.slug}`} key={article?._id}>
              <Card4
                article={article}
                category={article.category?.name}
                title={article.title}
                imageUrl={article.image_url}
              />
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center">No related articles found.</p>
        )}
      </div>
      {/* Vertical Ad below articles */}

      <div className="mt-6">
        <GoogleAd
          adSlot={ADS.NEWS_SIDEBAR_MULTIPLEX}
          style={{
            display: showAd ? "block" : "none",
            width: "100%",
            height: "auto",
            textAlign: "center",
          }}
          format="autorelaxed"
          onLoad={(loaded) => setShowAd(loaded)}
        />
      </div>

    </div>
  );
};

export default RelatedNews;
