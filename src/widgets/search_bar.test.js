import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "./../../test/testUtils";
import { checkProps } from "./../../test/testUtils";
import SearchBar from "./search_bar.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  dispatchgetProfileAction() {
    console.log("test");
  }
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SearchBar {...setupProps} />);
};

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-searchbar");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = {
    dispatchgetProfileAction() {
      console.log("test");
    }
  };
  checkProps(SearchBar, expectedProps);
});
