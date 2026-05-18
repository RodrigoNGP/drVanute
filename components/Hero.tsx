'use client';

const pushEvent = (data: Record<string, string>) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(data);
  }
};

export default function Hero() {
  const handleScrollDown = () => {
    document.getElementById('para-quem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: '#172333',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Decorative Lines */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '200px',
        width: '600px',
        height: '600px',
        border: '1px solid rgba(201,169,110,0.08)',
        transform: 'rotate(45deg)',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        right: '100px',
        width: '500px',
        height: '500px',
        border: '1px solid rgba(201,169,110,0.06)',
        transform: 'rotate(45deg)',
        pointerEvents: 'none'
      }}></div>

      <div className="hero-container" style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Left Content */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(201,169,110,0.1)',
            border: '1px solid rgba(201,169,110,0.3)',
            padding: '6px 16px',
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '24px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              background: 'var(--gold)',
              borderRadius: '50%'
            }}></span>
            Dr. Vanute - Especialista em Facetas
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 4.5vw, 58px)',
            fontWeight: '700',
            lineHeight: '1.15',
            color: 'var(--text-light)',
            marginBottom: '20px'
          }}>
            Transforme seu sorriso<br />
            com <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Facetas de Porcelana</em><br />
            de excelência
          </h1>

          <p style={{
            fontSize: '15px',
            fontWeight: '300',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            maxWidth: '440px',
            marginBottom: '36px'
          }}>
            As facetas de porcelana são a solução mais elegante e duradoura para quem quer
            um sorriso harmônico, branco e natural. Design personalizado, resultado imediato
            e uma transformação que vai além da estética — é autoconfiança de verdade.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
            <a href="#agendar" onClick={() => pushEvent({ event: 'click_cta', secao: 'hero' })} style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
              color: 'var(--dark)',
              padding: '15px 36px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden'
            }}>
              Agendar consulta
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex' }}>
              {['JM', 'RS', 'CA'].map((initials, i) => (
                <div key={i} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '2px solid var(--dark-2)',
                  marginLeft: i === 0 ? '0' : '-10px',
                  background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: 'var(--dark)'
                }}>
                  {initials}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-light)', fontWeight: '600' }}>+1000 Vidas Transformadas</strong>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual" style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '480px'
          }}>
            <div style={{
              width: '100%',
              aspectRatio: '1 / 1.3',
              background: 'linear-gradient(135deg, var(--dark-3), var(--dark-2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px'
            }}>
              <img
                src="/dentista.png"
                alt="Dr. Vanute - Especialista em Facetas"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>

            {/* Patients Badge */}
            <div style={{
              position: 'absolute',
              bottom: '60px',
              right: '-30px',
              background: 'rgba(13,17,23,0.9)',
              border: '1px solid rgba(201,169,110,0.4)',
              padding: '16px 20px',
              textAlign: 'center',
              backdropFilter: 'blur(8px)',
              borderRadius: '8px'
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '28px',
                fontWeight: '700',
                color: 'var(--gold)',
                lineHeight: '1'
              }}>+1.000</div>
              <div style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                marginTop: '4px'
              }}>Pacientes<br />Atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => { handleScrollDown(); pushEvent({ event: 'click_scroll_hero' }); }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          opacity: 0.6,
          transition: 'opacity 0.2s',
          zIndex: 20
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
      >
        <div style={{
          width: '32px',
          height: '32px',
          border: '1.5px solid var(--gold)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'bounce 2s infinite'
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7l5 5 5-5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section { padding-top: 70px !important; }
        }
      `}</style>
    </section>
  );
}
