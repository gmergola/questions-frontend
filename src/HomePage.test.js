import React from "react";
import { renderWithRouter } from './testHelper';
import Home from "./Homepage";


it("matches snapshot", function() {
  const { asFragment } = renderWithRouter(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function() {
  const { asFragment } = renderWithRouter(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
