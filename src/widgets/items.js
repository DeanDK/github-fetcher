import React from "react";

const Items = props => {
  console.log(props);
  if (props.login === "undefined" || props.message === "Invalid name") {
    return <div>{""}</div>;
  } else {
    return (
      <div className="profile_data">
        <div>
          <h5>Avatar</h5>
          <img src={props.avatar_url} alt="avatar" heigth="50px" width="50px" />
          <h5>Username</h5>
          {props.login}
          <h5>Email</h5>
          {props.email !== null ? props.email : "Email is private"}
          <h5>Link</h5>
          <a href={props.html_url} target="_blank" rel="noopener noreferrer">
            gqwe
          </a>
        </div>
      </div>
    );
  }
};

export default Items;
