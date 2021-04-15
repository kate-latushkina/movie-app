import React from "react";
import { Button } from "@material-ui/core";
import { shallow } from "enzyme";
import AddMovieButton from "../AddMovieButton";
import "../../../../setupTests";

describe("should render AddMovieButton component", () => {
  it("should contain Button wrapper", () => {
    const component = shallow(<AddMovieButton />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(1);
  });
});
