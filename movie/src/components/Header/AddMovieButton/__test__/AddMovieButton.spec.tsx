import React from "react";
// import { Button } from "@material-ui/core";
import { shallow } from "enzyme";
import AddMovieButton from "../AddMovieButton";
import "../../../../setupTests";

it("should render component", () => {
  const component = shallow(<AddMovieButton />);
  const wrapper = component.find(".but");
  expect(wrapper.length).toBe(1);
});
