import React, { useState } from 'react';
import { Home, Stethoscope, ShieldCheck, CloudSun, Bot, Mic, ChevronRight, Layers, Zap, Sparkles } from 'lucide-react';

export default function LeftFeatureDock({ activeTab, setActiveTab, onOpenBot, onOpenVoice }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeAction, setActiveAction] = useState(null);

  const features = [
    {
      id: 'hero',
      title: 'Main Page',
      subtitle: 'KrushiMitra Home',
      badge: 'Dashboard',
      icon: Home
    },
    {
      id: 'crop-detector',
      title: 'Disease Detector',
      subtitle: 'AI Crop Diagnostics',
      badge: '98% Accuracy',
      icon: Stethoscope
    },
    {
      id: 'govt-schemes',
      title: 'Govt Schemes',
      subtitle: 'Subsidies & Benefits',
      badge: '₹6000+ Aid',
      icon: ShieldCheck
    },
    {
      id: 'weather',
      title: 'Weather Advisory',
      subtitle: '7-Day Forecast',
      badge: 'Realtime',
      icon: CloudSun
    },
    {
      id: 'bot',
      title: 'KrushiBot AI',
      subtitle: 'Smart Farming Chat',
      badge: '24/7 AI Helper',
      icon: Bot,
      isAction: true
    },
    {
      id: 'voice',
      title: 'Voice Assistant',
      subtitle: 'Speak to KrushiMitra',
      badge: 'Mic Powered',
      icon: Mic,
      isAction: true
    }
  ];

  const handleFeatureClick = (feature) => {
    if (feature.isAction) {
      setActiveAction(feature.id);
      if (feature.id === 'bot' && onOpenBot) onOpenBot();
      if (feature.id === 'voice' && onOpenVoice) onOpenVoice();
    } else {
      setActiveAction(null);
      setActiveTab(feature.id);
    }
  };

  return (
    <aside style={{
      width: '270px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      {/* Feature Navigation Header Box */}
      <div style={{
        padding: '16px 18px',
        borderRadius: '16px',
        background: 'linear-gradient(160deg, #064c31 0%, #075b38 100%)',
        border: '1px solid rgba(59, 190, 57, 0.35)',
        boxShadow: '0 10px 26px rgba(1, 45, 27, 0.2)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '10px',
                background: 'rgba(78, 112, 93, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3bbe39'
          }}>
            <Layers size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>Features Dock</h3>
            <p style={{ fontSize: '0.71rem', color: '#b9e8c0' }}>Quick Access Menu</p>
          </div>
        </div>
        <span className="badge badge-success" style={{ fontSize: '0.67rem', padding: '2px 8px' }}>
          <Zap size={10} /> Active
        </span>
      </div>

      {/* Clickable Feature Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {features.map((feature) => {
          const IconComp = feature.icon;
          const isActive = activeTab === feature.id || activeAction === feature.id;
          const isHovered = hoveredId === feature.id;
          const isDarkState = isActive || isHovered;

          return (
            <div
              key={feature.id}
              onClick={() => handleFeatureClick(feature)}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '14px 16px',
                borderRadius: '14px',
                cursor: 'pointer',
                transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                background: isHovered
                  ? '#35c637'
                  : 'linear-gradient(160deg, #064c31 0%, #075b38 100%)',
                color: '#ffffff',
                border: isDarkState
                  ? '1.5px solid rgba(59,190,57,0.65)'
                  : '1px solid rgba(59,190,57,0.3)',
                boxShadow: isDarkState
                  ? '0 10px 24px rgba(7, 91, 56, 0.24)'
                  : '0 3px 12px rgba(1, 45, 27, 0.16)',
                transform: isDarkState ? 'translateX(5px) scale(1.01)' : 'none',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(8px)'
              }}
            >
              {/* Active left accent bar */}
              {isDarkState && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: '#3bbe39',
                  opacity: 0.8
                }} />
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '11px',
                    background: isHovered ? 'rgba(255,255,255,0.22)' : 'rgba(59,190,57,0.14)',
                    border: `1px solid ${isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(157,229,155,0.25)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9de59b',
                    flexShrink: 0
                  }}>
                    <IconComp size={19} />
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: isHovered ? '#000000' : '#ffffff',
                      lineHeight: 1.2
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{
                      fontSize: '0.74rem',
                      color: isHovered ? '#ffffff' : '#b9e8c0',
                      marginTop: '2px'
                    }}>
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={17}
                  style={{
                    color: '#9de59b',
                    transform: isDarkState ? 'translateX(4px)' : 'none',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '7px' }}>
                <span
                  className="badge"
                  style={{
                    fontSize: '0.63rem',
                    padding: '2px 8px',
                    background: isHovered ? 'rgba(255,255,255,0.18)' : 'rgba(157,229,155,0.14)',
                    color: '#dff6df',
                    border: `1px solid ${isHovered ? 'rgba(255,255,255,0.3)' : 'rgba(157,229,155,0.25)'}`
                  }}
                >
                  {feature.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Helpline Card */}
      <div style={{
        padding: '16px',
        borderRadius: '14px',
        background: 'linear-gradient(160deg, #064c31 0%, #075b38 100%)',
        border: '1px solid rgba(59, 190, 57, 0.3)',
        boxShadow: '0 3px 12px rgba(1, 45, 27, 0.16)',
        textAlign: 'center',
        backdropFilter: 'blur(8px)'
      }}>
        <Sparkles size={18} style={{ color: '#3bbe39', margin: '0 auto 6px' }} />
        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>
          KrushiMitra Kisan Helpline
        </p>
        <p style={{ fontSize: '0.72rem', color: '#b9e8c0', marginTop: '4px' }}>
          Toll-Free Agri Advisory: 1800-180-1551
        </p>
      </div>
    </aside>
  );
}
