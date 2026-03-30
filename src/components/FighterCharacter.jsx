import React, { useState, useEffect } from 'react';

const FighterCharacter = ({ type, position, stageId }) => {
  const [health, setHealth] = useState(100);
  const [showAttack, setShowAttack] = useState(false);
  const [showVictory, setShowVictory] = useState(false);
  const [damageNumbers, setDamageNumbers] = useState([]);
  const [superMeter, setSuperMeter] = useState(0);

  const characterNames = {
    fighter1: 'FROST',
    fighter2: 'BLAZE',
    fighter3: 'THUNDER',
    fighter4: 'TERRA',
    fighter5: 'STORM'
  };

  const characterColors = {
    fighter1: 'var(--retro-primary)',
    fighter2: 'var(--retro-accent)',
    fighter3: 'var(--retro-yellow)',
    fighter4: 'var(--retro-green)',
    fighter5: 'var(--retro-accent-orange)'
  };

  useEffect(() => {
    // Simulate battle damage over time
    const damageInterval = setInterval(() => {
      const damage = Math.floor(Math.random() * 15) + 5;
      setHealth(prev => Math.max(prev - damage, 15));
      
      // Show damage number
      const id = Date.now();
      setDamageNumbers(prev => [...prev, { id, value: damage }]);
      setTimeout(() => {
        setDamageNumbers(prev => prev.filter(d => d.id !== id));
      }, 1000);
      
      // Increase super meter
      setSuperMeter(prev => Math.min(prev + 15, 100));
    }, 3000);

    // Random attack animations
    const attackInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        setShowAttack(true);
        setTimeout(() => setShowAttack(false), 600);
      }
    }, 4000);

    // Victory pose on projects stage
    if (stageId === 3 && position === 'left') {
      setTimeout(() => setShowVictory(true), 1500);
    }

    return () => {
      clearInterval(damageInterval);
      clearInterval(attackInterval);
    };
  }, [stageId, position]);

  const getCharacterName = () => {
    const baseType = type.replace('-opponent', '');
    return characterNames[baseType] || 'FIGHTER';
  };

  const getCharacterColor = () => {
    const baseType = type.replace('-opponent', '');
    return characterColors[baseType] || 'var(--retro-primary)';
  };

  const isOpponent = type.includes('opponent');

  return (
    <div 
      className={`fighter-character ${position} ${showVictory ? 'victory' : ''} ${showAttack ? 'attacking' : ''}`} 
      data-type={type}
      key={`${type}-${stageId}`}
    >
      {/* Character Portrait/Avatar */}
      <div className="character-portrait" style={{ borderColor: getCharacterColor() }}>
        <div className="portrait-inner" style={{ background: getCharacterColor() }} />
      </div>

      {/* Character Name Plate */}
      <div className="character-nameplate">
        <div className="pixel-font text-xs" style={{ color: getCharacterColor() }}>
          {getCharacterName()}
        </div>
        <div className="character-health-bar">
          <div 
            className="character-health-fill"
            style={{ 
              width: `${health}%`,
              background: health > 50 ? 'var(--retro-green)' : health > 25 ? 'var(--retro-yellow)' : 'var(--retro-accent)'
            }}
          />
        </div>
        {/* Super Meter */}
        <div className="super-meter">
          <div className="super-meter-fill" style={{ width: `${superMeter}%` }} />
        </div>
      </div>

      {/* Floating Damage Numbers */}
      {damageNumbers.map(dmg => (
        <div key={dmg.id} className="damage-number pixel-font">
          -{dmg.value}
        </div>
      ))}

      <div className="character-sprite">
        {/* Energy Aura */}
        <div className="energy-aura" style={{ borderColor: getCharacterColor() }} />
        
        {/* Special Attack Effect */}
        {showAttack && (
          <>
            <div className="special-attack">
              <div className="energy-blast" style={{ background: `radial-gradient(circle, ${getCharacterColor()} 0%, transparent 70%)` }} />
            </div>
            <div className="hit-spark">POW!</div>
          </>
        )}
        
        {/* Head */}
        <div className="sprite-head">
          <div className="sprite-eyes">
            <div className="sprite-eye" />
            <div className="sprite-eye" />
          </div>
        </div>
        
        {/* Body */}
        <div className="sprite-body" />
        
        {/* Arms */}
        <div className="sprite-arms">
          <div className="sprite-arm left" />
          <div className="sprite-arm right" />
        </div>
        
        {/* Legs */}
        <div className="sprite-legs">
          <div className="sprite-leg" />
          <div className="sprite-leg" />
        </div>
      </div>

      {/* Victory Effect */}
      {showVictory && !isOpponent && (
        <div className="victory-effect">
          <div className="pixel-font text-sm" style={{ color: 'var(--retro-yellow)' }}>
            VICTORY!
          </div>
        </div>
      )}

      {/* K.O. Effect */}
      {health <= 20 && !isOpponent && (
        <div className="ko-indicator pixel-font">DANGER!</div>
      )}
    </div>
  );
};

export default FighterCharacter;
