import Thumb from './Thumb'
export default function ArticleCard({ a }) {
  return (
    <a href={`#/artikel/${a.id}`} className="group block bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-neutral-100 dark:border-neutral-800">
      <div className="overflow-hidden"><Thumb article={a} className="w-full h-44 group-hover:scale-105 transition-transform duration-500" /></div>
      <div className="p-4">
        <span className="text-brand text-xs font-bold">{a.cat}</span>
        <h3 className="font-serif font-bold text-lg leading-snug mt-1 group-hover:text-brand transition-colors">{a.title}</h3>
        <p className="text-xs text-neutral-500 mt-2">{a.time}</p>
      </div>
    </a>
  )
}
