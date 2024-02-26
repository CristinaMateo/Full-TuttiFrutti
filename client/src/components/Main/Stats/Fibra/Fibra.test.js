import React from "react";
import { shallow } from "enzyme";
import Fibra from "./Fibra";

describe("Fibra", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Fibra />);
    expect(wrapper).toMatchSnapshot();
  });
});
