'use client';
import { useState } from 'react';

const TABS = ['Overview','Analytics','Risk','Compliance'];
const PORTFOLIOS = [
  {name:'Global Macro',   aum:'$840M', ret:'+18.4%', up:true,  risk:'Med'},
  {name:'Long/Short',     aum:'$620M', ret:'+12.1%', up:true,  risk:'High'},
  {name:'Fixed Income',   aum:'$1.2B', ret:'+4.8%',  up:true,  risk:'Low'},
  {name:'EM',             aum:'$380M', ret:'-2.3%',  up:false, risk:'High'},
];

function TrafficChart() {
  const months=['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb'];
  const vals=[42,58,51,67,62,75,71,88];
  const W=400,H=80,mx=Math.max(...vals),mn=Math.min(...vals)-4;
  const sy=(v:number)=>H-12-((v-mn)/(mx-mn))*(H-18);
  const sx=(i:number)=>20+(i/(vals.length-1))*(W-40);
  const line=vals.map((v,i)=>`${i===0?'M':'L'} ${sx(i)} ${sy(v)}`).join(' ');
  const area=`${line} L ${sx(vals.length-1)} ${H-12} L ${sx(0)} ${H-12} Z`;
  return (
    <div className="glass rounded-xl p-3.5 mb-3">
      <div className="flex justify-between mb-2">
        <span className="text-[9px] text-t3 uppercase tracking-widest">Performance</span>
        <span className="text-[10px] text-green-400">↑ 8M rolling</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-[80px]" preserveAspectRatio="none">
        <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A2D68" stopOpacity="0.25"/><stop offset="100%" stopColor="#7A2D68" stopOpacity="0"/>
        </linearGradient></defs>
        <path d={area} fill="url(#ag)"/>
        <path d={line} stroke="#A9697B" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {vals.map((v,i)=><circle key={i} cx={sx(i)} cy={sy(v)} r="2.5" fill={i===vals.length-1?'#D1AAB2':'#7A2D68'}/>)}
      </svg>
      <div className="flex justify-between mt-1">
        {months.map(m=><span key={m} className="text-[8px] text-t3">{m}</span>)}
      </div>
    </div>
  );
}

export default function ApiDashboard() {
  const [tab,setTab]=useState(0);
  const riskColor=(r:string)=>r==='Low'?'text-green-400 bg-green-400/10':r==='High'?'text-red-400 bg-red-400/10':'text-yellow-400 bg-yellow-400/10';

  return (
    <section id="product" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] pointer-events-none"
        style={{background:'radial-gradient(ellipse,rgba(72,64,141,.08) 0%,transparent 70%)'}}/>

      <div className="section-wrap relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left copy */}
          <div>
            <div className="badge mb-6">⬡ Command Center</div>
            <h2 className="text-[clamp(26px,3.5vw,44px)] font-bold tracking-[-0.03em] leading-[1.1] text-t1 mb-5">
              One dashboard.<br/>
              <span className="grad-text-2">Complete clarity.</span>
            </h2>
            <p className="text-[15px] text-t3 leading-relaxed mb-8">
              Stop switching between Bloomberg terminals, spreadsheets, and legacy tools. Nexus centralizes your entire investment operation.
            </p>
            <div className="flex flex-col gap-3 mb-9">
              {['Real-time P&L across all portfolios and sub-accounts','Risk exposure heatmaps with VaR calculations','Automated rebalancing triggers and execution','Integrated communication timeline per position'].map(txt=>(
                <div key={txt} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 bg-plum/15 border border-plum/25">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M2 4.5L4 6.5L7 3" stroke="#D1AAB2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[13px] text-t2 leading-relaxed">{txt}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary text-sm px-5 py-2.5">Request a demo</button>
              <button className="btn-secondary text-sm px-5 py-2.5">View documentation →</button>
            </div>
          </div>

          {/* Right dashboard */}
          <div className="relative">
            <div className="absolute inset-[-30px] pointer-events-none"
              style={{background:'radial-gradient(ellipse at 50% 60%,rgba(122,45,104,.12) 0%,transparent 70%)'}}/>
            <div className="relative glass rounded-2xl overflow-hidden shadow-dashboard">
              {/* Tabs */}
              <div className="flex items-center gap-0 px-4 bg-white/[0.02] border-b border-white/[0.06] overflow-x-auto no-scrollbar">
                {TABS.map((t,i)=>(
                  <button key={t} onClick={()=>setTab(i)}
                    className={`px-3.5 py-3 text-[11px] font-medium border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 bg-transparent
                                ${tab===i?'text-t1 border-plum':'text-t3 border-transparent hover:text-t2'}`}>
                    {t}
                  </button>
                ))}
                <div className="ml-auto flex items-center gap-1.5 text-[10px] text-green-400 px-3 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,.6)]"/>
                  Live
                </div>
              </div>
              {/* Body */}
              <div className="p-4">
                <div className="grid grid-cols-3 gap-2.5 mb-3">
                  {[{l:'Total AUM',v:'$3.04B',s:'+$142M today',c:'text-green-400'},{l:'Net P&L',v:'+$84.2M',s:'YTD',c:'text-green-400'},{l:'Sharpe',v:'1.84',s:'vs 1.20',c:'text-rose-light'}].map(s=>(
                    <div key={s.l} className="glass rounded-lg p-3">
                      <div className="text-[9px] text-t3 uppercase tracking-widest mb-1">{s.l}</div>
                      <div className="text-[16px] font-bold text-t1 tracking-tight">{s.v}</div>
                      <div className={`text-[10px] ${s.c}`}>{s.s}</div>
                    </div>
                  ))}
                </div>
                <TrafficChart/>
                {/* Table */}
                <div>
                  <div className="grid grid-cols-[1fr_60px_60px_48px] gap-1.5 px-2.5 pb-1.5 border-b border-white/[0.05]">
                    {['Portfolio','AUM','Return','Risk'].map(h=>(
                      <div key={h} className="text-[8px] text-t3 uppercase tracking-[.07em]">{h}</div>
                    ))}
                  </div>
                  {PORTFOLIOS.map((p,i)=>(
                    <div key={p.name} className={`grid grid-cols-[1fr_60px_60px_48px] gap-1.5 px-2.5 py-2
                                                   hover:bg-white/[0.02] transition-colors duration-200
                                                   ${i<PORTFOLIOS.length-1?'border-b border-white/[0.03]':''}`}>
                      <div className="text-[11px] text-t2">{p.name}</div>
                      <div className="text-[11px] text-t1 font-medium">{p.aum}</div>
                      <div className={`text-[11px] font-medium ${p.up?'text-green-400':'text-red-400'}`}>{p.ret}</div>
                      <div className={`text-[9px] rounded px-1.5 py-0.5 inline-flex items-center ${riskColor(p.risk)}`}>{p.risk}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
