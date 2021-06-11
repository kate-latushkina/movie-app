import React from "react";
import renderer from "react-test-renderer";
import Main from "../Main";

describe("should render Main component", () => {
  it("should render Main snapshot", () => {
    const wrapper = renderer.create(<Main />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
