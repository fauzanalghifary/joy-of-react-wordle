import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessHistory({ userGuesses, answer, setStatus }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const check = checkGuess(userGuesses[index], answer);
        return (
          <p key={index} className="guess">
            {userGuesses[index]?.split("").map((letter, index) => (
              <span key={index} className={`cell ${check[index].status}`}>
                {letter}
              </span>
            )) ?? (
              <>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
              </>
            )}
          </p>
        );
      })}
    </div>
  );
}

export default GuessHistory;
