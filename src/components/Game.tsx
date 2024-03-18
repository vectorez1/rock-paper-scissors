import { useState } from 'react'
import { IconRock, IconPaper, IconScissors } from '../assets/IconsChoices'
import { useStore } from '../lib/store'
import confetti from 'canvas-confetti'

type Result = 'win' | 'draw' | 'lose'

export default function Game() {
  const { incrementScore } = useStore()
  const [userChoice, setUserChoice] = useState<'rock' | 'paper' | 'scissors' | null>(null)
  const [computerChoice, setComputerChoice] = useState<string | null>(null)
  const [result, setResult] = useState<Result | null>(null)

  const choices = ['rock', 'paper', 'scissors']

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }

  const determineWinner = (userChoice: 'rock' | 'paper' | 'scissors', computerChoice: string) => {
    if (userChoice === computerChoice) {
      return 'draw'
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'win'
    } else {
      return 'lose'
    }
  }

  const handleUserChoice = (choice: 'rock' | 'paper' | 'scissors') => {
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
        <IconPaper onClick={() => handleUserChoice('paper')} />
        <IconScissors onClick={() => handleUserChoice('scissors')} />
        <IconRock onClick={() => handleUserChoice('rock')} />
      </section>
    </section>
  )
}
