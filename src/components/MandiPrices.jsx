import React, { useState } from 'react';
import { MANDI_PRICES } from '../data/agriData';
import { 
  Store, Search, TrendingUp, TrendingDown, Filter, RefreshCw, 
  MapPin, Calculator, Calendar, ArrowUpRight, BarChart2, ShieldCheck, Sparkles, AlertCircle 
} from 'lucide-react';

export default function MandiPrices({ lang }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [calcQuantity, setCalcQuantity] = useState(10); // in Quintals
  const [calcCrop, setCalcCrop] = useState(MANDI_PRICES[0]);

  // Categories list
  const categories = ['All', 'Cereals', 'Vegetables', 'Pulses', 'Oilseeds', 'Commercial'];

  // Filtered prices
  const filteredPrices = MANDI_PRICES.filter(item => {
    const matchesSearch = 
      item.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.hindiCommodity && item.hindiCommodity.includes(searchQuery)) ||
      item.mandi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.state.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate Market Stats
  const topGainer = MANDI_PRICES.reduce((prev, current) => 
    parseFloat(current.change) > parseFloat(prev.change) ? current : prev, MANDI_PRICES[0]
  );
  
  const highestPriced = MANDI_PRICES.reduce((prev, current) => 
    parseFloat(current.price) > parseFloat(prev.price) ? current : prev, MANDI_PRICES[0]
  );

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
      
      {/* Header Banner */}
      <div style={{ marginBottom: '32px' }}>
        <div className="badge badge-success" style={{ marginBottom: '10px' }}>
          <Store size={14} />
          <span>{lang === 'hi' ? 'राष्ट्रीय APMC कृषि बाजार दरें' : 'National APMC Mandi Intelligence'}</span>
        </div>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '8px' }}>
          {lang === 'hi' ? (
            <>लाइव मंडी <span className="text-gradient">भाव एवं बाजार विश्लेषण</span></>
          ) : (
            <>Live APMC <span className="text-gradient">Mandi Commodity Rates</span></>
          )}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          {lang === 'hi' 
            ? 'भारत की प्रमुख कृषि मंडियों से दैनिक फसल भाव, न्यूनतम/अधिकतम दरें और बाजार रुझान देखें।'
            : 'Track real-time crop prices, min/max APMC rates, total arrivals, and trend movements across major mandis in India.'}
        </p>
      </div>

      {/* Top Statistics Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginBottom: '32px'
      }}>
        {/* Stat 1: Total Mandis */}
        <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#34d399'
          }}>
            <Store size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {lang === 'hi' ? 'ट्रैक की गई फसलें' : 'Commodities Tracked'}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{MANDI_PRICES.length} Mandis</div>
          </div>
        </div>

        {/* Stat 2: Top Gainer */}
        <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(74, 222, 128, 0.15)',
            border: '1px solid rgba(74, 222, 128, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4ade80'
          }}>
            <TrendingUp size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {lang === 'hi' ? 'सर्वाधिक वृद्धि' : 'Top Gainer Today'}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {lang === 'hi' ? topGainer.hindiCommodity : topGainer.commodity}
            </div>
            <span style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 700 }}>
              {topGainer.change} ({topGainer.priceDisplay})
            </span>
          </div>
        </div>

        {/* Stat 3: Highest Value */}
        <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fbbf24'
          }}>
            <BarChart2 size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {lang === 'hi' ? 'उच्चतम मूल्य फसल' : 'Highest Value Crop'}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {lang === 'hi' ? highestPriced.hindiCommodity : highestPriced.commodity}
            </div>
            <span style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 700 }}>
              {highestPriced.priceDisplay} / Quintal
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card" style={{ padding: '20px', borderRadius: '18px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Search Box */}
          <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text"
              placeholder={lang === 'hi' ? 'फसल, मंडी या राज्य खोजें...' : 'Search by crop, mandi or state...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                borderRadius: '10px',
                border: '1px solid var(--border-color)',
                background: 'rgba(0, 0, 0, 0.2)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Filter Chips */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Filter size={16} style={{ color: 'var(--text-muted)', marginRight: '4px' }} />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: selectedCategory === cat ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Grid of Crop Mandi Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        {filteredPrices.length > 0 ? (
          filteredPrices.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Card Header: Category & Trend */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge badge-info" style={{ fontSize: '0.72rem' }}>
                    {item.category}
                  </span>
                  
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: item.trend === 'up' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    color: item.trend === 'up' ? '#4ade80' : '#f87171',
                    border: `1px solid ${item.trend === 'up' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                  }}>
                    {item.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {item.change}
                  </span>
                </div>

                {/* Commodity Name & Mandi */}
                <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>
                  {lang === 'hi' ? (item.hindiCommodity || item.commodity) : item.commodity}
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '16px' }}>
                  <MapPin size={15} style={{ color: 'var(--accent-light)' }} />
                  <span>{item.mandi}</span>
                </div>

                {/* Main Price Display */}
                <div style={{ 
                  background: 'rgba(0, 0, 0, 0.25)', 
                  padding: '16px', 
                  borderRadius: '12px', 
                  marginBottom: '16px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline'
                }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                      {lang === 'hi' ? 'मॉडल मूल्य' : 'Modal Price'}
                    </span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-neon)' }}>
                      {item.priceDisplay || `₹${item.price}`}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                    {item.unit}
                  </span>
                </div>

                {/* Min / Max Range & Arrivals */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '8px 10px', borderRadius: '8px' }}>
                    <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                      {lang === 'hi' ? 'न्यूनतम - अधिकतम' : 'Min - Max Range'}
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                      {item.minPrice} - {item.maxPrice}
                    </span>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '8px 10px', borderRadius: '8px' }}>
                    <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                      {lang === 'hi' ? 'दैनिक आवक' : 'Daily Arrival'}
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                      {item.arrival}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => {
                  setCalcCrop(item);
                  setSelectedItem(item);
                }}
                className="btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: '20px',
                  borderRadius: '10px',
                  padding: '10px',
                  fontSize: '0.88rem'
                }}
              >
                <Calculator size={16} />
                <span>{lang === 'hi' ? 'आय की गणना करें' : 'Calculate Earnings'}</span>
              </button>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px' }}>
            <AlertCircle size={48} style={{ color: 'var(--text-dim)', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No Mandi Rates Found</h3>
            <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search query or filter selection.</p>
          </div>
        )}
      </div>

      {/* Interactive Crop Revenue Calculator Component */}
      <div className="glass-card" style={{ padding: '32px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <Calculator size={24} className="text-gradient" />
          <h2 style={{ fontSize: '1.5rem' }}>
            {lang === 'hi' ? 'फसल बिक्री आय कैलकुलेटर' : 'Mandi Crop Earnings Estimator'}
          </h2>
        </div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
          {lang === 'hi'
            ? 'अपनी फसल की मात्रा (क्विंटल में) दर्ज करें और वर्तमान मंडी दरों के अनुसार अनुमानित आय देखें।'
            : 'Select a crop and enter your harvest quantity in Quintals (1 Quintal = 100 kg) to estimate total market return.'}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
          
          {/* Crop Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>
              {lang === 'hi' ? 'फसल और मंडी चुनें:' : 'Select Commodity & Mandi:'}
            </label>
            <select
              value={calcCrop.commodity}
              onChange={(e) => {
                const found = MANDI_PRICES.find(c => c.commodity === e.target.value);
                if (found) setCalcCrop(found);
              }}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            >
              {MANDI_PRICES.map((c, i) => (
                <option key={i} value={c.commodity} style={{ background: '#0f271b', color: '#fff' }}>
                  {c.commodity} — ({c.mandi}) — {c.priceDisplay}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Input */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>
              {lang === 'hi' ? 'मात्रा (क्विंटल में):' : 'Quantity (in Quintals):'}
            </label>
            <input 
              type="number"
              min="1"
              max="10000"
              value={calcQuantity}
              onChange={(e) => setCalcQuantity(Math.max(1, parseInt(e.target.value) || 0))}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Estimated Payout Display */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 78, 59, 0.4) 100%)',
            border: '1px solid var(--border-highlight)',
            padding: '20px',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
              {lang === 'hi' ? 'अनुमानित कुल बिक्री राशि' : 'Estimated Total Market Value'}
            </span>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-neon)' }}>
              ₹{(parseInt(calcCrop.price) * calcQuantity).toLocaleString('en-IN')}
            </span>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-light)', marginTop: '4px' }}>
              ({calcQuantity} Quintal × {calcCrop.priceDisplay})
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
