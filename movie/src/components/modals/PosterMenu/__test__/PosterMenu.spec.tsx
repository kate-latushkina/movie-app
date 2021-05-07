import React from "react";
import toJSON from "enzyme-to-json";
import { mount, ReactWrapper } from "enzyme";
import PosterMenu from "../PosterMenu";
import { CARD_PROP_MOC } from "../../../../variables/mock";

describe("<PosterMenu />", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<PosterMenu id={CARD_PROP_MOC.id} />);
  });
  it("should mount", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
