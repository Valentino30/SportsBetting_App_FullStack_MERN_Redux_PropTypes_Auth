import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  button: {
    width: "100%",
    backgroundColor: "#3F51B5"
  }
}));

export default function NextSportButton(props) {
  const classes = useStyles();
  const { loadMatches } = props;
  return (
    <Container className={classes.container}>
      <Button
        size="large"
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={() => loadMatches()}
      >
        View Next Sport
      </Button>
    </Container>
  );
}

NextSportButton.propTypes = {
  loadMatch: PropTypes.func.isRequired
};
