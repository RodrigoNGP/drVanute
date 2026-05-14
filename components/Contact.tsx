'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const pushEvent = (data: Record<string, string>) => {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwk_GXzsWkj2sipgAWkSHxoXy-9IA5awVhCn-k6XbZAmCyopz31HKpWlmgHzm8Ktod-/exec";

      pushEvent({ event: 'form_submit', formulario: 'agendamento' });

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '' });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    }
  };

  return (
    <section id="agendar" style={{
      background: '#172333',
      padding: '80px 60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '80px'
      }}>
        {/* Left Content */}
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px, 3.5vw, 44px)',
            fontWeight: '600',
            color: 'var(--text-light)',
            marginBottom: '24px'
          }}>
            Agende sua consulta
          </h2>

          <p style={{
            fontSize: '15px',
            fontWeight: '300',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            marginBottom: '24px'
          }}>
            Deixe seus dados e agende sua consulta para avaliação de implante dentário. Nossa equipe entrará em contato para discutir as melhores opções para seu caso.
          </p>

          <p style={{
            fontSize: '15px',
            fontWeight: '300',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            marginBottom: '32px'
          }}>
            Somos especialistas em restituir a função e estética da dentição com tecnologia moderna. Dentes de verdade, sorriso de verdade.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                background: 'var(--gold)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <span style={{ color: 'var(--dark)', fontWeight: 'bold', fontSize: '14px' }}>✓</span>
              </div>
              <div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', fontWeight: '600', marginBottom: '4px' }}>
                  Tecnologia de ponta
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Implantes e técnicas avançadas
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                background: 'var(--gold)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <span style={{ color: 'var(--dark)', fontWeight: 'bold', fontSize: '14px' }}>✓</span>
              </div>
              <div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', fontWeight: '600', marginBottom: '4px' }}>
                  Procedimento seguro
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Anestesia eficaz e acompanhamento pós-operatório
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                background: 'var(--gold)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <span style={{ color: 'var(--dark)', fontWeight: 'bold', fontSize: '14px' }}>✓</span>
              </div>
              <div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', fontWeight: '600', marginBottom: '4px' }}>
                  Resultados duradouros
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Implantes que duram 20+ anos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div>
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            borderRadius: '12px',
            padding: '40px',
            backdropFilter: 'blur(10px)'
          }}>
          {/* Name Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--text-light)',
              letterSpacing: '0.05em'
            }}>
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(201, 169, 110, 0.3)',
                borderRadius: '8px',
                color: 'var(--text-light)',
                boxSizing: 'border-box',
                transition: 'all 0.3s',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                e.target.style.borderColor = 'var(--gold)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                e.target.style.borderColor = 'rgba(201, 169, 110, 0.3)';
              }}
            />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--text-light)',
              letterSpacing: '0.05em'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu.email@exemplo.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(201, 169, 110, 0.3)',
                borderRadius: '8px',
                color: 'var(--text-light)',
                boxSizing: 'border-box',
                transition: 'all 0.3s',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                e.target.style.borderColor = 'var(--gold)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                e.target.style.borderColor = 'rgba(201, 169, 110, 0.3)';
              }}
            />
          </div>

          {/* Phone Field */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--text-light)',
              letterSpacing: '0.05em'
            }}>
              Telefone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(11) 99999-9999"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(201, 169, 110, 0.3)',
                borderRadius: '8px',
                color: 'var(--text-light)',
                boxSizing: 'border-box',
                transition: 'all 0.3s',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                e.target.style.borderColor = 'var(--gold)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                e.target.style.borderColor = 'rgba(201, 169, 110, 0.3)';
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
              color: 'var(--dark)',
              padding: '15px 36px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden'
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
            {submitted ? '✓ Enviado!' : 'Agendar Consulta'}
          </button>

          {submitted && (
            <p style={{
              marginTop: '16px',
              textAlign: 'center',
              fontSize: '14px',
              color: 'var(--gold)',
              fontWeight: '500'
            }}>
              Obrigado! Entraremos em contato em breve.
            </p>
          )}
          </form>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 60px 24px;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          form {
            padding: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
