import { combineReducers } from "@reduxjs/toolkit";
import NewsSlice from "./news/NewsSlice";

export default combineReducers({
  // News
  news: NewsSlice,
});
