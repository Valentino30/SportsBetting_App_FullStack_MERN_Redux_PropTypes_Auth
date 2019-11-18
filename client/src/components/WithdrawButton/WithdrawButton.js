import React from "react";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes, { arrayOf, shape } from "prop-types";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  button: {
    width: "100%"
  }
}));

export default function WithdrawButton(props) {
  const classes = useStyles();
  const { unloadBet } = props;
  const { currentBet } = props.bet;

  const handleClick = () => {
    unloadBet(currentBet._id);
  };

  return (
    <Container className={classes.container}>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        className={classes.button}
        onClick={handleClick}
      >
        Withdraw Bet
      </Button>
    </Container>
  );
}

WithdrawButton.propTypes = {
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
  unloadBet: PropTypes.func.isRequired
};
