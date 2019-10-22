import { connect } from "react-redux";
import React, { Component } from "react";
import Map from "../components/Map";
import { loadPickupPoints } from "../actions/pickupPointActions";

class MapContainer extends Component {
  state = {
    markers: []
  };

  componentDidMount() {
    const pickupPoints = this.props.pickupPoint.pickupPoints;
    this.setState({ ...this.state, markers: pickupPoints });
  }

  componentDidUpdate(prevProps, prevState) {
    const pickupPoints = this.props.pickupPoint.pickupPoints;
    if (prevProps.pickupPoint.pickupPoints !== pickupPoints) {
      this.setState({ ...this.state, markers: pickupPoints });
    }
  }

  render() {
    return <Map {...this.props} {...this.state} />;
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
)(MapContainer);
