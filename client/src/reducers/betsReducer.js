import {
  LOAD_BET,
  UNLOAD_BET,
  UNLOAD_BETS,
  LOAD_BETS,
  LOAD_CURRENT_BET
} from "../actions/types";

const initialState = {
  bets: [],
  currentBet: {}
};

const betsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BET:
      return {
        ...state,
        bets: [...state.bets, action.payload],
        currentBet: action.payload
      };
    case UNLOAD_BET:
      const deletedBetId = action.payload;
      return {
        ...state,
        bets: state.bets.filter(bet => bet._id !== deletedBetId),
        currentBet: {}
      };
    case LOAD_BETS:
      return {
        ...state,
        bets: action.payload
      };
    case LOAD_CURRENT_BET:
      return {
        ...state,
        currentBet: action.payload
      };
    case UNLOAD_BETS:
      return {
        ...state,
        bets: [],
        currentBet: {}
      };
    default:
      return state;
  }
};

export default betsReducer;
