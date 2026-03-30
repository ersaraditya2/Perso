import React, { useState, useEffect } from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const GameComplete = ({ score, combos, onRestart }) => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [achievements] = useState([
    { id: 1, name: 'Portfolio Explorer', desc: 'Viewed all stages', unlocked: true },
    { id: 2, name: 'Combo Master', desc: `${combos} stage transitions`, unlocked: combos > 3 },
    { id: 3, name: 'High Scorer', desc: `${score} points earned`, unlocked: score > 400 },
    { id: 4, name: 'Speed Runner', desc: 'Completed in record time', unlocked: true }
  ]);

  useEffect(() => {
    setTimeout(() => setShowFireworks(true), 1000);
  }, []);

  return (
    <div className="game-complete-screen">
      {/* Fireworks Effect */}
      {showFireworks && (
        <div className="fireworks-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="firework"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="game-complete-content">
        {/* Trophy Icon */}
        <div className="trophy-icon">
          <Trophy className="w-24 h-24" style={{ color: 'var(--retro-yellow)' }} />
        </div>

        {/* Main Title */}
        <div className="pixel-font complete-title" style={{ color: 'var(--retro-yellow)' }}>
          GAME COMPLETE!
        </div>

        {/* Subtitle */}
        <div className="pixel-font complete-subtitle" style={{ color: 'var(--retro-green)' }}>
          CONGRATULATIONS!
        </div>

        {/* Stats */}
        <div className="complete-stats">
          <div className="stat-box">
            <div className="pixel-font stat-label">FINAL SCORE</div>
            <div className="pixel-font stat-value" style={{ color: 'var(--retro-green)' }}>
              {score.toString().padStart(6, '0')}
            </div>
          </div>
          <div className="stat-box">
            <div className="pixel-font stat-label">COMBOS</div>
            <div className="pixel-font stat-value" style={{ color: 'var(--retro-primary)' }}>
              {combos}
            </div>
          </div>
          <div className="stat-box">
            <div className="pixel-font stat-label">RANK</div>
            <div className="pixel-font stat-value" style={{ color: 'var(--retro-accent)' }}>
              S+
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <div className="pixel-font achievements-title" style={{ color: 'var(--retro-yellow)' }}>
            ACHIEVEMENTS UNLOCKED
          </div>
          <div className="achievements-grid">
            {achievements.map(achievement => (
              <div
                key={achievement.id}
                className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
              >
                <Award className="w-6 h-6" />
                <div className="achievement-name pixel-font">{achievement.name}</div>
                <div className="achievement-desc">{achievement.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Thank You Message */}
        <div className="thank-you-message">
          <div className="pixel-font" style={{ color: 'var(--retro-text)', fontSize: '14px', marginBottom: '10px' }}>
            Thank you for viewing my portfolio!
          </div>
          <div style={{ color: 'var(--retro-text-dim)', fontSize: '12px' }}>
            Ersa Raditya - Mekatronika & Kecerdasan Buatan
          </div>
        </div>

        {/* Restart Button */}
        <button className="pixel-button restart-button" onClick={onRestart}>
          PLAY AGAIN
        </button>

        {/* Credits */}
        <div className="pixel-font credits-text">
          © 2025 EMERGENT STUDIOS - Made with 💙
        </div>
      </div>
    </div>
  );
};

export default GameComplete;