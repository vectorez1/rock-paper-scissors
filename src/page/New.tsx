import { useState } from 'react'
import { useStore } from '../lib/store'
import HeaderBanner from '../components/HeaderBanner'
import RulesModal from '../components/RulesModal'
import GameBonus from '../components/GameBonus'
import '../App.css'

const title = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK']

export default function New() {
  const { score } = useStore()
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <main className="container h-screen pt-14">
      <HeaderBanner score={score} title={title} type='Bonus' />

      <GameBonus />

      <section className="">
        <button
          className="absolute px-10 py-2 text-xl tracking-[2px] border rounded-lg bottom-10 right-10"
          onClick={toggleModal}
        >
          RULES
        </button>
        {isOpen && <RulesModal type="New" toggleModal={toggleModal} />}
      </section>
    </main>
  )
}
