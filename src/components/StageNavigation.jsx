import React from 'react';
import { ChevronRight } from 'lucide-react';

const StageNavigation = ({ onNext, canGoNext }) => {
  return (
    <div
      className="stage-navigation"
      style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        zIndex: 1000, // supaya selalu di atas konten lain
      }}
    >
      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        style={{
          opacity: canGoNext ? 1 : 0.3,
          cursor: canGoNext ? 'pointer' : 'not-allowed',
          background: 'var(--retro-primary)',
          border: 'none',
          padding: '0.5rem',
          borderRadius: '0.25rem',
        }}
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};

export default StageNavigation;