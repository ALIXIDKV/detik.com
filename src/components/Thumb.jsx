import { useState } from 'react'
export default function Thumb({ article, className = '' }) {
  const [err, setErr] = useState(false)
  if (article.image && !err) return <img src={article.image} alt={article.title} loading="lazy" onError={() => setErr(true)} className={`object-cover bg-neutral-200 dark:bg-neutral-800 ${className}`} />
  return <div className={`bg-gradient-to-br from-neutral-300 to-neutral-500 dark:from-neutral-800 dark:to-neutral-700 ${className}`} />
}
