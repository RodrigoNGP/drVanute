'use client';

interface Case {
  id: number;
  before: string;
  after: string;
}

const cases: Case[] = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1570295999919-9cebccc83d69?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
  }
];

export default function BeforeAfter() {
  return (
    <section style={{
      background: '#FFFFFF',
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
            color: '#1A1A1A',
            marginBottom: '10px'
          }}>
            Alguns Sorrisos transformados
          </h2>
        </div>

        {/* Before/After Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px'
        }}>
          {cases.map((caseItem) => (
            <div key={caseItem.id} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              background: '#F8F6F2',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #E8E3DB',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F0EBE3';
              e.currentTarget.style.borderColor = 'var(--gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F8F6F2';
              e.currentTarget.style.borderColor = '#E8E3DB';
            }}
            >
              {/* Before */}
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src={caseItem.before}
                  alt={`Antes - Caso ${caseItem.id}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'var(--gold)',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Antes
                </div>
              </div>

              {/* After */}
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src={caseItem.after}
                  alt={`Depois - Caso ${caseItem.id}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(201, 169, 110, 0.9)',
                  color: 'var(--dark)',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Depois
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 60px 24px;
          }
          div[style*="gridTemplateColumns: repeat(2"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
