import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())

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
    console.log(id)
  }
  const diceElements = dice.map((die) => {
    return <Die value={die.value} isHeld={die.isHeld} diceHold={() => diceHold(die.id)} />
  })

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="btn btn-primary" onClick={rollDice}>Roll</button>
    </main>
  )
}