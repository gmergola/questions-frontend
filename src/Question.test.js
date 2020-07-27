import React from "react";
import { renderWithRouter } from './testHelper';
import Question from "./Question";


it("matches snapshot", function() {
  const { asFragment } = renderWithRouter(<Question />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function() {
  const { asFragment } = renderWithRouter(<Question />);
  expect(asFragment()).toMatchSnapshot();
});
