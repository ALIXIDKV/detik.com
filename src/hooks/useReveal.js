import { useEffect, useRef, useState } from 'react'
export default function useReveal() {
  const ref = useRef(null); const [shown, setShown] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.1 })
    if (ref.current) io.observe(ref.current); return () => io.disconnect()
  }, [])
  return [ref, shown]
}
