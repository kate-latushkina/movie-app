import React from "react";
import { mount, ReactWrapper } from "enzyme";
import renderer from "react-test-renderer";
import { Tabs } from "@material-ui/core";
import Categories from "../Categories";

describe("should render Categories component", () => {
  let component: ReactWrapper;
  let tabs: ReactWrapper;

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
});
