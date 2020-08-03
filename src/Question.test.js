import React from "react";
import { renderWithRouter } from './testHelper';
import { waitForElementToBeRemoved } from "@testing-library/react";
import Question from './Question';
import * as apiFns from './apiHelpers';

const MOCKED_QUESTION_DATA = { question: "question", answers: [{ id: 1, answer: 'answer', vote: 456, options: ['option'] }] };
const MOCKED_QUESTIONS_DATA = { questions: [{ "question_main": "one", "question": "question" }]};

function setMocks() {
  apiFns.getQuestions = jest.fn().mockReturnValue(MOCKED_QUESTIONS_DATA);
  apiFns.getQuestion = jest.fn().mockReturnValue(MOCKED_QUESTION_DATA);
}

function resetMocks() {
  apiFns.getQuestion.mockRestore();
  apiFns.getQuestions.mockRestore();
}

describe("renders with mocked question", () => {
  beforeAll(() => {
    setMocks();
  });

  it("renders without crashing", function () {
    renderWithRouter(<Question />);
  });

  it("matches snapshot", async function () {
    const { asFragment, queryByText, debug} = renderWithRouter(<Question />);
    //WIP TODO: fix this snap shot so it doesn't show Loading...
    // await waitForElementToBeRemoved(() => queryByText('Loading...'));
    debug();
    expect(asFragment()).toMatchSnapshot();
  });

  afterAll(() => {
    resetMocks();
  });
});
