import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import PostImage from '../components/PostImage.jsx'
import NotFound from './NotFound.jsx'
import { getPost, otherPosts, categories, popularTags, posts } from '../data/blog.js'
import { IconArrow, IconCheck, IconChat } from '../components/Icons.jsx'
import useSeo from '../hooks/useSeo.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  useSeo(post?.title, post?.excerpt)
  if (!post) return <NotFound />

  const related = otherPosts(slug, 3)

  return (
    <>
      <PageHero
        kicker={post.category}
        title={post.title}
        lead={post.excerpt}
        crumbs={['Blog', post.title]}
        image={post.image}
      />

      <section className="bg-white py-20 w-full px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_340px]">
          {/* ───────── article ───────── */}
          <article>
            {/* meta bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-b-2 border-slate-100 pb-8">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-[14px] font-bold text-white shadow-md">
                  {post.author.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className="text-[15px] font-extrabold tracking-tight text-ink-950">{post.author}</p>
                  <p className="text-[13px] text-slate-400 font-medium">{post.date}</p>
                </div>
              </div>
              <span className="rounded-full bg-brand-50 px-4 py-1.5 text-[12.5px] font-bold text-brand-600 ring-1 ring-brand-500/20">
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-[13px] font-semibold text-slate-400">
                <IconChat className="h-4 w-4 opacity-50" />
                {post.readTime}
              </span>
            </div>


            {/* body */}
            <div className="mt-10">
              {post.body.map((block, i) => (
                <div key={block.heading} className="mb-12 last:mb-0">
                  <h2 className="text-[1.6rem] font-extrabold leading-tight tracking-tight text-ink-950 sm:text-[1.9rem]">
                    {block.heading}
                  </h2>

                  {block.paragraphs?.map((p, n) => (
                    <p key={n} className="mt-5 text-[1.0625rem] leading-[1.8] text-slate-500">
                      {p}
                    </p>
                  ))}

                  {block.list && (
                    <ul className="mt-6 space-y-3.5">
                      {block.list.map((item) => (
                        <li key={item} className="flex gap-3.5 text-[1.0625rem] leading-relaxed text-slate-600">
                          <IconCheck className="mt-1 h-4 w-4 shrink-0 text-brand-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* pull quote after the first block */}
                  {i === 0 && post.quote && (
                    <blockquote className="mt-10 rounded-2xl border-l-4 border-brand-500 bg-slate-50 p-8">
                      <p className="font-serif text-[1.35rem] italic leading-relaxed text-ink-950">“{post.quote}”</p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* tags */}
            <div className="mt-12 flex flex-wrap items-center gap-2.5 border-t border-slate-200 pt-8">
              <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Tags</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 px-4 py-1.5 text-[12.5px] font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-500"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* author bio */}
            <div className="mt-14 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:flex-row sm:p-10 shadow-sm">
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-ink-950 text-2xl font-bold text-white shadow-lg">
                {post.author.slice(0, 2).toUpperCase()}
              </span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-500">Written by</p>
                <p className="mt-1.5 text-[1.5rem] font-extrabold text-ink-950">{post.author}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500 font-medium">
                  Part of the SoniTechno team in Khairthal, Rajasthan — building multi-recharge software, payment portals
                  and APIs for businesses across India.
                </p>
              </div>
            </div>

            {/* prev / next */}
            <PrevNext slug={slug} />
          </article>

          {/* ───────── sidebar ───────── */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <SidebarCard title="Categories">
              <ul>
                {categories.map((c) => (
                  <li key={c}>
                    <span className="flex items-center justify-between border-b border-slate-100 py-3 text-[14px] text-slate-500 transition hover:text-brand-500">
                      {c}
                      <IconArrow className="h-3.5 w-3.5 text-slate-300" />
                    </span>
                  </li>
                ))}
              </ul>
            </SidebarCard>

            <SidebarCard title="Recent Posts">
              <ul className="space-y-5">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`} className="group flex gap-4">
                      <PostImage
                        src={p.image}
                        alt={p.title}
                        className="h-16 w-20 shrink-0 rounded-lg border border-slate-100"
                      />
                      <span>
                        <span className="block text-[13.5px] font-bold leading-snug text-ink-950 transition group-hover:text-brand-500">
                          {p.title}
                        </span>
                        <span className="mt-1.5 block text-[12px] text-slate-400">{p.date}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SidebarCard>

            <SidebarCard title="Popular Tags">
              <div className="flex flex-wrap gap-2">
                {popularTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 px-3.5 py-1.5 text-[12px] font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SidebarCard>

            <div className="rounded-2xl bg-ink-950 p-8 text-white">
              <IconChat className="h-8 w-8 text-brand-500" />
              <h3 className="mt-5 text-[1.15rem] font-bold">Got any Questions?</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-white/55">
                Talk to our team about the right solution for your business.
              </p>
              <Link
                to="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-md bg-brand-500 px-6 py-3.5 text-[14px] font-bold text-white transition hover:bg-brand-600"
              >
                Contact Us <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* related */}
      <section className="bg-slate-50 py-20 w-full px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[1.85rem] font-extrabold tracking-tight text-ink-950 sm:text-[2.25rem]">
              You might also like
            </h2>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[14px] font-bold text-brand-500">
              All articles <IconArrow className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-500/30"
              >
                <div className="overflow-hidden relative">
                  <PostImage src={p.image} alt={p.title} className="h-48 w-full transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-ink-950 shadow-sm">
                    {p.readTime}
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-brand-500">{p.category}</span>
                  <h3 className="mt-3 text-[1.15rem] font-extrabold leading-snug text-ink-950 transition group-hover:text-brand-500">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-500">{p.excerpt}</p>
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

function SidebarCard({ title, children }) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
      <h3 className="border-b-2 border-ink-950 pb-4 text-[1.15rem] font-extrabold tracking-tight text-ink-950">{title}</h3>
      <div className="mt-6">{children}</div>
    </div>
  )
}

function PrevNext({ slug }) {
  const i = posts.findIndex((p) => p.slug === slug)
  const prev = i > 0 ? posts[i - 1] : null
  const next = i < posts.length - 1 ? posts[i + 1] : null

  return (
    <div className="mt-10 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
      {prev ? (
        <Link to={`/blog/${prev.slug}`} className="group rounded-2xl border border-slate-200 p-6 transition hover:border-brand-500">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Previous</span>
          <p className="mt-2 text-[15px] font-bold leading-snug text-ink-950 transition group-hover:text-brand-500">
            {prev.title}
          </p>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          to={`/blog/${next.slug}`}
          className="group rounded-2xl border border-slate-200 p-6 text-right transition hover:border-brand-500 sm:col-start-2"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Next</span>
          <p className="mt-2 text-[15px] font-bold leading-snug text-ink-950 transition group-hover:text-brand-500">
            {next.title}
          </p>
        </Link>
      )}
    </div>
  )
}
