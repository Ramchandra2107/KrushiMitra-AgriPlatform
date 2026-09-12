import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, X, Volume2, VolumeX, MessageSquare } from 'lucide-react';

export default function VoiceAssistant({ externalOpen, setExternalOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [supported, setSupported] = useState(true);
  const [statusMsg, setStatusMsg] = useState('Press the mic to start speaking');

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (externalOpen) {
      setIsOpen(true);
      if (setExternalOpen) setExternalOpen(false);
    }
  }, [externalOpen, setExternalOpen]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-IN';

    recognition.onstart = () => {
      setIsListening(true);
      setStatusMsg('Listening… speak now');
      setTranscript('');
      setResponse('');
    };

    recognition.onresult = (event) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      setTranscript(final || interim);
    };

    recognition.onend = () => {
      setIsListening(false);
      setStatusMsg('Processing your question…');
    };

    recognition.onerror = (e) => {
      setIsListening(false);
      if (e.error === 'no-speech') {
        setStatusMsg('No speech detected. Try again.');
      } else if (e.error === 'not-allowed') {
        setStatusMsg('Microphone access denied. Please allow mic in browser settings.');
      } else {
        setStatusMsg('Error: ' + e.error);
      }
    };

    recognitionRef.current = recognition;
  }, []);

  // Auto-generate response when transcript is set and listening ends
  useEffect(() => {
    if (!isListening && transcript) {
      const reply = generateResponse(transcript);
      setResponse(reply);
      setStatusMsg('Speaking response…');
      speakText(reply);
    }
  }, [isListening, transcript]);

  const generateResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('pm kisan') || q.includes('pm-kisan') || q.includes('6000')) {
      return 'Under PM-KISAN, farmers with up to 2 hectares receive 6 thousand rupees per year in 3 installments via Aadhaar-linked bank transfer. Register on pmkisan.gov.in with your land revenue document.';
    } else if (q.includes('disease') || q.includes('blight') || q.includes('tomato')) {
      return 'For crop diseases like Tomato Late Blight, spray Neem Oil at 5ml per liter of water, or use Copper Hydroxide at 1 percent concentration. Avoid overhead watering to prevent spore spread.';
    } else if (q.includes('weather') || q.includes('rain') || q.includes('forecast')) {
      return 'Use the Weather Advisory section for a 7-day real-time forecast tailored to your farming region. Navigate there using the sidebar.';
    } else if (q.includes('fertilizer') || q.includes('paddy') || q.includes('rice')) {
      return 'For Paddy or Rice crops, the recommended NPK fertilizer dosage is 120 to 60 to 60 kilograms per hectare. Apply Zinc Sulphate at 25 kilograms per hectare at the basal stage.';
    } else if (q.includes('insurance') || q.includes('pmfby')) {
      return 'Under PMFBY crop insurance, Kharif crop premium is just 2 percent and Rabi is 1.5 percent. Report any crop damage to helpline 14447 within 72 hours.';
    } else if (q.includes('scheme') || q.includes('subsidy') || q.includes('government')) {
      return 'KrushiMitra has a Govt Schemes section with all major agricultural subsidies including PM-KISAN, soil health card, and PM Fasal Bima Yojana. Check the sidebar to explore.';
    } else {
      return 'Thank you for your question. I suggest visiting your local Krishi Vigyan Kendra, or use the KrushiBot chat assistant for detailed farming advice tailored to your needs.';
    }
  };

  const speakText = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      setStatusMsg('Press the mic to ask another question');
    };
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setStatusMsg('Press the mic to start speaking');
  };

  const startListening = () => {
    if (!recognitionRef.current || isListening) return;
    stopSpeaking();
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const handleClose = () => {
    stopListening();
    stopSpeaking();
    setTranscript('');
    setResponse('');
    setStatusMsg('Press the mic to start speaking');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Voice Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Open Voice Assistant"
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '24px',
          zIndex: 998,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: isListening
            ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
            : 'linear-gradient(135deg, #075b38 0%, #0b8f4d 100%)',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isListening
            ? '0 0 20px rgba(220, 38, 38, 0.5), 0 6px 20px rgba(0,0,0,0.3)'
            : '0 6px 20px rgba(34, 197, 94, 0.4)',
          transition: 'all 0.3s ease',
          animation: isListening ? 'pulseGlow 1.2s infinite' : 'none'
        }}
      >
        {isListening ? <MicOff size={22} /> : <Mic size={22} />}
      </button>

      {/* Voice Assistant Panel */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '162px',
          right: '24px',
          zIndex: 997,
          width: 'calc(100vw - 48px)',
          maxWidth: '360px',
          borderRadius: '22px',
          background: 'linear-gradient(160deg, #064c31 0%, #075b38 100%)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.5), 0 0 30px rgba(34, 197, 94, 0.1)',
          overflow: 'hidden',
          animation: 'fadeIn 0.25s ease-out'
        }}>
          {/* Header */}
          <div style={{
            padding: '16px 18px',
            background: 'rgba(11, 143, 77, 0.48)',
            borderBottom: '1px solid rgba(34, 197, 94, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'rgba(34, 197, 94, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4ade80'
              }}>
                <Mic size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e8fdf2', lineHeight: 1.1 }}>
                  Voice Assistant
                </h4>
                <span style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 600 }}>
                  {isListening ? '🔴 Recording…' : isSpeaking ? '🔊 Speaking…' : '● Ready'}
                </span>
              </div>
            </div>
            <button
              onClick={handleClose}
              style={{ background: 'transparent', border: 'none', color: '#6ee7b7', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '20px 18px' }}>
            {!supported ? (
              <div style={{ textAlign: 'center', color: '#f87171', fontSize: '0.88rem', padding: '16px 0' }}>
                ⚠️ Your browser does not support Speech Recognition.<br />
                Please use Chrome or Edge for voice features.
              </div>
            ) : (
              <>
                {/* Status Message */}
                <p style={{
                  fontSize: '0.8rem',
                  color: '#6ee7b7',
                  textAlign: 'center',
                  marginBottom: '16px',
                  minHeight: '20px'
                }}>
                  {statusMsg}
                </p>

                {/* Mic Button */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <button
                    onClick={isListening ? stopListening : startListening}
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: isListening
                        ? 'linear-gradient(135deg, #dc2626, #b91c1c)'
                        : 'linear-gradient(135deg, #4e705d, #678b73)',
                      border: `3px solid ${isListening ? 'rgba(248,113,113,0.4)' : 'rgba(74,222,128,0.4)'}`,
                      color: '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isListening
                        ? '0 0 24px rgba(220, 38, 38, 0.5)'
                        : '0 0 20px rgba(34, 197, 94, 0.4)',
                      transition: 'all 0.3s ease',
                      animation: isListening ? 'pulseGlow 1.2s infinite' : 'none'
                    }}
                    title={isListening ? 'Stop listening' : 'Start listening'}
                  >
                    {isListening ? <MicOff size={30} /> : <Mic size={30} />}
                  </button>
                </div>

                {/* Transcript display */}
                {transcript && (
                  <div style={{
                    background: 'rgba(34, 197, 94, 0.08)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    marginBottom: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <MessageSquare size={13} style={{ color: '#4ade80' }} />
                      <span style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 600 }}>YOU SAID</span>
                    </div>
                    <p style={{ fontSize: '0.87rem', color: '#e8fdf2', lineHeight: 1.5 }}>{transcript}</p>
                  </div>
                )}

                {/* Response display */}
                {response && (
                  <div style={{
                    background: 'rgba(10, 58, 30, 0.7)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '12px',
                    padding: '12px 14px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Volume2 size={13} style={{ color: '#4e705d' }} />
                        <span style={{ fontSize: '0.7rem', color: '#4e705d', fontWeight: 600 }}>KRISHIMITRA SAYS</span>
                      </div>
                      {isSpeaking && (
                        <button
                          onClick={stopSpeaking}
                          style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer', padding: 0 }}
                          title="Stop speaking"
                        >
                          <VolumeX size={15} />
                        </button>
                      )}
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#a7f3d0', lineHeight: 1.55 }}>{response}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
