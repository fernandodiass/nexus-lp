'use client';

export default function CTASection() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="section-wrap">
        <div className="relative rounded-3xl overflow-hidden px-6 py-16 sm:px-16 sm:py-20
                        bg-plum/[0.06] border border-plum/20 text-center">
          {/* BG */}
          <div className="absolute inset-0 pointer-events-none"
            style={{background:'radial-gradient(ellipse at 30% 50%,rgba(122,45,104,.2) 0%,transparent 55%),radial-gradient(ellipse at 70% 50%,rgba(72,64,141,.14) 0%,transparent 55%)'}}/>
          <div className="absolute top-0 left-[8%] right-[8%] h-px"
            style={{background:'linear-gradient(90deg,transparent,rgba(209,170,178,.4),transparent)'}}/>

          <div className="relative z-10">
            <div className="badge mb-6 mx-auto">Start today — free for 14 days</div>
            <h2 className="text-[clamp(26px,5vw,54px)] font-bold tracking-[-0.035em] leading-[1.1] text-t1 mb-5">
              The future of wealth management<br className="hidden sm:block"/>
              <span className="grad-text"> starts with better data.</span>
            </h2>
            <p className="text-[16px] sm:text-[17px] text-t3 max-w-[500px] mx-auto leading-relaxed mb-10">
              Join 4,200+ financial institutions managing over $2.4 trillion with Nexus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <button className="btn-primary text-[15px] px-8 py-3.5 w-full sm:w-auto justify-center">
                Get started for free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary text-[15px] px-8 py-3.5 w-full sm:w-auto justify-center">
                Talk to sales
              </button>
            </div>
            <p className="text-[12px] text-t3">No credit card required · SOC 2 Type II · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
