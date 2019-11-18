import { connect } from "react-redux";
import React, { Component } from "react"; 
import SportBar from "../../components/SportBar/SportBar";

class SportBarContainer extends Component {
  render() {
    return (
      <div>
        <SportBar {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SportBarContainer);
