import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle dark overlay and vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5"></div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/60">Curated Cinema Art</p>
        <h1 className="font-['Mona_Sans',Inter,sans-serif] text-4xl font-extrabold leading-tight md:text-6xl">
          <span className="block">DISCOVER YOUR WALL.</span>
          <span className="mt-2 block bg-gradient-to-r from-orange-400 via-red-500 to-orange-300 bg-clip-text text-transparent">
            Last Copies of Iconic Posters!
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          Archival-grade prints from cinema’s golden eras. Limited quantities. Real collector pieces.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#products" className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,100,50,0.55)] focus:outline-none">
            <span className="relative z-10">Shop Now & Claim Your Poster</span>
          </a>
          <a href="#products" className="group relative inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">
            BROWSE ALL POSTERS
          </a>
          <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/60 hover:text-white">
            How We Curate Posters?
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/60 hover:text-white">
            Contact Karol
          </a>
        </div>
      </div>
    </section>
  );
}
