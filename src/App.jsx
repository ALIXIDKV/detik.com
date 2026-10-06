import { useEffect, useState } from 'react'
import { ARTICLES } from './data/site'
import Header from './components/Header'
import BreakingNews from './components/BreakingNews'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import ArticleCard from './components/ArticleCard'
import ArticlePage from './components/ArticlePage'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'
import ParodyBar from './components/ParodyBar'
import Reveal from './components/Reveal'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [dark, setDark] = useState(() => localStorage.getItem('ds-dark') === '1')
  const [route, setRoute] = useState(location.hash.slice(1) || '/')
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('Semua')

  useEffect(() => { const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t) }, [])
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('ds-dark', dark ? '1' : '0') }, [dark])
  useEffect(() => { const f = () => { setRoute(location.hash.slice(1) || '/'); window.scrollTo(0, 0) }; addEventListener('hashchange', f); return () => removeEventListener('hashchange', f) }, [])

  const q = query.toLowerCase()
  const list = ARTICLES.filter((a) => (cat === 'Semua' || a.cat === cat) && (a.title + a.cat).toLowerCase().includes(q))
  const articleId = route.startsWith('/artikel/') ? Number(route.split('/')[2]) : null

  return (
    <>
      <LoadingScreen show={loading} />
      <Header {...{ dark, setDark, query, setQuery, cat, setCat }} />
      <BreakingNews />
      {articleId ? <ArticlePage id={articleId} /> : (
        <main className="max-w-6xl mx-auto px-4 py-6 grid lg:grid-cols-[1fr_300px] gap-8">
          <div>
            {list[0] ? <Hero a={list[0]} /> : <p className="py-20 text-center text-neutral-500">Tidak ada berita yang cocok.</p>}
            <h2 className="font-bold text-lg border-l-4 border-brand pl-3 mt-10 mb-4">Artikel Terbaru</h2>
            <div className="grid sm:grid-cols-2 gap-5">{list.slice(1).map((a) => <Reveal key={a.id}><ArticleCard a={a} /></Reveal>)}</div>
          </div>
          <Sidebar setQuery={setQuery} />
        </main>
      )}
      <Footer />
      <ParodyBar />
    </>
  )
}
