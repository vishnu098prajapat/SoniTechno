import { useEffect, useState } from 'react'
import { site } from '../data/site.js'

/** Floating WhatsApp button — appears on every page, opens a chat in a new tab. */
export default function WhatsAppButton() {
  const [shown, setShown] = useState(false)

  // fade in shortly after load so it doesn't fight the hero
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 900)
    return () => clearTimeout(t)
  }, [])

  const number = site.phones[0].replace(/\D/g, '') // 919351051856
  const message = encodeURIComponent(
    'Hi SoniTechno, I would like to know more about your software and API solutions.'
  )

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with SoniTechno on WhatsApp"
      className={`group fixed bottom-20 right-6 z-[60] flex items-center transition-all duration-700 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
    >
      {/* tooltip */}
      <span className="pointer-events-none relative mr-3 hidden translate-x-3 whitespace-nowrap rounded-full bg-ink-950 px-4 py-2.5 text-[13px] font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
        <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-ink-950" />
      </span>

      {/* button */}
      <span className="relative flex h-14 w-14 animate-floaty items-center justify-center">
        {/* pulsing rings */}
        <span className="absolute inset-0 origin-center animate-pulseRing rounded-full bg-[#25D366]/50" />
        <span
          className="absolute inset-0 origin-center animate-pulseRing rounded-full bg-[#25D366]/30"
          style={{ animationDelay: '1.2s' }}
        />

        {/* gentle float + hover lift */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-6px_rgba(37,211,102,.7)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
          <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
            <path d="M16.04 3C8.83 3 3 8.83 3 16.04c0 2.3.6 4.54 1.75 6.52L3 29l6.6-1.73a13 13 0 0 0 6.44 1.68h.01c7.2 0 13.04-5.83 13.04-13.04C29.09 8.83 23.25 3 16.04 3Zm0 23.75h-.01c-2 0-3.96-.54-5.67-1.55l-.4-.24-4.2 1.1 1.12-4.1-.27-.42a10.7 10.7 0 0 1-1.64-5.7c0-5.98 4.87-10.84 10.86-10.84 2.9 0 5.63 1.13 7.68 3.18a10.78 10.78 0 0 1 3.18 7.67c0 5.99-4.87 10.85-10.65 10.85Zm5.96-8.12c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.73.17-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.93-1.82-2.26-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55l-.62-.01c-.22 0-.57.08-.86.41-.3.33-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.78.25 1.48.21 2.04.13.62-.09 1.93-.79 2.2-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.62-.38Z" />
          </svg>
        </span>
      </span>
    </a>
  )
}
