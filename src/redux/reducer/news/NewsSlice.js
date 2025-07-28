import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsByCategory: {},
  newsDetail: null,
  loading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsByCategory: (state, action) => {
      const { category, data } = action.payload;
      state.newsByCategory[category] = data;
    },

    setNewsDetail: (state, action) => {
      state.newsDetail = {
        newsDetail: action.payload.newsDetail,
        relatedNews: action.payload.relatedNews,
      };
    },

    startLoading: (state) => {
      state.loading = true;
    },

    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setNewsByCategory, setNewsDetail, startLoading, endLoading } =
  newsSlice.actions;

export default newsSlice.reducer;
