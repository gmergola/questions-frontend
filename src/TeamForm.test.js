import React from "react";
import { render } from "@testing-library/react";
import TeamForm from "./TeamForm";

it("renders without crashing", () => {
  render(<TeamForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TeamForm />);
  expect(asFragment()).toMatchSnapshot();
});