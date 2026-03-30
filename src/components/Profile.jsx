import React from 'react';
import { User, Target } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Profile = () => {
  return (
    <section className="min-h-screen py-20 px-4 relative" style={{ background: 'var(--retro-bg-dark)' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Stage Title */}
        <div className="text-center mb-16">
          <div className="inline-block pixel-border bg-[var(--retro-bg-mid)] px-8 py-4 mb-4">
            <h2 className="stage-title text-2xl md:text-3xl">STAGE 01</h2>
          </div>
          <p className="pixel-font text-sm" style={{ color: 'var(--retro-primary)' }}>CHARACTER PROFILE</p>
        </div>

        {/* Profile Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="pixel-border bg-[var(--retro-bg-mid)] p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6" style={{ color: 'var(--retro-primary)' }} />
              <h3 className="pixel-font text-sm" style={{ color: 'var(--retro-yellow)' }}>ABOUT</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--retro-text)' }}>
              {portfolioData.profile.description}
            </p>
          </div>

          {/* Character Stats */}
          <div className="pixel-border bg-[var(--retro-bg-mid)] p-6">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6" style={{ color: 'var(--retro-accent)' }} />
              <h3 className="pixel-font text-sm" style={{ color: 'var(--retro-yellow)' }}>INTERESTS</h3>
            </div>
            <div className="space-y-4">
              {portfolioData.profile.interests.map((interest, index) => (
                <div key={index} className="border-l-4 pl-4" style={{ borderColor: 'var(--retro-primary)' }}>
                  <div className="pixel-font text-xs mb-1" style={{ color: 'var(--retro-primary)' }}>
                    {interest.name}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--retro-text-dim)' }}>
                    {interest.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-2">
          {portfolioData.profile.interests.map((_, index) => (
            <div
              key={index}
              className="w-8 h-1"
              style={{ background: 'var(--retro-primary)' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;

