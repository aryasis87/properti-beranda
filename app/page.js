import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Heart, MapPinned, Footprints, Compass } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import PropertyCard from '@/components/PropertyCard';
import { properti, kawasan, tentang } from '@/lib/data';

// Pintu masuk berdasarkan suasana — mencocokkan tag suasana di tiap listing.
const LIFESTYLE = [
  { label: 'Untuk keluarga', emoji: '👨‍👩‍👧', href: '/properti?q=keluarga' },
  { label: 'Dekat kampus', emoji: '🎓', href: '/properti?q=kampus' },
  { label: 'Masa pensiun', emoji: '🌿', href: '/properti?q=pensiun' },
  { label: 'Udara sejuk', emoji: '⛰️', href: '/properti?q=sejuk' },
  { label: 'Dekat pantai', emoji: '🌊', href: '/properti?q=pantai' },
  { label: 'Berkebun', emoji: '🥬', href: '/properti?q=berkebun' },
];
const WHY = [MapPinned, Compass, Footprints];
const TAHAP = [
  { t: 'Keluarga', q: 'keluarga', isi: 'Jalan buntu, sekolah yang terjangkau jalan kaki, dan ruang untuk tumbuh.' },
  { t: 'Mahasiswa', q: 'kampus', isi: 'Kamar dekat kampus dengan pengelola yang tinggal di lokasi.' },
  { t: 'Pensiun', q: 'pensiun', isi: 'Satu lantai, pintu lebar, dan ritme kawasan yang pelan.' },
];

export default function HomePage() {
  const featured = properti.filter((p) => p.featured).slice(0, 3);
  const jumlah = (slug) => properti.filter((p) => p.kawasan === slug).length;
  const cocok = (q) => properti.filter((p) => p.suasana.join(' ').toLowerCase().includes(q)).length;

  return (
    <main className="relative z-10">
      {/* Hero — warm, lifestyle */}
      <section className="px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-forest">
              <Heart size={14} className="fill-forest" aria-hidden="true" /> Kawasan dulu, rumah kemudian
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.03] text-ink md:text-7xl">
              Pulang ke tempat yang terasa seperti <span className="text-forest">rumah</span>.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">Siapa yang akan tinggal, dan mereka perlu dekat dengan apa? Mulai dari suasananya.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {LIFESTYLE.map((l) => (
                <Link key={l.label} href={l.href} className="flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-forest hover:text-forest">
                  <span aria-hidden="true">{l.emoji}</span> {l.label}
                </Link>
              ))}
            </div>
            <Link href="/properti" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-forest hover:underline">atau jelajahi semua properti <ArrowRight size={15} /></Link>
          </div>

          {/* Playful image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] rounded-tr-lg">
                <Image src="/images/properti/teras-tropis.webp" alt="" fill priority sizes="(max-width:1024px) 50vw, 30vw" className="object-cover" />
              </div>
              <div className="mt-10 space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-[2rem] rounded-bl-lg">
                  <Image src="/images/properti/kamar-kost.webp" alt="" fill sizes="(max-width:1024px) 50vw, 30vw" className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[2rem] rounded-tr-lg">
                  <Image src="/images/properti/rumah-dua-lantai.webp" alt="" fill sizes="(max-width:1024px) 50vw, 30vw" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 left-8 flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white shadow-lg">
              <MapPinned size={15} aria-hidden="true" /> {kawasan.length} panduan kawasan
            </div>
          </div>
        </div>
      </section>

      {/* Telusuri kawasan */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Telusuri kawasan</h2>
                <p className="mt-2 text-muted">Suasana, waktu tempuh, kisaran harga — dan kekurangannya.</p>
              </div>
              <Link href="/kawasan" className="hidden items-center gap-1 text-sm font-bold text-forest hover:underline sm:inline-flex">Semua panduan <ArrowUpRight size={16} /></Link>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kawasan.map((k, i) => (
              <Reveal key={k.slug} delay={(i % 4) * 0.07}>
                <Link href={`/kawasan/${k.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[3/4]">
                  <Image src={k.foto} alt="" fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                    <div><p className="font-display text-2xl font-bold">{k.nama}</p><p className="text-sm text-white/90">{k.kota} · {jumlah(k.slug)} listing</p><p className="mt-1 text-xs text-white/90">{k.cocok.join(' · ')}</p></div>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur transition group-hover:bg-forest"><ArrowUpRight size={16} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Satu untuk tiap tahap hidup</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => <Reveal key={p.id} delay={(i % 3) * 0.08}><PropertyCard item={p} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* Why — warm band */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-forest px-6 py-14 text-white md:px-14">
          <Reveal><h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">{tentang.judul}.</h2></Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {tentang.nilai.map(([judul, isi], i) => {
              const Ikon = WHY[i % WHY.length];
              return (
              <Reveal key={judul} delay={i * 0.1}>
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Ikon size={22} aria-hidden="true" /></span>
                  <h3 className="mt-4 font-display text-xl font-bold">{judul}</h3>
                  <p className="mt-1.5 text-white/90">{isi}</p>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tahap hidup */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Siapa yang akan tinggal?</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TAHAP.map((t, i) => (
              <Reveal key={t.t} delay={i * 0.1}>
                <Link href={`/properti?q=${t.q}`} className="group flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="text-3xl" aria-hidden="true">{['🏡', '🎓', '🌿'][i]}</span>
                  <span className="mt-3 font-display text-2xl font-bold text-ink group-hover:text-forest">{t.t}</span>
                  <span className="mt-2 flex-1 text-ink/80">{t.isi}</span>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-forest">{cocok(t.q)} listing cocok <ArrowRight size={15} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border-2 border-forest/15 bg-sand px-8 py-14 text-center md:py-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-ink md:text-4xl">Punya rumah untuk dijual atau disewa? Ceritakan juga kawasannya.</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/80">Kami menulis panduan kawasan untuk setiap listing baru — termasuk hal-hal yang biasanya baru ketahuan setelah pindah.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/kontak?topik=jual" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-bold text-white transition hover:bg-forest-soft">Ajukan listing <ArrowRight size={16} /></Link>
              <Link href="/properti" className="rounded-full border-2 border-ink/15 bg-white px-7 py-3.5 font-bold text-ink transition hover:border-forest hover:text-forest">Jelajahi properti</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
