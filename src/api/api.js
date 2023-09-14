import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "54b3640d-5e6e-4e03-89e2-80cbe28f934a" },
});

export const authAPI = {
  async authMe() {
    const response = await axiosInstance.get("auth/me");
    return response.data;
  },
};

export const usersAPI = {
  async getUsers(sizePage = 10, currentPage = 1) {
    const response = await axiosInstance.get(
      `users?count=${sizePage}&page=${currentPage}`
    );
    return response.data;
  },
  async followUser(id) {
    const response = await axiosInstance.post(`follow/${id}`);
    return response.data;
  },
  async unfollowUser(id) {
    const response = await axiosInstance.delete(`follow/${id}`);
    return response.data;
  },
};

export const profileAPI = {
  async getProfile(id) {
    const response = await axiosInstance.get(`profile/${id}`);
    return response.data;
  },
};

export const settingsAPI = {
  async request(endPoint, method) {
    switch (method) {
      case "get":
        return await axiosInstance.get(endPoint);
      case "post":
        return await axiosInstance.post(endPoint);
      case "put":
        return await axiosInstance.put(endPoint);
      case "delete":
        return await axiosInstance.delete(endPoint);
      default:
        console.log("ОШИБКА! Некорректный метод запроса");
    }
  },
};
