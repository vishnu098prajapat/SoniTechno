import { useParams, Link } from 'react-router-dom'
import { allPages, itSolutions, software, apis, pagePath } from '../data/index.js'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import NotFound from './NotFound.jsx'
import { IconArrow, IconPhone } from '../components/Icons.jsx'
import { site } from '../data/site.js'
import useSeo from '../hooks/useSeo.js'

const sectionMeta = {
  'it-solutions': { label: 'IT Solutions', group: itSolutions },
  software: { label: 'Software', group: software },
  api: { label: 'API Solution', group: apis },
}

export default function ServicePage() {
  const { slug } = useParams()
  const page = allPages[slug]
  useSeo(page?.title, page?.lead)
  if (!page) return <NotFound />

  const meta = sectionMeta[page.section]
  const slugs = Object.keys(meta.group)
  const idx = slugs.indexOf(slug)
  const siblings = Object.entries(meta.group).filter(([s]) => s !== slug)

  return (
    <>
      <PageHero
        kicker={page.kicker}
        title={page.title}
        lead={page.lead}
        crumbs={[meta.label, page.title]}
        index={String(idx + 1).padStart(2, '0')}
        image={page.image}
      />

      <section className="container-x grid gap-16 py-20 lg:grid-cols-[1.65fr_1fr] lg:py-24">
        <div>
          {page.blocks.map((block, i) => (
            <div key={block.heading} className="mb-14 last:mb-0">
              <div className="flex gap-6">
                <span className="hidden font-serif text-xl italic leading-none text-ink-200 sm:block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h2 className="h2 text-[1.75rem] sm:text-[2.1rem]">{block.heading}</h2>
                  <div className="prose-block mt-5">
                    {block.paragraphs.map((p, n) => (
                      <p key={n}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* features */}
          <div className="mt-16 border-t border-ink-950 pt-10">
            <span className="label">{page.featureTitle}</span>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2">
              {page.features.map((f, n) => (
                <div key={f.title} className="group bg-white p-6 transition-colors">
                  <span className="font-serif text-[13px] italic text-brand-500">{String(n + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-[15.5px] font-bold leading-snug tracking-tight text-ink-950">{f.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-400">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-ink-100 p-7">
            <div className="flex items-baseline justify-between border-b border-ink-950 pb-4">
              <h3 className="h3">More in {meta.label}</h3>
              <span className="font-serif text-sm italic text-ink-300">{siblings.length}</span>
            </div>
            <ul>
              {siblings.map(([s, p]) => (
                <li key={s}>
                  <Link
                    to={pagePath(s)}
                    className="group flex items-center justify-between gap-3 border-b border-ink-100 py-3 text-[13.5px] text-ink-500 transition hover:text-brand-500"
                  >
                    <span className="leading-snug">{p.title}</span>
                    <IconArrow className="h-4 w-4 shrink-0 text-ink-200 transition-all group-hover:translate-x-1 group-hover:text-brand-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-8 text-white shadow-xl">
            <div className="relative">
              <h3 className="display text-xl text-white">Got any Questions? Call us Today!</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                Our team will help you pick the right solution for your business.
              </p>
              <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="mt-6 block text-[15px] font-bold text-brand-400">
                (+91) {site.phones[0]}
              </a>
              <Link to="/contact" className="btn-primary mt-6 w-full">
                Book Your Appointment <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <CTA />
    </>
  )
}
