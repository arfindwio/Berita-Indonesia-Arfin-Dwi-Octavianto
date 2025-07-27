// Service Login User
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxGetAntaraNews = async (category) => {
  return await http.get(`${API_ENDPOINT.ANTARA}/${category}`);
};

export const reduxGetCnbcNews = async (category) => {
  return await http.get(`${API_ENDPOINT.CNBC}/${category}`);
};

export const reduxGetCnnNews = async (category) => {
  return await http.get(`${API_ENDPOINT.CNN}/${category}`);
};

export const reduxGetJpnnNews = async (category) => {
  return await http.get(`${API_ENDPOINT.JPNN}/${category}`);
};

export const reduxGetKumparanNews = async (category) => {
  return await http.get(`${API_ENDPOINT.KUMPARAN}/${category}`);
};

export const reduxGetMerdekaNews = async (category) => {
  return await http.get(`${API_ENDPOINT.MERDEKA}/${category}`);
};

export const reduxGetOkezoneNews = async (category) => {
  return await http.get(`${API_ENDPOINT.OKEZONE}/${category}`);
};

export const reduxGetRepublikaNews = async (category) => {
  return await http.get(`${API_ENDPOINT.REPUBLIKA}/${category}`);
};

export const reduxGetSindonewsNews = async (category) => {
  return await http.get(`${API_ENDPOINT.SINDONEWS}/${category}`);
};

export const reduxGetSuaraNews = async (category) => {
  return await http.get(`${API_ENDPOINT.SUARA}/${category}`);
};

export const reduxGetTempoNews = async (category) => {
  return await http.get(`${API_ENDPOINT.TEMPO}/${category}`);
};
