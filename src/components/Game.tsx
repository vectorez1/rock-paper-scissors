import { useState } from 'react'
import { IconRock, IconPaper, IconScissors } from '../assets/IconsChoices'
import { useStore } from '../lib/store'
import confetti from 'canvas-confetti'

type Result = 'win' | 'draw' | 'lose'

enum HandStates{
  None,
  Rock,
  Paper,
  Scissors
}

  export default function Game() {
  const { incrementScore } = useStore()
  const [userChoice, setUserChoice] = useState<HandStates>(HandStates.None)
  const [computerChoice, setComputerChoice] = useState<HandStates>(HandStates.None)
  const [result, setResult] = useState<Result | null>(null)

  const generateComputerChoice = () => {
    const enumValues = Object.values(HandStates).filter(value => typeof value === "number") as HandStates[];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex];
  }

  const determineWinner = (userChoice: HandStates, computerChoice: HandStates) => {
    if (userChoice === computerChoice) {
      return 'draw'
    } else if (
      (userChoice === HandStates.Rock && computerChoice === HandStates.Scissors) ||
      (userChoice === HandStates.Paper && computerChoice === HandStates.Rock) ||
      (userChoice === HandStates.Scissors && computerChoice === HandStates.Paper)
    ) {
      return 'win'
    } else {
      return 'lose'
    }
  }

  const handleUserChoice = (choice: HandStates) => {
    setUserChoice(choice)
    const computerChoice = generateComputerChoice()
    setComputerChoice(computerChoice)
    const result = determineWinner(choice, computerChoice)
    setResult(result)
    if (result === 'win') {
      incrementScore()
      confetti()
    }
  }

  console.log({ userChoice, computerChoice, result })

  return (
    <section className="relative flex items-center justify-center h-3/4">
      <div className="absolute z-0">
        <svg width="313" height="278" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#000"
            stroke-width="15"
            fill="none"
            opacity=".2"
            d="M156.5 262 300 8H13z"
          />
        </svg>
      </div>
      <section className="z-0 flex flex-wrap items-center justify-center gap-12 w-96">
        <IconPaper onClick={() => handleUserChoice(HandStates.Paper)} />
        <IconScissors onClick={() => handleUserChoice(HandStates.Scissors)} />
        <IconRock onClick={() => handleUserChoice(HandStates.Rock)} />
      </section>
    </section>
  )
}
