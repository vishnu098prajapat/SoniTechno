import { useEffect, useState } from 'react'
import { IconArrow } from './Icons.jsx'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group fixed bottom-40 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_10px_30px_-6px_rgba(0,0,0,.4)] transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      } hover:scale-110 active:scale-95 hover:bg-brand-500`}
    >
      <IconArrow className="h-6 w-6 -rotate-90" />
      
      {/* tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 hidden -translate-x-3 whitespace-nowrap rounded-full bg-ink-950 px-4 py-2.5 text-[13px] font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Back to top
        <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-ink-950" />
      </span>
    </button>
  )
}
