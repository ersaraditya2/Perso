import React, { useState, useEffect } from 'react';
import { Code, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills-section"
      className="min-h-screen py-20 px-4 relative"
      style={{ background: 'linear-gradient(135deg, #1a1d35 0%, #0a0e27 100%)' }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Stage Title */}
        <div className="text-center mb-16">
          <div className="inline-block pixel-border bg-[var(--retro-bg-mid)] px-8 py-4 mb-4">
            <h2 className="stage-title text-2xl md:text-3xl">STAGE 02</h2>
          </div>
          <p className="pixel-font text-sm" style={{ color: 'var(--retro-accent)' }}>COMBAT ABILITIES</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hard Skills */}
          <div className="pixel-border bg-[var(--retro-bg-mid)] p-6">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6" style={{ color: 'var(--retro-primary)' }} />
              <h3 className="pixel-font text-sm" style={{ color: 'var(--retro-yellow)' }}>HARD SKILLS</h3>
            </div>

            <div className="space-y-6">
              {portfolioData.skills.hard.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    {/* Nama skill retro merah */}
                    <span
                      className="pixel-font text-sm font-bold"
                      style={{ color: 'var(--retro-red)', textShadow: '2px 2px 0 #000, -2px -2px 0 #000' }}
                    >
                      {skill.name}
                    </span>
                    <span className="pixel-font text-xs" style={{ color: 'var(--retro-yellow)' }}>
                      LV {skill.level}
                    </span>
                  </div>
                  <div className="health-bar">
                    <div
                      className="health-bar-fill"
                      style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--retro-text-dim)' }}>
                    {skill.category}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="pixel-border bg-[var(--retro-bg-mid)] p-6">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-6 h-6" style={{ color: 'var(--retro-accent)' }} />
              <h3 className="pixel-font text-sm" style={{ color: 'var(--retro-yellow)' }}>SOFT SKILLS</h3>
            </div>

            <div className="space-y-6">
              {portfolioData.skills.soft.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    {/* Nama skill retro merah */}
                    <span
                      className="pixel-font text-sm font-bold"
                      style={{ color: 'var(--retro-red)', textShadow: '2px 2px 0 #000, -2px -2px 0 #000' }}
                    >
                      {skill.name}
                    </span>
                    <span className="pixel-font text-xs" style={{ color: 'var(--retro-yellow)' }}>
                      LV {skill.level}
                    </span>
                  </div>
                  <div className="health-bar">
                    <div
                      className="health-bar-fill"
                      style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 pixel-border bg-[var(--retro-bg-mid)] p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="pixel-font text-2xl mb-2" style={{ color: 'var(--retro-primary)' }}>
                {portfolioData.skills.hard.length}
              </div>
              <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>Hard Skills</div>
            </div>
            <div>
              <div className="pixel-font text-2xl mb-2" style={{ color: 'var(--retro-accent)' }}>
                {portfolioData.skills.soft.length}
              </div>
              <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>Soft Skills</div>
            </div>
            <div>
              <div className="pixel-font text-2xl mb-2" style={{ color: 'var(--retro-yellow)' }}>
                {Math.round(portfolioData.skills.hard.reduce((acc, s) => acc + s.level, 0) / portfolioData.skills.hard.length)}
              </div>
              <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>Avg Level</div>
            </div>
            <div>
              <div className="pixel-font text-2xl mb-2" style={{ color: 'var(--retro-green)' }}>
                A+
              </div>
              <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>Rank</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;