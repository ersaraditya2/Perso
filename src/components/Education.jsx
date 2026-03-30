import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Education = () => {
  return (
    <section className="min-h-screen py-20 px-4 relative flex items-center" style={{ background: 'linear-gradient(135deg, #1a1d35 0%, #0a0e27 100%)' }}>
      <div className="container mx-auto max-w-4xl">
        {/* Stage Title */}
        <div className="text-center mb-16">
          <div className="inline-block pixel-border bg-[var(--retro-bg-mid)] px-8 py-4 mb-4">
            <h2 className="stage-title text-2xl md:text-3xl">STAGE 04</h2>
          </div>
          <p className="pixel-font text-sm" style={{ color: 'var(--retro-accent)' }}>TRAINING GROUNDS</p>
        </div>

        {/* Education Card */}
        <div className="pixel-border bg-[var(--retro-bg-mid)] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4" style={{ borderColor: 'var(--retro-primary)' }} />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4" style={{ borderColor: 'var(--retro-primary)' }} />

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 border-4 flex items-center justify-center" style={{ borderColor: 'var(--retro-yellow)' }}>
                <GraduationCap className="w-10 h-10" style={{ color: 'var(--retro-yellow)' }} />
              </div>
            </div>

            {/* University Name */}
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: 'var(--retro-primary)' }}>
              {portfolioData.education.university}
            </h3>

            {/* Major */}
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 border-2" style={{ borderColor: 'var(--retro-yellow)', background: 'rgba(255, 215, 0, 0.1)' }}>
                <p className="pixel-font text-xs md:text-sm" style={{ color: 'var(--retro-yellow)' }}>
                  {portfolioData.education.major}
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <Calendar className="w-5 h-5" style={{ color: 'var(--retro-primary)' }} />
                <div>
                  <div className="text-xs mb-1" style={{ color: 'var(--retro-text-dim)' }}>Periode</div>
                  <div className="font-semibold" style={{ color: 'var(--retro-text)' }}>
                    {portfolioData.education.period}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5" style={{ color: 'var(--retro-accent)' }} />
                <div>
                  <div className="text-xs mb-1" style={{ color: 'var(--retro-text-dim)' }}>Status</div>
                  <div className="font-semibold" style={{ color: 'var(--retro-green)' }}>
                    {portfolioData.education.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Level Complete */}
            <div className="mt-12 text-center">
              <div className="inline-block pixel-border bg-[var(--retro-bg-dark)] px-8 py-4">
                <p className="pixel-font text-sm" style={{ color: 'var(--retro-green)' }}>
                  LEVEL IN PROGRESS...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-12 h-2"
              style={{
                background: i < 3 ? 'var(--retro-green)' : 'var(--retro-bg-mid)',
                boxShadow: i < 3 ? '0 0 10px var(--retro-green)' : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

