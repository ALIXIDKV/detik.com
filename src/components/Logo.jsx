export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center leading-none select-none" aria-label="Detikcom">
      <span className="bg-brand w-1.5 h-7 mr-2 rounded-sm" />
      <span className={`text-[1.65rem] font-extrabold tracking-tighter ${light ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>detik<span className="text-brand">com</span></span>
    </span>
  )
}
