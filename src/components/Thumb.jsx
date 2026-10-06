import { useState } from 'react'
export default function Thumb({ article, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  if (!article?.image || failed) return <div aria-label={article?.title || 'Gambar berita'} className={`bg-neutral-200 dark:bg-neutral-800 ${className}`} />
  return <img src={article.image} alt={article.title} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} className={`object-cover bg-neutral-200 dark:bg-neutral-800 ${className}`} />
}
