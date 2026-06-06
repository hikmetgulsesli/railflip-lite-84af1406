import {
  getGameState,
  gameActions,
  dispatchSetDifficulty,
  dispatchReset,
} from '../features/railflip-lite/railflip-lite.store';
import { loadPreferences, savePreferences, updateHighScore } from '../features/railflip-lite/railflip-lite.repo';

export interface AppBridge {
  state: ReturnType<typeof getGameState>;
  actions: typeof gameActions & {
    setDifficulty: typeof dispatchSetDifficulty;
    reset: typeof dispatchReset;
    loadPreferences: typeof loadPreferences;
    savePreferences: typeof savePreferences;
    updateHighScore: typeof updateHighScore;
  };
}

export function exposeAppBridge(): void {
  const bridge: AppBridge = {
    state: getGameState(),
    actions: {
      ...gameActions,
      setDifficulty: dispatchSetDifficulty,
      reset: dispatchReset,
      loadPreferences,
      savePreferences,
      updateHighScore,
    },
  };

  // Keep state reference fresh for external readers
  Object.defineProperty(bridge, 'state', {
    get: getGameState,
    enumerable: true,
    configurable: true,
  });

  (window as unknown as Record<string, unknown>).app = bridge;
  (globalThis as unknown as Record<string, unknown>).app = bridge;
}


