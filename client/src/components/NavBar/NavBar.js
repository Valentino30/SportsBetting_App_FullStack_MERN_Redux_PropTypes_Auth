import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AuthDrawer from "../AuthDrawer/AuthDrawer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes, { shape } from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const { loggedIn } = props.user;
  const { logout, toggleDrawer } = props;

  const handleClick = button => () => {
    if (loggedIn) return logout();
    if (!loggedIn) return toggleDrawer(button);
  };

  const registerButton = (
    <Button
      color="primary"
      variant="contained"
      onClick={handleClick("Register")}
    >
      Register
    </Button>
  );

  return (
    <div className={classes.root}>
      <Container>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
              Sports Poll
            </Typography>
            <ButtonGroup>
              {loggedIn ? null : registerButton}
              <Button
                color="primary"
                variant="contained"
                onClick={handleClick("Login")}
              >
                {loggedIn ? "Logout" : "Login"}
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
        <AuthDrawer {...props} />
      </Container>
    </div>
  );
}

NavBar.propTypes = {
  user: shape({
    email: PropTypes.string,
    userId: PropTypes.string,
    token: PropTypes.string,
    loggedIn: PropTypes.bool
  }),
  logout: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};
