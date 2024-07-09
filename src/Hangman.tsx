import './css/hangman.css'

const Head = (
    <div className="head"></div>
)
const Body = (
  <div className="body"></div>
)
const RightArm = (
  <div className="right-arm"></div>
)
const LeftArm = (
  <div className="left-arm"></div>
)
const RightLeg = (
  <div className="right-leg"></div>
)
const LeftLeg = (
  <div className="left-leg"></div>
)

const Hanger = (
  <>
    <div className="rod2"></div>
    <div className="rod3"></div>
    <div className='rod1'></div>
    <div className='base'></div>
  </>
)

type HangmanProp = {
  incorrectLength: number,
}

const Hangman = ({incorrectLength}: HangmanProp ) => {
  return (
    <div className='hangman'>
      {incorrectLength>=1 && Head}
      {incorrectLength>=2 && Body}
      {incorrectLength>=3 && RightArm}
      {incorrectLength>=4 && LeftArm}
      {incorrectLength>=5 && RightLeg}
      {incorrectLength>=6 && LeftLeg}
      {Hanger}
    </div>
  )
}

export default Hangman