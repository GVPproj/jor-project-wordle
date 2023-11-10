import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [guessesRemaining, setGuessesRemaining] = React.useState(
    NUM_OF_GUESSES_ALLOWED,
  )

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess])
    setGuessesRemaining(NUM_OF_GUESSES_ALLOWED - (guesses.length + 1))
  }

  return (
    <>
      <GuessResults guesses={guesses} guessesRemaining={guessesRemaining} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game
