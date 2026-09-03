import { Link } from 'react-router-dom'

export default function PageHero({ kicker, title, lead, crumbs = [], index, image, compact }) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-slate-50 to-white pt-16 text-ink-950 sm:pt-20 dark:from-[#0a0a0c] dark:to-[#141417] dark:text-white ${compact ? 'pb-8' : 'pb-16 sm:pb-20 border-b border-slate-200 shadow-sm dark:border-ink-200'}`}>
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-10 dark:opacity-5" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(223,60,60,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(223,60,60,0.1),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[30rem] w-[30rem] rounded-full bg-purple-500/5 blur-[100px] dark:bg-purple-500/10" />

      <div className="w-full px-6 lg:px-12 relative">
        <nav className="flex flex-wrap items-center gap-2 text-[12.5px] text-slate-500 mb-8 font-medium tracking-wide uppercase dark:text-slate-400">
          <Link to="/" className="hover:text-brand-500 transition-colors">Home</Link>
          {crumbs.map((c, i) => (
            <span key={c} className="flex items-center gap-2">
              <span className="text-slate-300 dark:text-ink-300">/</span>
              <span className={i === crumbs.length - 1 ? 'text-brand-500 font-bold' : ''}>{c}</span>
            </span>
          ))}
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 max-w-5xl z-10">
            {kicker && <span className="label mb-4">{kicker}</span>}
            {title && (
              <h1 className="mt-4 display text-balance text-[2.5rem] leading-[1.1] sm:text-[4rem] lg:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-ink-950 via-ink-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 drop-shadow-sm pb-2">
                {title}
              </h1>
            )}
            {lead && <p className="mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-slate-500 border-l-4 border-brand-500 pl-6">{lead}</p>}
          </div>

          {/* Right Side - Image or Index Watermark */}
          <div className="relative flex justify-center shrink-0 z-0 mt-8 lg:mt-0 mx-auto lg:mx-0 w-full sm:w-[80%] md:w-[60%] lg:w-[450px]">
            {(!image && index) && (
              <div className="hidden lg:flex items-center justify-center select-none pr-12">
                <p className="font-serif italic leading-none text-transparent bg-clip-text bg-gradient-to-br from-brand-500/40 to-brand-500/5 drop-shadow-[0_10px_30px_rgba(223,60,60,0.15)] text-[12rem] xl:text-[16rem] transform rotate-3">
                  {index}
                </p>
              </div>
            )}
            
            {image && (
              <div className="relative z-10 w-full">
                <div className="absolute inset-0 bg-brand-500/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-2xl" />
                <img src={image} alt={title} className="relative w-full aspect-video h-auto sm:aspect-auto sm:h-[280px] lg:h-[320px] object-cover rounded-2xl shadow-xl border-4 border-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
