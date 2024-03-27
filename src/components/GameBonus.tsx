import { useState } from 'react'
import {
  IconRock,
  IconPaper,
  IconScissors,
  IconLizard,
  IconSpock,
} from '../assets/IconsChoices'
import { useStore } from '../lib/store'
import confetti from 'canvas-confetti'

type Result = 'win' | 'draw' | 'lose'
type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock'

export default function Game() {
  const { incrementScore } = useStore()
  const [userChoice, setUserChoice] = useState<Choice | null>(null)
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null)
  const [result, setResult] = useState<Result | null>(null)

  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }

  const determineWinner = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) {
      return 'draw'
    } else if (
      (userChoice === 'rock' &&
        (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (userChoice === 'paper' &&
        (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (userChoice === 'scissors' &&
        (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (userChoice === 'lizard' &&
        (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (userChoice === 'spock' &&
        (computerChoice === 'scissors' || computerChoice === 'rock'))
    ) {
      return 'win'
    } else {
      return 'lose'
    }
  }

  const handleUserChoice = (
    choice: Choice,
  ) => {
    setUserChoice(choice)
    const computerChoice: Choice | string = generateComputerChoice()
    if (computerChoice === null) return
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
        <svg xmlns="http://www.w3.org/2000/svg" width="329" height="313">
          <path
            fill="none"
            stroke="#000"
            stroke-width="15"
            d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
            opacity=".2"
          />
        </svg>
      </div>
      <section className="z-0 flex flex-wrap items-center justify-center gap-2 w-[500px]">
        <IconScissors
          onClick={() => handleUserChoice('scissors')}
          className="scale-75"
        />
        <div className="flex justify-between w-full">
          <IconSpock
            onClick={() => handleUserChoice('spock')}
            className="scale-75"
          />
          <IconPaper
            onClick={() => handleUserChoice('paper')}
            className="scale-75"
          />
        </div>
        <div className="flex gap-10">
          <IconLizard
            onClick={() => handleUserChoice('lizard')}
            className="scale-75"
          />
          <IconRock
            onClick={() => handleUserChoice('rock')}
            className="scale-75"
          />
        </div>
      </section>
    </section>
  )
}
