"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-44 pb-32 px-6 overflow-hidden bg-[#030303]">
      
      {/* --- EFEITO CIRCUIT BOARD (CINZA SUAVE) --- */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M10 10 L90 10 L90 90 L10 90 Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='white'/%3E%3Ccircle cx='90' cy='10' r='2' fill='white'/%3E%3Ccircle cx='90' cy='90' r='2' fill='white'/%3E%3Ccircle cx='10' cy='90' r='2' fill='white'/%3E%3Cpath d='M50 10 L50 30 M10 50 L30 50 M90 50 L70 50 M50 90 L50 70' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      {/* --- GLOWS DE FUNDO --- */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-[#22c55e]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[30%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* --- CONTEÚDO --- */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#22c55e]">
            Nexus Protocol v4.0
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-8"
        >
          Domine seus fluxos de datas <br /> 
          <span className="text-[#22c55e]">em tempo real.</span>
        </motion.h1>

        <motion.p 
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-12 font-medium"
        >
          Infraestrutura de visualização de alta performance. 
          Conecte suas APIs e monitore métricas críticas com uma interface de próxima geração.
        </motion.p>

        <motion.div className="flex justify-center">
          <button className="group relative px-10 py-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-[#22c55e]/50">
            <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-white font-bold text-[10px] uppercase tracking-[0.2em] group-hover:text-[#22c55e] transition-colors duration-300">
              Comprar Template
            </span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default Hero;