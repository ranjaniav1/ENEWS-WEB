"use client";
import React from "react";
import { useArticleLikes } from "@/app/hooks/useArticleLikes";
import FavoriteButton from "@/app/components/features/FavouriteButton";
import { useThemeContext } from "@/app/context/ThemeContext";
import { truncateText } from "@/app/utils/textUtils";

const Card1 = ({
  height,
  width,
  marginBottom,
  article,
  imageUrl,
  category,
  title,
  showFavourite = true
}) => {
  const { isArticleFavorite, toggleFavorite } = useArticleLikes();

  const { themeData } = useThemeContext();

  return (
    <div
      className="relative overflow-hidden group  rounded-lg shadow-lg cursor-pointer bg-gradient-to-t from-black to-transparent"
      style={{
        height: height,
        width: width || "100%",
        marginBottom,
      }}
    // onClick={() => addHandleArticleClick(article)}
    >
      <img
        className="object-fill w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110"
        src={imageUrl}
        alt={title}
      />

      <div
        className="absolute top-2 left-2  text-[10px] sm:text-xs md:text-sm  font-semibold px-3 py-0.5 rounded-lg"
        style={{
          backgroundColor: themeData?.background?.button,
          color: themeData?.text?.button,
        }}
      >
        {category}
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t px-4 py-2 transition-colors duration-300">
        <h2
          className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-bold group-hover:text-red-500"
          style={{ color: themeData?.text?.card }}
        >
          {truncateText(title, 60)}
        </h2>

      </div>

      {/* like button */}
      {showFavourite && (
        <div className="absolute top-2 right-2 sm:scale-75 md:scale-90">

          <FavoriteButton
            isFavorite={isArticleFavorite(article?._id)}
            toggleFavorite={() => toggleFavorite(article?._id)}
          />
        </div>
      )}
    </div>
  );
};

export default Card1;
