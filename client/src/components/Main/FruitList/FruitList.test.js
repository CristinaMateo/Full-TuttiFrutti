import React from "react";
import { shallow } from "enzyme";
import FruitList from "./FruitList";

describe("FruitList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FruitList />);
    expect(wrapper).toMatchSnapshot();
  });
});
