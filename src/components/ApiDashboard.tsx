"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: '00h', requests: 400, latency: 400 },
  { name: '04h', requests: 300, latency: 450 },
  { name: '08h', requests: 900, latency: 600 },
  { name: '12h', requests: 1480, latency: 800 },
  { name: '16h', requests: 1100, latency: 700 },
  { name: '20h', requests: 1700, latency: 900 },
  { name: '24h', requests: 1300, latency: 850 },
];

const ApiDashboard = () => {
  return (
    // ID adicionado para o Menu reconhecer a seção e largura alinhada (max-w-5xl ou 7xl)
    <section id="analytics" className="py-20 px-6 w-full max-w-7xl mx-auto">
      <div className="w-full bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h3 className="text-white font-bold text-2xl tracking-tight">Análise de Tráfego</h3>
            <p className="text-slate-500 text-sm font-medium">Requisições vs. Latência Global</p>
          </div>
          
          <div className="flex gap-6 bg-white/5 p-3 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
              <span className="text-slate-300 text-[10px] uppercase font-black tracking-widest">Requisições</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7]" />
              <span className="text-slate-300 text-[10px] uppercase font-black tracking-widest">Latência</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 10, fontWeight: 600 }} dy={15} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 10 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
                itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="requests" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorGreen)" />
              <Area type="monotone" dataKey="latency" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorPurple)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ApiDashboard;