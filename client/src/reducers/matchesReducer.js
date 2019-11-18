import { LOAD_CURRENT_MATCH, LOAD_MATCHES } from "../actions/types";

const initialState = {
  matches: [],
  currentMatch: {}
};

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MATCHES:
      return { ...state, matches: action.payload };
    case LOAD_CURRENT_MATCH:
      return { ...state, currentMatch: action.payload };
    default:
      return state;
  }
};

export default matchesReducer;
