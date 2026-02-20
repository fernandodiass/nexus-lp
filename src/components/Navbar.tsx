"use client";

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Preços', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO: Símbolo Verde + Glow Roxo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 bg-purple-600/60 blur-xl rounded-full" />
            <div className="relative w-6 h-6 border-2 border-[#22c55e] rounded flex items-center justify-center font-black text-[#22c55e] text-xs">
              N
            </div>
          </div>
          <span className="text-white font-black uppercase tracking-tighter text-xl">
            Nexus<span className="text-[#22c55e]">LP</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#22c55e] transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Acessar Desktop */}
        <div className="hidden md:block">
          <button className="group bg-white/5 border border-white/10 px-6 py-2 rounded-xl transition-all duration-300 hover:border-[#22c55e]/40">
            <span className="text-white font-bold text-[10px] uppercase tracking-widest group-hover:text-[#22c55e] transition-colors">
              Acessar
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Painel Mobile Simples */}
      {isOpen && (
        <div className="absolute top-full left-6 right-6 mt-4 bg-black border border-white/10 rounded-3xl p-8 md:hidden shadow-2xl">
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-[10px] font-black uppercase text-slate-400">
                {link.name}
              </a>
            ))}
            <button className="w-full bg-white/5 border border-white/10 py-3 rounded-xl text-white font-bold text-[10px] uppercase tracking-widest hover:text-[#22c55e]">
              Acessar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;