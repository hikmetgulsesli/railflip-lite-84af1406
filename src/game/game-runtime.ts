export type GameStatus = 'idle' | 'running' | 'paused' | 'gameover';

export interface Obstacle {
  id: string;
  lane: number;
  position: number;
}

export interface Shard {
  id: string;
  lane: number;
  position: number;
}

export interface Player {
  lane: number;
  position: number;
}

export interface GameState {
  player: Player;
  obstacles: Obstacle[];
  shards: Shard[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  status: GameStatus;
  speed: number;
  distance: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const DEFAULT_STATE: GameState = {
  player: { lane: 1, position: 0 },
  obstacles: [],
  shards: [],
  score: 0,
  energy: 100,
  lives: 3,
  paused: false,
  status: 'idle',
  speed: 2,
  distance: 0,
  difficulty: 'medium',
};

let idCounter = 0;
function nextId(): string {
  idCounter += 1;
  return `ent-${idCounter}`;
}

export function resetIdCounter(): void {
  idCounter = 0;
}

export function spawnObstacle(state: GameState): Obstacle {
  const lane = Math.floor(Math.random() * 3);
  return { id: nextId(), lane, position: 100 };
}

export function spawnShard(state: GameState): Shard {
  const lane = Math.floor(Math.random() * 3);
  return { id: nextId(), lane, position: 100 };
}

export function tick(state: GameState): GameState {
  if (state.status !== 'running' || state.paused) return state;

  const speed = state.speed;
  const newDistance = state.distance + speed * 0.1;

  let obstacles = state.obstacles
    .map((o) => ({ ...o, position: o.position - speed }))
    .filter((o) => o.position > -10);

  let shards = state.shards
    .map((s) => ({ ...s, position: s.position - speed }))
    .filter((s) => s.position > -10);

  // Spawn logic based on difficulty
  const spawnRate =
    state.difficulty === 'easy' ? 0.015 : state.difficulty === 'medium' ? 0.025 : 0.04;
  if (Math.random() < spawnRate && obstacles.length < 6) {
    obstacles = [...obstacles, spawnObstacle(state)];
  }
  if (Math.random() < spawnRate * 0.6 && shards.length < 4) {
    shards = [...shards, spawnShard(state)];
  }

  // Collision detection
  let lives = state.lives;
  let energy = state.energy;
  let score = state.score;

  const playerLane = state.player.lane;
  const playerPos = state.player.position;

  const hitObstacles: string[] = [];
  for (const o of obstacles) {
    if (o.lane === playerLane && Math.abs(o.position - playerPos) < 4) {
      lives -= 1;
      energy = Math.max(0, energy - 20);
      hitObstacles.push(o.id);
    }
  }
  obstacles = obstacles.filter((o) => !hitObstacles.includes(o.id));

  const collectedShards: string[] = [];
  for (const s of shards) {
    if (s.lane === playerLane && Math.abs(s.position - playerPos) < 4) {
      score += 10;
      energy = Math.min(100, energy + 5);
      collectedShards.push(s.id);
    }
  }
  shards = shards.filter((s) => !collectedShards.includes(s.id));

  const status: GameStatus = lives <= 0 ? 'gameover' : 'running';

  return {
    ...state,
    obstacles,
    shards,
    score,
    energy,
    lives,
    distance: newDistance,
    status,
  };
}

export function movePlayer(state: GameState, direction: -1 | 1): GameState {
  const lane = Math.max(0, Math.min(2, state.player.lane + direction));
  return { ...state, player: { ...state.player, lane } };
}

export function startGame(state: GameState): GameState {
  if (state.status === 'running') return state;
  return {
    ...DEFAULT_STATE,
    difficulty: state.difficulty,
    status: 'running',
    paused: false,
  };
}

export function pauseGame(state: GameState): GameState {
  if (state.status !== 'running') return state;
  return { ...state, paused: true, status: 'paused' };
}

export function resumeGame(state: GameState): GameState {
  if (state.status !== 'paused') return state;
  return { ...state, paused: false, status: 'running' };
}

export function restartGame(state: GameState): GameState {
  return {
    ...DEFAULT_STATE,
    difficulty: state.difficulty,
    status: 'running',
    paused: false,
  };
}

export function setDifficulty(
  state: GameState,
  difficulty: 'easy' | 'medium' | 'hard'
): GameState {
  const speed = difficulty === 'easy' ? 1.5 : difficulty === 'medium' ? 2 : 3;
  return { ...state, difficulty, speed };
}
