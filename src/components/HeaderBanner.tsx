export default function HeaderBanner({ score }: { score: number }) {
  return (
    <header className="flex items-center justify-between py-5 border-4 px-7 item rounded-2xl border-opacity-80 border-neutral-headeroutline">
      <div className="flex flex-col text-4xl font-bold leading-7">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className="flex flex-col items-center justify-center px-10 py-3 bg-white rounded">
        <h1 className="text-lg tracking-[2px] text-neutral-scoretext">SCORE</h1>
        <span className="text-5xl text-gray-600">{score}</span>
      </div>
    </header>
  )
}
