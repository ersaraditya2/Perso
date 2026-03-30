import React from 'react';
import { Trophy, Award, Target, Zap } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const getProjectIcon = (type) => {
    return type === 'competition' ? Trophy : Target;
  };

  const getAchievementColor = (achievement) => {
    if (achievement.includes('Juara')) return 'var(--retro-yellow)';
    if (achievement.includes('Finalis')) return 'var(--retro-primary)';
    return 'var(--retro-green)';
  };

  return (
    <section className="min-h-screen py-20 px-4 relative" style={{ background: 'var(--retro-bg-dark)' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Stage Title */}
        <div className="text-center mb-16">
          <div className="inline-block pixel-border bg-[var(--retro-bg-mid)] px-8 py-4 mb-4">
            <h2 className="stage-title text-2xl md:text-3xl">STAGE 03</h2>
          </div>
          <p className="pixel-font text-sm" style={{ color: 'var(--retro-green)' }}>BATTLE ACHIEVEMENTS</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {portfolioData.projects.map((project) => {
            const Icon = getProjectIcon(project.type);
            return (
              <div
                key={project.id}
                className="pixel-border bg-[var(--retro-bg-mid)] p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)'
                }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6" style={{ color: 'var(--retro-primary)' }} />
                    <h3 className="pixel-font text-xs" style={{ color: 'var(--retro-yellow)' }}>
                      {project.type === 'competition' ? 'BATTLE' : 'QUEST'}
                    </h3>
                  </div>
                  <Award className="w-5 h-5" style={{ color: getAchievementColor(project.achievement) }} />
                </div>

                {/* Project Title */}
                <h4 className="text-lg font-bold mb-3" style={{ color: 'var(--retro-text)' }}>
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--retro-text-dim)' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs border-2"
                      style={{
                        borderColor: 'var(--retro-primary)',
                        color: 'var(--retro-primary)',
                        background: 'rgba(0, 217, 255, 0.1)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="flex items-center gap-2 pt-4 border-t-2" style={{ borderColor: 'var(--retro-bg-dark)' }}>
                  <Zap className="w-4 h-4" style={{ color: getAchievementColor(project.achievement) }} />
                  <span className="pixel-font text-xs" style={{ color: getAchievementColor(project.achievement) }}>
                    {project.achievement}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="pixel-border bg-[var(--retro-bg-mid)] p-8">
          <h3 className="pixel-font text-sm text-center mb-8" style={{ color: 'var(--retro-yellow)' }}>
            BATTLE STATISTICS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center border-4" style={{ borderColor: 'var(--retro-primary)' }}>
                <span className="pixel-font text-2xl" style={{ color: 'var(--retro-primary)' }}>
                  {portfolioData.projects.length}
                </span>
              </div>
              <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>Total Battles</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center border-4" style={{ borderColor: 'var(--retro-yellow)' }}>
                <span className="pixel-font text-2xl" style={{ color: 'var(--retro-yellow)' }}>
                  {portfolioData.projects.filter(p => p.achievement.includes('Juara')).length}
                </span>
              </div>
              <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>Victories</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center border-4" style={{ borderColor: 'var(--retro-green)' }}>
                <span className="pixel-font text-2xl" style={{ color: 'var(--retro-green)' }}>
                  {portfolioData.projects.filter(p => p.type === 'project').length}
                </span>
              </div>
              <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>Quests</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center border-4" style={{ borderColor: 'var(--retro-accent)' }}>
                <span className="pixel-font text-2xl" style={{ color: 'var(--retro-accent)' }}>
                  {portfolioData.projects.filter(p => p.type === 'competition').length}
                </span>
              </div>
              <div className="text-xs" style={{ color: 'var(--retro-text-dim)' }}>Competitions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

