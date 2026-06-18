'use client';
import { useState } from 'react';

const FAQS = [
  {q:'How does Nexus connect to my existing systems?',
   a:'Nexus offers native integrations with 200+ platforms including Bloomberg, Refinitiv, Advent, Black Diamond, and all major custodians. Our REST and GraphQL APIs allow custom integrations, and our engineering team provides dedicated onboarding support to ensure a seamless migration with zero downtime.'},
  {q:'What level of security does Nexus provide?',
   a:"We're SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We maintain 99.99% uptime SLA with globally distributed, multi-region infrastructure. Systems undergo quarterly penetration testing by independent security firms."},
  {q:'Can I migrate data from my current portfolio management system?',
   a:'Yes. Our migration team handles the entire process end-to-end, including data validation and reconciliation. We support imports from all major PMS platforms including Advent, SS&C Eze, and Charles River IMS. Most migrations complete within 2–4 weeks with zero operational disruption.'},
  {q:'How does the AI Analytics Engine work?',
   a:'Our proprietary AI models are trained on 15+ years of market data and continuously updated with live feeds. The engine processes signals across multiple timeframes, asset classes, and geographies, surfacing insights with confidence scores and full explainability reports.'},
  {q:'What regulatory jurisdictions does Nexus support?',
   a:'Nexus supports regulatory reporting for US (SEC, FINRA, CFTC), EU (MiFID II, EMIR, AIFMD), UK (FCA), and select APAC jurisdictions. Our compliance team monitors regulatory changes globally and updates the platform proactively.'},
  {q:'Is there a trial period available?',
   a:'All Starter and Professional plans include a 14-day free trial with full access to every feature. No credit card required. For Enterprise, we offer a structured proof-of-concept engagement against your actual data and workflows.'},
  {q:'How is pricing determined for Enterprise plans?',
   a:'Enterprise pricing is based on AUM tiers, number of portfolios, data source requirements, and deployment model (cloud, hybrid, or on-premise). Most contracts are structured annually with volume discounts. Contact sales for a custom quote.'},
];

export default function Faq() {
  const [open,setOpen]=useState<number|null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">

          {/* Sticky left */}
          <div className="lg:sticky lg:top-24">
            <div className="badge mb-5">FAQ</div>
            <h2 className="text-[clamp(24px,3vw,38px)] font-bold tracking-[-0.03em] leading-[1.15] text-t1 mb-4">
              Everything you<br/>
              <span className="grad-text-2">need to know.</span>
            </h2>
            <p className="text-[13px] text-t3 leading-relaxed mb-7">
              Can't find the answer you're looking for? Our team is happy to help.
            </p>
            <button className="btn-secondary text-sm px-5 py-2.5">Contact support →</button>
          </div>

          {/* Accordion */}
          <div>
            {FAQS.map((f,i)=>(
              <div key={i} className={`border-b ${i<FAQS.length-1?'border-white/[0.06]':'border-transparent'}`}>
                <button onClick={()=>setOpen(open===i?null:i)}
                  className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left bg-transparent border-none cursor-pointer">
                  <span className={`text-[15px] font-medium leading-snug transition-colors duration-200 ${open===i?'text-t1':'text-t2'}`}>
                    {f.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200
                                   ${open===i?'bg-plum/18 border border-plum/30':'bg-white/[0.04] border border-white/[0.07]'}`}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                      className="transition-transform duration-250"
                      style={{transform:open===i?'rotate(45deg)':'rotate(0)',color:open===i?'#D1AAB2':'#A7A0B0'}}>
                      <path d="M5.5 2V9M2 5.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>
                <div className="overflow-hidden transition-all duration-350 ease-in-out"
                  style={{maxHeight:open===i?300:0,opacity:open===i?1:0}}>
                  <p className="text-[13px] text-t3 leading-relaxed pb-6 max-w-[580px]">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
