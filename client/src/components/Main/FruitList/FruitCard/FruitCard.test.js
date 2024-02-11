import React from "react";
import { shallow } from "enzyme";
import FruitCard from "./FruitCard";

describe("FruitCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FruitCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
