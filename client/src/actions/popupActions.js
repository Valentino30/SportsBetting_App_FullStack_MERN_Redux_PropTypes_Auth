import { LOAD_POPUP, UNLOAD_POPUP } from "./types";

export const loadPopup = () => dispatch => {
  dispatch({
    type: LOAD_POPUP
  });
};

export const unloadPopup = () => dispatch => {
  dispatch({
    type: UNLOAD_POPUP
  });
};
