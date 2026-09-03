import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import PostImage from '../components/PostImage.jsx'
import { posts, categories } from '../data/blog.js'
import { IconArrow } from '../components/Icons.jsx'
import useSeo from '../hooks/useSeo.js'

export default function Blog() {
  useSeo('Blog', 'News, notes and how-tos from the SoniTechno team on software, security and payment technology.')
  const [featured, ...rest] = posts

  return (
    <>
      <PageHero
        kicker="Blog"
        title="News, notes and how-tos from the SoniTechno team"
        lead="Updates on software, security and the technology behind the platforms we build."
        crumbs={['Blog']}
        image="/images/blog.jpg"
      />

      <section className="bg-white py-20 w-full px-6 lg:px-12">
        {/* category chips */}
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Categories</span>
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-[12.5px] font-bold text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600 hover:shadow-sm cursor-pointer"
              >
                {c}
              </span>
            ))}
          </div>

          {/* featured post */}
          <Link
            to={`/blog/${featured.slug}`}
            className="group mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white shadow-xl shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand-500/30 lg:grid-cols-2"
          >
            <div className="relative overflow-hidden">
              <PostImage
                src={featured.image}
                alt={featured.title}
                className="h-64 w-full transition-transform duration-700 group-hover:scale-110 lg:h-full lg:min-h-[420px]"
              />
              <span className="absolute left-6 top-6 rounded-full bg-brand-500 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-500/30">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-14">
              <div className="flex items-center gap-3 text-[12.5px] font-bold">
                <span className="rounded-full bg-brand-50 px-4 py-1.5 text-brand-600 ring-1 ring-brand-500/20">
                  {featured.category}
                </span>
                <span className="text-slate-400">{featured.date}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-400">{featured.readTime}</span>
              </div>
              <h2 className="mt-6 text-[1.85rem] font-extrabold leading-tight tracking-tight text-ink-950 transition group-hover:text-brand-500 lg:text-[2.5rem]">
                {featured.title}
              </h2>
              <p className="mt-5 text-[1.125rem] leading-relaxed text-slate-500">{featured.excerpt}</p>
              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-950 text-[12px] font-bold text-white">
                  {featured.author.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className="text-[14px] font-bold text-ink-950">{featured.author}</p>
                  <p className="text-[12px] text-slate-400">Author</p>
                </div>
              </div>
            </div>
          </Link>

          {/* rest */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-500/30"
              >
                <div className="overflow-hidden relative">
                  <PostImage
                    src={p.image}
                    alt={p.title}
                    className="h-56 w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-ink-950 shadow-sm">
                    {p.readTime}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3 text-[12.5px] font-bold">
                    <span className="text-brand-500">{p.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">{p.date}</span>
                  </div>
                  <h3 className="mt-4 text-[1.25rem] font-extrabold leading-snug tracking-tight text-ink-950 transition group-hover:text-brand-500">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-500">{p.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-950 text-[10px] font-bold text-white">
                        {p.author.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="text-[13px] font-bold text-ink-950">{p.author}</span>
                    </div>
                    <IconArrow className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-brand-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
