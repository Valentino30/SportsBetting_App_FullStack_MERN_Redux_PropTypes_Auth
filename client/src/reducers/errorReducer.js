import { LOAD_ERROR, UNLOAD_ERROR } from "../actions/types";

const initialState = {
  message: "",
  popup: false
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ERROR:
      return {
        ...state,
        message: action.payload,
        popup: true
      };
    case UNLOAD_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default errorReducer;
