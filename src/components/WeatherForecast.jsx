import React, { useState } from 'react';
import { REGIONAL_WEATHER_PRESETS } from '../data/agriData';
import { CloudSun, Sun, CloudRain, Wind, Droplets, Umbrella, ShieldAlert, MapPin, Search, Calendar } from 'lucide-react';

export default function WeatherForecast() {
  const [selectedRegion, setSelectedRegion] = useState(REGIONAL_WEATHER_PRESETS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const match = REGIONAL_WEATHER_PRESETS.find(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.state.toLowerCase().includes(searchQuery.toLowerCase()));
    if (match) {
      setSelectedRegion(match);
    } else {
      setSelectedRegion({
        name: searchQuery + ", India",
        state: "India",
        temp: 29 + Math.floor(Math.random() * 5),
        condition: "Partly Sunny",
        humidity: 65,
        windSpeed: 12,
        rainProb: 20,
        uvIndex: 7,
        soilMoisture: "Optimal (30%)",
        forecast: [
          { day: "Today", tempMax: 31, tempMin: 23, icon: "sun", rainProb: 20, condition: "Partly Sunny" },
          { day: "Thu", tempMax: 32, tempMin: 24, icon: "cloud-sun", rainProb: 15, condition: "Passing Clouds" },
          { day: "Fri", tempMax: 30, tempMin: 22, icon: "cloud-rain", rainProb: 60, condition: "Light Rain" },
          { day: "Sat", tempMax: 29, tempMin: 21, icon: "cloud-rain", rainProb: 70, condition: "Showers" },
          { day: "Sun", tempMax: 31, tempMin: 23, icon: "sun", rainProb: 10, condition: "Sunny" },
          { day: "Mon", tempMax: 33, tempMin: 24, icon: "sun", rainProb: 5, condition: "Clear" },
          { day: "Tue", tempMax: 34, tempMin: 25, icon: "sun", rainProb: 0, condition: "Sunny" }
        ],
        advisory: {
          irrigation: "Light irrigation recommended in evening. Soil moisture level is optimal.",
          spraying: "Favorable conditions for foliar spray until Friday rain arrives.",
          harvesting: "Prepare dry storage facilities ahead of weekend rain."
        }
      });
    }
  };

  const getWeatherIcon = (iconName) => {
    switch(iconName) {
      case 'sun': return <Sun size={28} style={{ color: '#fbbf24' }} />;
      case 'cloud-rain': return <CloudRain size={28} style={{ color: '#34d399' }} />;
      default: return <CloudSun size={28} style={{ color: '#4ade80' }} />;
    }
  };

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '24px 0' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div className="badge badge-info" style={{ marginBottom: '10px' }}>
          <CloudSun size={14} />
          <span>Agri-Weather & Micro-Climate Intelligence</span>
        </div>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Weather Forecast & Farming Advisory
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Hyper-local weather metrics with customized agronomic advisories for smart farm operations.
        </p>
      </div>

      {/* Region Selector Bar */}
      <div className="glass-card" style={{ padding: '20px', marginBottom: '28px', borderRadius: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          
          {/* Preset Buttons */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
            {REGIONAL_WEATHER_PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => setSelectedRegion(preset)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: selectedRegion.name === preset.name ? '1px solid #0b8f4d' : '1px solid var(--border-color)',
                  background: selectedRegion.name === preset.name ? 'rgba(59, 190, 57, 0.16)' : '#ffffff',
                  color: selectedRegion.name === preset.name ? '#075b38' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MapPin size={14} />
                <span>{preset.name}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', width: '300px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search District/City..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 36px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  background: '#ffffff',
                  color: 'var(--text-main)',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>
            <button type="submit" className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Main Weather Overview Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        
        {/* Left: Main Temperature & Conditions Card */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '32px', 
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #075b38 0%, #0b8f4d 100%)',
            border: '1px solid rgba(59, 190, 57, 0.42)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9de59b', fontWeight: 600, fontSize: '0.9rem', marginBottom: '12px' }}>
              <MapPin size={18} />
              <span>{selectedRegion.name}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px' }}>
              <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1, color: '#ffffff' }}>{selectedRegion.temp}°C</h1>
              <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{selectedRegion.condition}</span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Estimated Soil Moisture: <strong style={{ color: '#34d399' }}>{selectedRegion.soilMoisture}</strong>
            </p>
          </div>

          {/* Quick Metrics Chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ textAlign: 'center' }}>
              <Droplets size={18} style={{ color: '#9de59b', marginBottom: '4px' }} />
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{selectedRegion.humidity}%</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Humidity</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Wind size={18} style={{ color: '#3bbe39', marginBottom: '4px' }} />
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{selectedRegion.windSpeed} km/h</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Wind</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Umbrella size={18} style={{ color: '#b9e8c0', marginBottom: '4px' }} />
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{selectedRegion.rainProb}%</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Rain</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Sun size={18} style={{ color: '#fbbf24', marginBottom: '4px' }} />
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>UV {selectedRegion.uvIndex}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>UV Index</div>
            </div>
          </div>
        </div>

        {/* Right: Agricultural Advisory Panel */}
        <div className="glass-card" style={{ padding: '32px', borderRadius: '24px', border: '1px solid var(--border-highlight)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldAlert size={22} style={{ color: '#4ade80' }} />
            <span>Daily Agricultural Advisories</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Advisory 1: Irrigation */}
            <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '14px 18px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#34d399', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Droplets size={16} />
                <span>Irrigation Advisory:</span>
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                {selectedRegion.advisory.irrigation}
              </p>
            </div>

            {/* Advisory 2: Spraying */}
            <div style={{ background: 'rgba(74, 222, 128, 0.12)', border: '1px solid rgba(74, 222, 128, 0.25)', padding: '14px 18px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#4ade80', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Wind size={16} />
                <span>Pesticide Spraying Window:</span>
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                {selectedRegion.advisory.spraying}
              </p>
            </div>

            {/* Advisory 3: Harvesting */}
            <div style={{ background: 'rgba(52, 211, 153, 0.12)', border: '1px solid rgba(52, 211, 153, 0.25)', padding: '14px 18px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#34d399', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} />
                <span>Harvest & Post-Harvest:</span>
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                {selectedRegion.advisory.harvesting}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 7-Day Forecast Carousel Deck */}
      <div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={18} className="text-gradient" />
          <span>7-Day Extended Weather Forecast</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px' }}>
          {selectedRegion.forecast.map((fc, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '18px 12px',
                textAlign: 'center',
                borderRadius: '16px',
                border: idx === 0 ? '1px solid var(--accent-neon)' : '1px solid var(--border-color)',
                background: idx === 0 ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)'
              }}
            >
              <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '10px', color: idx === 0 ? '#34d399' : 'var(--text-main)' }}>
                {fc.day}
              </div>

              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                {getWeatherIcon(fc.icon)}
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {fc.condition}
              </div>

              <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                {fc.tempMax}° <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 500 }}>{fc.tempMin}°</span>
              </div>

              <div style={{ fontSize: '0.72rem', color: '#34d399', marginTop: '6px', fontWeight: 600 }}>
                ☔ {fc.rainProb}%
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
