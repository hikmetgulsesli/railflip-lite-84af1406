import { useEffect, useRef, useState, useCallback } from 'react';
import {
  GameplayRailflipLite,
  GameplayRailflipLiteAnimated,
  GameSettingsRailflipLiteEnhanced,
} from './screens';
import { useGameStore, gameActions, dispatchSetDifficulty } from './features/railflip-lite/railflip-lite.store';
import { loadPreferences, savePreferences } from './features/railflip-lite/railflip-lite.repo';
import { actStartGame } from './features/surf-gameplay/act_start_game';
import { actPauseGame } from './features/surf-gameplay/act_pause_game';
import { actRestartGame } from './features/surf-gameplay/act_restart_game';
import { exposeAppBridge } from './test/bridge';

type Screen = 'gameplay' | 'gameplay-animated' | 'settings';

export default function App() {
  const state = useGameStore();
  const [screen, setScreen] = useState<Screen>('gameplay');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Scheduled game tick loop
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      gameActions.tick();
    }, 50);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Expose bridge for tests / supervisor
  useEffect(() => {
    exposeAppBridge();
  }, []);

  // Load preferences once
  useEffect(() => {
    const prefs = loadPreferences();
    dispatchSetDifficulty(prefs.difficulty);
  }, []);

  // Keyboard shortcuts: pause game and screen switching
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'p' || e.key === 'P' || e.code === 'Space') {
        e.preventDefault();
        actPauseGame();
      }
      if (e.key === '1') {
        setScreen('gameplay');
      }
      if (e.key === '2') {
        setScreen('gameplay-animated');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleStart = useCallback(() => {
    actStartGame();
  }, []);

  const handlePause = useCallback(() => {
    actPauseGame();
  }, []);

  const handleRestart = useCallback(() => {
    actRestartGame();
  }, []);

  const handleSettings = useCallback(() => {
    setScreen('settings');
  }, []);

  const handleBackToGame = useCallback(() => {
    setScreen('gameplay');
  }, []);

  const handleDifficulty = useCallback((difficulty: 'easy' | 'medium' | 'hard') => {
    dispatchSetDifficulty(difficulty);
  }, []);

  const handleSavePreferences = useCallback(() => {
    savePreferences({
      difficulty: state.difficulty,
      soundEnabled: true,
      highScore: 0,
    });
  }, [state.difficulty]);

  const handleResetDefaults = useCallback(() => {
    dispatchSetDifficulty('medium');
  }, []);

  const gameplayActions = {
    'pause-game-1': handlePause,
    'restart-game-2': handleRestart,
    'settings-3': handleSettings,
    'start-game-4': handleStart,
  };

  const settingsActions = {
    'easy-1': () => handleDifficulty('easy'),
    'medium-2': () => handleDifficulty('medium'),
    'hard-3': () => handleDifficulty('hard'),
    'save-preferences-4': handleSavePreferences,
    'back-to-game-5': handleBackToGame,
    'reset-to-defaults-6': handleResetDefaults,
  };

  const runtimeSnapshot = {
    player: state.player,
    obstacles: state.obstacles,
    shards: state.shards,
    score: state.score,
    energy: state.energy,
    lives: state.lives,
    paused: state.paused,
  };

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      {screen === 'gameplay' && (
        <GameplayRailflipLite
          actions={gameplayActions}
          runtime={runtimeSnapshot}
        />
      )}
      {screen === 'gameplay-animated' && (
        <GameplayRailflipLiteAnimated
          actions={gameplayActions}
          runtime={runtimeSnapshot}
        />
      )}
      {screen === 'settings' && (
        <GameSettingsRailflipLiteEnhanced
          actions={settingsActions}
        />
      )}
    </div>
  );
}
