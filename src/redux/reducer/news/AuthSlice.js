import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  newsDetail: null,
  loading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setNewsDetail: (state, action) => {
      state.newsDetail = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setNews, setNewsDetail, startLoading, endLoading } =
  newsSlice.actions;

export default newsSlice.reducer;
