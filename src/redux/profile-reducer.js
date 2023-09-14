import { profileAPI } from "../api/api";

const CHANGE_TEXTAREA_PROF = "CHANGE-TEXTAREA-PROF";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";

const initialState = {
  profile: null,
  textareaVal: "",
  posts: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            text: state.textareaVal,
            date: new Date().toLocaleString(),
          },
        ],
        textareaVal: "",
      };

    case CHANGE_TEXTAREA_PROF: {
      return {
        ...state,
        textareaVal: action.text,
      };
    }

    case SET_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

// --- ↓ actions ↓ ---

export const changeMessage = (text) => {
  return { type: CHANGE_TEXTAREA_PROF, text: text };
};

export const addMessage = () => {
  return { type: ADD_POST };
};

export const setUserProfile = (profile) => {
  return { type: SET_PROFILE, profile: profile };
};

// --- ↓ thunks ↓ ---

export const getProfile = (id = 29833) => {
  return (dispatch) => {
    profileAPI.getProfile(id).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export default profileReducer;
