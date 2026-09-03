import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import { site } from '../data/site.js'
import { IconArrow } from '../components/Icons.jsx'
import useSeo from '../hooks/useSeo.js'

export default function Demo() {
  useSeo('Live Demo', 'Explore the SoniTechno admin dashboard, retailer panels and API workflows in a live demo environment.')
  return (
    <>
      <PageHero
        kicker="Live Demo"
        title="Experience Our Software in Action"
        lead="Get hands-on with our powerful multi-recharge, B2B, and B2C portals. See exactly how our white-label solutions can transform your business."
        crumbs={['Demo']}
        image="/images/Demo.jpg"
      />

      <section className="bg-white py-24 w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm mb-6 animate-fadeUp">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Explore the Platform</span>
          </div>
          
          <h2 className="mt-4 display text-[2rem] sm:text-[3rem] leading-[1.1] text-ink-950 mb-8 animate-fadeUp" style={{animationDelay: '100ms'}}>
            Ready to see it <span className="accent-serif text-brand-500">for yourself?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500 text-[1.0625rem] leading-relaxed mb-12 animate-fadeUp" style={{animationDelay: '200ms'}}>
            Access our fully functional demo environment. You can explore the admin dashboard, retailer panels, and see the smooth workflow of our APIs and recharge systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fadeUp" style={{animationDelay: '300ms'}}>
            <a 
              href={site.demoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary w-full sm:w-auto group relative overflow-hidden px-8 py-4 shadow-xl shadow-brand-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">Open Live Demo <IconArrow className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
              <div className="absolute inset-0 bg-brand-600 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>
            <a 
              href={`mailto:${site.email}`} 
              className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-slate-200 bg-slate-50 text-[14px] font-bold text-ink-950 transition-all hover:border-brand-500 hover:text-brand-500 hover:bg-white shadow-sm"
            >
              Request Custom Walkthrough
            </a>
          </div>


        </div>
      </section>

      <CTA />
    </>
  )
}
