import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { itSolutions, software, apis, pagePath } from '../data/index.js'
import CTA from '../components/CTA.jsx'
import ProcessSection from '../components/ProcessSection.jsx'
import {
  IconArrow, IconCheck, IconMobile, IconCode, IconCart, IconCard,
  IconShield, IconPlane, IconBank, IconLayers, IconGlobe, IconChevron,
} from '../components/Icons.jsx'
import useSeo from '../hooks/useSeo.js'

const rotating = [
  'Recharge Software',
  'Money Transfer',
  'AEPS & BBPS',
  'Utility Payments',
]

const services = [
  { icon: IconMobile, title: 'Mobile Recharge Software', text: 'B2B, B2C and white label recharge portals launched under your own brand.', to: '/software/mobile-recharge-software', image: '/images/Services/REcharge.png' },
  { icon: IconBank, title: 'Money Transfer Software', text: 'A fully-featured B2B remittance platform running on NEFT and IMPS.', to: '/software/money-transfer-software', image: '/images/Services/Money_transfer.png' },
  { icon: IconShield, title: 'AEPS', text: 'Aadhaar Enabled Payment System for secure banking transactions.', to: '/software/aeps', image: '/images/Services/AEPS.png' },
  { icon: IconCard, title: 'BBPS', text: 'The RBI-mandated centralized platform for every utility bill.', to: '/software/bbps', image: '/images/Services/Utility.png' },
  { icon: IconCode, title: 'Web Development', text: 'From a single static page to a complex interactive portal.', to: '/it-solutions/website-development', image: '/images/Services/Web_debv.png' },
  { icon: IconCart, title: 'Ecommerce Portal', text: 'Shopping solutions for travel, healthcare, food and retail.', to: '/it-solutions/ecommerce-shopping-portal', image: '/images/Services/Ecomerce.png' },
  { icon: IconPlane, title: 'Travel Booking', text: 'Flight, hotel and bus booking portals for B2B and B2C.', to: '/software/flight-booking', image: '/images/Services/Travel.png' },
  { icon: IconLayers, title: 'API Solutions', text: 'Recharge, utility, AEPS, money transfer and PAN card APIs.', to: '/api/recharge-api', image: '/images/Services/API.png' },
]

const stats = [
  { value: '9+', label: 'Years in this environment' },
  { value: '1000+', label: 'Accomplished projects' },
  { value: '100+', label: 'Local IT company projects' },
  { value: '1M', label: 'Clients around the world' },
]

const why = [
  { title: 'Easier to implement solutions', text: 'Our platforms drop into your business without a long, painful rollout.' },
  { title: 'Increase growth rates', text: 'Automation and new revenue lines that compound month over month.' },
  { title: 'Branding for future success', text: 'Everything is white label — your brand stays front and centre.' },
  { title: 'Trusted by 1M clients', text: 'SoniTechno IT clients around the world rely on our platforms daily.' },
]

const commitments = [
  'Expert service delivery with precision',
  'Market trend analysis',
  'Experienced IT management solutions',
  'Current technology implementation',
  'Efficient project timelines',
  'Competent project handling',
]

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function Home() {
  useSeo('Multi Recharge Software Development Company', 'SoniTechno is a professional Multi Recharge Software Development Company in Rajasthan, India — recharge software, AEPS, BBPS, money transfer, APIs, websites and apps.')
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % rotating.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* ─────────────────────────  HERO  ───────────────────────── */}
      <section className="grain relative overflow-hidden bg-slate-50 text-ink-950">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="pointer-events-none absolute -left-52 -top-40 h-[38rem] w-[38rem] rounded-full bg-brand-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-32 top-32 h-[26rem] w-[26rem] rounded-full bg-brand-500/5 blur-[110px]" />

        <div className="w-full px-4 sm:px-6 lg:px-8 relative grid items-center gap-8 lg:gap-12 pb-10 pt-6 sm:pt-8 lg:grid-cols-[1.15fr_1fr] xl:grid-cols-[1.2fr_1fr] lg:pb-14 lg:pt-10">
          <div className="animate-fadeUp">
            <span className="label">Multi Recharge Software Company</span>

            <h1 className="mt-3 sm:mt-4 h1 text-ink-950 dark:text-white">
              Online{' '}
              <span key={i} className="accent-serif animate-fadeUp text-brand-500 inline-block">
                {rotating[i]}
              </span>{' '}
              <br className="hidden sm:block" />
              built for your brand.
            </h1>

            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-[1.0625rem] xl:text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              SoniTechno is a Professional Multi Recharge Software Development Company based in Rajasthan, India — building
              multi-recharge services, API services, white-label portals and custom software with a mobile-responsive,
              user-friendly interface.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote <IconArrow className="h-4 w-4" />
              </Link>
              <a href="#services" className="btn-light flex items-center gap-2 !bg-white dark:!bg-white/10 !text-ink-950 dark:!text-white border border-slate-200 dark:border-white/20 hover:!border-brand-500 hover:!text-brand-500 transition-colors">
                Explore <IconChevron className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Side - Animated Hero Images */}
          <div className="relative flex w-full items-center justify-center h-[240px] sm:h-[340px] lg:h-[400px] xl:h-[480px] z-10 perspective-1000 mt-2 lg:mt-0">
            {/* The dynamic image stack with premium cross-fade */}
            <div className="relative w-[85%] xl:w-[90%] animate-floaty z-20" style={{ animationDuration: '6s' }}>
              <div className="relative aspect-[4/3] w-full">
                {[
                  '/images/Hero_recharge.png',
                  '/images/Hero_DMT2.png',
                  '/images/Hero_AEPS.png',
                  '/images/Hero_utility.png',
                ].map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={rotating[idx]}
                    className={`absolute inset-0 w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${idx === i
                        ? 'opacity-100 scale-100 translate-y-0 rotate-0 blur-0 z-10'
                        : 'opacity-0 scale-95 translate-y-8 -rotate-2 blur-md z-0 pointer-events-none'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-y border-slate-200 py-5">
          <div className="flex overflow-hidden">
            {[0, 1].map((k) => (
              <div
                key={k}
                aria-hidden={k === 1}
                className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap pr-10 text-[12px] font-bold uppercase tracking-[0.24em] text-ink-950"
              >
                {[
                  "100+ Projects Done For Local IT Companies",
                  "Secure & Fast Multi-Recharge APIs",
                  "Award-Winning B2B Portal Development",
                  "White-Label Software Solutions",
                  "Trusted by 1M+ Users Worldwide",
                  "24/7 Dedicated Technical Support",
                  "Custom App & Web Development",
                  "Industry Leading Success Rate"
                ].map((text, n) => (
                  <span key={n} className="flex items-center gap-10">
                    {text}
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────  SERVICES  ───────────────────────── */}
      <section id="services" className="relative overflow-hidden bg-white dark:bg-[#0a0a0c] pt-20 pb-16 sm:pt-24 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-30 dark:opacity-10" />
        <div className="w-full px-6 lg:px-12 relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="label">What We Do</span>
              <h2 className="mt-6 h2 text-balance dark:text-white">
                Everything your digital business needs, <span className="accent-serif text-brand-500">under one roof</span>
              </h2>
            </div>
            <p className="max-w-sm lead dark:text-slate-400">
              Software, portals, apps and APIs — built, branded and supported by a single team in Rajasthan.
            </p>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 lg:p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-500/50 hover:shadow-[0_20px_40px_rgba(230,46,46,0.12)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] dark:hover:border-brand-500/40"
              >
                {/* Top Animated Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Glow accent */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20" />

                <div>
                  {/* Icon */}
                  <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-brand-50 text-brand-500 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-md shadow-brand-500/10 dark:bg-white/10 dark:text-brand-400">
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-bold tracking-tight text-ink-950 dark:text-white group-hover:text-brand-500 transition-colors line-clamp-1">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                    {s.text}
                  </p>
                </div>

                {/* Footer link */}
                <div className="mt-5 sm:mt-8 flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-500 group-hover:text-brand-600">
                  <span>Explore</span>
                  <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────  ABOUT  ───────────────────────── */}
      <section className="bg-sand-50 py-14 sm:py-24">
        <div className="w-full px-6 lg:px-12 grid gap-16 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="label">About SoniTechno</span>
            <h2 className="mt-6 h2 text-balance">
              A full-service web &amp; app <span className="accent-serif text-brand-500">development</span> company
            </h2>
            <p className="lead mt-6">
              We are a team of dedicated personnel who strive to help your business with branding and advertisement.
            </p>

            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[14px] font-medium text-ink-700">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {c}
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-dark mt-11">
              More About Us <IconArrow className="h-4 w-4" />
            </Link>
          </div>

          <div>
            {why.map((w, idx) => (
              <div key={w.title} className="group border-t border-ink-200 py-8 transition-colors last:border-b hover:border-brand-500">
                <div className="flex gap-6">
                  <span className="font-serif text-2xl italic leading-none text-ink-200 transition group-hover:text-brand-500">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="h3 text-[19px]">{w.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ink-400">{w.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────  PROCESS  ───────────────────────── */}
      <ProcessSection />

      {/* ─────────────────────────  STATS  ───────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50/30 to-white py-12 text-ink-950 border-y border-slate-100 dark:from-[#0a0a0c] dark:via-brand-500/5 dark:to-[#141417] dark:text-white dark:border-ink-200">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-10 dark:opacity-5" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[100px] dark:bg-brand-500/5" />
        <div className="w-full px-6 lg:px-12 relative grid gap-6 grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {stats.map((s) => {
            const num = parseInt(s.value.replace(/[^0-9]/g, ''), 10)
            const suffix = s.value.replace(/[0-9]/g, '')
            return (
              <div key={s.label} className="border-l border-brand-500/20 pl-4 sm:pl-6">
                <p className="display text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] leading-none text-ink-950 dark:text-white">
                  <CountUp end={num} />
                  <span className="text-brand-500">{suffix}</span>
                </p>
                <p className="mt-1 sm:mt-2 text-[12px] sm:text-[13px] font-medium text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────────────  GLOBAL REACH  ───────────────────────── */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[0.06] blur-[130px]" />

        <div className="relative w-full px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <span className="label">SoniTechno IT Services</span>
            </div>
            <h2 className="mt-6 display text-balance text-[2rem] leading-[1.12] text-ink-950 sm:text-[2.75rem] dark:text-white">
              Trusted By <span className="text-brand-500">1M</span> SoniTechno IT Clients{' '}
              <span className="accent-serif text-brand-500">Across India</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-500 dark:text-slate-400">
              Strong project management and seamless communication are the key to our success.
            </p>
          </div>

        </div>

        {/* map */}
        <div className="relative mt-10 sm:mt-14 w-full flex justify-center px-6">
          <img
            src="/images/MAP2.png"
            alt="SoniTechno clients located across India"
            loading="lazy"
            className="w-full max-w-6xl max-h-[75vh] object-contain animate-floaty select-none drop-shadow-sm"
          />
        </div>
      </section>

      {/* ─────────────────────────  CATALOGUE  ───────────────────────── */}
      <section className="bg-white py-14 sm:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-2xl">
            <span className="label">Our Complete Catalogue</span>
            <h2 className="mt-6 h2">Every solution we build</h2>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-8 sm:gap-12 lg:grid-cols-3">
            {[
              { label: 'IT Solutions', group: itSolutions },
              { label: 'Software', group: software },
              { label: 'API Solution', group: apis },
            ].map(({ label, group }) => (
              <div key={label} className="bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100 transition-shadow duration-300 hover:shadow-lg">
                <div className="flex items-baseline justify-between border-b-2 border-ink-950 pb-4 mb-2">
                  <h3 className="text-[1.125rem] sm:text-[1.25rem] font-bold text-ink-950">{label}</h3>
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-ink-950 text-[11px] font-bold text-white">
                    {Object.keys(group).length}
                  </span>
                </div>
                <ul className="flex flex-col">
                  {Object.entries(group).map(([slug, p]) => (
                    <li key={slug}>
                      <Link
                        to={pagePath(slug)}
                        className="group flex items-center justify-between gap-3 sm:gap-4 border-b border-slate-100/80 px-2 py-3 sm:py-4 text-[13.5px] sm:text-[14px] font-medium text-slate-600 transition-all duration-300 hover:bg-white hover:shadow-sm hover:text-brand-500 hover:px-4 rounded-xl -mx-2"
                      >
                        <span className="leading-snug transition-transform duration-300 group-hover:translate-x-1">{p.title}</span>
                        <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-transparent transition-all duration-300 group-hover:bg-brand-50">
                          <IconArrow className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-500" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <CTA />
    </>
  )
}
