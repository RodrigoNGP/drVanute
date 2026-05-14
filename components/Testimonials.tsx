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
    name: 'Fernanda Limeira',
    location: 'Caruaru, PE',
    rating: 5,
    text: '👏👏👏👏 Excelente profissional, amo o seu trabalho ❤️',
    image: '/maria.png'
  },
  {
    id: 2,
    name: 'Geovane',
    location: 'Caruaru, PE',
    rating: 5,
    text: 'Sem palavras para descrever o profissionalismo e todo atendimento da equipe 👏👏👏👏',
    image: '/carlos.png'
  },
  {
    id: 3,
    name: 'Julio Costa',
    location: 'Caruaru, PE',
    rating: 5,
    text: 'Fiz 8 facetas de porcelana e o resultado superou todas as minhas expectativas. O Dr. Vanute respeitou minha identidade e entregou um sorriso harmônico, branco e completamente natural. Indico de olhos fechados!',
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
    <section id="depoimentos" className="section-pad" style={{
      background: '#172333'
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
        <div className="grid-3col">
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

    </section>
  );
}
