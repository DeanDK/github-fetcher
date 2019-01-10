import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";

class ProfileContainer extends Component {
  render() {
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    profiles: state.gitReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);

ProfileContainer.propTypes = {
  wines: PropTypes.object
};
