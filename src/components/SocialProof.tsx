'use client';

const LOGOS  = ['BlackRock','Sequoia','Andreessen','Goldman Sachs','JPMorgan','Citadel'];
const METRICS = [
  {value:'$2.4T',  label:'Assets under management'},
  {value:'99.99%', label:'Uptime SLA'},
  {value:'12ms',   label:'Average API latency'},
  {value:'4,200+', label:'Enterprise clients'},
];

export default function SocialProof() {
  return (
    <section id="social" className="relative py-20 sm:py-28">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-base to-transparent pointer-events-none"/>

      <div className="section-wrap">
        {/* Label */}
        <p className="text-center text-[11px] font-medium tracking-[0.14em] uppercase text-t3 mb-7">
          Trusted by the world's leading financial institutions
        </p>

        {/* Logo strip */}
        <div className="relative flex flex-wrap items-center justify-center mb-14 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none"/>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none"/>
          {LOGOS.map((logo,i)=>(
            <div key={logo}
              className={`px-6 sm:px-9 py-3 text-sm sm:text-[15px] font-semibold text-t3 opacity-45 hover:opacity-100
                          transition-opacity duration-200 cursor-default whitespace-nowrap tracking-tight
                          ${i < LOGOS.length-1 ? 'border-r border-white/[0.05]' : ''}`}>
              {logo}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-14"/>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.06] rounded-2xl overflow-hidden">
          {METRICS.map((m,i)=>(
            <div key={m.label}
              className={`relative px-6 sm:px-8 py-8 sm:py-10 bg-base hover:bg-plum/[0.05]
                          transition-colors duration-300 group
                          ${i < METRICS.length-1 ? 'border-r border-white/[0.05]' : ''}
                          ${i < 2 ? 'border-b border-white/[0.05] lg:border-b-0' : ''}`}>
              <div className="text-[clamp(26px,4vw,40px)] font-bold tracking-[-0.035em] mb-2 grad-text">
                {m.value}
              </div>
              <div className="text-[13px] text-t3 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
