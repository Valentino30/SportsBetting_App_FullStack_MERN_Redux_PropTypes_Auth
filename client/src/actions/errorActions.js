import { LOAD_ERROR, UNLOAD_ERROR } from "./types";

export const loadError = message => dispatch => {
  dispatch({
    type: LOAD_ERROR,
    payload: message
  });
};

export const unloadError = () => dispatch => {
  dispatch({
    type: UNLOAD_ERROR
  });
};
