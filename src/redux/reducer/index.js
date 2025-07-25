import { combineReducers } from "@reduxjs/toolkit";
import NewsSlice from "./news/AuthSlice";

export default combineReducers({
  // News
  news: NewsSlice,
});
