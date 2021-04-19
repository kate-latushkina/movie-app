import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import SearchMovie from "../SearchMovie";

describe("should render SearchMovie component", () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<SearchMovie />);
  });

  it("should contain Button wrapper", () => {
    const wrapper = component.find(".search-panel_button");
    expect(wrapper.length).toBe(1);
  });
  it("should contain Input wrapper", () => {
    const wrapper = component.find(".search-panel_input");
    expect(wrapper.length).toBe(1);
  });

  it("should render SearchMovie snapshot", () => {
    const wrapper = renderer.create(<SearchMovie />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
