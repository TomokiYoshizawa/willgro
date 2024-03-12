import axiosClient from "./axiosClient";

const authApi = {
  register: async (params) => axiosClient.post("/auth/register", params),
};

export default authApi;
