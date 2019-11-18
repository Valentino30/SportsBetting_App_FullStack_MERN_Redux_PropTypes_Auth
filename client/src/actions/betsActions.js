import axios from "axios";
import { loadError } from "./errorActions";
import {
  LOAD_BET,
  LOAD_BETS,
  UNLOAD_BET,
  UNLOAD_BETS,
  LOAD_CURRENT_BET
} from "./types";

export const addBet = bet => dispatch => {
  axios
    .post("/api/bets", bet)
    .then(res => {
      const bet = res.data;
      dispatch({
        type: LOAD_BET,
        payload: bet
      });
    })
    .catch(err => dispatch(loadError(err.message)));
};

export const unloadBet = betId => dispatch => {
  axios
    .delete(`/api/bets/${betId}`)
    .then(res => {
      const deletedBetId = res.data;
      dispatch({
        type: UNLOAD_BET,
        payload: deletedBetId
      });
    })
    .catch(err => dispatch(loadError(err.message)));
};

export const loadCurrentBet = currentMatchId => dispatch => {
  axios
    .get(`/api/bets/bet/${currentMatchId}`)
    .then(res => {
      const currentBet = res.data;
      dispatch({
        type: LOAD_CURRENT_BET,
        payload: currentBet
      });
    })
    .catch(err => dispatch(loadError(err.message)));
};

export const loadBets = userId => dispatch => {
  axios
    .get(`/api/bets/${userId}`)
    .then(res => {
      const bets = res.data;
      dispatch({
        type: LOAD_BETS,
        payload: bets
      });
    })
    .catch(err => dispatch(loadError(err.message)));
};

export const unloadBets = () => dispatch => {
  dispatch({
    type: UNLOAD_BETS
  });
};
