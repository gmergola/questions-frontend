import React from "react";
import { render } from "@testing-library/react";
import GuessAnswerForm from "./GuessAnswerForm";

it("renders without crashing", () => {
  render(<GuessAnswerForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<GuessAnswerForm />);
  expect(asFragment()).toMatchSnapshot();
});