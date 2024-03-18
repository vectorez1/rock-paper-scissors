import { useState } from 'react'
import './App.css'
import HeaderBanner from './components/HeaderBanner'
import RulesModal from './components/RulesModal'
import Game from './components/Game'
import { useStore } from './lib/store'

export default function App() {
  const { score } = useStore()
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <main className="container h-screen pt-14">
      <HeaderBanner score={score} />

      <Game />

      <section className="">
        <button
          className="absolute px-10 py-2 text-xl tracking-[2px] border rounded-lg bottom-10 right-10"
          onClick={toggleModal}
        >
          RULES
        </button>
        {isOpen && <RulesModal toggleModal={toggleModal} />}
      </section>
    </main>
  )
}
