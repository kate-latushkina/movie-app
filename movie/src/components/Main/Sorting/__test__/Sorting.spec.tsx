import React from "react";
import renderer from "react-test-renderer";
import SortingSection from "../Sorting";

describe("Sorting component", () => {
  it("should render SortingSection snapshot", () => {
    const wrapper = renderer.create(<SortingSection />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
