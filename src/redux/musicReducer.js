import { musicAPI } from "../api/api";

const SET_TITLE = "SET_TITLE";
const SET_SUBTITLE = "SET_SUBTITLE";
const SET_IMAGE = "SET_IMAGE";
const GET_TRACKS = "GET_TRACKS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  title: "",
  subtitle: "",
  setImage: null,
  tracks: [],
  isFetching: false,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_TITLE:
    //   return {
    //     ...state,
    //     title: action.title,
    //   };
    // case SET_SUBTITLE:
    //   return {
    //     ...state,
    //     subtitle: action.subtitle,
    //   };
    // case SET_IMAGE:
    //   return {
    //     ...state,
    //     image: action.image,
    //   };
    case GET_TRACKS:
      return {
        ...state,
        tracks: action.tracks,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

// функция, которая возвращает объект action(в котором находятся все данные для редьюсера )
export const setTitle = (title) => ({ type: SET_TITLE, title });
export const setSubTitle = (subtitle) => ({ type: SET_SUBTITLE, subtitle });
export const setImage = (image) => ({ type: SET_IMAGE, image });
export const getTracks = (tracks) => ({ type: GET_TRACKS, tracks });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getTopMusic = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    musicAPI.getMusicList().then((data) => {
      // this.props.setTitle(data.tracks[1].title);
      // this.props.setSubTitle(data.tracks[1].subtitle);
      // this.props.setImage(data.tracks[0].share.image);
      dispatch(toggleIsFetching(false));
      dispatch(getTracks(data.tracks));
    });
  };
};

export default musicReducer;
