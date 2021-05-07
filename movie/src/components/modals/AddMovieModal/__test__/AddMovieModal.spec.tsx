import React from "react";
import toJSON from "enzyme-to-json";
import { mount, ReactWrapper } from "enzyme";
import AddMovieModal from "../AddMovieModal";

const onClose = () => null;

describe("<AddMovieModal />", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<AddMovieModal onClose={onClose} />);
  });
  it("should mount", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
