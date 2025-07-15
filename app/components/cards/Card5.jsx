import React from "react";
import { useArticleLikes } from "@/app/hooks/useArticleLikes";
import FavoriteButton from "@/app/components/features/FavouriteButton";
import { useThemeContext } from "@/app/context/ThemeContext";
import { truncateText } from "@/app/utils/textUtils";

const Card5 = ({ category, title, imageUrl, article, className = "" }) => {
  const { themeData } = useThemeContext();
  const { isArticleFavorite, toggleFavorite, loading } = useArticleLikes(article?._id);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={`relative overflow-hidden group`}>
      {/* ✅ Image Container with fixed aspect ratio */}
      <div className={`relative w-full aspect-[16/9] ${className} rounded overflow-hidden`}>
        <img
          src={imageUrl || "/placeholder.jpg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Favorite Button */}
        <FavoriteButton
          isFavorite={isArticleFavorite(article?._id)}
          toggleFavorite={() => toggleFavorite(article?._id)}
        />

        {/* Category Label */}
        {category && (
          <div
            className="absolute top-3 left-3 px-2 py-1 rounded-md"
            style={{
              backgroundColor: themeData?.background?.button,
              color: themeData?.text?.button,
            }}
          >
            <p className="text-xs md:text-sm font-semibold">{category}</p>
          </div>
        )}
      </div>

      {/* Title */}
      <h2
        className="mt-2 text-sm md:text-lg font-semibold group-hover:text-red-500 transition-colors duration-300 line-clamp-2"
        style={{ color: themeData?.text?.primary }}
      >
        {truncateText(title, 60)}
      </h2>
    </div>
  );
};

export default Card5;
