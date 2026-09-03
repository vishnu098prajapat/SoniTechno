import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site.js'
import { IconChevron, IconMenu, IconClose, IconPhone, IconMail, IconPin, IconArrow } from './Icons.jsx'
import Logo from './Logo.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { useTheme } from '../hooks/useTheme.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { isDark } = useTheme()

  useEffect(() => {
    setOpen(false)
    setOpenMenu(null)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">


      <div
        className={`transition-all duration-300 ${scrolled ? 'border-b border-ink-100 bg-white/75 backdrop-blur-lg shadow-sm' : 'border-b border-transparent bg-white'
          }`}
      >
        <div className="container-x flex h-[74px] items-center justify-between gap-4">
          <Link to="/" aria-label="SoniTechno home" className="shrink-0">
            <Logo light={isDark} />
          </Link>

          <nav className="hidden items-center xl:flex gap-1 xl:gap-2.5">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    onClick={() => setOpenMenu((prev) => (prev === item.label ? null : item.label))}
                    className={`flex items-center gap-1 px-2 py-1.5 text-[13px] xl:text-[14px] xl:px-3 font-semibold tracking-tight transition ${openMenu === item.label ? 'text-brand-500' : 'text-ink-950 hover:text-brand-500'
                      }`}
                  >
                    <span className="whitespace-nowrap inline-block">{item.label}</span>
                    <IconChevron className={`h-3.5 w-3.5 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4 transition-all duration-200 ${openMenu === item.label ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
                      <div className="flex items-center justify-between border-b border-ink-100 bg-sand-50 px-5 py-3">
                        <span className="label">{item.label}</span>
                        <span className="text-[11px] font-semibold text-ink-300">{item.children.length} solutions</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 p-3">
                        {item.children.map((child, i) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `group flex items-start gap-3 rounded-xl px-3 py-2.5 text-[13.5px] transition ${isActive ? 'bg-brand-50 text-brand-600' : 'text-ink-500 hover:bg-sand-50 hover:text-ink-950'
                              }`
                            }
                          >
                            <span className="mt-[3px] font-serif text-[11px] italic text-ink-200 group-hover:text-brand-500">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="font-medium leading-snug">{child.label}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-1.5 text-[13px] xl:text-[14px] xl:px-3 font-semibold tracking-tight text-ink-950 transition hover:text-brand-500"
                >
                  <span className="whitespace-nowrap inline-block">{item.label}</span>
                </a>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-2 py-1.5 text-[13px] xl:text-[14px] xl:px-3 font-semibold tracking-tight transition ${isActive ? 'text-brand-500' : 'text-ink-950 hover:text-brand-500'
                    }`
                  }
                >
                  <span className="whitespace-nowrap inline-block">{item.label}</span>
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-2.5 xl:gap-3">
            <ThemeToggle />
            <Link to="/contact" className="btn-primary hidden whitespace-nowrap !px-4 !py-2 xl:!px-5 xl:!py-2.5 sm:inline-flex text-[13px] xl:text-sm">
              Get a Quote <IconArrow className="h-4 w-4 shrink-0" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-950 transition hover:border-ink-950 xl:hidden"
              aria-label="Toggle menu"
            >
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="h-[calc(100vh-74px)] overflow-y-auto border-t border-ink-100 bg-white xl:hidden">
          <div className="container-x space-y-1 py-5">
            {nav.map((item) =>
              item.children ? (
                <details key={item.label} className="group border-b border-ink-100">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[15px] font-bold text-ink-950">
                    {item.label}
                    <IconChevron className="h-4 w-4 text-ink-300 transition group-open:rotate-180" />
                  </summary>
                  <div className="space-y-1 pb-4">
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to} className="block rounded-lg py-2.5 pl-4 text-sm text-ink-400 hover:text-brand-500">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block border-b border-ink-100 py-4 text-[15px] font-bold text-ink-950">
                  {item.label}
                </a>
              ) : (
                <Link key={item.to} to={item.to} className="block border-b border-ink-100 py-4 text-[15px] font-bold text-ink-950">
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-ink-100 px-4 py-3">
              <span className="text-[13px] font-bold text-ink-950">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
              <ThemeToggle />
            </div>
            <Link to="/contact" className="btn-primary mt-4 w-full">
              Get a Quote <IconArrow className="h-4 w-4" />
            </Link>
            <div className="pt-6 text-sm text-ink-400">
              <p className="font-semibold text-ink-950">{site.email}</p>
              <p className="mt-1">(+91) {site.phones.join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
