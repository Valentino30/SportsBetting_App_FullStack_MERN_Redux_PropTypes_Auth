import axios from "axios";
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  AUTH_FAIL,
  LOAD_USER
} from "./types";
import { loadPopup } from "./popupActions";
import { loadError, unloadError } from "./errorActions";
import { unloadBets, loadBets } from "./betsActions";

export const register = credentials => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(credentials);

  axios
    .post("/api/user/register", body, config)
    .then(res => {
      const { user, token } = res.data;
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user, token }
      });
      dispatch(unloadError());
      dispatch(loadPopup());
    })
    .catch(err => {
      const errorMessage = err.response.data.error.message;
      dispatch({ type: REGISTER_FAIL });
      dispatch(loadError(errorMessage));
      dispatch(loadPopup());
    });
};

export const login = credentials => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(credentials);

  axios
    .post(`/api/user/login`, body, config)
    .then(res => {
      const { user, token } = res.data;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user, token }
      });
      dispatch(unloadError());
      dispatch(loadPopup());
      dispatch(loadBets(user._id));
    })
    .catch(err => {
      const errorMessage = err.response.data.error.message;
      dispatch({ type: LOGIN_FAIL });
      dispatch(loadError(errorMessage));
      dispatch(loadPopup());
    });
};

export const authUser = () => (dispatch, getState) => {
  axios
    .get("/api/user/auth", tokenConfig(getState))
    .then(res => {
      const user = res.data;
      dispatch({
        type: LOAD_USER,
        payload: user
      });
      dispatch(loadBets(user._id));
    })
    .catch(err => {
      dispatch({ type: AUTH_FAIL });
      dispatch(loadError(err.message));
      dispatch(loadPopup());
    });
};

export const logout = () => dispatch => {
  dispatch(unloadBets());
  dispatch({ type: LOGOUT_SUCCESS });
};

export const tokenConfig = getState => {
  const token = getState().user.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
