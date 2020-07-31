import React from "react";
import { renderWithRouter } from './testHelper';
import { waitForElementToBeRemoved } from "@testing-library/react";
import Question from './Question';
import * as apiFns from './apiHelpers';

const MOCKED_QUESTION_DATA = { question: "question", answers: [{ id: 1, answer: 'answer', vote: 456, options: ['option'] }] };

function setMocks() {
  apiFns.getQuestion = jest.fn().mockReturnValue(MOCKED_QUESTION_DATA);

  // jest.mock('react-router-dom', () => ({
  //   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  //   useParams: () => ({
  //     question_main: 'test'
  //   }),
  //   useRouteMatch: () => ({ url: '/questions/test' }),
  // }));
}

function resetMocks() {
  apiFns.getQuestion.mockRestore();
}

describe("renders with mocked question", () => {
  beforeAll(() => {
    setMocks();
  });

  it("renders without crashing", function () {
    renderWithRouter(<Question />);
  });

  it("matches snapshot", function () {
    const { asFragment, queryByText, debug} = renderWithRouter(<Question />);
    waitForElementToBeRemoved(() => queryByText('Loading...'));
    debug();
    expect(asFragment()).toMatchSnapshot();
  });

  afterAll(() => {
    resetMocks();
  });
});
