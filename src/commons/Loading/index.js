import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./style.css";
export default function Loading() {
  return (
    <Box className="loading-container">
      <CircularProgress />
    </Box>
  );
}
