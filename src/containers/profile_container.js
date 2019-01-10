import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { getProfile } from "./../actions";
import Items from "./../widgets/items.js";
import SearchBar from "./../widgets/search_bar.js";

class ProfileContainer extends Component {
  state = {
    data: [],
    name: ""
  };

  componentWillMount() {
    this.props.getProfile();
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  dispatchgetProfileAction = e => {
    if (e.key === "Enter") this.props.getProfile(this.state.name);
  };

  _renderItems = data => (data ? <Items {...data} /> : null);

  render() {
    return (
      <div className="wrapper">
        <SearchBar
          page="profile"
          handleName={this.handleName}
          dispatchgetProfileAction={this.dispatchgetProfileAction}
        />
        {this._renderItems(this.props.profile.profileData)}
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
