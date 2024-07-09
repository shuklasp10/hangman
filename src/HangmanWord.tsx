import './css/hangmanword.css'


type HangmanWordProp = {
    word: string
    guessed: string[]
}

const HangmanWord = ({ word, guessed }: HangmanWordProp) => {
    return (
        <>
            <div className='hangmanword'>
                {word.split("").map((letter) => (
                    <span className='letter'>
                        <span style={{ visibility: guessed.includes(letter.toLowerCase()) ? 'visible' : 'hidden' }}>
                            {letter}
                        </span>
                    </span>
                ))}
            </div>
            
        </>
    )
}

export default HangmanWord