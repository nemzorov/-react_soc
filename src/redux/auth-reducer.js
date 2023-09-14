import { authAPI } from "../api/api";

const SET_AUTH = "SET_AUTH";

const defaultState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
};

// --- ↓ actions ↓ ---

export const setAuth = (data) => {
  return { type: SET_AUTH, data: data };
};

// --- ↓ thunks ↓ ---

export const getAuth = () => {
  return (dispatch) => {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuth(data.data));
      }
    });
  };
};

export default authReducer;
