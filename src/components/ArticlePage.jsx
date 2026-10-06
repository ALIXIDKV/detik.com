import { useState } from 'react'
import { ARTICLES, SITE } from '../data/site'
import Thumb from './Thumb'
import ArticleCard from './ArticleCard'
import Comments from './Comments'
export default function ArticlePage({ id }) {
  const a = ARTICLES.find((x) => x.id === id) || ARTICLES[0]
  const [copied, setCopied] = useState(false)
  const url = location.href
  const wa = `https://wa.me/?text=${encodeURIComponent(`${a.title} (Parodi) ${url}`)}`
  const copy = async () => { try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch {} }
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-xs text-neutral-500 mb-3"><a href="#/" className="hover:text-brand">Beranda</a> / <span className="text-brand font-bold">{a.cat}</span></nav>
      <h1 className="font-serif font-bold text-3xl sm:text-4xl leading-tight mt-2">{a.title}</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-3">{a.sub}</p>
      <p className="text-sm text-neutral-500 mt-4 border-y border-neutral-200 dark:border-neutral-800 py-3">Penulis: <b>{a.author || 'Tim Redaksi'}</b> &nbsp;|&nbsp; {SITE.date} &nbsp;|&nbsp; {a.time}</p>
      <figure className="my-6"><Thumb article={a} className="w-full aspect-video rounded-lg" />
        <figcaption className="text-xs text-neutral-500 mt-2">Foto: ilustrasi. {a.title}</figcaption></figure>
      <div className="font-serif text-lg leading-8 space-y-5">
        {a.body.map((p, i) => typeof p === 'string' ? <p key={i}>{p}</p> :
          <blockquote key={i} className="border-l-4 border-brand pl-5 italic text-xl">“{p.quote}”<footer className="not-italic text-sm text-neutral-500 mt-2">— {p.by}</footer></blockquote>)}
      </div>
      <div className="flex gap-3 mt-8">
        <a href={wa} target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition-colors">Bagikan ke WhatsApp</a>
        <button onClick={copy} className="border border-neutral-300 dark:border-neutral-700 hover:border-brand px-4 py-2 rounded font-semibold transition-colors">{copied ? 'Tersalin!' : 'Salin tautan'}</button>
      </div>
      <Comments />
      <h2 className="font-bold text-lg border-l-4 border-brand pl-3 mt-12 mb-4">Berita Terkait</h2>
      <div className="grid sm:grid-cols-2 gap-5">{ARTICLES.filter((x) => x.id !== a.id).sort((x, y) => (y.cat === a.cat) - (x.cat === a.cat)).slice(0, 4).map((x) => <ArticleCard key={x.id} a={x} />)}</div>
    </article>
  )
}
