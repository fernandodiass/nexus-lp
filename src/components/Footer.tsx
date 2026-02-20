"use client";
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-10 px-6 overflow-hidden border-t border-white/5">
      {/* Efeito de Brilho de Fundo (Glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-75 bg-cyber-purple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-50 h-50 bg-neon-green/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 bg-purple-600/60 blur-xl rounded-full" />
            <div className="relative w-6 h-6 border-2 border-[#ffffff] rounded flex items-center justify-center font-black text-[#ffffff] text-xs">
              N
            </div>
          </div>
          <span className="text-white font-black uppercase tracking-tighter text-xl">
            Nexus<span className="text-[#ffffff]">LP</span>
          </span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              O cockpit definitivo para monitoramento de dados em tempo real. 
              Construído para desenvolvedores que não aceitam menos que a perfeição.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Produto</h4>
            <ul className="space-y-4">
              {['Features', 'Preços', 'Docs', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-neon-green text-sm transition-colors uppercase font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Social</h4>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Github size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: "#22c55e" }}
                  className="text-slate-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[10px] uppercase font-black tracking-widest">
            © 2026 Nexus Systems — Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="text-slate-600 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;