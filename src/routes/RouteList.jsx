import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "../pages/Home";
import { NewsDetail } from "../pages/NewsDetail";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news-detail" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
