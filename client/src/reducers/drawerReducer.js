import { TOGGLE_DRAWER } from "../actions/types";

const initialState = {
  open: false,
  button: ""
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        open: !state.open,
        button: action.payload
      };
    default:
      return state;
  }
};

export default drawerReducer;
