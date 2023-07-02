import axios from "axios";

export const setInterceptor = (token: any) => {
  if (!token) return false;
  // const tk: any = JSON.parse(token).value;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return true;
};
