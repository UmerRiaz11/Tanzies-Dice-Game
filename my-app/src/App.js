import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tanzies, setTanzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld === true)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTanzies(true)
      console.log("WON")
    }
  }, [dice])

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      const randomNum = {
        value: (Math.ceil(Math.random() * 6)),
        isHeld: false,
        id: nanoid()
      }
      newDice.push(randomNum)
    } return newDice
  }

  function diceHold(id) {
    setDice((oldDice) => oldDice.map((die) => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } :
        die
    }))
  }
  const diceElements = dice.map((die) => {
    return <Die value={die.value} isHeld={die.isHeld} diceHold={() => diceHold(die.id)} />
  })

  function rollDice() {
    setDice((oldDice) => oldDice.map((die) => {
      return die.isHeld ? die : {
        value: (Math.ceil(Math.random() * 6)),
        isHeld: false,
        id: nanoid()
      }
    }))
  }

  return (
    <main>
      {tanzies && <Confetti />}
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="btn btn-primary"
        onClick={rollDice}>
        {tanzies ? "NewGame" : "Roll"}
      </button>
    </main>
  )
}