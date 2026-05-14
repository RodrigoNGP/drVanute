'use client';

const pushEvent = (data: Record<string, string>) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(data);
  }
};

export default function About() {
  return (
    <section id="sobre" style={{
      background: '#172333',
      padding: '80px 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '80px'
      }}>
        {/* Left - Image */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '380px',
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            padding: '8px'
          }}>
            <img
              src="/vanute.png"
              alt="Dr. Vanute"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '16px',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(20px, 2vw, 28px)',
            fontWeight: '600',
            color: 'var(--text-light)',
            marginBottom: '24px'
          }}>
            Dr. Vanute Virgínio | Facetas e Design do Sorriso em Caruaru
          </h2>

          <p style={{
            fontSize: '15px',
            fontWeight: '300',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            marginBottom: '24px'
          }}>
            Especialista em transformar sorrisos com facetas de porcelana e lentes de contato dental. Localizado no coração de Caruaru, o Dr. Vanute Virgínio combina anos de experiência com um olhar artístico e detalhista para criar sorrisos naturais, harmônicos e duradouros.
          </p>

          <p style={{
            fontSize: '15px',
            fontWeight: '300',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            marginBottom: '24px'
          }}>
            Cada sorriso é único. Por isso, todo planejamento é individualizado, respeitando as proporções faciais, o tom de pele e a personalidade de cada paciente. Com técnica refinada e materiais de alta estética, as facetas do Dr. Vanute entregam mais do que beleza — entregam confiança e autoestima de verdade.
          </p>

          <a
            href="#agendar"
            onClick={() => pushEvent({ event: 'click_cta', secao: 'sobre' })}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
              color: 'var(--dark)',
              padding: '15px 48px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'all 0.3s',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(201, 169, 110, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
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
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
