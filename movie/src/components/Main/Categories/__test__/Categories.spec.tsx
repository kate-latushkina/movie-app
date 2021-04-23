import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { Tabs } from "@material-ui/core";
import Categories from "../Categories";

describe("should render Categories component", () => {
  let component: any;
  let tabs: any;

  beforeEach(() => {
    component = mount(<Categories />);
    tabs = component.find(Tabs);
  });

  it("should contain Tabs", () => {
    expect(tabs.length).toBe(1);
  });

  it("should render Categories snapshot", () => {
    const wrapper = renderer.create(<Categories />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  describe("should render Tabs state", () => {
    it("Tabs loads with initial state of 0", () => {
      expect(tabs.props().value).toEqual(0);
    });

    it("should handler Tabs set new value", () => {
      tabs.simulate("change");
      tabs.props().value = 1;
      expect(tabs.props().value).toBe(1);
    });
  });
});
