import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessHistory from "../GuessHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);

  return (
    <>
      <GuessHistory userGuesses={userGuesses} />
      <GuessForm userGuesses={userGuesses} setUserGuesses={setUserGuesses} />
    </>
  );
}

export default Game;
