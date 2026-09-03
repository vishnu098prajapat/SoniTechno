import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import { IconArrow, IconCheck } from '../components/Icons.jsx'
import useSeo from '../hooks/useSeo.js'
import { site } from '../data/site.js'

/* Content follows sonitechno.com/review.aspx */
const AVERAGE = 4.3
const breakdown = [
  { stars: 5, percent: 80 },
  { stars: 4, percent: 80 },
  { stars: 3, percent: 0 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
]

const reviews = [
  {
    name: 'Saren Matthew',
    role: 'CEO, IT Works',
    date: '24 June 2019',
    rating: 5,
    text: 'Best Services from SoniTechno IT Solutions! Quis nostrud exercitation duis aute irure dolor reprehenderit voluptate.',
  },
  {
    name: 'nktailor',
    role: 'Verified customer',
    date: 'January 29, 2016',
    rating: 4,
    text: 'This was nice in buy.',
  },
]

const inquiryOptions = ['IT Cloud Integration', 'Business Security', 'Product Engineering']

function Stars({ n, className = 'h-4 w-4' }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${n} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={`${className} ${i <= n ? 'text-brand-500' : 'text-slate-200'}`} fill="currentColor">
          <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
        </svg>
      ))}
    </span>
  )
}

export default function Reviews() {
  useSeo('Customer Reviews', 'What businesses across India say after going live on a SoniTechno platform.')
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        kicker="Reviews"
        title="Our Customer Review"
        lead="What businesses across India say after going live on a SoniTechno platform."
        crumbs={['Reviews']}
        index="4.3"
      />

      <section className="bg-white py-20 w-full px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[340px_1fr]">
          {/* rating summary */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Average user rating</p>
              <p className="mt-4 text-[3.5rem] font-extrabold leading-none tracking-tight text-ink-950">
                {AVERAGE}
                <span className="text-[1.5rem] text-slate-300"> / 5</span>
              </p>
              <div className="mt-4 flex justify-center">
                <Stars n={4} className="h-5 w-5" />
              </div>

              <div className="mt-8 space-y-3">
                {breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-3">
                    <span className="w-10 shrink-0 text-left text-[12.5px] font-semibold text-slate-500">{b.stars} star</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <span className="block h-full rounded-full bg-brand-500" style={{ width: `${b.percent}%` }} />
                    </span>
                    <span className="w-9 shrink-0 text-right text-[12px] text-slate-400">{b.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-ink-950 p-8 text-white">
              <h3 className="text-[1.15rem] font-bold">Worked with us?</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-white/55">
                Tell other businesses how it went — it takes a minute.
              </p>
              <a
                href="#post-review"
                className="mt-6 flex items-center justify-center gap-2 rounded-md bg-brand-500 px-6 py-3.5 text-[14px] font-bold text-white transition hover:bg-brand-600"
              >
                Post Review <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* review list + form */}
          <div>
            <div className="flex items-baseline justify-between border-b-2 border-ink-950 pb-4">
              <h2 className="text-[1.5rem] font-extrabold tracking-tight text-ink-950">Customer Review Details</h2>
              <span className="text-[13px] text-slate-400">{reviews.length} reviews</span>
            </div>

            <ul className="mt-2">
              {reviews.map((r) => (
                <li key={r.name} className="border-b border-slate-100 py-8">
                  <div className="flex flex-wrap items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink-950 text-[14px] font-bold text-white">
                      {r.name.slice(0, 2).toUpperCase()}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <p className="text-[15px] font-bold text-ink-950">{r.name}</p>
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-500">
                          <IconCheck className="h-3.5 w-3.5" /> {r.role}
                        </span>
                        <span className="text-[12.5px] text-slate-400">{r.date}</span>
                      </div>
                      <div className="mt-2.5">
                        <Stars n={r.rating} />
                      </div>
                      <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-500">{r.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* post a review */}
            <div id="post-review" className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <span className="label">Post Review</span>
              <h3 className="mt-4 text-[1.5rem] font-extrabold tracking-tight text-ink-950">Share your experience</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                Your review helps other businesses decide.
              </p>

              <form
                className="mt-8 grid gap-6 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.target)
                  const name = fd.get('name')
                  const rating = fd.get('rating')
                  const inquiry = fd.get('inquiry')
                  const review = fd.get('review')
                  
                  const subject = encodeURIComponent(`New Review from ${name} - ${rating} Stars`)
                  const body = encodeURIComponent(`Name: ${name}\nRating: ${rating} Stars\nInquiry About: ${inquiry}\n\nReview:\n${review}`)
                  
                  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
                  setSent(true)
                }}
              >
                <Field label="Your Name" name="name" placeholder="Full name" required />
                <Field label="Email Address" name="email" type="email" placeholder="you@company.com" required />

                <div>
                  <label className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Your Rating
                  </label>
                  <select
                    name="rating"
                    defaultValue="5"
                    className="w-full border-b border-slate-200 bg-transparent pb-3 text-[15px] text-ink-950 outline-none transition focus:border-brand-500"
                  >
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option key={n} value={n}>{n} star{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Inquiry About
                  </label>
                  <select
                    name="inquiry"
                    defaultValue={inquiryOptions[0]}
                    className="w-full border-b border-slate-200 bg-transparent pb-3 text-[15px] text-ink-950 outline-none transition focus:border-brand-500"
                  >
                    {inquiryOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Your Review
                  </label>
                  <textarea
                    name="review"
                    rows={4}
                    required
                    placeholder="Tell us how the platform is working for you…"
                    className="w-full resize-none border-b border-slate-200 bg-transparent pb-3 text-[15px] text-ink-950 outline-none transition placeholder:text-slate-300 focus:border-brand-500"
                  />
                </div>


                <div className="flex flex-wrap items-center gap-5 pt-2 sm:col-span-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-md bg-brand-500 px-8 py-3.5 text-[14px] font-bold text-white transition hover:bg-brand-600"
                  >
                    Post Review <IconArrow className="h-4 w-4" />
                  </button>
                  <Link
                    to="/contact"
                    className="rounded-md border-2 border-slate-200 bg-white px-8 py-3 text-[14px] font-bold text-ink-950 transition hover:border-brand-500 hover:text-brand-500"
                  >
                    Make a Request
                  </Link>
                  {sent && (
                    <p className="text-[13.5px] font-semibold text-brand-600">
                      Opening your email client...
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</label>
      <input
        {...props}
        className="w-full border-b border-slate-200 bg-transparent pb-3 text-[15px] text-ink-950 outline-none transition placeholder:text-slate-300 focus:border-brand-500"
      />
    </div>
  )
}
