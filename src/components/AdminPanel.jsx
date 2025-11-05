import { useState } from 'react';

export default function AdminPanel() {
  const [status] = useState('Awaiting Supabase Connection');

  return (
    <section id="admin" className="relative w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Admin: Add New Poster</h2>
            <p className="mt-1 text-sm text-white/60">
              Prepare listings for instant publishing when the database is connected.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-orange-400"></span>
            {status}
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-white/10" />
          <form className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1">
              <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Poster Title</label>
              <input className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-orange-400/60" placeholder="e.g., Metropolis (1927)" />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Director</label>
              <input className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-orange-400/60" placeholder="Fritz Lang" />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Year</label>
              <input type="number" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-orange-400/60" placeholder="1927" />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Price</label>
              <input type="number" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-orange-400/60" placeholder="299" />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Available Stock</label>
              <input type="number" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-orange-400/60" placeholder="10" />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Poster Image URL</label>
              <input className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-orange-400/60" placeholder="https://.../poster.jpg" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="mb-1 block text-xs uppercase tracking-widest text-white/60">Context Image URL</label>
              <input className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-orange-400/60" placeholder="https://.../interior.jpg" />
            </div>

            <div className="col-span-1 md:col-span-2 mt-2 flex items-center justify-between gap-4">
              <p className="text-xs text-white/60">
                The form is styled and ready for API integration. Connect to Supabase to enable submissions.
              </p>
              <button type="button" className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,120,80,0.35)] outline-none transition focus:ring-2 focus:ring-orange-400/40">
                <span className="absolute inset-0 -z-0 animate-pulse rounded-xl bg-orange-400/20 blur"></span>
                <span className="relative z-10">Add Poster to Database</span>
                <span className="relative z-10 rounded-md bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider">API Ready</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
