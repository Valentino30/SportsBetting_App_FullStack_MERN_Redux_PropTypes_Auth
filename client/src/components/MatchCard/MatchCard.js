import React from "react";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes, { arrayOf, shape } from "prop-types";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 1),
    marginBottom: theme.spacing(1),
    backgroundColor: "#FAFAFA"
  },
  teams: {
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(1),
    backgroundColor: "#F1F1F1",
    height: "79px"
  },
  text: {
    textAlign: "center"
  }
}));

export default function MatchCard(props) {
  const classes = useStyles();
  const { homeName, awayName } = props.match.currentMatch;
  return (
    <Container>
      <Paper className={classes.teams}>
        <Typography className={classes.text} variant="h5" component="h3">
          {homeName ? homeName : ""}
        </Typography>
      </Paper>
      <Paper className={classes.paper} elevation={0}>
        <Typography className={classes.text} variant="h6" component="h3">
          vs
        </Typography>
      </Paper>
      <Paper className={classes.teams}>
        <Typography className={classes.text} variant="h5" component="h3">
          {awayName ? awayName : ""}
        </Typography>
      </Paper>
    </Container>
  );
}

MatchCard.propTypes = {
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
