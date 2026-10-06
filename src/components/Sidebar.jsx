import { ARTICLES, TAGS } from '../data/site'
export default function Sidebar({ setQuery }) {
  return (
    <aside className="space-y-8">
      <section>
        <h2 className="font-bold text-lg border-l-4 border-brand pl-3 mb-4">Berita Terpopuler</h2>
        <ol className="space-y-4">
          {ARTICLES.slice(1, 5).map((a, i) => (
            <li key={a.id} className="flex gap-3"><span className="text-3xl font-extrabold text-brand/30 leading-none">{i + 1}</span>
              <a href={`#/artikel/${a.id}`} className="font-semibold leading-snug hover:text-brand transition-colors">{a.title}</a></li>
          ))}
        </ol>
      </section>
      <section>
        <h2 className="font-bold text-lg border-l-4 border-brand pl-3 mb-4">Trending Sekarang</h2>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => <button key={t} onClick={() => { setQuery(t.slice(1)); location.hash = '/' }} className="text-sm px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-brand hover:text-white transition-colors">{t}</button>)}
        </div>
      </section>
    </aside>
  )
}
