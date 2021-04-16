import React from "react";
import { Button } from "@material-ui/core";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import AddMovieButton from "../AddMovieButton";
import "../../../../setupTests";

describe("should render AddMovieButton component", () => {
  it("should contain Button wrapper", () => {
    const component = shallow(<AddMovieButton />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(1);
  });

  it("should render AddMovieButton snapshot", () => {
    const wrapper = renderer.create(<AddMovieButton />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
