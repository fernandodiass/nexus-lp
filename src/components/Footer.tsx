'use client';
import { useState } from 'react';

const LINKS:{[k:string]:string[]} = {
  Product:   ['Features','Pricing','Changelog','Roadmap','API Docs'],
  Company:   ['About','Blog','Careers','Press','Contact'],
  Legal:     ['Privacy Policy','Terms of Service','Security','Compliance','GDPR'],
  Resources: ['Documentation','Community','Integrations','Status','Support'],
};

export default function Footer() {
  const [email,setEmail]=useState('');
  const [done,setDone]=useState(false);

  return (
    <footer id="footer" className="relative border-t border-white/[0.06] pt-16 sm:pt-20">
      <div className="absolute top-0 left-[30%] w-[40%] h-px"
        style={{background:'linear-gradient(90deg,transparent,rgba(122,45,104,.5),transparent)'}}/>

      <div className="section-wrap">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 pb-12 sm:pb-16 mb-12 sm:mb-16 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-[9px] bg-grad-brand flex items-center justify-center shadow-glow-plum">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 4.5V11.5L8 15L1 11.5V4.5L8 1Z" stroke="#F5F2F7" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M8 5L11 6.5V9.5L8 11L5 9.5V6.5L8 5Z" fill="#D1AAB2" fillOpacity="0.7"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-t1 tracking-tight">Nexus</span>
            </div>
            <p className="text-[13px] text-t3 leading-relaxed max-w-[320px] mb-5">
              The institutional-grade financial intelligence platform trusted by the world's leading asset managers, family offices, and hedge funds.
            </p>
            <div className="flex gap-2">
              {[
                'M3 3L10 10M10 3L3 10',
                'M3 9V11M3 5V5.1M6 11V7C6 5.3 7.3 4 9 4C10.7 4 12 5.3 12 7V11',
              ].map((path,i)=>(
                <button key={i}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center
                             text-t3 hover:text-t1 hover:bg-white/[0.06] hover:border-white/[0.11] transition-all duration-200 cursor-pointer">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d={path} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[14px] font-semibold text-t1 mb-2">Stay ahead of the market</h4>
            <p className="text-[12px] text-t3 leading-relaxed mb-4">Weekly insights on institutional investing. No spam.</p>
            {!done ? (
              <div className="flex">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                  placeholder="your@fund.com"
                  className="flex-1 min-w-0 px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.08] border-r-0
                             rounded-l-[8px] text-[13px] text-t1 placeholder:text-t3 outline-none
                             focus:border-plum/40 transition-colors duration-200"/>
                <button onClick={()=>email&&setDone(true)}
                  className="px-4 py-2.5 bg-grad-brand border border-rose-light/14 rounded-r-[8px]
                             text-t1 text-[13px] font-medium cursor-pointer transition-all duration-200
                             hover:shadow-glow-sm whitespace-nowrap shrink-0">
                  Subscribe
                </button>
              </div>
            ) : (
              <div className="px-4 py-2.5 bg-green-400/[0.08] border border-green-400/20 rounded-lg text-[13px] text-green-400">
                ✓ You're subscribed. Welcome to the inner circle.
              </div>
            )}
            <p className="text-[11px] text-t3 mt-2">Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12 sm:mb-16">
          {Object.entries(LINKS).map(([cat,links])=>(
            <div key={cat}>
              <h5 className="text-[11px] font-semibold text-t1 uppercase tracking-[.1em] mb-3.5">{cat}</h5>
              <div className="flex flex-col gap-2.5">
                {links.map(l=>(
                  <a key={l} href="#"
                    className="text-[12px] text-t3 hover:text-t2 transition-colors duration-200">
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4
                        pt-5 border-t border-white/[0.05] pb-8">
          <p className="text-[12px] text-t3">© 2026 Nexus Financial Technologies, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy','Terms','Cookies'].map(l=>(
              <a key={l} href="#" className="text-[12px] text-t3 hover:text-t2 transition-colors duration-200">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-400/[0.08] border border-green-400/15 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>
            <span className="text-[11px] text-green-400">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
