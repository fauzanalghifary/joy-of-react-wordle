import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from "../GuessForm";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [userGuess, setUserGuess] = React.useState('');

  return (
      <GuessForm userGuess={userGuess} setUserGuess={setUserGuess}/>
  )
}

export default Game;
