'use client';

const pushEvent = (data: Record<string, string>) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(data);
  }
};

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Perdi dois dentes no acidente e achava que nunca mais teria um sorriso bonito. O implante foi a melhor decisão! O procedimento foi indolor e agora tenho os dentes como se fossem naturais. Recomendo para todos!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Sofria há anos com falta de um dente. O especialista foi muito atento aos detalhes e o resultado ficou perfeito. Agora mastico normalmente novamente e recuperei minha autoconfiança. Ótima profissional!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Juliana Costa',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Estava usando prótese e muito incomodada. O implante mudou minha vida completamente. Processo rápido, profissional atencioso e resultado excepcional. Finalmente posso sorrir sem insegurança!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            color: i < rating ? 'var(--gold)' : '#D3D3D3',
            fontSize: '14px'
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="depoimentos" style={{
      background: '#172333',
      padding: '80px 60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px, 3.5vw, 44px)',
            fontWeight: '600',
            color: 'var(--text-light)',
            marginBottom: '10px'
          }}>
            O que nossos pacientes dizem?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '30px',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(201, 169, 110, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Header with Photo and Info */}
              <div style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '16px',
                alignItems: 'flex-start'
              }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1A1A1A',
                    marginBottom: '4px'
                  }}>
                    {testimonial.name}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#999',
                    marginBottom: '8px'
                  }}>
                    {testimonial.location}
                  </p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>

              {/* Testimonial Text */}
              <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#555',
                fontWeight: '300'
              }}>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#agendar"
            onClick={() => pushEvent({ event: 'click_cta', secao: 'depoimentos' })}
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
          div[style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
