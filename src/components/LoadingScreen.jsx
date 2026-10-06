export default function LoadingScreen({ show }) {
  return (
    <div className={`fixed inset-0 z-[60] bg-white dark:bg-neutral-950 flex flex-col items-center justify-center transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="text-4xl font-extrabold"><span className="text-brand">Detik</span> Santai</div>
      <div className="mt-4 h-1 w-40 bg-neutral-200 dark:bg-neutral-800 overflow-hidden rounded"><div className="h-full w-1/2 bg-brand ticker" style={{ animationDuration: '1s' }} /></div>
      <p className="mt-3 text-xs text-neutral-500">Memuat berita (mungkin sedikit terlambat)…</p>
    </div>
  )
}
