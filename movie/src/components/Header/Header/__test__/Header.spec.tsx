import React from "react";
import renderer from "react-test-renderer";
import HeaderColored from "../Header";
import "../../../../setupTests";
import colors from "../../../../variables/colors";

describe("should render Header component", () => {
  // it("should contain HeaderColored", () => {
  //   const wrapper = renderer.create(<HeaderColored />).toJSON();
  //   expect(wrapper).toHaveStyleRule("background-color", colors.darkViolet);
  // });

  it("should render Header snapshot", () => {
    const wrapper = renderer.create(<HeaderColored />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
