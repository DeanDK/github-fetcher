import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import ProfileContainer from "./containers/profile_container.js";
import Routes from "./routes.js";
import NotFoundPage from "./components/404";

import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("invalid path should redirect to 404", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/random"]}>
      <Routes />
    </MemoryRouter>
  );
  expect(wrapper.find(ProfileContainer)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});
