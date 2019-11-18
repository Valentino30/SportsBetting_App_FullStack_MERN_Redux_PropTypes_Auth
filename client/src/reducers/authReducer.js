import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  AUTH_FAIL,
  LOAD_USER
} from "../actions/types";

const initialState = {
  email: "",
  userId: "",
  token: localStorage.getItem("token") || "",
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("loggedIn", true);
      return {
        ...state,
        email: action.payload.user.email,
        userId: action.payload.user._id,
        token: action.payload.token,
        loggedIn: true
      };
    case LOAD_USER:
      return {
        ...state,
        email: action.payload.email,
        userId: action.payload._id
      };
    case AUTH_FAIL:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      localStorage.removeItem("loggedIn");
      return {
        ...state,
        email: "",
        userId: "",
        token: "",
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
