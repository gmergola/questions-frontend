import React from 'react';
import { useHistory } from "react-router-dom";
import SelectQuestionForm from './SelectQuestionForm';
import './HomePage.css';

/**TODO:
 * Mock api calls in frontend testing
 */

/**HomePage: **landing page** Component rendering the SelectQuestionForm with a route of / */
function HomePage() {
  const history = useHistory();

  return (
    <div className="HomePage-container">
      <button
        className="HomePage-directions-button"
        onClick={() => history.push('/directions')}>
        <b>How to play?</b>
      </button>
      <div className="HomePage-title-container">
        <div className="HomePage-play">Let's play</div>
        <div className="HomePage-title">Questions!</div>
      </div>
      <SelectQuestionForm />
    </div>
  );
}

export default HomePage;