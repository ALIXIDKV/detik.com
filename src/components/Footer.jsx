import Logo from './Logo'
import { MENU } from '../data/site'
export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 mt-12 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-8">
        <div>
          <Logo light />
          <p className="text-sm mt-3">Portal berita terkini seputar kampus, viral, hiburan, dan gaya hidup.</p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">Kanal</h3>
          <ul className="space-y-2 text-sm">{MENU.map((m) => <li key={m}><a href="#/" className="hover:text-brand transition-colors">{m}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-3">Redaksi</h3>
          <ul className="space-y-2 text-sm"><li>Tentang Kami</li><li>Pedoman Media Siber</li><li>Kontak Redaksi</li></ul>
        </div>
      </div>
      <p className="max-w-6xl mx-auto px-4 mt-8 pt-4 border-t border-neutral-800 text-xs text-neutral-500">© 2026 Detikcom. Hak cipta dilindungi.</p>
    </footer>
  )
}
