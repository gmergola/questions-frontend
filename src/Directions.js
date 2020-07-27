import React from 'react';
import { useHistory } from "react-router-dom";
import './Directions.css';

/**Directions: a component with a route of /directions that explains to the user how to play the game */
function Directions() {
  const history = useHistory();
  return (
    <div className="Directions-container">
      <button
        className="Directions-home-button"
        onClick={() => history.push('/')}>
        <b>Back Home</b>
      </button>
      <div>
        <h3>A Family Feud inspired game with a twist!</h3>
        <div className="Directions-bullet-point">
          <span className="dot"></span><span>Select a question</span>
        </div>

        <div className="Directions-bullet-point">
          <span className="dot"></span><span>
            Once you've selected a question decide who is on team1 and who is on team 2.
          </span>
        </div>

        <div className="Directions-bullet-point">
          <span className="dot"></span><span>
            Once you've decided on the teams, have team1 and team 2 each submit an answer.
            After that, the team with the highest voted answer starts!
          </span>
        </div>

        <div className="Directions-bullet-point">
          <span className="dot"></span><span>
            Once the starting team has been selected, that team has three chances to guess
            as many correct answers as they can. If that team hits three incorrect answers, it is
            the other team's turn.
          </span>
        </div>

        <div className="Directions-bullet-point">
          <span className="dot"></span><span>
            Every question has 6 answers, when all 6 correct answers have been guessed, the team with
            the highest remaining points wins that round!
          </span>
        </div>

        <h3>Enjoy!</h3>
      </div>
    </div>
  )
}

export default Directions;