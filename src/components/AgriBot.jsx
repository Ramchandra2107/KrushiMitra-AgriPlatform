import React, { useState } from 'react';
import { Bot, MessageSquare, Send, X, Sparkles, User, HelpCircle } from 'lucide-react';

export default function AgriBot({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: lang === 'hi' 
        ? 'नमस्ते! मैं आपका एग्रीविज़न AI सहायक (AgriBot) हूँ। आप मुझसे फसल बीमारी, मिट्टी, मौसम या सरकारी योजनाओं के बारे में कुछ भी पूछ सकते हैं!'
        : 'Hello! I am AgriBot, your AI farming assistant. Ask me about crop diseases, soil health, government schemes, or recommended fertilizers!'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = lang === 'hi' ? [
    'PM-KISAN ₹6000 किस्त कैसे मिलेगी?',
    'टमाटर का पछेती अंगमारी रोग कैसे ठीक करें?',
    'धान के लिए सर्वोत्तम उर्वरक क्या है?',
    'फसल बीमा क्लेम की प्रक्रिया क्या है?'
  ] : [
    'How to claim PM-KISAN ₹6000 benefit?',
    'How to cure Tomato Late Blight organically?',
    'Best fertilizer dosage for Paddy field?',
    'PMFBY crop insurance claim steps?'
  ];

  const generateBotResponse = (userQuery) => {
    const q = userQuery.toLowerCase();
    
    if (q.includes('pm-kisan') || q.includes('pm kisan') || q.includes('6000') || q.includes('किस्त')) {
      return lang === 'hi' 
        ? 'PM-KISAN योजना के तहत 2 हेक्टेयर तक वाले किसान परिवारों को प्रतिवर्ष ₹6,000 की वित्तीय सहायता (3 किश्तों में ₹2,000) सीधे उनके आधार लिंक बैंक खाते में प्राप्त होती है। आप pmkisan.gov.in पर न्यू फार्मर रजिस्ट्रेशन के जरिए आवेदन कर सकते हैं।'
        : 'Under PM-KISAN, small and marginal farmers with land up to 2 hectares receive ₹6,000 per year in 3 equal installments of ₹2,000 directly via Aadhaar-linked bank transfer. You can register on pmkisan.gov.in with your land revenue document (Khasra/7-12).';
    } 
    else if (q.includes('tomato') || q.includes('blight') || q.includes('टमाटर') || q.includes('रोग')) {
      return lang === 'hi'
        ? 'टमाटर पछेती अंगमारी (Late Blight) के उपचार के लिए: 1. नीम तेल (5ml/L पानी) का छिड़काव करें। 2. तांबे का कवकनाशी (कॉपर ऑक्सीक्लोराइड 2.5g/L) का उपयोग करें। 3. निचले संक्रमित पत्तों को तुरंत तोड़कर खेत से दूर नष्ट कर दें।'
        : 'For Tomato Late Blight: 1. Spray Neem Oil extract (5ml/L water) or Copper Hydroxide (1%). 2. Apply Mancozeb 75% WP @ 2.5g/L water at initial onset. 3. Avoid sprinkler overhead watering to prevent spore dispersal.';
    }
    else if (q.includes('paddy') || q.includes('rice') || q.includes('fertilizer') || q.includes('उर्वरक') || q.includes('धान')) {
      return lang === 'hi'
        ? 'धान (Paddy) के लिए अनुशंसित NPK अनुपात 120:60:60 kg/Hectare है। बुवाई के समय जिंक सल्फेट (25 kg/ha) का प्रयोग करें जिससे खैरा रोग से बचाव हो सके।'
        : 'For Paddy/Rice, the recommended NPK dosage is 120:60:60 kg/Hectare. Apply Zinc Sulphate (25 kg/ha) at basal stage to prevent Khaira disease.';
    }
    else if (q.includes('insurance') || q.includes('pmfby') || q.includes('बीमा') || q.includes('क्लेम')) {
      return lang === 'hi'
        ? 'PMFBY फसल बीमा योजना में खरीफ फसलों के लिए प्रीमियम दर 2%, रबी फसलों के लिए 1.5% है। फसल नुकसान की स्थिति में 72 घंटे के भीतर बीमा कंपनी के टोल फ्री नंबर 14447 या कृषि अधिकारी को सूचित करें।'
        : 'Under PMFBY crop insurance, farmers pay just 2% premium for Kharif crops and 1.5% for Rabi. In case of localized crop damage, inform your insurance bank or helpline 14447 within 72 hours of damage.';
    }
    else {
      return lang === 'hi'
        ? 'आपका प्रश्न बहुत महत्वपूर्ण है। हमारी सलाह है कि आप अपनी मिट्टी का Soil Health Card टेस्ट करवाएं और निकटतम कृषि विज्ञान केंद्र (KVK) से संपर्क करें।'
        : 'Thank you for your question. Based on agronomic standards, we recommend getting a Soil Health Test done for precise field advice or consulting your local Krishi Vigyan Kendra (KVK).';
    }
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const botReply = generateBotResponse(text);
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.5)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        title="Open AgriBot AI Assistant"
      >
        {isOpen ? <X size={26} /> : <Bot size={28} />}
        {!isOpen && (
          <span style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#fbbf24',
            border: '2px solid var(--bg-primary)'
          }} />
        )}
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div 
          className="glass-card"
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '24px',
            zIndex: 99,
            width: 'calc(100vw - 48px)',
            maxWidth: '390px',
            height: '520px',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-highlight)',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          {/* Chat Header */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 78, 59, 0.4) 100%)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Bot size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', lineHeight: 1.1 }}>AgriBot AI Assistant</h4>
                <span style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 600 }}>● Online & Ready</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  background: msg.sender === 'user' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)',
                  color: msg.sender === 'user' ? '#fff' : 'var(--text-main)',
                  border: msg.sender === 'bot' ? '1px solid var(--border-color)' : 'none',
                  fontSize: '0.88rem',
                  lineHeight: 1.5
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick Prompts Chips */}
          <div style={{ padding: '8px 12px', display: 'flex', gap: '6px', overflowX: 'auto', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--border-color)' }}>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                style={{
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.74rem',
                  whiteSpace: 'nowrap',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div style={{ padding: '12px', background: 'var(--bg-glass)', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder={lang === 'hi' ? 'अपना प्रश्न पूछें...' : 'Ask AgriBot anything...'}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                background: 'rgba(0,0,0,0.3)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              className="btn-primary"
              style={{ padding: '8px 12px', borderRadius: '8px' }}
            >
              <Send size={16} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
