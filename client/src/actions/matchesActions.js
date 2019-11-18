import axios from "axios";
import { loadError } from "./errorActions";
import { loadCurrentBet } from "./betsActions";
import { LOAD_CURRENT_MATCH, LOAD_MATCHES } from "./types";

export const loadMatches = () => dispatch => {
  axios
    .get(`/api/matches`)
    .then(res => {
      const allMatches = res.data;
      if (!allMatches) throw Error("No matches found");
      const sports = [
        "FOOTBALL",
        "SNOOKER",
        "HANDBALL",
        "ICE HOCKEY",
        "TENNIS"
      ];
      const randomSport = Math.floor(Math.random() * Math.floor(sports.length));
      const matchesBySport = allMatches.filter(
        match => match.sport === sports[randomSport]
      );
      dispatch({
        type: LOAD_MATCHES,
        payload: matchesBySport
      });
      dispatch(loadMatch(matchesBySport));
    })
    .catch(err => dispatch(loadError(err.message)));
};

export const loadMatch = matches => dispatch => {
  const randomMatch = Math.floor(Math.random() * Math.floor(matches.length));
  const match = matches[randomMatch];
  dispatch({
    type: LOAD_CURRENT_MATCH,
    payload: match
  });
  dispatch(loadCurrentBet(match._id));
};
