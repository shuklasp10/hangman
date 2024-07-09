import './css/app.css'
import { useState } from 'react'
import Hangman from './Hangman'
import HangmanWord from './HangmanWord'
import wordlist from './wordlist.json'
import Keyboard from './Keyboard'

function App() {
  const [word, setWord] = useState(() => (wordlist[Math.floor(Math.random() * wordlist.length)]));
  const [guessed, setGuessed] = useState<string[]>([]);
  const [incorrect, setIncorrect] = useState<string[]>([])

  const isWinner: boolean = word.split("").every((l)=>guessed.includes(l.toLowerCase()));
  const isLost: boolean = incorrect.length > 6;

  return (
    <div className="game">
      <div className="result">
        {isWinner && "You won! Refresh to play again."}
        {isLost && `You lost! Answer is ${word}. Refresh to try again.`}
        </div>

      <Hangman incorrectLength = {incorrect.length} />
      <HangmanWord word={word} guessed={guessed} />
      <Keyboard
        word={word}
        guessed={guessed}
        incorrect={incorrect}
        setGuessed={setGuessed}
        setIncorrect={setIncorrect}
        gameEnded = {isWinner||isLost} />
    </div>
  )
}

export default App
