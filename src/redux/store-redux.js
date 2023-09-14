import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import friendsReducer from "./friends-reducer";
import musicReducer from "./music-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  messagesPage: messageReducer,
  profile: profileReducer,
  navbar: navbarReducer,
  friends: friendsReducer,
  music: musicReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
