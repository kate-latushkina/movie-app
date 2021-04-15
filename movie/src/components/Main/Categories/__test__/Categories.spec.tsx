import React from "react";
import { shallow } from "enzyme";
import { Tabs } from "@material-ui/core";
import Categories from "../Categories";
import "../../../../setupTests";

describe("should render Categories component", () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<Categories />);
  });

  it("should contain Tabs", () => {
    const wrapper = component.find(Tabs);
    expect(wrapper.length).toBe(1);
  });
});
