// Service Login User
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxGetNews = async (category) => {
  return await http.get(`${API_ENDPOINT.ANTARA}/${category}`);
};
