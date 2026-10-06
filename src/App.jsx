import { useEffect, useState } from 'react'
import { ARTICLES } from './data/site'
import Header from './components/Header'
import BreakingNews from './components/BreakingNews'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import ArticleCard from './components/ArticleCard'
import ArticlePage from './components/ArticlePage'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import Thumb from './components/Thumb'

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('ds-dark') === '1')
  const [route, setRoute] = useState(location.hash.slice(1) || '/')
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('Semua')

  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('ds-dark', dark ? '1' : '0') }, [dark])
  useEffect(() => { const f = () => { setRoute(location.hash.slice(1) || '/'); window.scrollTo(0, 0) }; addEventListener('hashchange', f); return () => removeEventListener('hashchange', f) }, [])

  const q = query.toLowerCase()
  const list = ARTICLES.filter((a) => (cat === 'Semua' || a.cat === cat) && (a.title + a.cat).toLowerCase().includes(q))
  const articleId = route.startsWith('/artikel/') ? Number(route.split('/')[2]) : null
  const side = list.slice(1, 4)
  const latest = list.slice(1)
  const cats = [...new Set(ARTICLES.map((a) => a.cat))]

  return (
    <>
      <Header {...{ dark, setDark, query, setQuery, cat, setCat }} />
      <BreakingNews />
      {articleId ? <ArticlePage id={articleId} /> : (
        <main className="max-w-6xl mx-auto px-4 py-6 grid lg:grid-cols-[1fr_300px] gap-8">
          <div>
            {list[0] ? (
              <div className="grid md:grid-cols-[2fr_1fr] gap-5">
                <Hero a={list[0]} />
                <div className="hidden md:flex flex-col gap-4">
                  <h2 className="font-bold text-sm uppercase tracking-wide text-brand">Headline Lainnya</h2>
                  {side.map((a) => (
                    <a key={a.id} href={`#/artikel/${a.id}`} className="group flex gap-3">
                      <Thumb article={a} className="w-24 h-16 rounded shrink-0" />
                      <span className="font-semibold text-sm leading-snug group-hover:text-brand transition-colors">{a.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : <p className="py-20 text-center text-neutral-500">Tidak ada berita yang cocok.</p>}
            <h2 className="font-bold text-lg border-l-4 border-brand pl-3 mt-10 mb-4">Berita Terbaru</h2>
            <div className="grid sm:grid-cols-2 gap-5">{latest.map((a) => <Reveal key={a.id}><ArticleCard a={a} /></Reveal>)}</div>
            {cat === 'Semua' && !query && cats.map((c) => (
              <section key={c}>
                <h2 className="font-bold text-lg border-l-4 border-brand pl-3 mt-10 mb-4">{c}</h2>
                <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {ARTICLES.filter((a) => a.cat === c).map((a) => (
                    <li key={a.id}><a href={`#/artikel/${a.id}`} className="group flex gap-4 py-3">
                      <Thumb article={a} className="w-28 h-20 sm:w-36 sm:h-24 rounded shrink-0" />
                      <div><h3 className="font-serif font-bold leading-snug group-hover:text-brand transition-colors">{a.title}</h3><p className="text-xs text-neutral-500 mt-1">{a.time}</p></div>
                    </a></li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <Sidebar setQuery={setQuery} />
        </main>
      )}
      <Footer />
    </>
  )
}
