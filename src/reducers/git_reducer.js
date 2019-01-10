export default function(state = {}, action) {
  switch (action.type) {
    case "GET_PROFILE":
      return { ...state, profileData: action.payload };
    case "GET_REPOS":
      return { ...state, profileRepos: action.payload };
    default:
      return state;
  }
}
