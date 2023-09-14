const ESTIMATE = "ESTIMATE";
const SETMUSIK = "SETMUSIK";

const musicReducer = (state = { music: [] }, action) => {
  switch (action.type) {
    case ESTIMATE:
      return {
        ...state,
        music: state.music.map((e) => {
          if (e.id === action.id) {
            return {
              ...e,
              like: action.effect === "like" ? true : false,
              dislike: action.effect === "dislike" ? true : false,
            };
          }
          return e;
        }),
      };
    case SETMUSIK:
      return { ...state, music: action.music };
    default:
      return state;
  }
};

export const estimateAC = (id, effect) => {
  return { type: ESTIMATE, id: id, effect: effect };
};

export const setMusicAC = (music) => {
  return { type: SETMUSIK, music: music };
};

export default musicReducer;
