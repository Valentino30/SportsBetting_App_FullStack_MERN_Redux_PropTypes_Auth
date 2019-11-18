import { LOAD_POPUP, UNLOAD_POPUP } from "../actions/types";

const initialState = {
  open: false
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POPUP:
      return { ...state, open: true };
    case UNLOAD_POPUP:
      return { ...state, open: false };
    default:
      return state;
  }
};

export default popupReducer;
