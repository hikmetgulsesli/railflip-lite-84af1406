// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - RailFlip Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Keyboard, RefreshCw, Settings } from "lucide-react";


export type GameSettingsRailflipLiteActionId = "easy-1" | "medium-2" | "hard-3" | "save-preferences-4" | "back-to-game-5" | "reset-to-defaults-6";

export interface GameSettingsRailflipLiteProps {
  actions?: Partial<Record<GameSettingsRailflipLiteActionId, () => void>>;

}

export function GameSettingsRailflipLite({ actions }: GameSettingsRailflipLiteProps) {
  return (
    <>
      {/* Background Gameplay Simulation (Blurred) */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" data-alt="A high-velocity, synthwave-inspired arcade racing track extending into the distance under a dark, starlit digital sky. The track consists of glowing electric cyan and neon magenta grid lines that pulse with energy. The lighting is highly stylized, with deep black voids contrasting sharply against the vibrant, saturated neon glows. The overall mood is intense, nocturnal, and technologically precise, capturing a retro-futuristic arcade aesthetic." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDutKvqtNYXGOqaLO4O7aurUe9xVSYuCj2_tOI8v8oKFWB1VJXnQloZR4CnN86LlntYYQXF2kQp-CJGMOB5SL5h44gyO9z1PhGPrGXlHR8mbskWYnL5EreFk375yq0FnmkTQx86HHLL3ZV_kf8l0MOpkaDNkZt4IMU1rpM5r0IQxTBfMAgBEZeZ3Qc8iYfHTpqVQZhchEoU12yIEsUOqiTV7pBO4yrYgunCP0MlG8wfAU0nJFZ14qhg6fhGpSa0h5BiGJCexUagssg')"}}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[6px]"></div>
      </div>
      {/* Main Settings Overlay Canvas */}
      <main className="relative z-10 w-full max-w-[420px] mx-margin-mobile">
      {/* Glassmorphic Card */}
      <div className="bg-surface-container/60 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] p-lg shadow-[0_0_40px_rgba(0,242,255,0.08)] overflow-hidden relative">
      {/* Top Edge Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-50"></div>
      {/* Header */}
      <header className="flex items-center justify-between mb-xl pb-sm border-b border-white/5">
      <div className="flex items-center gap-2">
      <Settings style={{fontVariationSettings: "'FILL' 1"}} className="text-primary-container drop-shadow-[0_0_8px_rgba(0,242,255,0.6)] text-[28px]" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">CONFIG</h1>
      </div>
      </header>
      {/* Difficulty Section */}
      <section className="mb-lg">
      <label className="block font-hud-label text-hud-label text-on-surface-variant mb-md opacity-80">DIFFICULTY</label>
      <div className="flex bg-surface-container-highest rounded-xl p-unit border border-white/5 relative shadow-inner">
      {/* Active Indicator (Set to MEDIUM for mockup) */}
      <div className="absolute left-unit top-unit bottom-unit w-[calc(33.33%-2.66px)] bg-primary-container rounded-lg shadow-[0_0_12px_rgba(0,242,255,0.4)] transition-transform duration-300 transform translate-x-full z-0"></div>
      <button className="flex-1 relative z-10 py-sm font-button-text text-button-text text-on-surface-variant hover:text-on-surface transition-colors text-center text-[13px] uppercase tracking-wider" type="button" data-action-id="easy-1" onClick={actions?.["easy-1"]}>
                              EASY
                          </button>
      <button className="flex-1 relative z-10 py-sm font-button-text text-button-text text-on-primary-fixed transition-colors text-center text-[13px] uppercase tracking-wider font-bold" type="button" data-action-id="medium-2" onClick={actions?.["medium-2"]}>
                              MEDIUM
                          </button>
      <button className="flex-1 relative z-10 py-sm font-button-text text-button-text text-on-surface-variant hover:text-on-surface transition-colors text-center text-[13px] uppercase tracking-wider" type="button" data-action-id="hard-3" onClick={actions?.["hard-3"]}>
                              HARD
                          </button>
      </div>
      </section>
      {/* Speed Slider Section */}
      <section className="mb-xl">
      <div className="flex justify-between items-end mb-md">
      <label className="block font-hud-label text-hud-label text-on-surface-variant opacity-80">SPEED MULTIPLIER</label>
      <span className="font-hud-label text-hud-label text-primary-container drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]">1.5x</span>
      </div>
      <div className="relative w-full h-[12px] bg-surface-container-highest rounded-full border border-white/5 shadow-inner flex items-center">
      {/* Styled Track Fill */}
      <div className="absolute left-0 h-[4px] ml-1 w-[60%] bg-gradient-to-r from-secondary-container to-primary-container shadow-[0_0_10px_rgba(0,242,255,0.6)] rounded-full z-0 pointer-events-none"></div>
      {/* Styled Thumb (Lead Pixel) */}
      <div className="absolute left-[60%] w-4 h-4 bg-white rounded-full shadow-[0_0_10px_#ffffff] -ml-2 z-10 pointer-events-none border-[3px] border-surface"></div>
      {/* Invisible Native Input for interaction */}
      <input className="w-full absolute z-20 h-full opacity-0 cursor-pointer" max="20" min="10" type="range" defaultValue="15" />
      </div>
      <div className="flex justify-between mt-2 px-1">
      <span className="font-hud-label text-[10px] text-on-surface-variant opacity-40">1.0x</span>
      <span className="font-hud-label text-[10px] text-on-surface-variant opacity-40">2.0x</span>
      </div>
      </section>
      {/* Input Help Panel */}
      <section className="mb-xl bg-surface-container-high/50 p-md rounded-xl border border-white/5 flex items-start gap-md">
      <Keyboard className="text-secondary-container text-[20px] mt-0.5 opacity-90 drop-shadow-[0_0_5px_rgba(254,0,254,0.4)]" aria-hidden={true} focusable="false" />
      <div>
      <p className="font-hud-label text-hud-label text-on-surface mb-unit">INPUT HELP</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Click / Space to Flip.</p>
      </div>
      </section>
      {/* Action Area */}
      <footer className="pt-md border-t border-white/5 flex flex-col gap-sm">
      {/* Primary Action */}
      <button className="w-full py-3 bg-primary-container text-on-primary-fixed font-button-text text-button-text rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-colors uppercase tracking-widest font-extrabold relative overflow-hidden group" type="button" data-action-id="save-preferences-4" onClick={actions?.["save-preferences-4"]}>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <span className="relative z-10">SAVE PREFERENCES</span>
      </button>
      <div className="flex gap-sm w-full">
      {/* Secondary Action */}
      <button className="flex-1 py-3 bg-surface-container-high border border-white/10 text-on-surface font-button-text text-button-text rounded-xl hover:bg-surface-variant hover:text-white transition-colors text-[14px] uppercase tracking-wider" type="button" data-action-id="back-to-game-5" onClick={actions?.["back-to-game-5"]}>
                              BACK TO GAME
                          </button>
      {/* Reset Action */}
      <button className="w-[52px] flex items-center justify-center bg-transparent border border-error/20 text-error rounded-xl hover:bg-error/10 hover:border-error/40 transition-colors group" title="Reset to Defaults" type="button" data-action-id="reset-to-defaults-6" onClick={actions?.["reset-to-defaults-6"]}>
      <RefreshCw className="text-[20px] group-hover:-rotate-180 transition-transform duration-500" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </footer>
      </div>
      </main>
    </>
  );
}
