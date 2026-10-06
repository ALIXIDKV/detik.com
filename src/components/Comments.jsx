import { useState } from 'react'
import { COMMENTS } from '../data/site'
export default function Comments() {
  const [list, setList] = useState(COMMENTS); const [name, setName] = useState(''); const [text, setText] = useState('')
  const add = () => { if (!text.trim()) return; setList([{ name: name.trim() || 'Anonim', text }, ...list]); setText('') }
  return (
    <section className="mt-10">
      <h2 className="font-bold text-lg border-l-4 border-brand pl-3 mb-4">Komentar (demo, tidak disimpan)</h2>
      <div className="space-y-2 mb-6">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" className="w-full sm:w-60 px-3 py-2 rounded bg-neutral-100 dark:bg-neutral-900 outline-none" />
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Tulis komentar…" rows={3} className="w-full px-3 py-2 rounded bg-neutral-100 dark:bg-neutral-900 outline-none" />
        <button onClick={add} className="bg-brand hover:bg-brand-dark text-white font-semibold px-4 py-2 rounded transition-colors">Kirim komentar</button>
      </div>
      <ul className="space-y-4">{list.map((c, i) => (
        <li key={i} className="flex gap-3"><div className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center font-bold shrink-0">{c.name[0]}</div>
          <div><p className="font-semibold text-sm">{c.name}</p><p>{c.text}</p></div></li>))}
      </ul>
    </section>
  )
}
