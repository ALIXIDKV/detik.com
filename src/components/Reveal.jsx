import useReveal from '../hooks/useReveal'
export default function Reveal({ children, className = '' }) {
  const [ref, shown] = useReveal()
  return <div ref={ref} className={`transition-all duration-700 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>{children}</div>
}
