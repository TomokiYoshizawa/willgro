import axiosClient from "./axiosClient";

const authApi = {
  register: async (params) => axiosClient.post("/auth/register", params),
  login: async (params) => axiosClient.post("/auth/login", params),
  verifyToken: () => axiosClient.post("/auth/verify-token"),
};

export default authApi;
