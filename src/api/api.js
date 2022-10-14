import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "ab807def-8816-4e2d-98ce-41a32aa6d8d9",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

const instance2 = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: { locale: "en-US", pageSize: "20", startFrom: "0" },
  headers: {
    "X-RapidAPI-Key": "cd935ebd44mshbef02fed09d5b8dp1719f0jsn5f6313315d71",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
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

export const musicAPI = {
  getMusicList() {
    return axios.request(instance2).then((response) => response.data);
  },
};
