'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'O que são facetas de porcelana?',
    answer: 'Facetas de porcelana são lâminas ultrafinas de cerâmica coladas na superfície dos dentes para corrigir cor, forma, tamanho e alinhamento. São praticamente invisíveis e oferecem resultado extremamente natural e duradouro.'
  },
  {
    id: 2,
    question: 'O procedimento é doloroso? Precisa desgastar o dente?',
    answer: 'O procedimento é feito com anestesia local e é bastante confortável. No caso das lentes de contato dental (facetas ultra-finas), o desgaste é mínimo ou inexistente. Já as facetas convencionais exigem um pequeno desgaste do esmalte para melhor adaptação.'
  },
  {
    id: 3,
    question: 'Quanto tempo dura o tratamento com facetas?',
    answer: 'O tratamento completo geralmente leva de 2 a 3 semanas, com duas consultas principais: planejamento e moldagem, e depois a instalação das facetas definitivas. O resultado é imediato e transformador.'
  },
  {
    id: 4,
    question: 'Quanto tempo duram as facetas de porcelana?',
    answer: 'Com higiene adequada e consultas regulares de manutenção, as facetas de porcelana duram entre 10 a 15 anos ou mais. A porcelana é resistente a manchas e muito próxima do esmalte natural dos dentes.'
  },
  {
    id: 5,
    question: 'Qualquer pessoa pode fazer facetas?',
    answer: 'A maioria das pessoas é candidata às facetas. Durante a avaliação, o Dr. Vanute analisa a saúde gengival, o esmalte dos dentes e a mordida para indicar o tratamento mais adequado para cada caso.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const pushEvent = (data: Record<string, string>) => {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(data);
    }
  };

  const toggleFAQ = (id: number) => {
    const opening = openId !== id;
    setOpenId(opening ? id : null);
    if (opening) pushEvent({ event: 'faq_open', pergunta: String(id) });
  };

  return (
    <section id="faq" style={{
      background: '#FFFFFF',
      padding: '90px 60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'flex-start',
        gap: '80px'
      }}>
        {/* Left - FAQ List */}
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px, 3.5vw, 44px)',
            fontWeight: '600',
            color: '#1A1A1A',
            marginBottom: '48px'
          }}>
            Perguntas frequentes
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: '1px solid #E8E3DB',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#F5F3EF',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (openId === item.id) {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(201, 169, 110, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openId === item.id) {
                    e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    textAlign: 'left'
                  }}
                >
                  <span style={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#1A1A1A',
                    flex: 1
                  }}>
                    {item.question}
                  </span>
                  <span style={{
                    fontSize: '20px',
                    color: 'var(--gold)',
                    flexShrink: 0,
                    transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s'
                  }}>
                    ▼
                  </span>
                </button>

                {openId === item.id && (
                  <div style={{
                    padding: '0 24px 20px',
                    borderTop: '1px solid rgba(201, 169, 110, 0.2)',
                    fontSize: '14px',
                    color: '#555',
                    lineHeight: '1.6',
                    animation: 'fadeIn 0.3s ease-in'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact CTA */}
        <div style={{
          background: '#F5F3EF',
          border: '1px solid #E8E3DB',
          borderRadius: '12px',
          padding: '48px 40px',
          textAlign: 'center',
          height: 'fit-content'
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(24px, 2.5vw, 32px)',
            fontWeight: '600',
            color: '#1A1A1A',
            marginBottom: '24px'
          }}>
            Ainda ficou com dúvidas?
          </h3>

          <p style={{
            fontSize: '14px',
            color: '#555',
            lineHeight: '1.8',
            marginBottom: '32px'
          }}>
            Não se preocupe! Nos envie agora uma mensagem no WhatsApp. Iremos responder prontamente e tirar suas dúvidas sobre facetas, lentes de contato dental e design do sorriso!
          </p>

          <a
            href="#agendar"
            onClick={() => pushEvent({ event: 'click_cta', secao: 'faq' })}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
              color: 'var(--dark)',
              padding: '15px 36px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              borderRadius: '8px',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.3s',
              width: '100%'
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        @media (max-width: 900px) {
          section {
            padding: 60px 24px;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
