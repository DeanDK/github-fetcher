import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { getProfile } from "./../actions";
import SearchBar from "./../widgets/search_bar.js";

class ProfileContainer extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.props.getProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile)
      this.setState({ data: nextProps.profile.profileData });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="wrapper">
        <SearchBar page="profile" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.gitReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProfile }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);

ProfileContainer.propTypes = {
  wines: PropTypes.object
};
