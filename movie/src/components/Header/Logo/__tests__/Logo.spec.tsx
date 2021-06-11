import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Logo from "../Logo";

describe("should render Logo component", () => {
  it("should contain bold text", () => {
    const component = shallow(<Logo />);
    const wrapper = component.find("b");
    expect(wrapper.length).toBe(1);
  });
  it("should render Logo snapshot", () => {
    const wrapper = renderer.create(<Logo />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
