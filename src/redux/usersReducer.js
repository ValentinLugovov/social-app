import user1 from "../img/769.jpg";
import user2 from "../img/1299.jpg";
import user3 from "../img/3857.jpg";
import user4 from "../img/1500.jpg";
import user5 from "../img/2038.jpg";
import user6 from "../img/897.jpg";

let initialState = {
  users: {
    avatar: [
      { id: 1, img: user1, online: true },
      { id: 2, img: user2, online: true },
      { id: 3, img: user3, online: true },
      { id: 4, img: user4, online: true },
      { id: 5, img: user5, online: true },
      { id: 6, img: user6, online: true },
    ],
  },
};

const usersReducer = (state = initialState, action) => {
  return state;
};

export default usersReducer;
