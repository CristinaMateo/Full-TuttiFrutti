import React from "react";
import { shallow } from "enzyme";
import Combos from "./Combos";

describe("Combos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Combos />);
    expect(wrapper).toMatchSnapshot();
  });
});
