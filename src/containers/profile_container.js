import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { getProfile, getRepos } from "./../actions";
import Items from "./../widgets/items.js";
import SearchBar from "./../widgets/search_bar.js";

class ProfileContainer extends Component {
  state = {
    data: [],
    name: ""
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  dispatchgetProfileAction = e => {
    if (e.key === "Enter") {
      this.props.getProfile(this.state.name);
      this.props.getRepos(this.state.name);
    }
  };

  _renderItems = data => (data ? <Items {...data} /> : null);

  render() {
    return (
      <div>
        <SearchBar
          handleName={this.handleName}
          dispatchgetProfileAction={this.dispatchgetProfileAction}
        />
        {this.props.profile.profileData
          ? this._renderItems(this.props.profile)
          : null}
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
  return bindActionCreators({ getProfile, getRepos }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);

ProfileContainer.propTypes = {
  profile: PropTypes.object
};
