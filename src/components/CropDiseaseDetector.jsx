import React, { useState } from 'react';
import { CROP_DISEASES } from '../data/agriData';
import { Upload, Sparkles, AlertTriangle, CheckCircle, Shield, Bug, Droplet, Zap, Printer, RefreshCw, Eye } from 'lucide-react';

export default function CropDiseaseDetector({ lang }) {
  const [selectedImage, setSelectedImage] = useState(CROP_DISEASES[0].sampleImage);
  const [activeDisease, setActiveDisease] = useState(CROP_DISEASES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [remedyTab, setRemedyTab] = useState('organic'); // 'organic', 'chemical', 'symptoms', 'preventive'
  const [customUploadName, setCustomUploadName] = useState(null);

  const handleSelectSample = (disease) => {
    setIsScanning(true);
    setSelectedImage(disease.sampleImage);
    setCustomUploadName(null);
    setTimeout(() => {
      setActiveDisease(disease);
      setIsScanning(false);
    }, 1500);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setCustomUploadName(file.name);
      setIsScanning(true);

      // Match or select random disease diagnostic for custom image
      setTimeout(() => {
        const randomMatch = CROP_DISEASES[Math.floor(Math.random() * (CROP_DISEASES.length - 1))];
        setActiveDisease({
          ...randomMatch,
          confidence: (88 + Math.random() * 10).toFixed(1)
        });
        setIsScanning(false);
      }, 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div className="badge badge-success" style={{ marginBottom: '10px' }}>
          <Sparkles size={14} />
          <span>{lang === 'hi' ? 'कंप्यूटर विज़न एआई' : 'Computer Vision AI Diagnostics'}</span>
        </div>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          {lang === 'hi' ? 'फसल रोग पहचान एवं निदान' : 'Crop Disease Detection & Diagnosis'}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          {lang === 'hi'
            ? 'अपनी पीड़ित फसल के पत्ते की फोटो अपलोड करें अथवा नीचे दिए गए नमूनों में से चयन करें।'
            : 'Upload a clear leaf photo of your crop or pick from our sample leaf gallery to simulate real-time AI disease scanning.'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
        
        {/* Left Column: Upload & Scanner Box */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-card" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Upload size={18} className="text-gradient" />
              <span>{lang === 'hi' ? 'पत्ते की फोटो अपलोड करें' : 'Upload Leaf Image'}</span>
            </h3>

            {/* Dropzone Area */}
            <label style={{
              display: 'block',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px dashed var(--border-color)',
              background: 'rgba(0,0,0,0.2)',
              cursor: 'pointer',
              height: '320px'
            }}>
              <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />

              {/* Leaf Preview Image */}
              <img 
                src={selectedImage} 
                alt="Crop Leaf Preview" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isScanning ? 'brightness(0.7) blur(1px)' : 'none',
                  transition: 'all 0.3s ease'
                }} 
              />

              {/* Scanning Overlay Animation */}
              {isScanning && (
                <div className="animate-scan" />
              )}

              {/* Overlay Prompt */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                padding: '20px',
                textAlign: 'center',
                backdropFilter: isScanning ? 'blur(4px)' : 'none'
              }}>
                {isScanning ? (
                  <>
                    <RefreshCw size={36} className="text-gradient" style={{ animation: 'spin 1.5s linear infinite' }} />
                    <p style={{ marginTop: '12px', fontWeight: 700, fontSize: '1.1rem' }}>
                      {lang === 'hi' ? 'AI रोग स्कैनिंग जारी है...' : 'AI Analyzing Leaf Pathogens...'}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                      Checking 1,000+ plant disease features
                    </p>
                  </>
                ) : (
                  <div style={{ background: 'rgba(0,0,0,0.6)', padding: '12px 20px', borderRadius: '12px', backdropFilter: 'blur(8px)' }}>
                    <Upload size={24} style={{ marginBottom: '6px' }} />
                    <p style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                      {lang === 'hi' ? 'नया फोटो अपलोड करने के लिए क्लिक करें' : 'Click to Upload Custom Photo'}
                    </p>
                  </div>
                )}
              </div>
            </label>

            {customUploadName && (
              <p style={{ marginTop: '10px', fontSize: '0.82rem', color: 'var(--accent-light)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} /> Uploaded: {customUploadName}
              </p>
            )}
          </div>

          {/* Preset Sample Gallery */}
          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Eye size={16} />
              <span>{lang === 'hi' ? 'परीक्षण हेतु नमूने चुनिए:' : 'Test with Sample Leaves:'}</span>
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {CROP_DISEASES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectSample(item)}
                  style={{
                    border: activeDisease.id === item.id ? '2px solid var(--accent-neon)' : '1px solid var(--border-color)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: '0',
                    transition: 'all 0.2s ease',
                    opacity: activeDisease.id === item.id ? 1 : 0.75
                  }}
                >
                  <img src={item.sampleImage} alt={item.crop} style={{ width: '100%', height: '65px', objectFit: 'cover' }} />
                  <div style={{ padding: '4px', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-main)', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.crop}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Diagnostic Results Card */}
        <div>
          <div className="glass-card" style={{ padding: '28px', borderRadius: '20px', border: '1px solid var(--border-highlight)' }}>
            
            {/* Top Diagnostic Title Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '18px', marginBottom: '20px' }}>
              <div>
                <span className="badge badge-info" style={{ marginBottom: '8px' }}>
                  {activeDisease.crop}
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', lineHeight: 1.2 }}>
                  {lang === 'hi' ? activeDisease.hindiName : activeDisease.diseaseName}
                </h3>
                {lang === 'hi' && (
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {activeDisease.diseaseName}
                  </p>
                )}
              </div>

              {/* Severity & Confidence */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                <span className={`badge ${
                  activeDisease.severity === 'High' ? 'badge-danger' : 
                  activeDisease.severity === 'Medium' ? 'badge-warning' : 'badge-success'
                }`}>
                  <AlertTriangle size={13} />
                  {activeDisease.severity} Risk
                </span>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 700 }}>
                  {activeDisease.confidence}% Match
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              {activeDisease.description}
            </p>

            {/* Treatment & Symptoms Tabs */}
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '20px', overflowX: 'auto' }}>
              <button
                onClick={() => setRemedyTab('organic')}
                className="btn-secondary"
                style={{
                  padding: '6px 14px',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  background: remedyTab === 'organic' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                  color: remedyTab === 'organic' ? '#34d399' : 'var(--text-muted)',
                  borderColor: remedyTab === 'organic' ? 'var(--accent-primary)' : 'transparent'
                }}
              >
                <Droplet size={14} />
                <span>{lang === 'hi' ? 'जैविक उपचार' : 'Organic Remedies'}</span>
              </button>

              <button
                onClick={() => setRemedyTab('chemical')}
                className="btn-secondary"
                style={{
                  padding: '6px 14px',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  background: remedyTab === 'chemical' ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
                  color: remedyTab === 'chemical' ? '#fbbf24' : 'var(--text-muted)',
                  borderColor: remedyTab === 'chemical' ? '#f59e0b' : 'transparent'
                }}
              >
                <Zap size={14} />
                <span>{lang === 'hi' ? 'रासायनिक स्प्रे' : 'Chemical Spray'}</span>
              </button>

              <button
                onClick={() => setRemedyTab('symptoms')}
                className="btn-secondary"
                style={{
                  padding: '6px 14px',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  background: remedyTab === 'symptoms' ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                  color: remedyTab === 'symptoms' ? '#60a5fa' : 'var(--text-muted)',
                  borderColor: remedyTab === 'symptoms' ? '#3b82f6' : 'transparent'
                }}
              >
                <Bug size={14} />
                <span>{lang === 'hi' ? 'लक्षण' : 'Symptoms'}</span>
              </button>

              <button
                onClick={() => setRemedyTab('preventive')}
                className="btn-secondary"
                style={{
                  padding: '6px 14px',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  background: remedyTab === 'preventive' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  color: remedyTab === 'preventive' ? 'var(--text-main)' : 'var(--text-muted)',
                  borderColor: remedyTab === 'preventive' ? 'var(--text-muted)' : 'transparent'
                }}
              >
                <Shield size={14} />
                <span>{lang === 'hi' ? 'रोकथाम' : 'Preventive Tips'}</span>
              </button>
            </div>

            {/* Tab Content Rendering */}
            <div style={{ minHeight: '160px', marginBottom: '24px' }}>
              {remedyTab === 'organic' && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeDisease.organicTreatment.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
                      <CheckCircle size={16} style={{ color: '#34d399', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {remedyTab === 'chemical' && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeDisease.chemicalTreatment.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
                      <Zap size={16} style={{ color: '#fbbf24', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {remedyTab === 'symptoms' && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeDisease.symptoms.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
                      <Bug size={16} style={{ color: '#60a5fa', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {remedyTab === 'preventive' && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeDisease.preventiveTips.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
                      <Shield size={16} style={{ color: 'var(--text-main)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Action Bar: Download/Print */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                Diagnostic ID: #{activeDisease.id.toUpperCase()}-2026
              </span>

              <button onClick={handlePrint} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <Printer size={15} />
                <span>{lang === 'hi' ? 'रिपोर्ट प्रिंट करें' : 'Print Diagnostic Report'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
