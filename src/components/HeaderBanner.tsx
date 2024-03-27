export default function HeaderBanner({
  score,
  title,
  type,
}: {
  score: number
  title: string[]
  type: 'Normal' | 'Bonus'
}) {
  return (
    <header className="flex items-center justify-between py-5 border-4 px-7 rounded-2xl border-opacity-80 border-neutral-headeroutline">
      <div className="flex flex-col text-4xl font-bold leading-7">
        {title.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
      <section
        className={`flex flex-col items-center justify-center min-h-full px-10 bg-white rounded ${
          type === 'Normal' ? 'py-5' : 'py-8'
        }`.trim()}
      >
        <h1 className="text-lg tracking-[2px] text-neutral-scoretext">SCORE</h1>
        <span className="text-5xl text-gray-600">{score}</span>
      </section>
    </header>
  )
}
