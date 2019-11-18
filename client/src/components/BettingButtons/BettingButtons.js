import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import PropTypes, { arrayOf, shape } from "prop-types";

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    width: "100%",
    marginTop: theme.spacing(2)
  },
  button: {
    width: "100%",
    backgroundColor: "#3F51B5"
  }
}));

export default function BettingButtons(props) {
  const classes = useStyles();

  const handleClick = bet => () => {
    const { addBet } = props;
    const { bets } = props.bet;
    const { userId } = props.user;
    const { currentMatch } = props.match;
    const betAlreadyAdded = bets.some(bet => bet._id === currentMatch._id);
    if (betAlreadyAdded) return;
    addBet({
      userId: userId,
      matchId: currentMatch._id,
      bet
    });
  };

  return (
    <Container>
      <ButtonGroup
        variant="contained"
        color="primary"
        size="large"
        aria-label="large contained secondary button group"
        className={classes.buttonGroup}
      >
        <Button className={classes.button} onClick={handleClick("Home")}>
          Home
        </Button>
        <Button className={classes.button} onClick={handleClick("Draw")}>
          Draw
        </Button>
        <Button className={classes.button} onClick={handleClick("Away")}>
          Away
        </Button>
      </ButtonGroup>
    </Container>
  );
}

BettingButtons.propTypes = {
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
  addBet: PropTypes.func.isRequired
};
