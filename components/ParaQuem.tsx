'use client';

const pushEvent = (data: Record<string, string>) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(data);
  }
};

interface Card {
  title: string;
  icon: React.ReactNode;
}

const cards: Card[] = [
  {
    title: 'Quem quer um\nSorriso mais Branco',
    icon: (
      <svg viewBox="0 0 52 52" style={{ width: '52px', height: '52px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
        <circle cx="26" cy="18" r="9" />
        <path d="M10 44c0-8.837 7.163-16 16-16s16 7.163 16 16" />
        <path d="M22 32l4 4 4-4" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Dentes com\nForma Irregular',
    icon: (
      <svg viewBox="0 0 52 52" style={{ width: '52px', height: '52px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
        <path d="M20 8c-4 0-8 3-8 8 0 6 4 10 6 16 1 3 2 6 4 8h8c2-2 3-5 4-8 2-6 6-10 6-16 0-5-4-8-8-8-2 0-4 1-6 3-2-2-4-3-6-3z" />
        <line x1="26" y1="20" x2="26" y2="36" />
        <line x1="20" y1="28" x2="32" y2="28" />
      </svg>
    ),
  },
  {
    title: 'Espaços entre\nos Dentes',
    icon: (
      <svg viewBox="0 0 52 52" style={{ width: '52px', height: '52px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
        <path d="M26 10C16 10 8 17 8 26c0 6 3 11 8 14l2 6h16l2-6c5-3 8-8 8-14 0-9-8-16-18-16z" />
        <path d="M20 28c1.5 2 3.5 3 6 3s4.5-1 6-3" />
        <circle cx="20" cy="24" r="2" fill="currentColor" stroke="none" />
        <circle cx="32" cy="24" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Quem busca\nHarmonia Facial',
    icon: (
      <svg viewBox="0 0 52 52" style={{ width: '52px', height: '52px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
        <circle cx="26" cy="20" r="11" />
        <path d="M21 20c0-2.761 2.239-5 5-5" />
        <path d="M26 31v4" />
        <path d="M22 35h8" />
        <path d="M14 42c1-4 6-7 12-7s11 3 12 7" />
        <path d="M38 16l4-4M38 14l4 0M38 14l0 4" />
      </svg>
    ),
  },
];

export default function ParaQuem() {
  return (
    <section id="para-quem" style={{
      background: '#F5F3EF',
      padding: '90px 60px'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '56px'
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px, 3.5vw, 44px)',
            fontWeight: '600',
            color: '#1A1A1A',
            marginBottom: '10px'
          }}>
            Para quem é?
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#777',
            fontWeight: '300'
          }}>
            As facetas de porcelana são ideais para quem:
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '48px'
        }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E8E3DB',
                padding: '40px 24px 32px',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(201, 169, 110, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E8E3DB';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {card.icon}
              </div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                color: '#1A1A1A',
                lineHeight: '1.5',
                whiteSpace: 'pre-line'
              }}>
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#agendar"
            onClick={() => pushEvent({ event: 'click_cta', secao: 'para_quem' })}
            style={{
              display: 'inline-block',
              border: '1.5px solid var(--gold)',
              color: 'var(--gold-dark)',
              background: 'transparent',
              padding: '15px 48px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.color = 'var(--dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--gold-dark)';
            }}
          >
            Agendar consulta
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 60px 24px;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
