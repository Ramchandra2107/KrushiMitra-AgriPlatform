import React, { useState } from 'react';
import { Stethoscope, ShieldCheck, CloudSun, Sparkles, ArrowRight, Activity, Award, ThermometerSun } from 'lucide-react';

export default function HeroBanner({ setActiveTab }) {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      id: 'crop-detector',
      icon: Stethoscope,
      title: 'Crop Disease Detection',
      desc: 'Upload leaf photos for instant AI diagnosis with organic and chemical treatment recommendations.',
      cta: 'Scan Leaf Now'
    },
    {
      id: 'govt-schemes',
      icon: ShieldCheck,
      title: 'Govt Schemes & Subsidies',
      desc: 'Search central & state farmer welfare schemes. Use our calculator for instant eligibility results.',
      cta: 'Calculate Eligibility'
    },
    {
      id: 'weather',
      icon: CloudSun,
      title: 'Weather & Advisory',
      desc: '7-Day weather forecast with daily recommendations for irrigation, spraying, and harvest.',
      cta: 'View Forecast'
    }
  ];

  const metrics = [
    { icon: Activity, value: '96.5%', label: 'AI Detection Precision' },
    { icon: Award, value: '10+', label: 'Active Central Schemes' },
    { icon: ThermometerSun, value: '7-Day', label: 'Agri Weather Forecast' },
    { icon: Sparkles, value: 'Free', label: 'Open Access for Farmers' }
  ];

  return (
    <div style={{ padding: '0 0 20px', maxWidth: '100%' }}>

      {/* Hero Header */}
      <div style={{
        padding: '48px 36px',
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #075b38 0%, #087443 55%, #0b8f4d 100%)',
        color: '#ffffff',
        boxShadow: '0 14px 40px rgba(1, 45, 27, 0.2)',
        border: '1px solid rgba(59, 190, 57, 0.4)'
      }}>
        <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
          <div className="badge" style={{
            marginBottom: '16px',
            padding: '7px 16px',
            background: 'rgba(59, 190, 57, 0.18)',
            color: '#dff6df',
            border: '1px solid rgba(157, 229, 155, 0.38)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={14} />
            <span>KrushiMitra — Smart Agriculture Intelligence</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.1rem)', lineHeight: 1.15, marginBottom: '16px', color: '#ffffff', fontWeight: 800 }}>
            Building Stronger Futures Through{' '}
            <span style={{ color: '#9de59b' }}>Smart Agriculture</span>
          </h1>

          <p style={{ fontSize: '1.06rem', color: '#dff6df', marginBottom: '28px', lineHeight: 1.65 }}>
            Detect plant diseases in seconds with AI vision, access government financial schemes, and get real-time hyper-local weather advisories — all in one place.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('crop-detector')}
              style={{
                padding: '14px 28px',
                fontSize: '1rem',
                borderRadius: '12px',
                background: '#3bbe39',
                color: '#064c31',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(1, 45, 27, 0.22)',
                transition: 'all 0.2s ease'
              }}
            >
              <Stethoscope size={20} />
              <span>Detect Crop Disease</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => setActiveTab('govt-schemes')}
              style={{
                padding: '14px 24px',
                fontSize: '1rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.96)',
                color: '#075b38',
                border: '1px solid rgba(157, 229, 155, 0.5)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
            >
              <ShieldCheck size={20} style={{ color: '#0b8f4d' }} />
              <span>Explore Govt Subsidies</span>
            </button>
          </div>
        </div>

        {/* Decorative glow */}
        <div style={{
          position: 'absolute', right: '-40px', bottom: '-40px',
          width: '340px', height: '340px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 217, 174, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none', filter: 'blur(30px)'
        }} />
        <div style={{
          position: 'absolute', left: '60%', top: '-30px',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 217, 174, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none', filter: 'blur(20px)'
        }} />
      </div>

      {/* Feature Cards Grid — WHITE background, GREEN on hover */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginTop: '28px'
      }}>
        {cards.map(({ id, icon: Icon, title, desc, cta }) => {
          const isHov = hovered === id;
          return (
            <div
              key={id}
              onClick={() => setActiveTab(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '24px',
                cursor: 'pointer',
                borderRadius: '18px',
                  background: isHov ? 'linear-gradient(160deg, #064c31 0%, #075b38 100%)' : '#ffffff',
                border: isHov
                  ? '1.5px solid rgba(78, 112, 93, 0.45)'
                  : '1.5px solid rgba(0,0,0,0.06)',
                    boxShadow: isHov ? '0 12px 30px rgba(78, 112, 93, 0.28)' : '0 4px 16px rgba(0,0,0,0.1)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isHov ? 'translateY(-4px)' : 'none'
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: isHov ? 'rgba(255,255,255,0.18)' : 'rgba(78, 112, 93, 0.08)',
                border: `1px solid ${isHov ? 'rgba(255,255,255,0.25)' : 'rgba(78, 112, 93, 0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isHov ? '#b9e8c0' : '#4e705d',
                marginBottom: '16px'
              }}>
                <Icon size={24} />
              </div>

              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: isHov ? '#ffffff' : '#183b2b', fontWeight: 700 }}>
                {title}
              </h3>
              <p style={{ color: isHov ? '#b9e8c0' : '#4e705d', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
                {desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isHov ? '#ffffff' : '#4e705d', fontWeight: 700, fontSize: '0.88rem' }}>
                <span>{cta}</span>
                <ArrowRight size={16} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Metrics Banner */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: '16px',
        marginTop: '24px'
      }}>
        {metrics.map(({ icon: Icon, value, label }, i) => (
          <div key={i} style={{
            padding: '22px 20px',
            textAlign: 'center',
            borderRadius: '16px',
            background: '#ffffff',
            border: '1.5px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}>
            <Icon size={22} style={{ color: '#4e705d', marginBottom: '10px' }} />
            <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#183b2b', lineHeight: 1 }}>{value}</h4>
            <p style={{ fontSize: '0.8rem', color: '#4e705d', fontWeight: 600, marginTop: '6px' }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
