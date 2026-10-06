export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2 leading-none">
      <span className="bg-brand text-white font-extrabold text-xl px-2 py-1 rounded-sm">DS</span>
      <span className={`text-2xl font-extrabold tracking-tight ${light ? 'text-white' : ''}`}>Detik<span className="text-brand">Santai</span></span>
    </span>
  )
}
