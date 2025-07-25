// Services
import { reduxGetNews } from "../../../services/news/NewsServices";

// Reducer
import {
  setNews,
  setNewsDetail,
  startLoading,
  endLoading,
} from "../../reducer/news/AuthSlice";

// Error Handler
import { handleRequestError } from "../../../utils/errorHandler";

export const getNewsAction = (category) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const result = await reduxGetNews(category);

    // dispatch(setNews(result.data.data));
    // return result.data.data;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};
