import axiosClient from "./axiosClient";

const authApi = {
  register: async (params) => axiosClient.post("/auth/register", params),
  login: async (params) => axiosClient.post("/auth/login", params),
};

export default authApi;
