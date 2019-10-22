import { connect } from "react-redux";
import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { loadPickupPoints } from "../actions/pickupPointActions";

class NavBarContainer extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loadPickupPoints: payload => dispatch(loadPickupPoints(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContainer);
