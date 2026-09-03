import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { IconArrow, IconPhone } from './Icons.jsx'

export default function CTA() {
  return (
    <section className="container-x py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-16 text-white sm:px-16 sm:py-20 shadow-2xl">

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <span className="label label-light">Let's build it</span>
          </div>
          <h2 className="mt-8 font-extrabold tracking-tight text-balance text-[2.25rem] leading-[1.2] text-white sm:text-[3.25rem] sm:leading-[1.1]">
            Do You Need Our IT Solutions? <br className="hidden sm:block" />
            <span className="accent-serif font-medium text-brand-400">Get advice</span> from our professionals.
          </h2>
          <p className="mt-6 mx-auto max-w-lg text-[1.0625rem] leading-relaxed text-slate-300">
            Got any questions? Call us today — we'll be happy to assist and help your business grow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary w-full sm:w-auto px-8 py-4">
              Make a Request <IconArrow className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 text-[14px] font-bold text-white transition-all hover:bg-slate-700 hover:border-slate-600">
              <IconPhone className="h-4 w-4 text-brand-400" /> Talk With Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
