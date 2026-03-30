// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Gamepad2, Zap } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = ({ onStart }) => {
  const [showCursor, setShowCursor] = useState(true);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleInsertCoin = () => {
    setCoins(prev => prev + 1);
    if (coins === 0) {
      setTimeout(() => onStart(), 500);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden scanlines"
      style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1d35 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 border-4 border-[var(--retro-primary)] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-4 border-[var(--retro-accent)] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-4 border-[var(--retro-yellow)] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Game Title Screen */}
          <div className="mb-12 relative">
            <div className="flex justify-center mb-6">
              <Gamepad2 className="w-16 h-16 text-[var(--retro-primary)] arcade-glow animate-bounce" />
            </div>

            <h1
              className="pixel-font text-4xl md:text-6xl mb-6 glitch"
              style={{ color: 'var(--retro-primary)' }}
            >
              {portfolioData.personal.name}
            </h1>

            <div className="pixel-border bg-[var(--retro-bg-mid)] p-6 mb-8 max-w-2xl mx-auto">
              <p
                className="pixel-font text-xs md:text-sm mb-4"
                style={{ color: 'var(--retro-yellow)' }}
              >
                {portfolioData.personal.title}
              </p>
              <p
                className="pixel-font text-xs"
                style={{ color: 'var(--retro-text-dim)' }}
              >
                {portfolioData.personal.university}
              </p>
            </div>

            <div className="mb-8">
              <p
                className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
                style={{ color: 'var(--retro-text)' }}
              >
                {portfolioData.personal.shortDescription}
              </p>
            </div>
          </div>

          {/* Insert Coin Section */}
          <div className="flex flex-col items-center gap-6">
            <div
              className="pixel-font text-lg"
              style={{ color: 'var(--retro-yellow)' }}
            >
              CREDITS: {coins}
            </div>

            <button onClick={handleInsertCoin} className="pixel-button group">
              <span className="flex items-center gap-3">
                <Zap className="w-4 h-4" />
                INSERT COIN
                <Zap className="w-4 h-4" />
              </span>
            </button>

            {coins > 0 && (
              <div
                className="pixel-font text-sm animate-pulse"
                style={{ color: 'var(--retro-green)' }}
              >
                PRESS START{showCursor ? ' _' : ''}
              </div>
            )}
          </div>

          {/* Bottom decoration */}
          <div className="mt-16 flex justify-center gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 animate-pulse"
                style={{
                  background:
                    i === 0
                      ? 'var(--retro-accent)'
                      : i === 1
                      ? 'var(--retro-yellow)'
                      : 'var(--retro-primary)',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;