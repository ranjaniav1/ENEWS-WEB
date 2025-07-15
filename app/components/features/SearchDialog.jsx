"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  CircularProgress,
  InputBase,
  Button,
} from "@mui/material";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import Link from "next/link";
import Card4 from "../cards/Card4";
import { useThemeContext } from "@/app/context/ThemeContext";
import { useSearch } from "@/app/utils/useSearch";

const SearchDialog = ({ open, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const { news, loading } = useSearch(searchQuery);
  const { themeData } = useThemeContext();

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setSearched(true);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: themeData?.background?.body,
          color: themeData?.text?.primary,
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: themeData?.background?.header,
          color: themeData?.text?.heading,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${themeData?.text?.border}`,
        }}
      >
        <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>Search News</span>
        <IconButton
          onClick={onClose}
          sx={{
            color: themeData?.icon?.default,
            "&:hover": { color: themeData?.icon?.main },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ background: themeData?.background?.body }}>
        {/* Search Input Area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: themeData?.background?.card,
            border: `1px solid ${themeData?.text?.border}`,
            borderRadius: 8,
            padding: "0.5rem",
          }}
        >
          <InputBase
            autoFocus
            fullWidth
            placeholder="Enter your search query..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            sx={{
              px: 1,
              color: themeData?.text?.primary,
              fontSize: "1rem",
            }}
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: themeData?.background?.button,
              color: themeData?.text?.button,
              minWidth: "40px",
              "&:hover": {
                backgroundColor: themeData?.icon?.main,
              },
            }}
          >
            <SearchIcon />
          </Button>
        </div>

        {/* Loader */}
        {loading && searched ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "12rem",
            }}
          >
            <CircularProgress sx={{ color: themeData?.icon?.main }} />
          </div>
        ) : searched && news.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: themeData?.text?.secondary,
              marginTop: "1rem",
            }}
          >
            No results found.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {news.map((article) => (
              <Link key={article._id} href={`/news/${article.slug}`} passHref>
                <Card4
                  article={article}
                  title={article.title}
                  category={article.category?.name}
                  imageUrl={article.image_url}
                />
              </Link>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
