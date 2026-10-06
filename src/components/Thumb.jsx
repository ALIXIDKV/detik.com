import { useState } from 'react'
export default function Thumb({ article, className = '', eager = false }) {
  const srcs = [article.image, `https://picsum.photos/seed/detikcom-${article.id}/1200/675`].filter(Boolean)
  const [i, setI] = useState(0)
  if (i < srcs.length) return <img src={srcs[i]} alt={article.title} loading={eager ? 'eager' : 'lazy'} onError={() => setI(i + 1)} className={`object-cover bg-neutral-200 dark:bg-neutral-800 ${className}`} />
  return <div className={`bg-gradient-to-br from-neutral-300 to-neutral-500 dark:from-neutral-800 dark:to-neutral-700 ${className}`} />
}
