import { Link } from 'react-router-dom'
import Rules from '../assets/Rules'

export default function RulesModal({
  toggleModal,
  type = 'Normal',
}: {
  toggleModal: () => void
  type: 'Normal' | 'New'
}) {
  return (
    <aside className="fixed inset-0 z-50 flex items-center justify-center transition bg-white md:bg-black/50">
      <div className="flex flex-col items-center justify-center gap-10 p-8 bg-white rounded-lg md:max-w-lg w-96">
        <section className="flex justify-between w-full">
          <h2 className="text-3xl font-bold text-neutral-darktext">RULES</h2>

          <button onClick={toggleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                fill="#3B4262"
                fill-rule="evenodd"
                d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                opacity=".25"
              />
            </svg>
          </button>
        </section>
        {type === 'Normal' ? <Rules /> : <Rules type="New" />}
        <div className="text-neutral-darktext">
          {type !== 'Normal' ? (
            <Link to="/" className="px-4 py-2 rounded shadow-sm bg-slate-50">
              Normal Mode
            </Link>
          ) : (
            <Link to="/new" className="px-4 py-2 rounded shadow-sm bg-slate-50">
              Bonus Mode
            </Link>
          )}
        </div>
      </div>
    </aside>
  )
}
