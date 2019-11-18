import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes, { shape } from "prop-types";
import { Container } from "@material-ui/core";
import { authUser } from "./actions/authActions";
import { loadBets } from "./actions/betsActions";
import PopupContainer from "./containers/Popup/Popup";
import { loadMatches } from "./actions/matchesActions";
import NavBarContainer from "./containers/NavBar/NavBar";
import SportBarContainer from "./containers/SportBar/SportBar";
import MatchCardContainer from "./containers/MatchCard/MatchCard";

class App extends Component {
  componentDidMount() {
    const { userId, token } = this.props.user;
    const { loadMatches, authUser, loadBets } = this.props;
    loadMatches();
    if (token) authUser();
    if (userId) loadBets(userId);
  }

  render() {
    return (
      <Container>
        <NavBarContainer />
        <SportBarContainer />
        <MatchCardContainer />
        <PopupContainer />
      </Container>
    );
  }
}

App.propTypes = {
  user: shape({
    email: PropTypes.string,
    userId: PropTypes.string,
    token: PropTypes.string,
    loggedIn: PropTypes.bool
  }),
  loadBets: PropTypes.func.isRequired,
  authUser: PropTypes.func.isRequired,
  loadMatches: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  authUser: () => dispatch(authUser()),
  loadMatches: () => dispatch(loadMatches()),
  loadBets: payload => dispatch(loadBets(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
