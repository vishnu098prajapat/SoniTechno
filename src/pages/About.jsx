import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import { IconCheck, IconArrow } from '../components/Icons.jsx'
import useSeo from '../hooks/useSeo.js'

const commitments = [
  'Expert service delivery with precision',
  'Market trend analysis',
  'Experienced IT management solutions',
  'Current technology implementation',
  'Efficient project timelines',
  'Competent project handling',
]

const pillars = [
  {
    title: 'Effective Team for Startups',
    text: 'We have been in this environment for more than 9+ years, with roughly 50% of our clients being startups — and more than 1000+ accomplished projects behind us.',
  },
  {
    title: 'Integration & Reliability',
    text: 'Our team offers streamlined processes with flexibility, and dependable delivery schedules you can plan your own launch around.',
  },
  {
    title: 'Client-Focused Approach',
    text: 'We prioritise software quality and client success, providing complimentary consulting on technology, development, testing, project management and UI design.',
  },
  {
    title: 'High Quality Standards',
    text: 'All our clients know the quality of our products, hence, they are sticking with us for some years now.',
  },
]

const stats = [
  { value: '9+', label: 'Years of experience' },
  { value: '1000+', label: 'Accomplished projects' },
  { value: '50%', label: 'Clients are startups' },
]

export default function About() {
  useSeo('About Us', 'A full-service web and app development company in Rajasthan with 9+ years of experience and 1000+ accomplished projects.')
  return (
    <>
      <PageHero
        kicker="About Us"
        title="A Full-service Web / App Development Company"
        lead="We are a team of dedicated personnel who strive to help your business with branding and advertisement."
        crumbs={['About Us']}
        image="/images/About_us.jpg"
      />

      <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-40" />
        <div className="container-x relative grid gap-16 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Who we are</span>
            </div>
            
            <h2 className="mt-2 h2 text-balance text-[2rem] sm:text-[2.75rem] leading-tight">
              Web, apps, travel services and APIs — <span className="accent-serif text-brand-500">from one team</span>
            </h2>
            <div className="prose-block mt-7 text-slate-500">
              <p>
                SoniTechno offers web designing, development, travel services and APIs including recharge software. We
                provide bill payment and DTH recharge services, plus logo design for new enterprises finding their identity.
              </p>
              <p>
                SoniTechno is a Professional Multi Recharge Software Development Company based in Rajasthan, India —
                delivering multi-recharge services, API services, white-label portals and software development with an
                emphasis on mobile responsiveness and user-friendly interfaces.
              </p>
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {commitments.map((c) => (
                <li key={c} className="group flex items-start gap-3 text-[14px] font-medium text-slate-600">
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 transition-colors group-hover:bg-brand-500">
                    <IconCheck className="h-3 w-3 text-brand-500 transition-colors group-hover:text-white" />
                  </div>
                  <span className="mt-0.5">{c}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary group mt-11 relative overflow-hidden px-8 py-4 shadow-xl shadow-brand-500/20">
              <span className="relative z-10 flex items-center gap-2">Talk With Expert <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              <div className="absolute inset-0 bg-brand-600 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>

          <div className="grid gap-6 relative z-10">
            {pillars.map((p, i) => (
              <div key={p.title} className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-500/30 relative overflow-hidden cursor-default animate-fadeUp" style={{animationDelay: `${i * 100}ms`}}>
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[6rem] font-black leading-none italic pointer-events-none transition-all duration-500 group-hover:text-brand-500 group-hover:opacity-10 group-hover:scale-110 origin-top-right">
                  0{i + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="h3 text-[1.25rem] text-ink-950 mb-3">{p.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-slate-500">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink-950 py-16 sm:py-24 text-white">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[110px]" />
        <div className="container-x relative grid grid-cols-3 gap-2 sm:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-white/10 pl-3 sm:pl-6">
              <p className="display text-2xl sm:text-5xl text-white">
                {s.value.replace(/[^0-9]/g, '')}
                <span className="text-brand-500">{s.value.replace(/[0-9]/g, '')}</span>
              </p>
              <p className="mt-1 sm:mt-3 text-[10px] sm:text-[13.5px] text-white/45">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
