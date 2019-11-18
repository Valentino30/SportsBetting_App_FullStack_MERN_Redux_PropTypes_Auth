import PropTypes from "prop-types";
import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(4)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: "90%"
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    height: theme.spacing(6),
    width: "90%"
  }
}));

export default function AuthDrawer(props) {
  const theme = useTheme();
  const classes = useStyles();
  const { button, open } = props.drawer;
  const { toggleDrawer, login, register } = props;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setError] = useState("");

  const handleDrawerClose = () => {
    setCredentials({ ...credentials, email: "", password: "" });
    setError({ ...errors, emailError: false, passwordError: false });
    toggleDrawer(button);
  };

  const handleChange = name => event => {
    setCredentials({ ...credentials, [name]: event.target.value });
  };

  const handleSubmit = button => () => {
    const { email, password } = credentials;
    if (!email)
      return setError({ ...errors, emailError: true, passwordError: false });
    if (!password)
      return setError({ ...errors, emailError: false, passwordError: true });
    setError({ ...errors, emailError: false, passwordError: false });
    if (button === "Login") login(credentials);
    if (button === "Register") register(credentials);
    setCredentials({ ...credentials, email: "", password: "" });
    handleDrawerClose();
  };

  return (
    <div className={classes.root}>
      <Container>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <TextField
            type="email"
            label="Email"
            margin="normal"
            variant="outlined"
            value={credentials.email || ""}
            id="outlined-email-input"
            error={errors.emailError}
            autoComplete="current-email"
            className={classes.textField}
            onChange={handleChange("email")}
            helperText={errors.emailError ? "Please insert email" : ""}
          />
          <TextField
            margin="normal"
            type="password"
            label="Password"
            variant="outlined"
            error={errors.passwordError}
            value={credentials.password || ""}
            id="outlined-password-input"
            className={classes.textField}
            autoComplete="current-password"
            onChange={handleChange("password")}
            helperText={errors.passwordError ? "Please insert password" : ""}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit(button)}
            value={button}
          >
            {button}
          </Button>
        </Drawer>
      </Container>
    </div>
  );
}

AuthDrawer.propTypes = {
  open: PropTypes.bool,
  button: PropTypes.string,
  toggleDrawer: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};
