import React from "react";
import { renderWithRouter } from './testHelper';
import Question from './Question';
import * as apiFns from './apiHelpers';

const MOCKED_QUESTION_DATA = { question: "question", answers: [{ id: 1, answer: 'answer', vote: 456, options: ['option'] }] };

function setMocks() {
  apiFns.default.getQuestion = jest.fn().mockReturnValue(MOCKED_QUESTION_DATA);
}

function resetMocks() {
  apiFns.default.getQuestion.mockRestore();
}

describe("renders with mocked question", () => {
  beforeAll(() => {
    setMocks();
  });

  it("renders without crashing", function () {
    renderWithRouter(<Question />)
  });

  it("matches snapshot", function () {
    const { asFragment } = renderWithRouter(<Question />);
    expect(asFragment()).toMatchSnapshot();
  });

  afterAll(() => {
    resetMocks();
  });
});
