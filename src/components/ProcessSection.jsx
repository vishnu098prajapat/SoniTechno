import { IconCheck } from './Icons.jsx'

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      
      <div className="w-full px-6 lg:px-12 relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <span className="label">Our Process</span>
          <h2 className="mt-6 h2 text-balance text-[2rem] sm:text-[2.75rem]">
            How we build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">Few can do both.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500">
            We follow a streamlined, robust methodology to take your idea from concept to a fully scaling digital product without the unnecessary friction.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connecting Line (Desktop/Tablet Only) */}
          <div className="hidden md:block absolute top-[180px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand-100 via-brand-500 to-brand-100 z-0 opacity-40 shadow-[0_0_15px_rgba(223,60,60,0.5)]" />
          
          <div className="grid gap-16 md:gap-4 lg:gap-8 md:grid-cols-3 relative z-10">
            
            {/* Step 1: Strategy */}
            <div className="flex flex-col items-center group cursor-default">
              {/* The Card */}
              <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-4 md:p-6 w-full max-w-[320px] min-h-[280px] flex flex-col transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-500/10 relative animate-floaty">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Opportunity Brief</span>
                  <span className="bg-green-50 text-green-600 border border-green-100 text-[10px] font-bold px-2.5 py-1 rounded-full">Validated</span>
                </div>
                
                <div className="bg-gradient-to-br from-brand-600 to-brand-500 rounded-2xl p-4 md:p-5 mb-4 shadow-inner text-center flex-1 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                  <h4 className="text-white font-serif italic text-lg leading-snug relative z-10">"What should we build?"</h4>
                </div>

                <ul className="space-y-2 text-[11px] md:text-[12.5px] font-medium text-slate-500 pb-2">
                  <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-brand-500 transition-transform duration-300 group-hover:scale-110" /> Market Validated</li>
                  <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-brand-500 transition-transform duration-300 group-hover:scale-110 delay-75" /> Business Model</li>
                  <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-brand-500 transition-transform duration-300 group-hover:scale-110 delay-150" /> Real Demand</li>
                </ul>
              </div>
              
              {/* Node connecting line */}
              <div className="hidden md:flex w-6 h-6 rounded-full bg-white border-[4px] border-brand-500 my-8 shadow-[0_0_15px_rgba(223,60,60,0.4)] z-10 transition-transform duration-500 group-hover:scale-125" />

              {/* Text */}
              <div className="text-center md:mt-0 mt-8 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-extrabold text-ink-950 mb-3">Strategy</h3>
                <p className="text-[13px] md:text-[13.5px] text-slate-500 leading-relaxed max-w-[280px] mx-auto px-2">
                  We decide what is worth building before the budget is committed.
                </p>
              </div>
            </div>

            {/* Step 2: Delivery */}
            <div className="flex flex-col items-center group cursor-default">
              {/* The Card */}
              <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-4 md:p-6 w-full max-w-[320px] min-h-[280px] flex flex-col transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-500/10 relative animate-floaty" style={{animationDelay: '1s'}}>
                <div className="bg-ink-900 rounded-2xl p-4 md:p-5 shadow-lg relative overflow-hidden flex-1 flex flex-col justify-between transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-brand-500/5" />
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-center relative z-10 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 transition-transform group-hover:scale-110" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 transition-transform group-hover:scale-110 delay-75" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 transition-transform group-hover:scale-110 delay-150" />
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">v1.0.0</span>
                  </div>

                  {/* Body */}
                  <div className="relative z-10 space-y-3 mt-2">
                     <div className="w-3/4 h-2 bg-white/20 rounded-full overflow-hidden">
                       <div className="w-full h-full bg-white/40 animate-pulse" />
                     </div>
                     <div className="w-1/2 h-2 bg-brand-500/80 rounded-full" />
                     <div className="w-5/6 h-2 bg-white/10 rounded-full" />
                  </div>

                  {/* Bottom Bar */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white">MVP Shipped</span>
                    <span className="bg-brand-500/20 text-brand-400 border border-brand-500/30 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-[0_0_10px_rgba(223,60,60,0.3)]">Live</span>
                  </div>
                </div>
              </div>
              
              {/* Node connecting line */}
              <div className="hidden md:flex w-6 h-6 rounded-full bg-white border-[4px] border-brand-500 my-8 shadow-[0_0_15px_rgba(223,60,60,0.4)] z-10 transition-transform duration-500 group-hover:scale-125" />

              {/* Text */}
              <div className="text-center md:mt-0 mt-8 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-extrabold text-ink-950 mb-3">Delivery</h3>
                <p className="text-[13px] md:text-[13.5px] text-slate-500 leading-relaxed max-w-[280px] mx-auto px-2">
                  We move from idea to prototype, MVP, and live product with speed and structure.
                </p>
              </div>
            </div>

            {/* Step 3: Growth */}
            <div className="flex flex-col items-center group cursor-default">
              {/* The Card */}
              <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-4 md:p-6 w-full max-w-[320px] min-h-[280px] flex flex-col transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-500/10 relative animate-floaty" style={{animationDelay: '2s'}}>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Traction</span>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-100">Growing</span>
                </div>
                
                {/* CSS Chart */}
                <div className="flex-1 flex items-end justify-between gap-2 md:gap-3 px-2 md:px-3 pb-2 border-b-2 border-slate-100 transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="w-1/4 bg-slate-100 h-[30%] rounded-t-md transition-all duration-500 group-hover:bg-slate-200" />
                  <div className="w-1/4 bg-slate-200 h-[50%] rounded-t-md transition-all duration-500 group-hover:bg-brand-100" />
                  <div className="w-1/4 bg-brand-100 h-[65%] rounded-t-md transition-all duration-500 group-hover:bg-brand-400" />
                  <div className="w-1/4 bg-brand-500 h-[90%] rounded-t-md shadow-lg transition-all duration-500 group-hover:h-[100%] group-hover:shadow-brand-500/40" />
                </div>
                
                <div className="flex justify-between mt-2 px-1 text-[10px] font-bold text-slate-300">
                  <span>M1</span>
                  <span>M2</span>
                  <span>M3</span>
                </div>
                <div className="text-center mt-3 text-[11px] font-bold text-brand-500 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  Clearer Scale Path
                </div>
              </div>
              
              {/* Node connecting line */}
              <div className="hidden md:flex w-6 h-6 rounded-full bg-white border-[4px] border-brand-500 my-8 shadow-[0_0_15px_rgba(223,60,60,0.4)] z-10 transition-transform duration-500 group-hover:scale-125" />

              {/* Text */}
              <div className="text-center md:mt-0 mt-8 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-extrabold text-ink-950 mb-3">Growth</h3>
                <p className="text-[13px] md:text-[13.5px] text-slate-500 leading-relaxed max-w-[280px] mx-auto px-2">
                  We combine validation, product design, and growth execution in one connected journey.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
