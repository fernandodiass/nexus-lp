'use client';
import { useState } from 'react';

const PLANS = [
  {name:'Starter',price:299,desc:'For emerging funds and boutique RIAs getting started.',
   features:['Up to 5 portfolios','10 data sources','Standard analytics suite','Email support','API 10K calls/mo','Basic compliance'],
   cta:'Start free trial',rec:false},
  {name:'Professional',price:999,desc:'The full Nexus platform for established funds managing institutional capital.',
   features:['Unlimited portfolios','200+ data sources','AI Analytics Engine','Priority support + CSM','API 500K calls/mo','Full compliance suite','Custom risk models','White-label reports'],
   cta:'Start free trial',rec:true,badge:'Most popular'},
  {name:'Enterprise',price:0,desc:'Dedicated infrastructure for the world\'s largest institutions.',
   features:['Everything in Professional','Dedicated cloud infra','Custom data integrations','SLA guarantees','Unlimited API access','On-premise deployment','Dedicated support team','Regulatory consulting'],
   cta:'Contact sales',rec:false},
];

export default function Pricing() {
  const [annual,setAnnual]=useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vh] pointer-events-none"
        style={{background:'radial-gradient(ellipse,rgba(72,64,141,.07) 0%,transparent 70%)'}}/>

      <div className="section-wrap relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-5">Transparent pricing</div>
          <h2 className="text-[clamp(26px,4vw,48px)] font-bold tracking-[-0.035em] text-t1 mb-4">
            Invest in your infrastructure.
          </h2>
          <p className="text-[15px] text-t3 max-w-[460px] mx-auto leading-relaxed mb-8">
            No surprise fees. No seat-based pricing. One plan that scales with your AUM.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className={`text-sm transition-colors ${annual?'text-t3':'text-t1'}`}>Monthly</span>
            <button onClick={()=>setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-all duration-200 cursor-pointer border border-white/10
                          ${annual?'bg-grad-brand':'bg-white/[0.08]'}`}>
              <div className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-t1 transition-all duration-200 ${annual?'left-[26px]':'left-[3px]'}`}/>
            </button>
            <span className={`text-sm transition-colors ${annual?'text-t1':'text-t3'}`}>Annual</span>
            {annual && <span className="text-[11px] text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2 py-0.5">Save 20%</span>}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map(plan=>{
            const price = plan.price===0 ? null : annual ? Math.round(plan.price*.8) : plan.price;
            return (
              <div key={plan.name}
                className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-300
                            hover:-translate-y-1 hover:shadow-card
                            ${plan.rec
                              ? 'bg-plum/[0.07] border-plum/30 shadow-[0_0_60px_rgba(122,45,104,.1)] md:scale-[1.02]'
                              : 'glass glass-hover'}`}>
                {plan.rec && (
                  <div className="absolute top-0 left-[8%] right-[8%] h-px"
                    style={{background:'linear-gradient(90deg,transparent,rgba(209,170,178,.45),transparent)'}}/>
                )}
                {plan.badge && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold
                                  text-rose-light bg-gradient-to-r from-plum/28 to-indigo/28 border border-plum/30 mb-4">
                    ✦ {plan.badge}
                  </div>
                )}
                <h3 className="text-[17px] font-semibold text-t1 mb-2">{plan.name}</h3>
                <p className="text-[12px] text-t3 leading-relaxed mb-5 min-h-[40px]">{plan.desc}</p>

                <div className="flex items-end gap-1 mb-5">
                  {price === null
                    ? <span className="text-[40px] font-bold tracking-[-0.04em] text-t1 leading-none">Custom</span>
                    : <>
                        <span className="text-[13px] text-t3 mb-2.5">$</span>
                        <span className="text-[44px] font-bold tracking-[-0.04em] text-t1 leading-none">{price}</span>
                        <span className="text-[13px] text-t3 mb-2.5">/mo</span>
                      </>
                  }
                </div>

                <button className={`w-full flex items-center justify-center gap-2 py-3 rounded-[9px] text-[13px] font-medium
                                    transition-all duration-200 cursor-pointer mb-5
                                    ${plan.rec
                                      ? 'bg-grad-brand border border-rose-light/15 text-t1 hover:shadow-glow-sm'
                                      : 'bg-white/[0.04] border border-white/[0.08] text-t2 hover:text-t1 hover:border-white/[0.13]'}`}>
                  {plan.cta} →
                </button>

                <div className="h-px bg-white/[0.06] mb-5"/>

                <div className="flex flex-col gap-2.5">
                  {plan.features.map(f=>(
                    <div key={f} className="flex items-start gap-2.5 text-[12px] text-t2">
                      <div className={`w-[14px] h-[14px] rounded-full flex items-center justify-center shrink-0 mt-0.5
                                       ${plan.rec?'bg-plum/20':'bg-white/[0.06]'}`}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3 5.5L6.5 2" stroke="#D1AAB2" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-[12px] text-t3 mt-9">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
