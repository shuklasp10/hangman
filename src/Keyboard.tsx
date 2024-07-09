import './css/keyboard.css'

const keys: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


type KeyboardProp = {
    word: string,
    guessed: string[]
    incorrect: string[]
    setGuessed: (guessed: string[]) => void
    setIncorrect: (incorrect: string[]) => void
    gameEnded: boolean
}

const Keyboard = ({ word, guessed, incorrect, setGuessed, setIncorrect, gameEnded }: KeyboardProp) => {

    function handleButton(key: string): void {
        if (word.toLowerCase().includes(key.toLowerCase())) {
            setGuessed([...guessed, key.toLowerCase()])
        }
        else {
            setIncorrect([...incorrect, key.toLowerCase()]);
        }
    }

    return (
        <div className='keyboard'>
            {keys.map((key) => {
                return (
                    <button
                        className="key"
                        onClick={() => handleButton(key)}
                        disabled={incorrect.includes(key.toLowerCase()) || gameEnded}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard