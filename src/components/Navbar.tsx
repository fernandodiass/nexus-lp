'use client';
import { useCallback, useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home',   id: 'hero' },
  { label: 'Features', id: 'features' },
  { label: 'Product',  id: 'product' },
  { label: 'Pricing',  id: 'pricing' },
  { label: 'FAQ',      id: 'faq' },
  { label: 'Contact',  id: 'footer' },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [active,      setActive]      = useState('hero');

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    let cur = 'hero';
    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 80) cur = id;
    }
    setActive(cur);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { if (window.innerWidth > 768) setMobileOpen(false); });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const go = (id: string) => { scrollToId(id); setMobileOpen(false); };

  return (
    <>
      {/* ── Nav bar ── */}
      <nav className={`fixed top-0 inset-x-0 z-[200] h-16 transition-all duration-300
        ${scrolled ? 'bg-base/90 backdrop-blur-2xl border-b border-white/[0.06]' : 'bg-transparent'}`}>
        <div className="section-wrap h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <button onClick={() => go('hero')}
            className="flex items-center gap-2.5 shrink-0 bg-transparent border-none cursor-pointer">
            <div className="w-[30px] h-[30px] rounded-lg bg-grad-brand flex items-center justify-center shadow-glow-plum shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="#F5F2F7" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="#D1AAB2" fillOpacity="0.8"/>
              </svg>
            </div>
            <span className="text-[16px] font-semibold text-t1 tracking-tight whitespace-nowrap">Nexus</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-none whitespace-nowrap
                  ${active === id ? 'text-t1 bg-white/[0.06]' : 'text-t3 bg-transparent hover:text-t1'}`}>
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button onClick={() => go('footer')} className="btn-ghost text-sm">Sign in</button>
            <button onClick={() => go('pricing')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-grad-brand border border-rose-light/15
                         text-t1 text-sm font-medium cursor-pointer transition-all duration-200
                         hover:shadow-glow-sm hover:-translate-y-px">
              Get started
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg
                       bg-white/[0.05] border border-white/10 text-t1 cursor-pointer shrink-0">
            {mobileOpen
              ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5H15M3 9H15M3 13H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            }
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`fixed top-16 inset-x-0 z-[199] bg-base/95 backdrop-blur-2xl
                       border-b border-white/[0.08] overflow-hidden transition-all duration-300
                       ${mobileOpen ? 'max-h-[520px] py-4' : 'max-h-0 py-0'}`}>
        <div className="section-wrap flex flex-col gap-0.5">
          {NAV_ITEMS.map(({ label, id }) => (
            <button key={id} onClick={() => go(id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium
                          transition-all duration-200 cursor-pointer border-none text-left
                          ${active === id ? 'bg-plum/15 text-t1' : 'bg-transparent text-t3 hover:bg-white/[0.04] hover:text-t1'}`}>
              {label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
          <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-2.5">
            <button onClick={() => go('footer')}
              className="w-full py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]
                         text-t2 text-sm font-medium cursor-pointer transition-all duration-200">
              Sign in
            </button>
            <button onClick={() => go('pricing')}
              className="w-full py-3.5 rounded-xl bg-grad-brand border border-rose-light/15
                         text-t1 text-sm font-semibold cursor-pointer transition-all duration-200">
              Get started →
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)}
             className="fixed inset-0 z-[198] bg-black/40 md:hidden"/>
      )}
    </>
  );
}
