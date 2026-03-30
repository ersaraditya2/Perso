import React, { useState, useEffect } from 'react';

const StageIntro = ({ stageName, stageNumber }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [stageName]);

  if (!show) return null;

  return (
    <div className="stage-intro-overlay">
      <div className="stage-intro-content">
        <div className="pixel-font stage-intro-number" style={{ color: 'var(--retro-yellow)' }}>
          {stageName}
        </div>
        <div className="pixel-font stage-intro-fight" style={{ color: 'var(--retro-accent)' }}>
          FIGHT!
        </div>
        {/* Battle indicators */}
        <div className="battle-indicators">
          <div className="indicator-line" />
          <div className="indicator-line" />
        </div>
      </div>
    </div>
  );
};

export default StageIntro;

