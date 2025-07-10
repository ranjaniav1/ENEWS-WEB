import React, { useState } from "react";
import Card5 from "@/app/components/cards/Card5";
import FontSizeSlider from "./FontSlider";
import { useThemeContext } from "@/app/context/ThemeContext";
import GoogleAd from "@/app/components/features/GoogleAd";
import { ADS } from "@/app/utils/adConfig";

const NewsContent = ({ article }) => {
  const { themeData, config } = useThemeContext();
  const [fontSize, setFontSize] = useState(config.fontSizeBase);
  const [showAd, setShowAd] = useState(false);
  // Split content into paragraphs (assuming <p> tags in HTML)
  const contentParagraphs = article.content?.split("</p>") || [];

  return (
    <>
      {/* News Image */}
      <Card5 imageUrl={article.image_url} height="400px" />

      {/* Font Size Slider */}
      <FontSizeSlider fontSize={fontSize} setFontSize={setFontSize} />

      {/* News Content with In-Article Ad */}
      {contentParagraphs.map((para, index) => (
        <div key={index}>
          <p
            className="leading-7 mb-4"
            style={{
              fontSize: `${fontSize}px`,
              color: themeData?.text?.primary,
              lineHeight: "1.6",
            }}
            dangerouslySetInnerHTML={{ __html: para + "</p>" }}
          />

          {/* Insert Ad after 1st paragraph */}
          {index === 0 && (
            <GoogleAd
              adSlot={ADS.IN_ARTICLE_POPULAR}
              style={{ display: showAd ? "block" : "none", textAlign: "center", margin: "20px auto" }}
              format="fluid" onAdLoad={(loaded) => setShowAd(loaded)}
            />
          )}
        </div>
      ))}

      {/* Excerpt (optional summary) */}
      {article.excerpt && (
        <p
          className="mb-4"
          style={{
            fontSize: `${fontSize}px`,
            color: themeData?.text?.secondary,
            fontStyle: "italic",
          }}
          dangerouslySetInnerHTML={{ __html: article.excerpt }}
        />
      )}

      {/* Keywords Section */}
      {article.tags?.length > 0 && (
        <div className="mt-4">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: themeData?.text?.primary }}
          >
            Keywords:
          </h2>
          <ul
            className="list-disc list-inside"
            style={{ color: themeData?.text?.primary }}
          >
            {article.tags.map((tag, index) => (
              <li key={index}>{tag.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NewsContent;
