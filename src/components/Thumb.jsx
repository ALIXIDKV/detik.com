// Foto jika ada; jika tidak, blok warna sebagai placeholder
const BG = ['from-red-700 to-red-400', 'from-neutral-800 to-neutral-500', 'from-rose-800 to-orange-400', 'from-stone-700 to-red-500']
export default function Thumb({ article, className = '' }) {
  if (article.image) return <img src={article.image} alt={article.title} loading="lazy" className={`object-cover ${className}`} />
  return <div className={`bg-gradient-to-br ${BG[article.id % BG.length]} flex items-center justify-center text-white/70 text-4xl font-serif font-bold ${className}`}>DS</div>
}
