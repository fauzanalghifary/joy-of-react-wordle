import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessHistory({ userGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p key={index} className="guess">
          <span className="cell">{userGuesses[index]?.[0]}</span>
          <span className="cell">{userGuesses[index]?.[1]}</span>
          <span className="cell">{userGuesses[index]?.[2]}</span>
          <span className="cell">{userGuesses[index]?.[3]}</span>
          <span className="cell">{userGuesses[index]?.[4]}</span>
        </p>
      ))}
    </div>
  );
}

export default GuessHistory;
