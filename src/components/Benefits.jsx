import { Shield, Undo2, Star } from 'lucide-react';

const Card = ({ icon: Icon, title, desc }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:border-white/20">
    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
      background: 'radial-gradient(60% 60% at 30% 0%, rgba(255,120,80,0.18) 0%, rgba(255,120,80,0) 100%)'
    }} />
    <div className="relative z-10">
      <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
        <Icon className="h-6 w-6 text-orange-300" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

export default function Benefits() {
  return (
    <section id="why" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold md:text-3xl">Why Choose Us?</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          From archive to your frame: quality, trust, and curation at every step.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={Shield}
            title="Archival Quality Prints"
            desc="Museum-grade paper and inks for lasting color depth and detail."
          />
          <Card
            icon={Undo2}
            title="Hassle-Free Returns"
            desc="Simple, transparent returns in case the poster isn’t the perfect fit."
          />
          <Card
            icon={Star}
            title="Expert Curated Collection"
            desc="Handpicked by passionate collectors focusing on cinematic significance."
          />
        </div>
      </div>
    </section>
  );
}
