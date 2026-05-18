'use client';

import { useState } from 'react';

const pushEvent = (data: Record<string, string>) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(data);
  }
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 60px',
        background: 'linear-gradient(180deg, rgba(13, 17, 23, 0.95) 0%, rgba(13, 17, 23, 0.85) 100%)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201, 169, 110, 0.15)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '40px', height: '40px',
            border: '2px solid var(--gold)',
            transform: 'rotate(45deg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '2px', position: 'relative'
          }}>
            <span style={{ display: 'block', width: '16px', height: '16px', background: 'var(--gold)', borderRadius: '2px' }}></span>
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-light)', lineHeight: '1.3' }}>
            Dr. Vanute<br />Facetas
          </div>
        </a>

        {/* Nav Links desktop */}
        <ul className="nav-links">
          {[['#sobre', 'Sobre nós'], ['#depoimentos', 'Depoimentos'], ['#faq', 'Perguntas frequentes']].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={close} style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '13px', fontWeight: '400', letterSpacing: '0.02em', transition: 'color 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-light)'; }}
              >{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a href="#agendar" className="nav-cta" onClick={() => { pushEvent({ event: 'click_cta', secao: 'navbar' }); close(); }} style={{
          background: 'transparent', border: '1.5px solid var(--gold)', color: 'var(--gold)',
          padding: '12px 28px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em',
          textDecoration: 'none', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', borderRadius: '4px'
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--dark)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
        >
          Agendar consulta
        </a>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a href="#sobre" onClick={close}>Sobre nós</a>
        <a href="#depoimentos" onClick={close}>Depoimentos</a>
        <a href="#faq" onClick={close}>Perguntas frequentes</a>
        <a href="#agendar" onClick={() => { pushEvent({ event: 'click_cta', secao: 'navbar_mobile' }); close(); }}
          style={{ color: 'var(--gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', padding: '14px', border: '1.5px solid var(--gold)', borderRadius: '4px', marginTop: '8px' }}>
          Agendar consulta
        </a>
      </div>
    </>
  );
}
