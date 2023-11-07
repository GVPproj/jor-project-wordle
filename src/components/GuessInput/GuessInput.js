import React, { useState } from 'react'

function GuessInput() {
  const [guess, setGuess] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ guess })
    setGuess('')
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word" // for our validation error message
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  )
}

export default GuessInput

{
  /* <form class="guess-input-wrapper">
  <label for="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" />
</form> */
}
