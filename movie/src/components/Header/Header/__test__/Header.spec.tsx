import React from "react";
import renderer from "react-test-renderer";
import Header, { HeaderColored } from "../Header";
import colors from "../../../../variables/colors";
import "jest-styled-components";

describe("should render Header component", () => {
  it("should contain HeaderColored", () => {
    const wrapper = renderer.create(<HeaderColored />).toJSON();
    expect(wrapper).toHaveStyleRule("background-color", colors.darkViolet);
  });

  it("should render Header snapshot", () => {
    const wrapper = renderer.create(<Header />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
