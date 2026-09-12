import React, { useState, useEffect } from 'react';
import { Bot, Send, X } from 'lucide-react';

export default function AgriBot({ externalOpen, setExternalOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (externalOpen) {
      setIsOpen(true);
      if (setExternalOpen) setExternalOpen(false);
    }
  }, [externalOpen, setExternalOpen]);

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am KrushiBot, your AI farming assistant. Ask me about crop diseases, soil health, government schemes, or recommended fertilizers!'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'How to claim PM-KISAN ₹6000 benefit?',
    'How to cure Tomato Late Blight organically?',
    'Best fertilizer dosage for Paddy field?',
    'PMFBY crop insurance claim steps?'
  ];

  const generateBotResponse = (userQuery) => {
    const q = userQuery.toLowerCase();
    
    if (q.includes('pm-kisan') || q.includes('pm kisan') || q.includes('6000')) {
      return 'Under PM-KISAN, small and marginal farmers with land up to 2 hectares receive ₹6,000 per year in 3 equal installments of ₹2,000 directly via Aadhaar-linked bank transfer. You can register on pmkisan.gov.in with your land revenue document (Khasra/7-12).';
    } 
    else if (q.includes('tomato') || q.includes('blight') || q.includes('disease')) {
      return 'For Tomato Late Blight: 1. Spray Neem Oil extract (5ml/L water) or Copper Hydroxide (1%). 2. Apply Mancozeb 75% WP @ 2.5g/L water at initial onset. 3. Avoid sprinkler overhead watering to prevent spore dispersal.';
    }
    else if (q.includes('paddy') || q.includes('rice') || q.includes('fertilizer')) {
      return 'For Paddy/Rice, the recommended NPK dosage is 120:60:60 kg/Hectare. Apply Zinc Sulphate (25 kg/ha) at basal stage to prevent Khaira disease.';
    }
    else if (q.includes('insurance') || q.includes('pmfby') || q.includes('claim')) {
      return 'Under PMFBY crop insurance, farmers pay just 2% premium for Kharif crops and 1.5% for Rabi. In case of localized crop damage, inform your insurance bank or helpline 14447 within 72 hours of damage.';
    }
    else {
      return 'Thank you for your question. Based on agronomic standards, we recommend getting a Soil Health Test done for precise field advice or consulting your local Krishi Vigyan Kendra (KVK).';
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
    }, 500);
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
          zIndex: 1000,
          width: '62px',
          height: '62px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #075b38 0%, #0b8f4d 100%)',
          color: '#fff',
          border: '2px solid rgba(59, 190, 57, 0.55)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 28px rgba(34, 197, 94, 0.45), 0 4px 12px rgba(0,0,0,0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        title="Open KrushiBot AI Assistant"
      >
        {isOpen ? <X size={26} /> : <Bot size={28} />}
        {!isOpen && (
          <span style={{
            position: 'absolute',
            top: '3px',
            right: '3px',
            width: '13px',
            height: '13px',
            borderRadius: '50%',
            background: '#3bbe39',
            border: '2px solid #064c31'
          }} />
        )}
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '24px',
            zIndex: 1001,
            width: 'calc(100vw - 48px)',
            maxWidth: '390px',
            height: '520px',
            borderRadius: '24px',
            background: 'linear-gradient(160deg, #064c31 0%, #075b38 100%)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 16px 48px rgba(0,0,0,0.55), 0 0 30px rgba(34, 197, 94, 0.15)',
            border: '1px solid rgba(34, 197, 94, 0.25)',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          {/* Chat Header */}
          <div style={{
            background: 'rgba(11, 143, 77, 0.48)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(34, 197, 94, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#4e705d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Bot size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', lineHeight: 1.1, color: '#ffffff' }}>KrushiBot AI Assistant</h4>
                <span style={{ fontSize: '0.72rem', color: '#9de59b', fontWeight: 600 }}>● Online & Ready</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: '#a7f3d0', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(6, 76, 49, 0.72)' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  background: msg.sender === 'user' ? 'linear-gradient(135deg, #0b8f4d, #3bbe39)' : 'rgba(223, 246, 223, 0.14)',
                  color: '#e8fdf2',
                  border: msg.sender === 'bot' ? '1px solid rgba(34, 197, 94, 0.2)' : 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  fontSize: '0.88rem',
                  lineHeight: 1.5
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick Prompts Chips */}
          <div style={{ padding: '8px 12px', display: 'flex', gap: '6px', overflowX: 'auto', background: 'rgba(5, 30, 16, 0.8)', borderTop: '1px solid rgba(34, 197, 94, 0.15)' }}>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                style={{
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.74rem',
                  whiteSpace: 'nowrap',
                  background: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  color: '#4ade80',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div style={{ padding: '12px', background: 'rgba(5, 30, 16, 0.9)', borderTop: '1px solid rgba(34, 197, 94, 0.15)', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="Ask KrushiBot anything..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(34, 197, 94, 0.25)',
                background: 'rgba(10, 53, 32, 0.7)',
                color: '#e8fdf2',
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
