import React, { useState } from 'react'

function GuessInput({ handleSubmitGuess, isDisabled }) {
  const [tentativeGuess, setTentativeGuess] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          maxLength={5}
          minLength={5}
          disabled={isDisabled}
          pattern="[a-zA-Z]{5}"
          title="5 letter word" // for our validation error message
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  )
}

export default GuessInput
