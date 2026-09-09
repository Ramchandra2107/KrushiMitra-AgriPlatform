import React from 'react';
import { MANDI_PRICES } from '../data/agriData';
import { TrendingUp, TrendingDown, ArrowUpRight, Store } from 'lucide-react';

export default function MandiTicker({ lang, setActiveTab }) {
  return (
    <div style={{
      background: 'rgba(6, 26, 18, 0.95)',
      borderBottom: '1px solid var(--border-color)',
      padding: '8px 0',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 40,
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        {/* Mandi Live Label */}
        <button
          onClick={() => setActiveTab && setActiveTab('mandi')}
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
            flexShrink: 0
          }}
          title="Click to view all Mandi Rates"
        >
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#4ade80',
            boxShadow: '0 0 8px #4ade80',
            animation: 'pulseGlow 1.5s infinite'
          }} />
          <Store size={14} />
          <span>{lang === 'hi' ? 'लाइव मंडी भाव' : 'LIVE MANDI'}</span>
        </button>

        {/* Scrolling Ticker Track */}
        <div style={{
          flex: 1,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div className="mandi-ticker-track" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            whiteSpace: 'nowrap'
          }}>
            {/* Render items twice for seamless marquee loop */}
            {[...MANDI_PRICES, ...MANDI_PRICES].map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveTab && setActiveTab('mandi')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  transition: 'background 0.2s ease',
                  color: 'var(--text-main)'
                }}
                className="ticker-item"
              >
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                  {lang === 'hi' ? (item.hindiCommodity || item.commodity) : item.commodity}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>({item.mandi})</span>
                <span style={{ fontWeight: 700, color: '#34d399' }}>{item.priceDisplay || item.price}</span>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '1px 6px',
                  borderRadius: '4px',
                  background: item.trend === 'up' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  color: item.trend === 'up' ? '#4ade80' : '#f87171'
                }}>
                  {item.trend === 'up' ? <TrendingUp size={12} style={{ marginRight: '2px' }} /> : <TrendingDown size={12} style={{ marginRight: '2px' }} />}
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <button
          onClick={() => setActiveTab && setActiveTab('mandi')}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--accent-light)',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}
        >
          <span>{lang === 'hi' ? 'सभी भाव देखें' : 'View All'}</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
}
