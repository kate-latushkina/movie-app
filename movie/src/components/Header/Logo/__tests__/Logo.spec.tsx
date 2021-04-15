import React from "react";
import { shallow } from "enzyme";
import Logo from "../Logo";
import "../../../../setupTests";

describe("should render Logo component", () => {
  it("should contain bold text", () => {
    const component = shallow(<Logo />);
    const wrapper = component.find("b");
    expect(wrapper.length).toBe(1);
  });
});
