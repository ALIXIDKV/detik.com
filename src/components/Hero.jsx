import Thumb from './Thumb'
import { SITE } from '../data/site'
export default function Hero({ a }) {
  return (
    <a href={`#/artikel/${a.id}`} className="group block relative overflow-hidden rounded-lg">
      <Thumb article={a} eager className="w-full h-[250px] sm:h-[26rem] group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 p-5 sm:p-8 text-white">
        <span className="bg-brand text-xs font-bold px-2 py-1 rounded">{a.cat.toUpperCase()}</span>
        <h1 className="font-serif font-bold text-2xl sm:text-4xl leading-tight mt-3">{a.title}</h1>
        <p className="hidden sm:block mt-3 text-neutral-200 max-w-2xl">{a.summary}</p>
        <p className="text-xs text-neutral-300 mt-3">{SITE.date}</p>
        <span className="inline-block mt-4 bg-white text-brand font-bold text-sm px-4 py-2 rounded group-hover:bg-brand group-hover:text-white transition-colors">Baca Selengkapnya</span>
      </div>
    </a>
  )
}
