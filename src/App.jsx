import Hero from './components/Hero';
import ScarcityBar from './components/ScarcityBar';
import Benefits from './components/Benefits';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* HERO */}
      <Hero />

      {/* SCARCITY OFFER */}
      <ScarcityBar />

      {/* PRODUCT SHOWCASE */}
      <section id="products" className="relative w-full bg-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Last Copies — Curated Poster Drops</h2>
              <p className="mt-2 max-w-2xl text-white/70">Limited stock on iconic titles. Each card shows a framed mockup in a minimalist interior.</p>
            </div>
            <div className="hidden gap-3 md:flex">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 px-5 py-3 text-sm font-semibold text-white hover:shadow-[0_0_24px_rgba(255,120,80,0.5)]">Shop Now & Claim Your Poster</a>
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/15">BROWSE ALL POSTERS</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                {/* Context room mockup */}
                <div className="relative aspect-[4/3] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Framed poster placeholder */}
                    <div className="h-[70%] w-[60%] rounded-md bg-black shadow-2xl ring-2 ring-white/10">
                      <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,120,80,0.25),transparent_40%),radial-gradient(50%_80%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
                    </div>
                  </div>
                  <span className="absolute left-3 top-3 rounded-md bg-red-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wider">Last Piece</span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="text-base font-semibold">Iconic Poster #{i}</h3>
                    <p className="text-xs text-white/60">Director Name • 19{i}{i}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">$2{i}9</p>
                    <p className="text-[11px] text-red-300">Only 1 left</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTAs below grid */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:hidden">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white">Shop Now & Claim Your Poster</a>
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white">BROWSE ALL POSTERS</a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <Benefits />

      {/* CREDIBILITY & SOCIAL PROOF */}
      <section id="about" className="relative w-full bg-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Media Logos */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">As Featured In:</p>
            <div className="mt-4 grid grid-cols-2 gap-4 opacity-80 sm:grid-cols-4">
              {['Film Daily','CineScope','Posterist','ArteReview'].map((logo) => (
                <div key={logo} className="rounded-lg bg-white/5 py-4 text-sm font-semibold text-white/80">{logo}</div>
              ))}
            </div>
          </div>

          {/* Who is Behind the Sales */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="order-2 md:order-1 md:col-span-2">
              <h3 className="text-xl font-bold">Who is Behind the Sales</h3>
              <p className="mt-2 max-w-2xl text-white/70">
                Karol Zmyślony — Collector and Film Poster Connoisseur. Trust the Passionate Expert.
              </p>
              <p className="mt-4 max-w-2xl text-white/60">
                With years of curating rare cinema posters, Karol ensures authenticity and quality. Each piece tells a story and is chosen with a collector’s eye.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900" />
                <div className="mt-3 text-center text-sm text-white/70">Karol Zmyślony</div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="mt-12">
            <h3 className="text-xl font-bold">What Collectors Say</h3>
            <div className="mt-4 overflow-x-auto">
              <div className="flex snap-x snap-mandatory gap-4">
                {[1,2,3].map((t) => (
                  <div key={t} className="snap-center shrink-0 basis-80 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-zinc-700" />
                      <div>
                        <p className="text-sm font-semibold">Collector #{t}</p>
                        <p className="text-xs text-white/60">Verified Buyer</p>
                      </div>
                    </div>
                    <blockquote className="text-sm text-white/80">
                      “Stunning print quality and impeccable curation. The piece transforms my living room.”
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[conic-gradient(at_top_left,rgba(255,120,80,0.05),transparent_30%,rgba(255,120,80,0.08),transparent_70%)] p-8">
            <div className="pointer-events-none mb-4 h-6 w-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0,rgba(255,255,255,0.12)_6px,transparent_6px,transparent_14px)] opacity-30" />
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-2 max-w-3xl text-white/75">
              Our mission is to bring cinematic classics to life on your walls — pieces that command attention, spark conversation, and honor film history.
            </p>
          </div>
        </div>
      </section>

      {/* ADMIN PANEL MOCKUP */}
      <AdminPanel />

      {/* BOTTOM CTAS + CONTACT */}
      <section id="contact" className="relative w-full bg-black pb-16 pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 py-8">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white">Shop Now & Claim Your Poster</a>
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white">BROWSE ALL POSTERS</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white/90">How We Curate Posters?</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white/90">Contact Karol</a>
          </div>

          <footer className="mt-6 grid grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 md:grid-cols-3">
            <div>
              <p className="font-semibold text-white">Contact</p>
              <p className="mt-1">Studio: 123 Poster Lane, Cine City</p>
              <p>Email: hello@posteratelier.example</p>
            </div>
            <div className="text-center">© {new Date().getFullYear()} Poster Atelier. All rights reserved.</div>
            <div className="text-right">Crafted with a cinematic eye.</div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
