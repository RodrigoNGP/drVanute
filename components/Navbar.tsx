'use client';

const pushEvent = (data: Record<string, string>) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(data);
  }
};

export default function Navbar() {
  return (
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
      <a href="#" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
        transition: 'transform 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      >
        <div style={{
          width: '40px',
          height: '40px',
          border: '2px solid var(--gold)',
          transform: 'rotate(45deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '2px',
          position: 'relative'
        }}>
          <span style={{
            display: 'block',
            width: '16px',
            height: '16px',
            background: 'var(--gold)',
            transform: 'rotate(0deg)',
            borderRadius: '2px'
          }}></span>
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--text-light)',
          lineHeight: '1.3'
        }}>
          Dr. Vanute<br />
          Implantodontia
        </div>
      </a>

      {/* Nav Links */}
      <ul style={{
        display: 'flex',
        gap: '48px',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li>
          <a href="#sobre" style={{
            color: 'var(--text-light)',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '400',
            letterSpacing: '0.02em',
            transition: 'all 0.3s',
            position: 'relative',
            paddingBottom: '4px',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-light)';
          }}
          >
            Sobre nós
          </a>
        </li>
        <li>
          <a href="#depoimentos" style={{
            color: 'var(--text-light)',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '400',
            letterSpacing: '0.02em',
            transition: 'all 0.3s',
            position: 'relative',
            paddingBottom: '4px',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-light)';
          }}
          >
            Depoimentos
          </a>
        </li>
        <li>
          <a href="#faq" style={{
            color: 'var(--text-light)',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '400',
            letterSpacing: '0.02em',
            transition: 'all 0.3s',
            position: 'relative',
            paddingBottom: '4px',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-light)';
          }}
          >
            Perguntas frequentes
          </a>
        </li>
      </ul>

      {/* CTA Button */}
      <a href="#agendar" onClick={() => pushEvent({ event: 'click_cta', secao: 'navbar' })} style={{
        background: 'transparent',
        border: '1.5px solid var(--gold)',
        color: 'var(--gold)',
        padding: '12px 28px',
        fontSize: '12px',
        fontWeight: '600',
        letterSpacing: '0.08em',
        textDecoration: 'none',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s',
        borderRadius: '4px',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--gold)';
        e.currentTarget.style.color = 'var(--dark)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(201, 169, 110, 0.3)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--gold)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      >
        Agendar consulta
      </a>
    </nav>
  );
}
