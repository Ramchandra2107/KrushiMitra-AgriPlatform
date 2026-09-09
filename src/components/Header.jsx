import React from 'react';
import { Leaf, Sun, Moon, Globe, ShieldCheck, CloudSun, Stethoscope, Sparkles, Store, Sprout } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, theme, setTheme, lang, setLang }) {
  const toggleTheme = () => {
    if (theme === 'green-plane') setTheme('dark');
    else if (theme === 'dark') setTheme('light');
    else setTheme('green-plane');
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
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
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
            color: '#fff'
          }}>
            <Leaf size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Agri</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient">Vision</span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '-4px', fontWeight: 500 }}>
              AI Agricultural Intelligence
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.15)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setActiveTab('crop-detector')}
            className={`btn-secondary ${activeTab === 'crop-detector' ? 'active' : ''}`}
            style={{
              borderRadius: '8px',
              padding: '8px 14px',
              fontSize: '0.88rem',
              background: activeTab === 'crop-detector' ? 'var(--accent-primary)' : 'transparent',
              color: activeTab === 'crop-detector' ? '#fff' : 'var(--text-muted)',
              border: 'none'
            }}
          >
            <Stethoscope size={16} />
            <span>{lang === 'hi' ? 'फसल रोग जांच' : 'Disease Detector'}</span>
          </button>

          <button
            onClick={() => setActiveTab('mandi')}
            className={`btn-secondary ${activeTab === 'mandi' ? 'active' : ''}`}
            style={{
              borderRadius: '8px',
              padding: '8px 14px',
              fontSize: '0.88rem',
              background: activeTab === 'mandi' ? 'var(--accent-primary)' : 'transparent',
              color: activeTab === 'mandi' ? '#fff' : 'var(--text-muted)',
              border: 'none'
            }}
          >
            <Store size={16} />
            <span>{lang === 'hi' ? 'मंडी भाव' : 'Mandi Rates'}</span>
          </button>

          <button
            onClick={() => setActiveTab('govt-schemes')}
            className={`btn-secondary ${activeTab === 'govt-schemes' ? 'active' : ''}`}
            style={{
              borderRadius: '8px',
              padding: '8px 14px',
              fontSize: '0.88rem',
              background: activeTab === 'govt-schemes' ? 'var(--accent-primary)' : 'transparent',
              color: activeTab === 'govt-schemes' ? '#fff' : 'var(--text-muted)',
              border: 'none'
            }}
          >
            <ShieldCheck size={16} />
            <span>{lang === 'hi' ? 'सरकारी योजनाएं' : 'Govt Schemes'}</span>
          </button>

          <button
            onClick={() => setActiveTab('weather')}
            className={`btn-secondary ${activeTab === 'weather' ? 'active' : ''}`}
            style={{
              borderRadius: '8px',
              padding: '8px 14px',
              fontSize: '0.88rem',
              background: activeTab === 'weather' ? 'var(--accent-primary)' : 'transparent',
              color: activeTab === 'weather' ? '#fff' : 'var(--text-muted)',
              border: 'none'
            }}
          >
            <CloudSun size={16} />
            <span>{lang === 'hi' ? 'मौसम पूर्वानुमान' : 'Weather Forecast'}</span>
          </button>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="glass-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              cursor: 'pointer',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              fontWeight: 600
            }}
            title="Switch Language"
          >
            <Globe size={15} className="text-gradient" />
            <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="glass-pill"
            style={{
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              color: 'var(--text-main)',
              border: '1px solid var(--border-color)',
              fontSize: '0.8rem',
              fontWeight: 600
            }}
            title={`Current Theme: ${theme}. Click to switch theme.`}
          >
            {theme === 'green-plane' && <Sprout size={16} style={{ color: '#4ade80' }} />}
            {theme === 'dark' && <Moon size={16} style={{ color: '#38bdf8' }} />}
            {theme === 'light' && <Sun size={16} style={{ color: '#fbbf24' }} />}
            <span style={{ textTransform: 'capitalize' }}>
              {theme === 'green-plane' ? 'Green Plane' : theme}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
