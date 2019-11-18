import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  button: {
    width: "100%",
    backgroundColor: "#3F51B5"
  }
}));

export default function BetNowButton(props) {
  const classes = useStyles();
  const { toggleDrawer } = props;
  return (
    <Container className={classes.container}>
      <Button
        size="large"
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={() => toggleDrawer("Register")}
      >
        Bet Now
      </Button>
    </Container>
  );
}

BetNowButton.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
};
