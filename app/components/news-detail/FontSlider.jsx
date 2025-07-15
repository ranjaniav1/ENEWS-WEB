"use client";
import React from "react";
import { Slider, Typography, Box } from "@mui/material";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { useThemeContext } from "@/app/context/ThemeContext";

const fontSizes = [12, 14, 16, 18, 20, 22, 24];

const FontSizeSlider = ({ fontSize, setFontSize }) => {
  const { themeData, config } = useThemeContext();

  return (
    <Box
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: config?.borderRadius || "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        border: `1px solid ${themeData?.border?.default || "#ccc"}`,
        px: 3,
        py: 2,
        my: 3,
      }}
    >
      <Box display="flex" alignItems="center" mb={2} gap={1}>
        <TextFieldsIcon sx={{ color: themeData?.text?.primary }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: themeData?.text?.primary }}
        >
          Adjust Font Size
        </Typography>
      </Box>

      <Slider
        value={fontSize}
        onChange={(_, newValue) => setFontSize(newValue)}
        step={2}
        marks={fontSizes.map((size) => ({
          value: size,
          label: `${size}px`,
        }))}
        min={12}
        max={24}
        valueLabelDisplay="on"
        sx={{
          color: themeData?.primary,
          '& .MuiSlider-thumb': {
            width: 20,
            height: 20,
            border: `2px solid ${themeData?.primary}`,
            backgroundColor: "#fff",
          },
          '& .MuiSlider-markLabel': {
            color: themeData?.text?.secondary,
            fontSize: "0.8rem",
          },
          '& .MuiSlider-valueLabel': {
            background: themeData?.primary,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "4px",
          },
        }}
      />
    </Box>
  );
};

export default FontSizeSlider;
