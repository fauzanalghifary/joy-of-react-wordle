import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessForm({ userGuesses, setUserGuesses, status, setStatus, answer }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const nextGuesses = [...userGuesses, currentGuess];
    setUserGuesses(nextGuesses);
    setCurrentGuess("");

    if (currentGuess === answer) {
      setStatus("won");
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={status !== "running"}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={currentGuess}
        onChange={(e) => {
          setCurrentGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessForm;
