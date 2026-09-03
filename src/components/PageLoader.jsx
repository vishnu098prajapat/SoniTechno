import { useEffect, useState } from 'react'

/** Branded first-load screen. Fades out once the page is ready. */
export default function PageLoader() {
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const finish = () => setDone(true)

    // hide as soon as the window is loaded, and never hang for more than 2s
    if (document.readyState === 'complete') {
      const t = setTimeout(finish, 550)
      return () => clearTimeout(t)
    }
    window.addEventListener('load', finish)
    const fallback = setTimeout(finish, 2000)
    return () => {
      window.removeEventListener('load', finish)
      clearTimeout(fallback)
    }
  }, [])

  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setGone(true), 800) // wait for the fade
    return () => clearTimeout(t)
  }, [done])

  useEffect(() => {
    document.body.style.overflow = gone ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [gone])

  if (gone) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl transition-all duration-700 ${
        done ? 'pointer-events-none opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Premium Loader Container */}
      <div className="relative flex flex-col items-center">
        {/* Glow behind the logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-500/20 blur-[60px] rounded-full pointer-events-none" />
        
        {/* Browser Logo Image */}
        <div className="relative mb-6">
          <span className="absolute inset-0 -m-8 animate-pulseRing rounded-full bg-brand-500/15" />
          <span className="absolute inset-0 -m-4 animate-pulseRing rounded-full bg-brand-500/25" style={{ animationDelay: '0.5s' }} />
          <img 
            src="/images/Browser_logo.png" 
            alt="SoniTechno Logo" 
            className="relative h-24 w-auto object-contain animate-floaty drop-shadow-2xl" 
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center relative z-10">
          <p className="text-[2rem] font-extrabold tracking-tight text-ink-950 flex items-center gap-1">
            <span className="text-brand-500">Soni</span>Techno
          </p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            A Complete IT Solution
          </p>
        </div>

        {/* Premium Progress Bar */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="h-[4px] w-64 overflow-hidden rounded-full bg-slate-200/60 shadow-inner">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 loader-bar relative overflow-hidden">
               <div className="absolute inset-0 bg-white/20 w-full animate-shimmer" />
            </div>
          </div>
          <span className="text-[12px] font-semibold text-brand-500 animate-pulse">Loading Experience...</span>
        </div>
      </div>
    </div>
  )
}
