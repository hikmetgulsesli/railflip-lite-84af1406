const STORAGE_KEY = 'railflip-lite-preferences';

export interface Preferences {
  difficulty: 'easy' | 'medium' | 'hard';
  soundEnabled: boolean;
  highScore: number;
}

export const DEFAULT_PREFERENCES: Preferences = {
  difficulty: 'medium',
  soundEnabled: true,
  highScore: 0,
};

export function loadPreferences(): Preferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFERENCES };
    const parsed = JSON.parse(raw) as Partial<Preferences>;
    return {
      difficulty: parsed.difficulty ?? DEFAULT_PREFERENCES.difficulty,
      soundEnabled: parsed.soundEnabled ?? DEFAULT_PREFERENCES.soundEnabled,
      highScore: typeof parsed.highScore === 'number' ? parsed.highScore : DEFAULT_PREFERENCES.highScore,
    };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function savePreferences(prefs: Preferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore storage errors
  }
}

export function updateHighScore(score: number): void {
  const prefs = loadPreferences();
  if (score > prefs.highScore) {
    prefs.highScore = score;
    savePreferences(prefs);
  }
}
