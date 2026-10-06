import { BREAKING } from '../data/site'
export default function BreakingNews() {
  const items = [...BREAKING, ...BREAKING]
  return (
    <div className="bg-brand text-white flex items-center overflow-hidden text-sm">
      <span className="bg-brand-dark font-bold px-3 py-2 shrink-0 z-10">BREAKING</span>
      <div className="overflow-hidden flex-1"><div className="ticker flex whitespace-nowrap w-max">
        {items.map((t, i) => <span key={i} className="px-8 py-2">{t}</span>)}
      </div></div>
    </div>
  )
}
