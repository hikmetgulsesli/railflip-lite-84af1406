// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - RailFlip Lite (Animated)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause, RefreshCw, Settings } from "lucide-react";


export type GameplayRailflipLiteAnimatedActionId = "pause-game-1" | "restart-game-2" | "settings-3" | "start-game-4";

export interface GameplayRailflipLiteAnimatedProps {
  actions?: Partial<Record<GameplayRailflipLiteAnimatedActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayRailflipLiteAnimated({ actions, runtime }: GameplayRailflipLiteAnimatedProps) {
  void runtime;
  return (
    <>
      {/* Particle Canvas */}
      <canvas id="particleCanvas"></canvas>
      {/* Ambient Grid Background */}
      <div className="grid-bg"></div>
      {/* TopAppBar (Shared Component styling logic applied) */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 glass-hud shadow-[0_0_15px_rgba(0,242,255,0.3)] border-b border-white/10">
      <div className="font-display-lg-mobile text-display-lg-mobile italic tracking-tighter text-primary-container drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]">
                  RAILFLIP LITE
              </div>
      <div className="flex items-center gap-4">
      {/* HUD Stats */}
      <div className="flex gap-4 mr-4 font-hud-label text-hud-label text-on-surface-variant">
      <div className="flex flex-col items-end">
      <span className="text-xs text-primary-container opacity-80 uppercase tracking-widest">Score</span>
      <span className="text-secondary-fixed font-bold tracking-wider">12,450</span>
      </div>
      <div className="flex flex-col items-end">
      <span className="text-xs text-primary-container opacity-80 uppercase tracking-widest">Level</span>
      <span className="text-secondary-fixed font-bold tracking-wider">4</span>
      </div>
      </div>
      {/* Trailing Icons */}
      <div className="flex gap-2 text-primary-container">
      <button aria-label="Pause Game" className="p-2 hover:scale-110 hover:drop-shadow-[0_0_12px_#00f2ff] transition-colors active:scale-95 duration-200" type="button" data-action-id="pause-game-1" onClick={actions?.["pause-game-1"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Restart Game" className="p-2 hover:scale-110 hover:drop-shadow-[0_0_12px_#00f2ff] transition-colors active:scale-95 duration-200" type="button" data-action-id="restart-game-2" onClick={actions?.["restart-game-2"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Settings" className="p-2 hover:scale-110 hover:drop-shadow-[0_0_12px_#00f2ff] transition-colors active:scale-95 duration-200 hidden md:block" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Gameplay Area */}
      <main className="relative w-full h-full overflow-hidden flex justify-center items-center">
      {/* The Rails */}
      <div className="absolute w-full h-full pointer-events-none">
      <div className="rail rail-left"></div>
      <div className="rail rail-right"></div>
      </div>
      {/* The Player (Pulse Marker) */}
      {/* Starts on left rail conceptually */}
      <div className="pulse-marker" style={{left: "calc(30% - 10px)"}}></div>
      {/* Concept: Moving Collectibles/Blockers would be injected here via JS */}
      <div className="absolute w-4 h-4 rounded-full bg-primary-fixed shadow-[0_0_15px_#74f5ff] top-1/4 left-[35%] opacity-80 pointer-events-none"></div>
      <div className="absolute w-4 h-4 rounded-sm bg-error shadow-[0_0_15px_#ffb4ab] top-1/2 right-[35%] opacity-80 pointer-events-none"></div>
      </main>
      {/* Start/Game Over Overlay (Hidden initially for "gameplay" state, shown here for visual reference as requested in prompt) */}
      {/* Using a hidden class, but for the prompt's requirement "A 'START GAME' button is positioned centrally", we will display it as an overlay */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center start-overlay" id="startOverlay">
      <h2 className="font-display-lg text-display-lg text-primary-container mb-8 text-center italic glitch-text">
                  READY TO FLIP?
              </h2>
      <button className="btn-primary uppercase tracking-widest px-8 py-4 shadow-[0_0_20px_rgba(0,242,255,0.4)]" id="btnStartGame" type="button" data-action-id="start-game-4" onClick={actions?.["start-game-4"]}>
                  START GAME
              </button>
      </div>
      {/* BottomNavBar (Hidden on Web, suppressed here as Gameplay is focused, but included per JSON if needed. Suppressing as per "Semantic Shell Mandate - Automatic Suppression if Task-Focused/Linear") */}
      {/* Navigation shell excluded to prioritize the gameplay canvas. */}
      
    </>
  );
}
