import React from "react";
import toJSON from "enzyme-to-json";
import { mount, ReactWrapper } from "enzyme";
import ViewMovieModal from "../ViewMovieModal";

const onClose = () => null;

describe("<ViewMovieModal />", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<ViewMovieModal onClose={onClose} />);
  });
  it("should mount", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
