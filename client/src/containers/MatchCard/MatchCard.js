import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes, { arrayOf, shape } from "prop-types";
import { toggleDrawer } from "../../actions/drawerActions";
import MatchCard from "../../components/MatchCard/MatchCard";
import LeagueBar from "../../components/LeagueBar/LeagueBar";
import { loadMatch, loadMatches } from "../../actions/matchesActions";
import BetNowButton from "../../components/BetNowButton/BetNowButton";
import BettingButtons from "../../components/BettingButtons/BettingButtons";
import WithdrawButton from "../../components/WithdrawButton/WithdrawButton";
import { addBet, unloadBet, loadCurrentBet } from "../../actions/betsActions";
import NextMatchButton from "../../components/NextMatchButton/NextMatchButton";
import NextSportButton from "../../components/NextSportButton/NextSportButton";

class MatchCardContainer extends Component {
  render() {
    const { bets } = this.props.bet;
    const { loggedIn } = this.props.user;
    const { currentMatch } = this.props.match;
    const betAlreadyAdded = bets.some(bet => bet.matchId === currentMatch._id);
    return (
      <div>
        <NextSportButton {...this.props} />
        <LeagueBar {...this.props} />
        <MatchCard {...this.props} />
        <NextMatchButton {...this.props} />
        {loggedIn || <BetNowButton {...this.props} />}
        {loggedIn && !betAlreadyAdded && <BettingButtons {...this.props} />}
        {loggedIn && betAlreadyAdded && <WithdrawButton {...this.props} />}
      </div>
    );
  }
}

MatchCardContainer.propTypes = {
  user: shape({
    email: PropTypes.string,
    userId: PropTypes.string,
    token: PropTypes.string,
    loggedIn: PropTypes.bool
  }),
  bet: shape({
    bets: arrayOf(
      shape({
        _id: PropTypes.string,
        userId: PropTypes.string,
        matchId: PropTypes.string,
        bet: PropTypes.string,
        __v: PropTypes.number
      })
    ),
    currentBet: shape({
      bet: PropTypes.string,
      matchId: PropTypes.string,
      userId: PropTypes.string,
      __v: PropTypes.number,
      _id: PropTypes.string
    })
  }),
  match: shape({
    matches: arrayOf(
      shape({
        createdAt: PropTypes.string,
        _id: PropTypes.string,
        awayName: PropTypes.string,
        group: PropTypes.string,
        homeName: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
        objectId: PropTypes.string,
        sport: PropTypes.string,
        country: PropTypes.string,
        state: PropTypes.string
      })
    ),
    currentMatch: shape({
      createdAt: PropTypes.string,
      _id: PropTypes.string,
      awayName: PropTypes.string,
      group: PropTypes.string,
      homeName: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      objectId: PropTypes.string,
      sport: PropTypes.string,
      country: PropTypes.string,
      state: PropTypes.string
    })
  })
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loadMatches: () => dispatch(loadMatches()),
  addBet: payload => dispatch(addBet(payload)),
  unloadBet: payload => dispatch(unloadBet(payload)),
  loadMatch: payload => dispatch(loadMatch(payload)),
  toggleDrawer: payload => dispatch(toggleDrawer(payload)),
  loadCurrentBet: payload => dispatch(loadCurrentBet(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchCardContainer);
