import React, { useState } from 'react';
import { Leaf, ShieldCheck, CloudSun, Stethoscope } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    { id: 'crop-detector', label: 'Disease Detector', icon: Stethoscope },
    { id: 'govt-schemes', label: 'Govt Schemes', icon: ShieldCheck },
    { id: 'weather', label: 'Weather Forecast', icon: CloudSun },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'linear-gradient(135deg, #064c31 0%, #087443 100%)',
      borderBottom: '1px solid rgba(59, 190, 57, 0.38)',
      boxShadow: '0 8px 24px rgba(1, 45, 27, 0.24)',
      padding: '12px 24px'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand Logo */}
        <div
          onClick={() => setActiveTab('hero')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #3bbe39 0%, #9de59b 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(78, 112, 93, 0.18)',
            color: '#064c31'
          }}>
            <Leaf size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff' }}>Krushi</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#9de59b' }}>Mitra</span>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#b9e8c0', marginTop: '-4px', fontWeight: 600 }}>
              AI Agricultural Intelligence
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(255, 255, 255, 0.92)',
          padding: '5px',
          borderRadius: '14px',
          border: '1px solid rgba(78, 112, 93, 0.3)'
        }}>
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            const isHovered = hoveredTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                onMouseEnter={() => setHoveredTab(id)}
                onMouseLeave={() => setHoveredTab(null)}
                style={{
                  borderRadius: '10px',
                  padding: '9px 16px',
                  fontSize: '0.87rem',
                  fontWeight: 700,
                  background: isActive ? '#4e705d' : (isHovered ? '#35c637' : '#ffffff'),
                  color: isActive ? '#ffffff' : (isHovered ? '#123b29' : '#4e705d'),
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.22s ease',
                  boxShadow: isActive || isHovered ? '0 4px 14px rgba(78, 112, 93, 0.32)' : '0 1px 4px rgba(0,0,0,0.05)'
                }}
              >
                <Icon size={15} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Status Pill */}
        <div style={{
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#4e705d',
          background: 'rgba(78, 112, 93, 0.12)',
          border: '1px solid rgba(78, 112, 93, 0.25)',
          borderRadius: '9999px',
          fontSize: '0.78rem',
          fontWeight: 700
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#4e705d',
            display: 'inline-block',
            boxShadow: '0 0 6px rgba(78, 112, 93, 0.7)'
          }} />
          AI Online
        </div>
      </div>
    </header>
  );
}
