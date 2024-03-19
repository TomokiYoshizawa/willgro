import axios from "axios";

const { VITE_SERVER_URL } = import.meta.env;

const getToken = () => {
  return localStorage.getItem("token");
};

const axiosClient = axios.create({
  baseURL: VITE_SERVER_URL,
});

axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    throw err.response;
  }
);

export default axiosClient;
