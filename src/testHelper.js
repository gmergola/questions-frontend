import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

/**
 * Helper function to modify the render function in React Testing Library
 * by wrapping rendered components inside of a router.
 *
 * Taken from https://testing-library.com/docs/example-react-router
 *
 * @param {Component} component - React component we want to render
 * @param {Object} param1 - object with route and history keys
 */

export function renderWithRouter(component,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}