import React from "react";

const Items = props => {
  console.log(props);
  const renderItems = () =>
    props.profileRepos && props.profileRepos.message !== "Something went wrong"
      ? props.profileRepos.map((item, i) => {
          return (
            <div key={i} className="repos">
              <label htmlFor="" className="repos_info-label">
                Name:{" "}
              </label>
              <label htmlFor="">{item.name}</label>

              <div>
                <label htmlFor="" className="repos_info-label">
                  Status:{" "}
                </label>
                <label htmlFor="">
                  {item.description === null
                    ? "No Description"
                    : item.description}
                </label>
              </div>

              <div>
                <label htmlFor="" className="repos_info-label">
                  Link:{" "}
                </label>
                <label htmlFor="">
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redirect to repo
                  </a>
                </label>
              </div>
            </div>
          );
        })
      : null;

  if (props.profileData.message === "Invalid name") {
    return <div>{""}</div>;
  } else {
    return (
      <div>
        <div className="profile_data">
          <div className="profile_data-information">Profile Information</div>
          <h5>Avatar</h5>
          <img
            src={props.profileData.avatar_url}
            alt="avatar"
            heigth="50px"
            width="50px"
          />
          <h5>Username</h5>
          {props.profileData.login}
          <h5>Email</h5>
          {props.profileData.email !== null
            ? props.profileData.email
            : "Email is private"}
          <h5>Link</h5>
          <a
            href={props.profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Redirect to github
          </a>
        </div>
        <div className="repo">Repositories</div>
        <div className="repos_info">
          <div>{renderItems()}</div>
        </div>
      </div>
    );
  }
};

export default Items;
