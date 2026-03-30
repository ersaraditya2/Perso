import React, { useState, useEffect } from 'react';

const BattleUI = ({ stageNumber }) => {
  const [timer, setTimer] = useState(99);

  useEffect(() => {
    setTimer(99); // reset timer tiap stage
    const interval = setInterval(() => {
      setTimer(prev => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [stageNumber]);

  return (
    <div className="battle-ui">
      {/* Timer */}
      <div className="battle-timer">
        <div
          className="pixel-font timer-text"
          style={{ color: timer < 20 ? 'var(--retro-accent)' : 'var(--retro-yellow)' }}
        >
          {timer}
        </div>
      </div>

      {/* Stage Background Effect */}
      <div className="stage-bg-effect" data-stage={stageNumber}>
        <div className="bg-particle" style={{ left: '10%', animationDelay: '0s' }} />
        <div className="bg-particle" style={{ left: '30%', animationDelay: '2s' }} />
        <div className="bg-particle" style={{ left: '50%', animationDelay: '1s' }} />
        <div className="bg-particle" style={{ left: '70%', animationDelay: '3s' }} />
        <div className="bg-particle" style={{ left: '90%', animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default BattleUI;