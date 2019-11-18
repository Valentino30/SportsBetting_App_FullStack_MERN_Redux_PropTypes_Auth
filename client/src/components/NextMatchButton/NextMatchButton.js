import React from "react";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import PropTypes, { arrayOf, shape } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  button: {
    width: "100%",
    backgroundColor: "#3F51B5"
  }
}));

export default function NextMatchButton(props) {
  const classes = useStyles();
  const { loadMatch } = props;
  const { matches } = props.match;
  return (
    <Container className={classes.container}>
      <Button
        size="large"
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={() => loadMatch(matches)}
      >
        View Next Match
      </Button>
    </Container>
  );
}

NextMatchButton.propTypes = {
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
  }),
  loadMatch: PropTypes.func.isRequired
};
