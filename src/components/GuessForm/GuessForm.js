import React from "react";

function GuessForm({ userGuess, setUserGuess }) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.info({ userGuess });
    setUserGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={userGuess}
        onChange={(e) => {
          setUserGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessForm;
