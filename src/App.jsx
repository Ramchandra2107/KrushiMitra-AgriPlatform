import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CropDiseaseDetector from './components/CropDiseaseDetector';
import GovtSchemesHub from './components/GovtSchemesHub';
import WeatherForecast from './components/WeatherForecast';
import MandiTicker from './components/MandiTicker';
import MandiPrices from './components/MandiPrices';

import AgriBot from './components/AgriBot';
import { Leaf, Heart, ShieldCheck, Stethoscope, CloudSun, Store } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero'); // 'hero', 'crop-detector', 'mandi', 'govt-schemes', 'weather'
  const [theme, setTheme] = useState('green-plane');
  const [lang, setLang] = useState('en');

  // Update theme attribute on root HTML element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        theme={theme} 
        setTheme={setTheme} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Live Mandi Prices Ticker Bar */}
      <MandiTicker lang={lang} setActiveTab={setActiveTab} />

      {/* Main Content Render */}
      <main style={{ flex: 1 }}>
        {activeTab === 'hero' && (
          <HeroBanner setActiveTab={setActiveTab} lang={lang} />
        )}

        {activeTab === 'crop-detector' && (
          <CropDiseaseDetector lang={lang} />
        )}

        {activeTab === 'mandi' && (
          <MandiPrices lang={lang} />
        )}

        {activeTab === 'govt-schemes' && (
          <GovtSchemesHub lang={lang} />
        )}

        {activeTab === 'weather' && (
          <WeatherForecast lang={lang} />
        )}
      </main>

      {/* AI Assistant Floating Widget */}
      <AgriBot lang={lang} />

      {/* Footer */}
      <footer style={{
        marginTop: '60px',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-glass)',
        padding: '32px 24px 24px',
        color: 'var(--text-muted)',
        fontSize: '0.88rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Leaf size={20} className="text-gradient" />
            <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>AgriVision</span>
            <span>— AI Empowering Agricultural Growth</span>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button onClick={() => setActiveTab('crop-detector')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              {lang === 'hi' ? 'फसल जांच' : 'Disease Detection'}
            </button>
            <button onClick={() => setActiveTab('mandi')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              {lang === 'hi' ? 'मंडी भाव' : 'Mandi Rates'}
            </button>
            <button onClick={() => setActiveTab('govt-schemes')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              {lang === 'hi' ? 'सरकारी योजनाएं' : 'Govt Schemes'}
            </button>
            <button onClick={() => setActiveTab('weather')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              {lang === 'hi' ? 'मौसम सलाह' : 'Weather Advisory'}
            </button>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            © 2026 AgriVision Platform. Designed for Farmers with ❤️
          </div>
        </div>
      </footer>
    </div>
  );
}
