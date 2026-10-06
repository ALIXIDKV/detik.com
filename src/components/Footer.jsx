import Logo from './Logo'
import { MENU, SITE } from '../data/site'
export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 mt-12 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-8">
        <div>
          <Logo light />
          <p className="text-sm mt-3">Portal berita parodi untuk hiburan. Semua kejadian, tokoh, dan kutipan di sini fiktif.</p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">Kanal</h3>
          <ul className="space-y-2 text-sm">{MENU.map((m) => <li key={m}><a href="#/" className="hover:text-brand transition-colors">{m}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">Disclaimer</h3>
          <p className="text-sm">{SITE.name} adalah situs parodi buatan sendiri dan tidak berafiliasi dengan media mana pun. Bukan berita asli.</p>
        </div>
      </div>
      <p className="max-w-6xl mx-auto px-4 mt-8 pt-4 border-t border-neutral-800 text-xs text-neutral-500">© 2026 {SITE.name}. Berita parodi, hanya untuk hiburan.</p>
    </footer>
  )
}
