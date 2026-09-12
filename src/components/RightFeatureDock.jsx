import React, { useState } from 'react';
import { Stethoscope, Store, ShieldCheck, CloudSun, Bot, ChevronRight, Sparkles, Layers, Zap } from 'lucide-react';

export default function RightFeatureDock({ activeTab, setActiveTab, onOpenBot }) {
  const features = [
    {
      id: 'crop-detector',
      title: 'Disease Detector',
      subtitle: 'AI Crop Diagnosis',
      badge: '98% Accuracy',
      icon: Stethoscope,
      color: '#4ade80'
    },
    {
      id: 'mandi',
      title: 'Mandi Rates',
      subtitle: 'Live Market Prices',
      badge: 'Live APMC',
      icon: Store,
      color: '#34d399'
    },
    {
      id: 'govt-schemes',
      title: 'Govt Schemes',
      subtitle: 'Subsidies & Benefits',
      badge: '₹6000+ Aid',
      icon: ShieldCheck,
      color: '#10b981'
    },
    {
      id: 'weather',
      title: 'Weather Advisory',
      subtitle: '7-Day Forecast',
      badge: 'Realtime',
      icon: CloudSun,
      color: '#6ee7b7'
    },
    {
      id: 'bot',
      title: 'KrushiBot AI',
      subtitle: 'Smart Farming Chat',
      badge: '24/7 AI Helper',
      icon: Bot,
      color: '#a7f3d0',
      isAction: true
    }
  ];

  const handleFeatureClick = (feature) => {
    if (feature.isAction) {
      if (onOpenBot) onOpenBot();
    } else {
      setActiveTab(feature.id);
    }
  };

  return (
    <aside style={{
      width: '280px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      {/* Feature Navigation Panel Header */}
      <div 
        className="glass-card"
        style={{
          padding: '16px 20px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 30, 20, 0.9) 100%)',
          border: '1px solid rgba(74, 222, 128, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(74, 222, 128, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4ade80'
          }}>
            <Layers size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)' }}>Features Hub</h3>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Clickable Side Dock</p>
          </div>
        </div>
        <span className="badge badge-success" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
          <Zap size={10} /> Active
        </span>
      </div>

      {/* Clickable Feature Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {features.map((feature) => {
          const IconComp = feature.icon;
          const isActive = activeTab === feature.id;

          return (
            <div
              key={feature.id}
              onClick={() => handleFeatureClick(feature)}
              className="glass-card"
              style={{
                padding: '14px 16px',
                borderRadius: '14px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                background: isActive 
                  ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.35) 0%, rgba(10, 40, 25, 0.95) 100%)' 
                  : 'var(--bg-card)',
                border: isActive 
                  ? '1.5px solid var(--accent-neon)' 
                  : '1px solid var(--border-color)',
                boxShadow: isActive 
                  ? '0 0 20px rgba(74, 222, 128, 0.3)' 
                  : 'var(--shadow-sm)',
                transform: isActive ? 'translateX(-4px)' : 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Highlight bar for active item */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: 'var(--accent-neon)',
                  boxShadow: '0 0 10px var(--accent-neon)'
                }} />
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(74, 222, 128, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${isActive ? 'rgba(74, 222, 128, 0.5)' : 'rgba(52, 211, 153, 0.2)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: feature.color,
                    flexShrink: 0
                  }}>
                    <IconComp size={20} />
                  </div>

                  <div>
                    <h4 style={{ 
                      fontSize: '0.92rem', 
                      fontWeight: 700, 
                      color: isActive ? '#ffffff' : 'var(--text-main)',
                      lineHeight: 1.2 
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight 
                  size={16} 
                  style={{ 
                    color: isActive ? 'var(--accent-neon)' : 'var(--text-dim)',
                    transform: isActive ? 'translateX(2px)' : 'none',
                    transition: 'transform 0.2s ease'
                  }} 
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                <span className="badge badge-success" style={{ fontSize: '0.65rem', padding: '2px 8px', background: 'rgba(16, 185, 129, 0.12)' }}>
                  {feature.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Quick Help Card */}
      <div className="glass-card" style={{
        padding: '16px',
        borderRadius: '14px',
        background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.3) 0%, rgba(13, 40, 28, 0.9) 100%)',
        border: '1px solid rgba(52, 211, 153, 0.2)',
        textAlign: 'center'
      }}>
        <Sparkles size={20} style={{ color: '#4ade80', margin: '0 auto 6px' }} />
        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)' }}>
          KrushiMitra Kisan Helpline
        </p>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
          Toll-Free Agri Advisory: 1800-180-1551
        </p>
      </div>
    </aside>
  );
}
