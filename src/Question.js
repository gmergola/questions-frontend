import React from 'react';
import { useParams} from "react-router-dom";
import GuessAnswerForm from './GuessAnswerForm';
import FamilyFeudApi from './apiHelpers';
import useApi from './hooks/useApi';
import { useHistory } from "react-router-dom";
import './Question.css';

/**Question: a component with a route of /questions/:question_main
 * renders the GuessAnswerForm
 * Shows information for that specific question using the url parameter 'question_main'
 */
function Question() {
  const { question_main } = useParams();
  const [loading, data] = useApi(FamilyFeudApi.getQuestion, question_main);
  const history = useHistory();

  function selectANewQuestion() {
    history.push('/');
  }

  return (
    loading ? <p>Loading...</p> :
    <div>
      <button className="Question-new-button" onClick={selectANewQuestion}><b>Select A New Question</b></button>
      <div className="Question-title">{data.question}</div>
      <GuessAnswerForm data={data}/>
    </div>
  );
}

export default Question;