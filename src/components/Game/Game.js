import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'

import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import WonBanner from '../WonBanner/WonBanner'
import LostBanner from '../LostBanner/LostBanner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)

console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isDisabled={gameStatus !== 'running'}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}

      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
