import { Link } from 'react-router-dom'
import { site, footerLinks, recentSearches } from '../data/site.js'
import { IconPhone, IconMail, IconPin, IconArrow } from './Icons.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/80">

      <div className="w-full px-6 lg:px-12 relative grid gap-14 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img src="/images/logo.png" alt="SoniTechno" className="h-10" />
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed">
            A professional Multi Recharge Software Development Company based in Rajasthan, India — building white-label
            portals, APIs and custom software since 2015.
          </p>
          <ul className="mt-8 space-y-4 text-[14px]">
            <li className="flex gap-3.5">
              <IconPin className="mt-1 h-5 w-5 shrink-0 text-white/40" />
              <span className="break-words">{site.address}</span>
            </li>
            <li className="flex gap-3.5">
              <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>(+91) {site.phones.join(', ')}</span>
            </li>
            <li className="flex items-start gap-4">
              <IconMail className="mt-1 h-5 w-5 shrink-0 text-white/40" />
              <a href={`mailto:${site.email}`} className="link-underline break-all text-white/50 transition-colors hover:text-white">{site.email}</a>
            </li>
          </ul>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">{heading}</h4>
            <ul className="mt-6 space-y-3.5 text-[14px]">
              {links.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="link-underline text-white/50 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full px-6 lg:px-12 relative pb-14">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent p-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 h-64 w-64 bg-brand-500/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <h4 className="display text-2xl sm:text-[1.75rem] text-white">Get In Touch</h4>
            <p className="mt-2 text-[14.5px] text-white/50">Get the latest news &amp; updates from SoniTechno.</p>
          </div>
          <form className="relative z-10 mt-6 flex w-full max-w-lg sm:mt-0" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full flex items-center bg-white/5 rounded-full border border-white/15 focus-within:border-brand-500 focus-within:bg-white/10 transition-all duration-300">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent pl-6 pr-3 py-3 text-[13.5px] text-white outline-none placeholder:text-white/30"
              />
              <button type="submit" className="m-1 rounded-full bg-brand-500 hover:bg-brand-600 transition-colors w-10 h-10 flex items-center justify-center shrink-0 group">
                <IconArrow className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2 text-[12px]">
          <span className="mr-1 font-semibold text-white/80">Recent Search:</span>
          {recentSearches.map((s) => (
            <span key={s} className="rounded-full border border-white/10 px-3.5 py-1.5">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full px-6 lg:px-12 relative flex flex-col gap-3 border-t border-white/10 py-7 text-[12.5px] sm:flex-row sm:items-center sm:justify-between">
        <p>{site.copyright}</p>
        <div className="flex items-center gap-7">
          <Link to="/reviews" className="link-underline text-white/50 transition-colors hover:text-white">Customer Reviews</Link>
          <Link to="/privacy" className="link-underline text-white/50 transition-colors hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
