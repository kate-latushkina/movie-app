import React from "react";
import renderer from "react-test-renderer";
import FooterSection from "../Footer";
import colors from "../../../variables/colors";
import "jest-styled-components";

describe("should render Footer component", () => {
  it("should contain FooterSection", () => {
    const wrapper = renderer.create(<FooterSection />).toJSON();
    expect(wrapper).toHaveStyleRule("background-color", colors.darkGrey);
  });

  it("should render FooterSection snapshot", () => {
    const wrapper = renderer.create(<FooterSection />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
