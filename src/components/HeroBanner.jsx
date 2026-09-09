import React from 'react';
import { Stethoscope, ShieldCheck, CloudSun, Sparkles, ArrowRight, Activity, Award, ThermometerSun, Store } from 'lucide-react';

export default function HeroBanner({ setActiveTab, lang }) {
  return (
    <div style={{ padding: '40px 24px 20px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Hero Header Box */}
      <div 
        className="glass-card" 
        style={{ 
          padding: '48px 36px', 
          borderRadius: '24px', 
          position: 'relative', 
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 78, 59, 0.25) 100%)',
          border: '1px solid rgba(74, 222, 128, 0.3)'
        }}
      >
        <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
          <div className="badge badge-success" style={{ marginBottom: '16px', padding: '6px 14px' }}>
            <Sparkles size={14} />
            <span>{lang === 'hi' ? 'एआई तकनीक द्वारा संचालित' : 'AI-Powered Agricultural Intelligence'}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}>
            {lang === 'hi' ? (
              <>स्मार्ट खेती के लिए <span className="text-gradient">सटीक समाधान</span> और सरकारी सुरक्षा</>
            ) : (
              <>Empowering Farmers with <span className="text-gradient">AI Diagnostics</span> & Govt Subsidies</>
            )}
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>
            {lang === 'hi'
              ? 'फसल की बीमारियों की त्वरित AI जांच करें, ₹6,000+ की सरकारी योजनाओं का लाभ उठाएं और मौसम व मंडी की सटीक सलाह प्राप्त करें।'
              : 'Detect plant diseases in seconds with computer vision, track live APMC Mandi commodity rates, and calculate eligible government financial schemes.'}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('crop-detector')} 
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '1rem', borderRadius: '12px' }}
            >
              <Stethoscope size={20} />
              <span>{lang === 'hi' ? 'फसल जांच शुरू करें' : 'Detect Crop Disease'}</span>
              <ArrowRight size={18} />
            </button>

            <button 
              onClick={() => setActiveTab('mandi')} 
              className="btn-secondary"
              style={{ padding: '14px 24px', fontSize: '1rem', borderRadius: '12px' }}
            >
              <Store size={20} className="text-gradient" />
              <span>{lang === 'hi' ? 'लाइव मंडी भाव देखें' : 'View Mandi Rates'}</span>
            </button>
          </div>
        </div>

        {/* Decorative Leaf Glow */}
        <div style={{
          position: 'absolute',
          right: '-40px',
          bottom: '-40px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }} />
      </div>

      {/* Feature Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginTop: '32px'
      }}>
        {/* Card 1: Disease Detector */}
        <div 
          onClick={() => setActiveTab('crop-detector')}
          className="glass-card"
          style={{ padding: '28px', cursor: 'pointer', borderRadius: '18px' }}
        >
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#34d399',
            marginBottom: '16px'
          }}>
            <Stethoscope size={26} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            {lang === 'hi' ? 'फसल रोग निदान' : 'Crop Disease Detection'}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '18px' }}>
            {lang === 'hi'
              ? 'पत्ते की फोटो अपलोड करें। हमारा AI मॉडल तुरंत बीमारी, जैविक उपचार और दवाइयों की जानकारी देगा।'
              : 'Upload or capture leaf photos. Instant diagnostic accuracy with organic and chemical treatment recommendations.'}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem' }}>
            <span>{lang === 'hi' ? 'स्कैन करें' : 'Scan Leaf Now'}</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Card 2: Live Mandi Rates */}
        <div 
          onClick={() => setActiveTab('mandi')}
          className="glass-card"
          style={{ padding: '28px', cursor: 'pointer', borderRadius: '18px' }}
        >
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'rgba(74, 222, 128, 0.15)',
            border: '1px solid rgba(74, 222, 128, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4ade80',
            marginBottom: '16px'
          }}>
            <Store size={26} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            {lang === 'hi' ? 'लाइव मंडी भाव' : 'APMC Mandi Rates'}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '18px' }}>
            {lang === 'hi'
              ? 'गेहूं, धान, कपास, सोयाबीन व सब्जियों के रियल-टाइम APMC मंडी दरें और फसल बिक्री आय कैलकुलेटर।'
              : 'Track national APMC crop prices, daily arrival tonnages, price trends and estimate harvest income.'}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ade80', fontWeight: 600, fontSize: '0.9rem' }}>
            <span>{lang === 'hi' ? 'मंडी दरें देखें' : 'View Live Rates'}</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Card 3: Government Schemes */}
        <div 
          onClick={() => setActiveTab('govt-schemes')}
          className="glass-card"
          style={{ padding: '28px', cursor: 'pointer', borderRadius: '18px' }}
        >
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fbbf24',
            marginBottom: '16px'
          }}>
            <ShieldCheck size={26} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            {lang === 'hi' ? 'सरकारी योजनाएं एवं सब्सिडी' : 'Govt Schemes & Subsidies'}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '18px' }}>
            {lang === 'hi'
              ? 'PM-KISAN, बीमा और उपकरण सब्सिडी। पात्रता कैलकुलेटर से अपनी उपयुक्त योजनाओं की जांच करें।'
              : 'Search central & state farmer welfare schemes. Use our Scheme Calculator for instant eligibility results.'}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontWeight: 600, fontSize: '0.9rem' }}>
            <span>{lang === 'hi' ? 'पात्रता की जाँच करें' : 'Calculate Eligibility'}</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Card 4: Weather Forecast */}
        <div 
          onClick={() => setActiveTab('weather')}
          className="glass-card"
          style={{ padding: '28px', cursor: 'pointer', borderRadius: '18px' }}
        >
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'rgba(59, 130, 246, 0.15)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#60a5fa',
            marginBottom: '16px'
          }}>
            <CloudSun size={26} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            {lang === 'hi' ? 'मौसम पूर्वानुमान व कृषि सलाह' : 'Weather & Farming Advisory'}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '18px' }}>
            {lang === 'hi'
              ? '7-दिन का सटीक मौसम पूर्वानुमान, सिंचाई और कीटनाशक छिड़काव के लिए दैनिक सलाह।'
              : '7-Day micro-weather forecast with specialized daily advice for irrigation, spraying windows, and harvesting.'}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#60a5fa', fontWeight: 600, fontSize: '0.9rem' }}>
            <span>{lang === 'hi' ? 'पूर्वानुमान देखें' : 'View Forecast'}</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* Metrics Banner */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginTop: '32px'
      }}>
        <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
          <Activity size={22} className="text-gradient" style={{ marginBottom: '8px' }} />
          <h4 style={{ fontSize: '1.6rem', fontWeight: 800 }}>96.5%</h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>AI Detection Precision</p>
        </div>

        <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
          <Award size={22} style={{ color: '#fbbf24', marginBottom: '8px' }} />
          <h4 style={{ fontSize: '1.6rem', fontWeight: 800 }}>10+</h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Active Central Schemes</p>
        </div>

        <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
          <ThermometerSun size={22} style={{ color: '#60a5fa', marginBottom: '8px' }} />
          <h4 style={{ fontSize: '1.6rem', fontWeight: 800 }}>7-Day</h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Agri Weather Forecast</p>
        </div>

        <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
          <Sparkles size={22} style={{ color: '#34d399', marginBottom: '8px' }} />
          <h4 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Free</h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Open Source for Farmers</p>
        </div>
      </div>
    </div>
  );
}
