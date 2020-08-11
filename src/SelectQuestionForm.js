import React, { useState } from 'react';
import FamilyFeudApi from './apiHelpers';
import useApi from './hooks/useApi';
import { useHistory } from "react-router-dom";
import './SelectQuestionForm.css';

/**SelectQuestionForm: a component to allow the user to select a question to answer */
function SelectQuestionForm() {
  const [loading, data] = useApi(FamilyFeudApi.getQuestions);
  const [questionIdx, setQuestionIdx] = useState(0);
  const history = useHistory();

  const handleChange = evt => {
    setQuestionIdx(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push(`/questions/${data.questions[questionIdx].question_main}`);
  }

  return (
    loading ? "Loading...":
      <div className="Form-container">
        <form onSubmit={handleSubmit}>
          <label className="choose-label" htmlFor="questions">Choose a Question: </label>
          <select name="questions" className="Question-select" onChange={handleChange}>
            {data.questions.map((q, idx) => (
              <option key={q.question_main} value={idx}>
                {q.question_main}
              </option>
            ))}
          </select>
          <div>
            <button className="choose-button"><b>Choose Question</b></button>
          </div>
        </form>
      </div>
  );
}

export default SelectQuestionForm;