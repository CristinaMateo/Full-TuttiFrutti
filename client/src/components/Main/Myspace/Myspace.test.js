import React from "react";
import { shallow } from "enzyme";
import Myspace from "./Myspace";

describe("Myspace", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Myspace />);
    expect(wrapper).toMatchSnapshot();
  });
});
