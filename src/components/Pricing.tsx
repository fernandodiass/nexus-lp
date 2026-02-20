"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import React from 'react';

const plans = [
  {
    name: "Starter",
    price: "29",
    desc: "Para pequenos projetos e devs solo.",
    features: ["5 Endpoints Ativos", "Sync a cada 5min", "Suporte via Email"],
    highlight: false
  },
  {
    name: "Pro",
    price: "79",
    desc: "A escolha ideal para scale-ups.",
    features: ["Endpoints Ilimitados", "Sync em Tempo Real", "Suporte Prioritário", "Temas Customizados", "Exportação de Dados"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "199",
    desc: "Segurança e escala customizada.",
    features: ["SLA de 99.9%", "Gerente de Conta", "Infra Dedicada", "SSO & SAML"],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-8">
            Planos de <span className="text-neon-green">Dados</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Escalone sua monitoração sem fricção. Escolha o plano que melhor se adapta à sua carga de requisições.
          </p>
        </motion.div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`nexus-card p-10 relative flex flex-col h-full transition-all duration-500 ${
                plan.highlight 
                  ? 'border-cyber-purple shadow-[0_0_60px_rgba(168,85,247,0.15)] scale-105 z-10 bg-deep-purple/20' 
                  : 'border-white/5 hover:border-neon-green/30'
              }`}
            >
              {/* Badge de Destaque */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyber-purple text-white text-[10px] font-black uppercase px-6 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <Zap size={12} fill="white" /> Recomendado
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-cyber-purple' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-slate-500 text-sm font-medium">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm leading-tight">
                    <CheckCircle2 size={18} className={plan.highlight ? "text-cyber-purple" : "text-neon-green"} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all ${
                plan.highlight 
                  ? 'bg-cyber-purple text-white shadow-xl shadow-purple-500/20 hover:bg-purple-500' 
                  : 'bg-white/5 text-white hover:bg-neon-green hover:text-purple-500 border border-white/10'
              }`}>
                Selecionar {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;