import { connect } from "react-redux";
import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { toggleDrawer } from "../../actions/drawerActions";
import { register, login, logout } from "../../actions/authActions";

class NavBarContainer extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: payload => dispatch(login(payload)),
  register: payload => dispatch(register(payload)),
  toggleDrawer: payload => dispatch(toggleDrawer(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
