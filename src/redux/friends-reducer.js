import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_COUNT = "TOTAL_COUNT";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

const defaultState = {
  friends: [],
  currentPage: 1,
  sizePage: 10,
  totalCount: 0,
  isPreloader: false,
  followingInProgress: [],
};

const friendsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FOLLOW: {
      const newState = { ...state };
      newState.friends = [...state.friends];
      newState.friends.filter((el) => el.id === action.id)[0].followed = true;
      return newState;
    }
    case UNFOLLOW: {
      const newState = { ...state };
      newState.friends = [...state.friends];
      newState.friends.filter((el) => el.id === action.id)[0].followed = false;
      return newState;
    }
    case SETUSERS: {
      return { ...state, friends: action.users };
    }
    case CURRENT_PAGE: {
      return { ...state, currentPage: action.curent_page };
    }
    case TOTAL_COUNT: {
      return { ...state, totalCount: action.totalCount };
    }
    case TOGGLE_PRELOADER: {
      return { ...state, isPreloader: action.isPreloader };
    }
    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : [...state.followingInProgress.filter((id) => id !== action.id)],
      };
    }
    default:
      return state;
  }
};

// --- ↓ actions ↓ ---

export const followSuccess = (id) => {
  return { type: FOLLOW, id: id };
};
export const unfollowSuccess = (id) => {
  return { type: UNFOLLOW, id: id };
};
export const setUsers = (users) => {
  return { type: SETUSERS, users: users };
};
export const setCurrentPage = (curent_page) => {
  return { type: CURRENT_PAGE, curent_page: curent_page };
};
export const setTotalCount = (totalCount) => {
  return { type: TOTAL_COUNT, totalCount: totalCount };
};
export const togglePreloader = (isPreloader) => {
  return { type: TOGGLE_PRELOADER, isPreloader: isPreloader };
};
export const toggleFollowingProgress = (followingInProgress, id) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    followingInProgress: followingInProgress,
    id: id,
  };
};

// --- ↓ thunks ↓ ---

export const getUsers = (sizePage, currentPage) => {
  return (dispatch) => {
    dispatch(togglePreloader(true));
    usersAPI.getUsers(sizePage, currentPage).then((data) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(togglePreloader(false));
    });
  };
};

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.followUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(id));
        dispatch(toggleFollowingProgress(false, id));
      }
    });
  };
};

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.unfollowUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(id));
        dispatch(toggleFollowingProgress(false, id));
      }
    });
  };
};

export default friendsReducer;
