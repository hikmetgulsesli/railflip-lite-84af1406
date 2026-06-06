import { useSyncExternalStore } from 'react';
import {
  DEFAULT_STATE,
  GameState,
  startGame,
  pauseGame,
  resumeGame,
  restartGame,
  tick,
  movePlayer,
  setDifficulty,
} from '../../game/game-runtime';

export type { GameState } from '../../game/game-runtime';

let state: GameState = { ...DEFAULT_STATE };
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((fn) => fn());
}

function getSnapshot(): GameState {
  return state;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useGameStore(): GameState {
  return useSyncExternalStore(subscribe, getSnapshot);
}

export function getGameState(): GameState {
  return state;
}

export function dispatchTick(): void {
  state = tick(state);
  emit();
}

export function dispatchStart(): void {
  state = startGame(state);
  emit();
}

export function dispatchPause(): void {
  state = pauseGame(state);
  emit();
}

export function dispatchResume(): void {
  state = resumeGame(state);
  emit();
}

export function dispatchRestart(): void {
  state = restartGame(state);
  emit();
}

export function dispatchMoveLeft(): void {
  state = movePlayer(state, -1);
  emit();
}

export function dispatchMoveRight(): void {
  state = movePlayer(state, 1);
  emit();
}

export function dispatchSetDifficulty(difficulty: 'easy' | 'medium' | 'hard'): void {
  state = setDifficulty(state, difficulty);
  emit();
}

export function dispatchReset(): void {
  state = { ...DEFAULT_STATE };
  emit();
}

export const gameActions = {
  start: dispatchStart,
  pause: dispatchPause,
  resume: dispatchResume,
  restart: dispatchRestart,
  moveLeft: dispatchMoveLeft,
  moveRight: dispatchMoveRight,
  setDifficulty: dispatchSetDifficulty,
  reset: dispatchReset,
  tick: dispatchTick,
};
