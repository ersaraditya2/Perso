import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react'; // hapus karena tidak digunakan
import './App.css';
import './styles/retro.css';
import './styles/characters.css';
import './styles/effects.css';
import './styles/battle-ui.css';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import StageNavigation from './components/StageNavigation';
import FighterCharacter from './components/FighterCharacter';
import StageIntro from './components/StageIntro';
import BattleUI from './components/BattleUI';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [comboCount, setComboCount] = useState(0);

  const stages = [
    { id: 0, component: Hero, name: 'START' },
    { id: 1, component: Profile, name: 'STAGE 01', character: 'fighter1' },
    { id: 2, component: Skills, name: 'STAGE 02', character: 'fighter2' },
    { id: 3, component: Projects, name: 'STAGE 03', character: 'fighter3' },
    { id: 4, component: Education, name: 'STAGE 04', character: 'fighter4' },
    { id: 5, component: Contact, name: 'FINAL STAGE', character: 'fighter5' }
  ];

  const handleStart = () => {
    setGameStarted(true);
    setTimeout(() => {
      goToStage(1);
    }, 500);
  };

  const goToStage = (stageIndex) => {
    if (stageIndex < 0 || stageIndex >= stages.length || transitioning) return;
    setTransitioning(true);
    setComboCount(prev => prev + 1);

    setTimeout(() => {
      setCurrentStage(stageIndex);
      setTransitioning(false);
      if (stageIndex > 0) setShowIntro(true);
    }, 300);
  };

  const nextStage = () => {
    if (currentStage < stages.length - 1) goToStage(currentStage + 1);
  };

  const prevStage = () => {
    if (currentStage > 0) goToStage(currentStage - 1);
  };

  // Keyboard navigation (fix dependency warning)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || currentStage === 0) return;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') nextStage();
      else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') prevStage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, currentStage, transitioning, nextStage, prevStage]); // tambah nextStage & prevStage

  const CurrentStageComponent = stages[currentStage].component;
  const currentCharacter = stages[currentStage].character;
  const currentStageName = stages[currentStage].name;

  return (
    <div className="App">
      {comboCount > 1 && currentStage > 0 && (
        <div className="combo-counter">
          <div className="pixel-font combo-text">{comboCount} COMBO!</div>
          <div className="combo-spark" />
        </div>
      )}

      <div className={`stage-container ${transitioning ? 'transitioning' : ''}`} data-stage={currentStage}>
        {currentStage === 0 ? (
          <CurrentStageComponent onStart={handleStart} />
        ) : (
          <>
            <BattleUI stageNumber={currentStage} />
            {showIntro && (
              <StageIntro 
                stageName={currentStageName} 
                stageNumber={currentStage}
                key={currentStage}
              />
            )}
            <CurrentStageComponent />
            {currentCharacter && (
              <>
                <FighterCharacter type={currentCharacter} position="left" stageId={currentStage} />
                <FighterCharacter type={`${currentCharacter}-opponent`} position="right" stageId={currentStage} />
              </>
            )}
            <StageNavigation
              currentStage={currentStage}
              totalStages={stages.length - 1}
              onPrev={prevStage}
              onNext={nextStage}
              canGoPrev={currentStage > 1}
              canGoNext={currentStage < stages.length - 1}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;