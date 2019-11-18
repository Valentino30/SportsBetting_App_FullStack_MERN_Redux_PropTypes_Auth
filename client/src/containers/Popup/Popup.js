import { connect } from "react-redux";
import React, { Component } from "react";
import Popup from "../../components/Popup/Popup";
import { loadPopup, unloadPopup } from "../../actions/popupActions";

class PopupContainer extends Component {
  render() {
    return (
      <div>
        <Popup {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loadPopup: () => dispatch(loadPopup()),
  unloadPopup: () => dispatch(unloadPopup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupContainer);
