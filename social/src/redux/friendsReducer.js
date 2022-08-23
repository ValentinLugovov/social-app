import bale from "../img/bale.jpeg";
import jason from "../img/jason.jpeg";
import angelina from "../img/angelina.jpeg";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullname: "Jason Stathem",
      location: { city: "Saratov", country: "Great Britian" },
      status: "Лучше иметь друга, чем друг друга...",
      photo: jason,
    },
    {
      id: 2,
      followed: false,
      fullname: "Angelina Jolie",
      location: { city: "Minsk", country: "Belarus" },
      status: "Beauty is my life!",
      photo: angelina,
    },
    {
      id: 3,
      followed: true,
      fullname: "Christian Bale",
      location: { city: "Odessa", country: "Ukraine" },
      status: "I'M THE BATMAN",
      photo: bale,
    },
  ],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default friendsReducer;
