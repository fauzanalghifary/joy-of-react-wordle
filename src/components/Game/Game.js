import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessHistory from "../GuessHistory";
import Banner from "../Banner";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  return (
    <>
      <GuessHistory userGuesses={userGuesses} answer={answer} />
      <GuessForm
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
        status={status}
        setStatus={setStatus}
        answer={answer}
      />
      {status === "won" && <WonBanner numOfGuess={userGuesses.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
