import { GameState, DEFAULT_STATE } from '../game/game-runtime';

export function createRunningGameState(overrides?: Partial<GameState>): GameState {
  return {
    ...DEFAULT_STATE,
    status: 'running',
    paused: false,
    score: 0,
    energy: 100,
    lives: 3,
    ...overrides,
  };
}

export function createPausedGameState(overrides?: Partial<GameState>): GameState {
  return {
    ...DEFAULT_STATE,
    status: 'paused',
    paused: true,
    score: 50,
    energy: 80,
    lives: 2,
    ...overrides,
  };
}

export function createGameOverState(overrides?: Partial<GameState>): GameState {
  return {
    ...DEFAULT_STATE,
    status: 'gameover',
    paused: false,
    score: 120,
    energy: 0,
    lives: 0,
    ...overrides,
  };
}

export function createIdleState(overrides?: Partial<GameState>): GameState {
  return {
    ...DEFAULT_STATE,
    status: 'idle',
    paused: false,
    ...overrides,
  };
}
