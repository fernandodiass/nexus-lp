'use client';
import { useEffect, useRef } from 'react';

function MiniChart() {
  const pts = [40,55,45,65,58,72,68,82,75,90,85,95];
  const W=400, H=80, max=Math.max(...pts), min=Math.min(...pts);
  const sy=(v:number)=>H-((v-min)/(max-min))*(H-8)-4;
  const sx=(i:number)=>(i/(pts.length-1))*W;
  const line=pts.map((p,i)=>`${i===0?'M':'L'} ${sx(i)} ${sy(p)}`).join(' ');
  const area=`${line} L ${W} ${H} L 0 ${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-[80px]" preserveAspectRatio="none">
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A2D68" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#7A2D68" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={area} fill="url(#hg)"/>
      <path d={line} stroke="#A9697B" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={sx(pts.length-1)} cy={sy(pts[pts.length-1])} r="3" fill="#D1AAB2"/>
    </svg>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    let w = c.width = window.innerWidth, h = c.height = 900, t = 0;
    const resize=()=>{ w=c.width=window.innerWidth; h=c.height=900; };
    window.addEventListener('resize', resize);
    const pts = Array.from({length:55},()=>({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
      r:Math.random()*1.4+.4, o:Math.random()*.32+.08
    }));
    let aid: number;
    const draw=()=>{
      ctx.clearRect(0,0,w,h); t+=.004;
      [[w*.3+Math.sin(t)*60,h*.4,380,'rgba(122,45,104,.1)'],
       [w*.72+Math.cos(t*.8)*80,h*.5,320,'rgba(72,64,141,.08)'],
       [w*.5,h*.18+Math.sin(t*1.2)*40,260,'rgba(209,170,178,.05)']
      ].forEach(([x,y,r,col])=>{
        const g=ctx.createRadialGradient(x as number,y as number,0,x as number,y as number,r as number);
        g.addColorStop(0,col as string); g.addColorStop(1,'transparent');
        ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
      });
      pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(209,170,178,${p.o})`; ctx.fill();
      });
      aid=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{ cancelAnimationFrame(aid); window.removeEventListener('resize',resize); };
  },[]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">

      {/* Canvas BG */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"/>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:`linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)`,
          backgroundSize:'72px 72px',
          maskImage:'radial-gradient(ellipse 80% 60% at 50% 50%,black,transparent)',
          WebkitMaskImage:'radial-gradient(ellipse 80% 60% at 50% 50%,black,transparent)',
        }}/>

      {/* Spotlight */}
      <div className="absolute -top-[5%] left-1/2 -translate-x-1/2 w-[70vw] h-[60vh] pointer-events-none"
        style={{background:'radial-gradient(ellipse,rgba(122,45,104,.18) 0%,rgba(72,64,141,.08) 40%,transparent 70%)'}}/>

      {/* Content */}
      <div className="relative z-10 w-full section-wrap flex flex-col items-center pt-16 sm:pt-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 pr-4 rounded-full mb-8
                        bg-plum/12 border border-plum/25 cursor-default">
          <span className="px-2 py-0.5 rounded-full bg-grad-brand text-[11px] font-bold text-t1 tracking-widest uppercase">New</span>
          <span className="text-[13px] text-t2">Introducing Nexus AI Engine — 10× faster insights</span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-rose-med">
            <path d="M2.5 6.5H10M7.5 4L10 6.5L7.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* H1 */}
        <h1 className="text-[clamp(36px,7vw,76px)] font-bold tracking-[-0.04em] leading-[1.06]
                       text-center max-w-[900px] mb-6">
          <span className="text-t1">Financial intelligence</span><br/>
          <span className="grad-text">built for scale.</span>
        </h1>

        {/* Sub */}
        <p className="text-[clamp(15px,2vw,19px)] text-t3 text-center max-w-[540px] leading-relaxed mb-10 px-2">
          Nexus unifies your entire financial stack — real-time data, predictive analytics, and automated workflows — into a single command center.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button className="btn-primary text-[15px] px-7 py-3.5">
            Start for free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-secondary text-[15px] px-7 py-3.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M5.5 5L9.5 7L5.5 9V5Z" fill="currentColor"/>
            </svg>
            Watch demo
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-14 text-[12px] text-t3 px-4">
          {['🔒 SOC 2 Type II','⚡ 99.99% uptime','🌍 GDPR compliant','🛡️ Bank-grade security'].map(b=>(
            <span key={b} className="flex items-center gap-1.5">{b}</span>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="relative w-full max-w-[960px] -mb-24 sm:-mb-28">
          {/* Glow */}
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[65%] h-[180px] pointer-events-none z-0"
            style={{background:'radial-gradient(ellipse,rgba(122,45,104,.3) 0%,rgba(72,64,141,.15) 50%,transparent 70%)',filter:'blur-40px)'}}/>

          {/* Floating cards — Alterado para z-30 para forçar a renderização na camada superior */}
          <div className="hidden lg:block absolute top-[15%] -left-20 animate-float z-30">
            <div className="glass rounded-xl px-4 py-3 shadow-card">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                     style={{background:'linear-gradient(135deg,rgba(122,45,104,.3),rgba(72,64,141,.3))'}}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L2 8M7 12V5M12 12V2" stroke="#D1AAB2" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-t1">+$142.8K</div>
                  <div className="text-[10px] text-t3">Revenue this month</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-[38%] -right-20 animate-float2 z-30">
            <div className="glass rounded-xl px-4 py-3 shadow-card">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"/>
                <span className="text-[12px] text-t2">AI Engine active</span>
              </div>
            </div>
          </div>

          {/* Frame — Alterado de z-10 para z-10 explícito garantindo que os cards flutuantes fiquem acima */}
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/[0.08]
                          bg-white/[0.02] shadow-dashboard">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3 bg-white/[0.02] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                {['#ff5f57','#ffbd2e','#28ca41'].map(c=>(
                  <div key={c} className="w-2.5 h-2.5 rounded-full opacity-70" style={{background:c}}/>
                ))}
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] text-t3">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1L9 3V7L5 9L1 7V3L5 1Z" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                  app.nexus.finance/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                {label:'Total AUM',  value:'$2.84B', change:'+12.4%',   up:true},
                {label:'Portfolios', value:'1,284',  change:'+89/week', up:true},
                {label:'Avg Return', value:'18.7%',  change:'-0.3%',    up:false},
              ].map(s=>(
                <div key={s.label} className="glass rounded-xl p-3.5">
                  <div className="text-[10px] text-t3 uppercase tracking-widest mb-1.5">{s.label}</div>
                  <div className="text-[20px] font-bold text-t1 tracking-tight mb-1">{s.value}</div>
                  <div className={`text-[11px] ${s.up?'text-green-400':'text-red-400'}`}>{s.change}</div>
                </div>
              ))}

              {/* Chart */}
              <div className="col-span-2 glass rounded-xl p-3.5">
                <div className="text-[10px] text-t3 uppercase tracking-widest mb-2">Portfolio Performance</div>
                <MiniChart/>
              </div>

              {/* Alloc */}
              <div className="col-span-2 sm:col-span-1 glass rounded-xl p-3.5 flex flex-col gap-2">
                <div className="text-[10px] text-t3 uppercase tracking-widest mb-1">Allocation</div>
                {[['Equities',45,'#7A2D68'],['Fixed Income',28,'#48408D'],['Alternatives',17,'#A9697B'],['Cash',10,'#D1AAB2']].map(([l,p,c])=>(
                  <div key={l as string} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{background:c as string}}/>
                    <span className="flex-1 text-[10px] text-t2">{l}</span>
                    <span className="text-[10px] text-t3">{p}%</span>
                    <div className="w-10 h-1 rounded-full bg-white/[0.07] overflow-hidden">
                      <div className="h-full rounded-full" style={{width:`${p}%`,background:c as string}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}