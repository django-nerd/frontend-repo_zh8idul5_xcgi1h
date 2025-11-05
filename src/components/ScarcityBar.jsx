export default function ScarcityBar() {
  return (
    <section className="relative w-full bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative my-6 overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-900/40 via-black to-red-900/30 p-4 shadow-[0_0_30px_-10px_rgba(255,0,0,0.6)]">
          {/* Glitch neon edges */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -inset-px animate-pulse rounded-2xl bg-[radial-gradient(circle_at_10%_10%,rgba(255,80,80,0.25),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(255,140,60,0.2),transparent_35%)]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between">
            <p className="text-sm font-semibold tracking-wide text-white md:text-base">
              LIMITED DROP: Ending Friday. Only 10 Units Left of Each Item!
            </p>
            {/* Low-stock visual cue */}
            <div className="flex w-full items-center gap-3 md:w-1/2">
              <div className="h-2 flex-1 rounded-full bg-red-900/30">
                <div className="h-2 w-[15%] animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-red-500 via-red-400 to-orange-400 shadow-[0_0_20px_rgba(255,80,80,0.7)]"></div>
              </div>
              <span className="whitespace-nowrap text-xs font-bold text-red-300">Last Pieces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
