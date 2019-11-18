import React from "react";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes, { arrayOf, shape } from "prop-types";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2, 2),
    marginBottom: theme.spacing(1),
    backgroundColor: "#EEEEEE",
    height: "64px"
  },
  text: {
    textAlign: "center"
  }
}));

export default function SportBar(props) {
  const classes = useStyles();
  const sport = props.match.currentMatch.sport;
  return (
    <Container>
      <Paper className={classes.paper}>
        <Typography className={classes.text} variant="h6" component="h3">
          {sport ? sport : ""}
        </Typography>
      </Paper>
    </Container>
  );
}

SportBar.propTypes = {
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
