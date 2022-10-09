import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "ab807def-8816-4e2d-98ce-41a32aa6d8d9",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const followAPI = {
  deleteUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const unfollowAPI = {
  postUser(id) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },
};

export const authAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const profileAPI = {
  getUsersProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
};
