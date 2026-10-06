import { useState } from 'react'
import Logo from './Logo'
import { MENU } from '../data/site'
const Social = ({ d, label }) => <a href="#/" aria-label={label} className="text-neutral-500 hover:text-brand transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg></a>
export default function Header({ dark, setDark, query, setQuery, cat, setCat }) {
  const [open, setOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const go = (m) => { setCat(m === 'Beranda' ? 'Semua' : m); location.hash = '/'; setOpen(false) }
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-4">
        <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
        <a href="#/" onClick={() => setCat('Semua')} aria-label="Beranda"><Logo /></a>
        <nav className="hidden md:flex gap-5 ml-6 font-semibold text-sm">
          {MENU.map((m) => <button key={m} onClick={() => go(m)} className={`py-1 border-b-2 transition-colors hover:text-brand ${(cat === m || (m === 'Beranda' && cat === 'Semua')) ? 'border-brand text-brand' : 'border-transparent'}`}>{m}</button>)}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <button onClick={() => setShowSearch(!showSearch)} aria-label="Cari" className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-brand transition-colors flex items-center justify-center"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="7" cy="7" r="5"/><path d="M11 11l4 4"/></svg></button>
          <div className="hidden lg:flex gap-3">
            <Social label="Instagram" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            <Social label="X" d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l4 6z" />
            <Social label="YouTube" d="M22 8s-.2-2-1-3c-1-1-2-1-3-1-3-.2-6-.2-6-.2s-3 0-6 .2c-1 0-2 0-3 1-.8 1-1 3-1 3v4s.2 2 1 3c1 1 2 1 3 1l7 .2s3 0 6-.2c1 0 2 0 3-1 .8-1 1-3 1-3zM10 15V9l5 3z" />
          </div>
          <button onClick={() => setDark(!dark)} aria-label="Mode gelap" className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-brand transition-colors">{dark ? '☀️' : '🌙'}</button>
        </div>
      </div>
      {showSearch && <div className="border-t border-neutral-200 dark:border-neutral-800 px-4 py-2 max-w-6xl mx-auto"><input autoFocus value={query} onChange={(e) => { setQuery(e.target.value); location.hash = '/' }} placeholder="Cari berita…" aria-label="Cari" className="w-full px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 outline-none focus:ring-2 ring-brand" /></div>}
      {open && <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 p-4 space-y-3">
        {MENU.map((m) => <button key={m} onClick={() => go(m)} className="block font-semibold hover:text-brand">{m}</button>)}
      </div>}
    </header>
  )
}
