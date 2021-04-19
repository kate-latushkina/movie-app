import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Tabs } from "@material-ui/core";
import Categories from "../Categories";

describe("should render Categories component", () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<Categories />);
  });

  it("should contain Tabs", () => {
    const wrapper = component.find(Tabs);
    expect(wrapper.length).toBe(1);
  });

  it("should render Categories snapshot", () => {
    const wrapper = renderer.create(<Categories />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
