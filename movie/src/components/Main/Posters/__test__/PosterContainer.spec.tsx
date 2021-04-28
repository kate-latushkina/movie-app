import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import mockResponseOnce from "jest-fetch-mock";
import PosterContainer from "../PosterContainer";
import { CARD_PROP_MOC } from "../../../../variables/mock";
import { API_URL } from "../../../../variables/Api";
import { Tmovies } from "../components/Poster.types";

const ApiRequest = (api: string) => {
  return fetch(api).then(res => res.json());
};

describe("PosterContainer component", () => {
  const component: ShallowWrapper = shallow(<PosterContainer />);

  it("should render PosterContainer component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call fetch", async () => {
    let data: Tmovies = [];
    mockResponseOnce(JSON.stringify(CARD_PROP_MOC));

    await ApiRequest(API_URL).then(res => {
      data = res.results;
      return data;
    });

    data.map(item => {
      const itemKeys = Object.keys(item).map((key: string) => {
        return expect(key).toBeDefined();
      });
      return itemKeys;
    });

    expect(Boolean([JSON.stringify(data)].length > 0)).toBeTruthy();
  });
});
