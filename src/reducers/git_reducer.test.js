import wineReducer from "./git_reducer.js";

test("should return empty object", () => {
  const state = wineReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});
