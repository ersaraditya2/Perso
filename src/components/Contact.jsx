import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle, Link as LinkIcon, Zap } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Contact = ({ onGameComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bossMode, setBossMode] = useState(true);

  useEffect(() => {
    // Show final boss mode for 3 seconds
    const timer = setTimeout(() => {
      setBossMode(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Trigger game complete after successful submission
      setTimeout(() => {
        if (onGameComplete) onGameComplete();
      }, 2000);
    }, 1500);
  };

  return (
    <section className="min-h-screen py-20 px-4 relative" style={{ background: 'var(--retro-bg-dark)' }}>
      {/* Final Boss Intro */}
      {bossMode && (
        <div className="final-boss-intro">
          <div className="pixel-font boss-text" style={{ color: 'var(--retro-accent)' }}>
            FINAL BOSS
          </div>
          <div className="pixel-font boss-name" style={{ color: 'var(--retro-yellow)' }}>
            CONTACT CHALLENGE
          </div>
          <div className="boss-lightning">
            <Zap className="w-12 h-12" />
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-5xl">
        {/* Stage Title */}
        <div className="text-center mb-16">
          <div className="inline-block pixel-border bg-[var(--retro-bg-mid)] px-8 py-4 mb-4">
            <h2 className="stage-title text-2xl md:text-3xl">FINAL STAGE</h2>
          </div>
          <p className="pixel-font text-sm" style={{ color: 'var(--retro-primary)' }}>CONNECT & CONTINUE</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="pixel-border bg-[var(--retro-bg-mid)] p-6">
              <h3 className="pixel-font text-sm mb-6" style={{ color: 'var(--retro-yellow)' }}>
                CONTACT CHANNELS
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center gap-4 p-4 border-2 hover:bg-[rgba(0,217,255,0.1)] transition-all"
                  style={{ borderColor: 'var(--retro-primary)' }}
                >
                  <Mail className="w-5 h-5" style={{ color: 'var(--retro-primary)' }} />
                  <div>
                    <div className="text-xs mb-1" style={{ color: 'var(--retro-text-dim)' }}>Email</div>
                    <div className="text-sm" style={{ color: 'var(--retro-text)' }}>
                      {portfolioData.contact.email}
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${portfolioData.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 hover:bg-[rgba(255,51,102,0.1)] transition-all"
                  style={{ borderColor: 'var(--retro-accent)' }}
                >
                  <LinkIcon className="w-5 h-5" style={{ color: 'var(--retro-accent)' }} />
                  <div>
                    <div className="text-xs mb-1" style={{ color: 'var(--retro-text-dim)' }}>Instagram</div>
                    <div className="text-sm" style={{ color: 'var(--retro-text)' }}>
                      {portfolioData.contact.instagram}
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                {portfolioData.contact.linkedin && (
                  <a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border-2 hover:bg-[rgba(0,153,255,0.1)] transition-all"
                    style={{ borderColor: 'var(--retro-secondary)' }}
                  >
                    <LinkIcon className="w-5 h-5" style={{ color: 'var(--retro-secondary)' }} />
                    <div>
                      <div className="text-xs mb-1" style={{ color: 'var(--retro-text-dim)' }}>LinkedIn</div>
                      <div className="text-sm" style={{ color: 'var(--retro-text)' }}>View Profile</div>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Game Over Message */}
            <div className="pixel-border bg-[var(--retro-bg-mid)] p-6 text-center">
              <p className="pixel-font text-xs mb-3" style={{ color: 'var(--retro-yellow)' }}>
                DEFEAT THE FINAL BOSS!
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 animate-pulse" style={{ background: 'var(--retro-accent)' }} />
                <div className="w-2 h-2 animate-pulse" style={{ background: 'var(--retro-yellow)', animationDelay: '0.2s' }} />
                <div className="w-2 h-2 animate-pulse" style={{ background: 'var(--retro-primary)', animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="pixel-border bg-[var(--retro-bg-mid)] p-6">
            <h3 className="pixel-font text-sm mb-6" style={{ color: 'var(--retro-yellow)' }}>
              SEND MESSAGE
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--retro-green)' }} />
                <p className="pixel-font text-xs" style={{ color: 'var(--retro-green)' }}>
                  BOSS DEFEATED!
                </p>
                <p className="text-sm mt-2" style={{ color: 'var(--retro-text-dim)' }}>
                  Terima kasih! Pesan Anda akan segera dibalas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs mb-2" style={{ color: 'var(--retro-text-dim)' }}>
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 bg-[var(--retro-bg-dark)] text-[var(--retro-text)] focus:outline-none focus:border-[var(--retro-primary)] transition-colors"
                    style={{ borderColor: 'var(--retro-bg-dark)' }}
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-2" style={{ color: 'var(--retro-text-dim)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 bg-[var(--retro-bg-dark)] text-[var(--retro-text)] focus:outline-none focus:border-[var(--retro-primary)] transition-colors"
                    style={{ borderColor: 'var(--retro-bg-dark)' }}
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-2" style={{ color: 'var(--retro-text-dim)' }}>
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 bg-[var(--retro-bg-dark)] text-[var(--retro-text)] focus:outline-none focus:border-[var(--retro-primary)] transition-colors resize-none"
                    style={{ borderColor: 'var(--retro-bg-dark)' }}
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="pixel-button w-full flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="pixel-font text-xs">ATTACKING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>FINAL ATTACK</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="pixel-font text-xs mb-4" style={{ color: 'var(--retro-text-dim)' }}>
            © 2025 {portfolioData.personal.name} - All Rights Reserved
          </div>
          <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>
            Made with 16-bit fighting spirit 🎮
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;