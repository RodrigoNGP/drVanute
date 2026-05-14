'use client';

import { useState, useRef, useCallback } from 'react';

interface Case {
  id: number;
  image: string;
  reversed?: boolean; // true quando o depois está em cima e o antes embaixo
}

const cases: Case[] = [
  { id: 1, image: '/facetas.jpg' },
  { id: 2, image: '/facetas2.jpg', reversed: true },
  { id: 3, image: '/facetas3.jpg', reversed: true },
];

function SliderCard({ image, reversed = false }: { image: string; reversed?: boolean }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => { if (isDragging.current) updateSlider(e.clientX); }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onTouchMove={(e) => updateSlider(e.touches[0].clientX)}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        border: '1px solid #E8E3DB'
      }}
    >
      {/* ANTES */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src={image}
          alt="Antes"
          draggable={false}
          style={{
            width: '100%',
            height: '200%',
            objectFit: 'cover',
            objectPosition: reversed ? 'bottom' : 'top',
            display: 'block',
            transform: reversed ? 'translateY(-50%)' : 'none',
            pointerEvents: 'none'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: 'rgba(0,0,0,0.65)',
          color: '#fff',
          padding: '4px 10px',
          fontSize: '11px',
          fontWeight: '700',
          borderRadius: '4px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase'
        }}>
          Antes
        </div>
      </div>

      {/* DEPOIS */}
      <div style={{
        position: 'absolute',
        inset: 0,
        clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
      }}>
        <img
          src={image}
          alt="Depois"
          draggable={false}
          style={{
            width: '100%',
            height: '200%',
            objectFit: 'cover',
            objectPosition: reversed ? 'top' : 'bottom',
            display: 'block',
            transform: reversed ? 'none' : 'translateY(-50%)',
            pointerEvents: 'none'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(201,169,110,0.92)',
          color: '#0d1117',
          padding: '4px 10px',
          fontSize: '11px',
          fontWeight: '700',
          borderRadius: '4px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase'
        }}>
          Depois
        </div>
      </div>

      {/* Linha */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: `${sliderPos}%`,
        width: '2px',
        background: '#fff',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        boxShadow: '0 0 6px rgba(0,0,0,0.35)'
      }} />

      {/* Handle */}
      <div
        onMouseDown={() => { isDragging.current = true; }}
        onTouchStart={(e) => { isDragging.current = true; updateSlider(e.touches[0].clientX); }}
        style={{
          position: 'absolute',
          top: '50%',
          left: `${sliderPos}%`,
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'ew-resize',
          zIndex: 10,
          border: '2px solid var(--gold)'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L2 10l5 6M13 4l5 6-5 6" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0);
  const total = cases.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="beforeafter-section" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px, 3.5vw, 44px)',
            fontWeight: '600',
            color: '#1A1A1A',
            marginBottom: '10px'
          }}>
            Antes e Depois
          </h2>
          <p style={{ fontSize: '14px', color: '#999', fontWeight: '300' }}>
            Arraste o controle para comparar
          </p>
        </div>

        {/* Carrossel */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px'
        }}>
          {/* Botão anterior */}
          <button
            onClick={prev}
            disabled={total <= 1}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1.5px solid var(--gold)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: total <= 1 ? 'default' : 'pointer',
              opacity: total <= 1 ? 0.3 : 1,
              flexShrink: 0,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { if (total > 1) { e.currentTarget.style.background = 'var(--gold)'; } }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Card atual */}
          <div className="slider-card-wrap">
            <SliderCard key={current} image={cases[current].image} reversed={cases[current].reversed} />
          </div>

          {/* Botão próximo */}
          <button
            onClick={next}
            disabled={total <= 1}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1.5px solid var(--gold)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: total <= 1 ? 'default' : 'pointer',
              opacity: total <= 1 ? 0.3 : 1,
              flexShrink: 0,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { if (total > 1) { e.currentTarget.style.background = 'var(--gold)'; } }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        {total > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px'
          }}>
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: i === current ? 'var(--gold)' : '#D4C5B0',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        )}

        {/* Contador */}
        {total > 1 && (
          <p style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '13px',
            color: '#aaa',
            fontWeight: '300'
          }}>
            {current + 1} / {total}
          </p>
        )}
      </div>

      <style jsx>{`
        :global(.beforeafter-section) {
          padding: 80px 60px;
        }
        :global(.slider-card-wrap) {
          width: 100%;
          max-width: 340px;
        }
        @media (max-width: 768px) {
          :global(.beforeafter-section) {
            padding: 60px 20px;
          }
          :global(.slider-card-wrap) {
            max-width: 100%;
            flex: 1;
          }
        }
      `}</style>
    </section>
  );
}
