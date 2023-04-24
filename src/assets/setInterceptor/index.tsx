import axios from "axios";

export const setInterceptor = (token: any) => {
  if (!token) return false;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return true;
};
