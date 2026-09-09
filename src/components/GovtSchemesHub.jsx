import React, { useState } from 'react';
import { GOVT_SCHEMES } from '../data/agriData';
import { Search, Filter, ShieldCheck, ExternalLink, Calculator, CheckCircle2, FileText, ChevronRight, X, Sparkles, DollarSign, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GovtSchemesHub({ lang }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalScheme, setActiveModalScheme] = useState(null);
  
  // Scheme Eligibility Calculator State
  const [showCalculator, setShowCalculator] = useState(false);
  const [farmerCategory, setFarmerCategory] = useState('small'); // 'small', 'medium', 'large'
  const [landSize, setLandSize] = useState('1.5');
  const [stateRegion, setStateRegion] = useState('Punjab');
  const [cropType, setCropType] = useState('paddy');
  const [calculatedBenefit, setCalculatedBenefit] = useState(null);

  const categories = ['All', 'Financial Support', 'Insurance', 'Credit & Loans', 'Machinery Subsidy', 'Irrigation & Water', 'Soil & Fertilizer'];

  // Filter schemes
  const filteredSchemes = GOVT_SCHEMES.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scheme.titleHindi.includes(searchTerm) ||
                          scheme.benefitDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRunCalculator = (e) => {
    e.preventDefault();
    const size = parseFloat(landSize) || 1;
    let baseAmount = 6000; // PM-KISAN
    let matchedCount = 1;

    if (farmerCategory === 'small') {
      baseAmount += 25000; // SMAM machinery subsidy estimate + PMKSY micro-irrigation
      matchedCount += 3;
    } else {
      baseAmount += 45000;
      matchedCount += 2;
    }

    if (cropType === 'paddy' || cropType === 'cotton') {
      baseAmount += Math.round(size * 12000); // Fasal bima estimate
    }

    setCalculatedBenefit({
      totalBenefit: baseAmount.toLocaleString('en-IN'),
      matchedCount: matchedCount,
      eligibleList: GOVT_SCHEMES.slice(0, matchedCount)
    });

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback
    }
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
      
      {/* Page Title & Hero */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
        <div>
          <div className="badge badge-warning" style={{ marginBottom: '10px' }}>
            <ShieldCheck size={14} />
            <span>{lang === 'hi' ? 'सरकारी योजनाएं एवं वित्तीय सहायता' : 'Government Welfare & Subsidies'}</span>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>
            {lang === 'hi' ? 'कृषि योजनाएं एवं पात्रता केंद्र' : 'Agri-Govt Schemes Portal'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            {lang === 'hi'
              ? 'केंद्र एवं राज्य सरकार की कृषि योजनाओं की खोज करें, पात्रता जांचें और सीधे आवेदन करें।'
              : 'Explore Central and State agricultural subsidy programs, insurance covers, and financial credit grants.'}
          </p>
        </div>

        {/* Eligibility Calculator Button */}
        <button
          onClick={() => setShowCalculator(true)}
          className="btn-primary"
          style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            padding: '12px 22px',
            borderRadius: '12px',
            fontSize: '0.95rem',
            boxShadow: '0 4px 16px rgba(245, 158, 11, 0.35)'
          }}
        >
          <Calculator size={18} />
          <span>{lang === 'hi' ? 'योजना पात्रता कैलकुलेटर' : 'Scheme Eligibility Calculator'}</span>
        </button>
      </div>

      {/* Search & Filter Control Bar */}
      <div className="glass-card" style={{ padding: '20px', marginBottom: '28px', borderRadius: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* Search Box */}
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder={lang === 'hi' ? 'योजना का नाम या कीवर्ड खोजें (जैसे PM-KISAN, बीमा)...' : 'Search scheme by name or key benefit...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 42px',
                borderRadius: '10px',
                border: '1px solid var(--border-color)',
                background: 'rgba(0,0,0,0.25)',
                color: 'var(--text-main)',
                fontSize: '0.92rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '1px solid var(--accent-neon)' : '1px solid var(--border-color)',
                  background: selectedCategory === cat ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.04)',
                  color: selectedCategory === cat ? '#34d399' : 'var(--text-muted)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schemes Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
        {filteredSchemes.map((scheme) => (
          <div 
            key={scheme.id}
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
              {/* Category Badge & Benefit Chip */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="badge badge-warning">
                  {lang === 'hi' ? scheme.categoryHindi : scheme.category}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#34d399' }}>
                  {scheme.benefitAmount}
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '6px', color: 'var(--text-main)' }}>
                {lang === 'hi' ? scheme.titleHindi : scheme.title}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '14px' }}>
                {scheme.minister}
              </p>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                {scheme.benefitDesc}
              </p>

              {/* Quick Eligibility Bullet */}
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '10px', marginBottom: '20px' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <UserCheck size={14} className="text-gradient" />
                  {lang === 'hi' ? 'मुख्य पात्रता:' : 'Key Eligibility:'}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {scheme.eligibility[0]}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', gap: '10px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
              <button
                onClick={() => setActiveModalScheme(scheme)}
                className="btn-secondary"
                style={{ flex: 1, padding: '10px', fontSize: '0.85rem', justifyContent: 'center' }}
              >
                <FileText size={15} />
                <span>{lang === 'hi' ? 'विवरण व दस्तावेज' : 'View Details'}</span>
              </button>

              <a
                href={scheme.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '10px 14px', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                <span>{lang === 'hi' ? 'आवेदन करें' : 'Apply'}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* SCHEME DETAIL MODAL */}
      {activeModalScheme && (
        <div className="modal-overlay" onClick={() => setActiveModalScheme(null)}>
          <div 
            className="glass-card" 
            onClick={(e) => e.stopPropagation()} 
            style={{ width: '100%', maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto', padding: '32px', borderRadius: '24px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className="badge badge-warning" style={{ marginBottom: '8px' }}>
                  {activeModalScheme.category}
                </span>
                <h2 style={{ fontSize: '1.5rem', lineHeight: 1.2 }}>
                  {lang === 'hi' ? activeModalScheme.titleHindi : activeModalScheme.title}
                </h2>
              </div>
              <button 
                onClick={() => setActiveModalScheme(null)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Benefit Box */}
            <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399', marginBottom: '4px' }}>
                Benefit: {activeModalScheme.benefitAmount}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                {activeModalScheme.benefitDesc}
              </p>
            </div>

            {/* Required Documents */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={18} className="text-gradient" />
                <span>{lang === 'hi' ? 'आवश्यक दस्तावेज (Required Documents):' : 'Required Documents Checklist:'}</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                {activeModalScheme.documents.map((doc, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', background: 'rgba(0,0,0,0.2)', padding: '8px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} style={{ color: '#34d399' }} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step by Step Guide */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ChevronRight size={18} className="text-gradient" />
                <span>{lang === 'hi' ? 'आवेदन प्रक्रिया (Step-by-Step Application):' : 'How to Apply Step-by-Step:'}</span>
              </h4>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {activeModalScheme.steps.map((step, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{step}</li>
                ))}
              </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button onClick={() => setActiveModalScheme(null)} className="btn-secondary">
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
              <a href={activeModalScheme.applyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
                <span>{lang === 'hi' ? 'आधिकारिक पोर्टल पर जाएं' : 'Open Official Govt Portal'}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SCHEME ELIGIBILITY CALCULATOR MODAL */}
      {showCalculator && (
        <div className="modal-overlay" onClick={() => setShowCalculator(false)}>
          <div 
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '640px', padding: '32px', borderRadius: '24px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calculator size={22} style={{ color: '#fbbf24' }} />
                <span>{lang === 'hi' ? 'किसान योजना पात्रता कैलकुलेटर' : 'Farmer Scheme Eligibility Calculator'}</span>
              </h3>
              <button onClick={() => setShowCalculator(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleRunCalculator} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Farmer Category
                  </label>
                  <select
                    value={farmerCategory}
                    onChange={(e) => setFarmerCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
                  >
                    <option value="small">Small & Marginal (&lt; 2 Hectares)</option>
                    <option value="medium">Medium Farmer (2 - 5 Hectares)</option>
                    <option value="large">Large Farmer (&gt; 5 Hectares)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Land Holding (Hectares)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    State / Union Territory
                  </label>
                  <select
                    value={stateRegion}
                    onChange={(e) => setStateRegion(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
                  >
                    <option value="Punjab">Punjab</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Primary Crop Season
                  </label>
                  <select
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
                  >
                    <option value="paddy">Paddy / Rice (Kharif)</option>
                    <option value="wheat">Wheat (Rabi)</option>
                    <option value="cotton">Cotton / Cash Crop</option>
                    <option value="sugarcane">Sugarcane / Horticulture</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '12px', marginTop: '10px', justifyContent: 'center' }}>
                <Sparkles size={18} />
                <span>Calculate My Eligible Subsidies</span>
              </button>
            </form>

            {/* Calculated Result Display */}
            {calculatedBenefit && (
              <div style={{ marginTop: '24px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--accent-neon)', padding: '20px', borderRadius: '16px', animation: 'fadeIn 0.3s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Estimated Total Annual Benefit:</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>₹{calculatedBenefit.totalBenefit}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                  🎉 You are eligible for <strong>{calculatedBenefit.matchedCount} major government schemes</strong> based on your profile!
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {calculatedBenefit.eligibleList.map(s => (
                    <span key={s.id} className="badge badge-success" style={{ fontSize: '0.75rem' }}>
                      {s.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
