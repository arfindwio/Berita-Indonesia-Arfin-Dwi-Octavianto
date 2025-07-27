// Services
import {
  reduxGetAntaraNews,
  reduxGetCnbcNews,
  reduxGetCnnNews,
  reduxGetJpnnNews,
  reduxGetKumparanNews,
  reduxGetMerdekaNews,
  reduxGetOkezoneNews,
  reduxGetRepublikaNews,
  reduxGetSindonewsNews,
  reduxGetSuaraNews,
  reduxGetTempoNews,
} from "../../../services/news/NewsServices";

// Reducer
import {
  setNewsByCategory,
  setNewsDetail,
  startLoading,
  endLoading,
} from "../../reducer/news/NewsSlice";

// Error Handler
import { handleRequestError } from "../../../utils/errorHandler";

export const getAntaraNewsAction = (category) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const result = await reduxGetAntaraNews(category);

    dispatch(setNewsByCategory({ category, data: result.data.data.posts }));
    return true;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const getCnbcNewsAction = (category) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const result = await reduxGetCnbcNews(category);

    dispatch(setNewsByCategory({ category, data: result.data.data.posts }));
    return true;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const getCnnNewsAction = (category) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const result = await reduxGetCnnNews(category);

    dispatch(setNewsByCategory({ category, data: result.data.data.posts }));
    return true;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};
