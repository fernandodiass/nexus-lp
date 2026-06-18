'use client';
import { useState } from 'react';

function BentoCard({title,desc,accent,icon,wide,children}:{
  title:string; desc:string; accent:string;
  icon:React.ReactNode; wide?:boolean; children?:React.ReactNode;
}) {
  const [hov,setHov]=useState(false);
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      className={`relative glass glass-hover rounded-2xl p-6 sm:p-7 flex flex-col overflow-hidden
                  transition-all duration-300 ${hov?'shadow-card -translate-y-0.5':''}
                  ${wide?'md:col-span-2':''}`}>
      {/* Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-300"
        style={{background:`radial-gradient(circle,${accent}30 0%,transparent 70%)`,opacity:hov?1:.45}}/>
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
        style={{background:`${accent}20`,border:`1px solid ${accent}40`}}>
        {icon}
      </div>
      <h3 className="text-[15px] font-semibold text-t1 mb-2 tracking-tight">{title}</h3>
      <p className="text-[13px] text-t3 leading-relaxed">{desc}</p>
      {children && <div className="mt-5 flex-1">{children}</div>}
    </div>
  );
}

function SparkSVG() {
  const data=[30,45,38,55,48,62,58,70,65,78];
  const W=200,H=40,max=Math.max(...data),min=Math.min(...data);
  const sy=(v:number)=>H-((v-min)/(max-min))*(H-4)-2;
  const sx=(i:number)=>(i/(data.length-1))*W;
  const path=data.map((d,i)=>`${i===0?'M':'L'} ${sx(i)} ${sy(d)}`).join(' ');
  return (
    <div className="mt-3">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-10" preserveAspectRatio="none">
        <path d={path} stroke="#4ade80" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-[11px] text-green-400 mt-1 block">↑ Live — 12ms latency</span>
    </div>
  );
}

function NetworkSVG() {
  const nodes=[{x:50,y:30,l:'Market Data'},{x:20,y:65,l:'Portfolio'},{x:80,y:65,l:'Risk Model'},{x:50,y:88,l:'AI Engine'}];
  return (
    <div className="relative h-44 mt-2">
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <defs><filter id="gf"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        {[[0,3],[1,3],[2,3],[0,1],[0,2]].map(([a,b],i)=>(
          <line key={i} x1={nodes[a].x*3} y1={nodes[a].y*2} x2={nodes[b].x*3} y2={nodes[b].y*2}
            stroke="rgba(122,45,104,.35)" strokeWidth="1" strokeDasharray="4 4"/>
        ))}
        {nodes.map((n,i)=>(
          <g key={n.l}>
            <circle cx={n.x*3} cy={n.y*2} r="16" fill="rgba(7,3,18,.9)"
              stroke={i===3?'#7A2D68':'rgba(255,255,255,.1)'} strokeWidth="1.5"
              filter={i===3?'url(#gf)':undefined}/>
            <text x={n.x*3} y={n.y*2+4} textAnchor="middle" fontSize="8" fill="#D9D3DF" fontFamily="Inter">{n.l}</text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-0 right-0 glass rounded-xl px-3 py-2.5 backdrop-blur-xl">
        <div className="text-[10px] text-t3 mb-0.5">Prediction accuracy</div>
        <div className="text-lg font-bold text-rose-light">94.7%</div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none"
        style={{background:'radial-gradient(ellipse 80% 60% at 50% 40%,rgba(72,64,141,.06) 0%,transparent 70%)'}}/>

      <div className="section-wrap relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" fill="#D1AAB2"/>
            </svg>
            Platform capabilities
          </div>
          <h2 className="text-[clamp(26px,4vw,48px)] font-bold tracking-[-0.035em] leading-[1.1] text-t1 mb-4">
            Everything your team needs.<br/>
            <span className="grad-text-2">Nothing you don't.</span>
          </h2>
          <p className="text-[15px] text-t3 max-w-[500px] mx-auto leading-relaxed">
            From real-time market intelligence to automated compliance, Nexus handles complexity so your team focuses on alpha.
          </p>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          <BentoCard wide title="AI-Powered Analytics Engine"
            desc="Nexus's proprietary models process 50B+ data points daily, surfacing insights before the market moves."
            accent="#7A2D68"
            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 6V14L10 18L17 14V6L10 2Z" stroke="#D1AAB2" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 8L13 9.5V12.5L10 14L7 12.5V9.5L10 8Z" fill="#D1AAB2" fillOpacity="0.5"/></svg>}>
            <NetworkSVG/>
          </BentoCard>

          <BentoCard title="Real-time Data Feeds"
            desc="Sub-ms market data from 200+ global exchanges, normalized and ready."
            accent="#48408D"
            icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 14L3 10M9 14V7M15 14V3" stroke="#D1AAB2" strokeWidth="1.8" strokeLinecap="round"/></svg>}>
            <SparkSVG/>
          </BentoCard>

          <BentoCard title="Workflow Automation"
            desc="Build complex multi-step workflows with a visual editor. No code required."
            accent="#A9697B"
            icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="5" height="5" rx="1.5" stroke="#D1AAB2" strokeWidth="1.5"/><rect x="11" y="2" width="5" height="5" rx="1.5" stroke="#D1AAB2" strokeWidth="1.5"/><rect x="2" y="11" width="5" height="5" rx="1.5" stroke="#D1AAB2" strokeWidth="1.5"/><rect x="11" y="11" width="5" height="5" rx="1.5" stroke="#D1AAB2" strokeWidth="1.5"/><path d="M7 4.5H11M4.5 7V11M13.5 7V11M7 13.5H11" stroke="#D1AAB2" strokeWidth="1.2" strokeLinecap="round"/></svg>}/>

          <BentoCard title="Automated Compliance"
            desc="Stay audit-ready with one-click regulatory reporting for SEC, MiFID II, and FINRA."
            accent="#48408D"
            icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L14 4.5V10C14 13 11.5 15.5 9 16.5C6.5 15.5 4 13 4 10V4.5L9 2Z" stroke="#D1AAB2" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6.5 9L8.5 11L11.5 7" stroke="#D1AAB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}/>

          <BentoCard title="Developer-First API"
            desc="REST & GraphQL APIs with SDKs in 12 languages. Full sandbox environment."
            accent="#7A2D68"
            icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6 5L2 9L6 13" stroke="#D1AAB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L16 9L12 13" stroke="#D1AAB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 4L8 14" stroke="#D1AAB2" strokeWidth="1.5" strokeLinecap="round"/></svg>}>
            <div className="mt-3 bg-black/30 rounded-lg p-3 font-mono text-[11px] leading-relaxed">
              <span className="text-t3">{'// Fetch portfolio analytics'}</span><br/>
              <span className="text-indigo">const</span> <span className="text-rose-light">data</span>
              <span className="text-t3"> = await </span>
              <span className="text-plum">nexus</span><span className="text-t3">.</span>
              <span className="text-rose-light">analytics</span><span className="text-t3">({'{'}</span><br/>
              <span className="text-t3 pl-3">portfolio: </span><span className="text-rose-light">'main'</span><br/>
              <span className="text-t3">{'}'});</span>
            </div>
          </BentoCard>

          <BentoCard title="Institutional Reports"
            desc="White-label PDF, Excel, or CRM-integrated reports for your clients."
            accent="#A9697B"
            icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="2" width="12" height="14" rx="2" stroke="#D1AAB2" strokeWidth="1.5"/><path d="M6 6H12M6 9H12M6 12H9" stroke="#D1AAB2" strokeWidth="1.5" strokeLinecap="round"/></svg>}/>
        </div>
      </div>
    </section>
  );
}
