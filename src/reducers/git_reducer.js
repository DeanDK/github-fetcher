export default function(state = {}, action) {
  switch (action.type) {
    case "GET_PROFILE":
      return { ...state, profileData: action.payload };
    default:
      return state;
  }
}
