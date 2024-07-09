import './css/app.css'
import { useState, useEffect } from 'react'
import Hangman from './Hangman'
import HangmanWord from './HangmanWord'
import wordlist from './wordlist.json'
import Keyboard from './Keyboard'

const getWord = (): string =>{
  return wordlist[Math.floor(Math.random() * wordlist.length)]
}

function App() {
  const [word, setWord] = useState<string>('');
  const [guessed, setGuessed] = useState<string[]>([]);
  const [incorrect, setIncorrect] = useState<string[]>([])

  const isWinner: boolean = word.split("").every((l)=>guessed.includes(l.toLowerCase()));
  const isLost: boolean = incorrect.length > 6;

  useEffect(()=>{
    setWord(getWord())
  },[])

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
