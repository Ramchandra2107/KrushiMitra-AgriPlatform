import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CropDiseaseDetector from './components/CropDiseaseDetector';
import GovtSchemesHub from './components/GovtSchemesHub';
import WeatherForecast from './components/WeatherForecast';
import LeftFeatureDock from './components/LeftFeatureDock';
import AgriBot from './components/AgriBot';
import VoiceAssistant from './components/VoiceAssistant';
import { Leaf } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [botOpen, setBotOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);


  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      // color: '#123b29'
    }}>

      {/* Header Bar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Layout: Left Dock + Content */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '24px',
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        padding: '24px 24px 0',
        boxSizing: 'border-box',
        flex: 1,
        position: 'relative'
      }}>
        <LeftFeatureDock
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenBot={() => setBotOpen(true)}
          onOpenVoice={() => setVoiceOpen(true)}
        />

        <main style={{
          flex: 1,
          minWidth: 0,
          background: '#ffffff',
          borderRadius: '22px',
          border: '1px solid rgba(78, 112, 93, 0.12)',
          boxShadow: '0 10px 30px rgba(31, 74, 57, 0.06)'
        }}>
          {activeTab === 'hero' && <HeroBanner setActiveTab={setActiveTab} />}
          {activeTab === 'crop-detector' && <CropDiseaseDetector />}
          {activeTab === 'govt-schemes' && <GovtSchemesHub />}
          {activeTab === 'weather' && <WeatherForecast />}
        </main>
      </div>

      {/* KrushiBot AI Floating Widget */}
      <AgriBot externalOpen={botOpen} setExternalOpen={setBotOpen} />

      {/* Voice Assistant Floating Widget */}
      <VoiceAssistant externalOpen={voiceOpen} setExternalOpen={setVoiceOpen} />

      {/* Footer */}
      <footer style={{
        marginTop: '60px',
        borderTop: '1px solid rgba(78, 112, 93, 0.25)',
        background: '#ffffff',
        padding: '32px 24px 24px',
        color: '#38634a',
        fontSize: '0.88rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Leaf size={20} style={{ color: '#3bbe39' }} />
            <span style={{ fontWeight: 700, color: '#075b38' }}>KrushiMitra</span>
            <span>— AI Empowering Agricultural Growth</span>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#38634a' }}>
            © 2026 KrushiMitra Platform. Designed for Farmers with ❤️
          </div>
        </div>
      </footer>
    </div>
  );
}
