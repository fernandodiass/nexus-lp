"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// Definindo o tipo para as FAQs para o TypeScript não reclamar
interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "O que é a NexusLP e como ela funciona?",
    answer: "A NexusLP é uma infraestrutura de visualização de alta performance que conecta suas APIs e exibe métricas críticas em tempo real através de uma interface intuitiva e tecnológica."
  },
  {
    question: "O template é personalizável?",
    answer: "Sim, o projeto foi construído com React e Tailwind CSS, permitindo que você altere cores, fontes e layouts facilmente para se adequar à identidade da sua marca."
  },
  {
    question: "Quais tecnologias são utilizadas no projeto?",
    answer: "O projeto utiliza Next.js, TypeScript, Tailwind CSS, Framer Motion para animações e Recharts para a geração de gráficos dinâmicos."
  },
  {
    question: "A interface é responsiva?",
    answer: "Totalmente. O design foi projetado para ser 'mobile-first', garantindo que o dashboard e a landing page funcionem perfeitamente em smartphones e desktops."
  },
  {
    question: "Como faço para integrar meus próprios dados nos gráficos?",
    answer: "Você pode conectar suas APIs diretamente nos componentes de dados, substituindo os objetos de exemplo pelas chamadas reais de fetch ou hooks de dados."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Função para evitar erro de 'any' e simplificar o clique
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-6 bg-[#030303] overflow-hidden">
      
      {/* Background simplificado para evitar avisos de sintaxe no CSS inline */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Perguntas <span className="text-[#22c55e]">Frequentes</span>
          </h2>
          <p className="text-slate-500 font-medium">Tudo o que você precisa saber sobre a Nexus.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all hover:border-[#22c55e]/20"
            >
              <button
                type="button" // Evita avisos de formulário
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <span className="text-white font-bold text-sm md:text-base tracking-tight pr-4">
                  {faq.question}
                </span>
                <span className={`text-[#22c55e] shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;