import { TOGGLE_DRAWER } from "./types";

export const toggleDrawer = buttonName => dispatch => {
  dispatch({
    type: TOGGLE_DRAWER,
    payload: buttonName
  });
};
