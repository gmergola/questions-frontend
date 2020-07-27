import React from "react";
import { renderWithRouter } from './testHelper';
import Directions from "./Directions";


it("matches snapshot", function() {
  const { asFragment } = renderWithRouter(<Directions />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function() {
  const { asFragment } = renderWithRouter(<Directions />);
  expect(asFragment()).toMatchSnapshot();
});
