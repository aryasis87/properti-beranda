import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Heart, ShieldCheck, HandHeart, Sparkles } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import PropertyCard from '@/components/PropertyCard';
import { site, properti, testimonials, waLink } from '@/lib/data';

const LIFESTYLE = [
  { label: 'Untuk keluarga', emoji: '👨‍👩‍👧', href: '/properti?jenis=Rumah' },
  { label: 'Dekat kampus', emoji: '🎓', href: '/properti?q=kampus' },
  { label: 'Apartemen praktis', emoji: '🏙️', href: '/properti?jenis=Apartemen' },
  { label: 'Investasi tanah', emoji: '🌱', href: '/properti?jenis=Tanah' },
  { label: 'Buka usaha', emoji: '🏪', href: '/properti?jenis=Ruko' },
  { label: 'Liburan & cuan', emoji: '🌴', href: '/properti?jenis=Villa' },
];

const WHY = [
  { icon: ShieldCheck, title: 'Aman & terverifikasi', desc: 'Setiap listing dicek tim kami — foto & data sesuai aslinya.' },
  { icon: HandHeart, title: 'Didampingi sepenuh hati', desc: 'Agen ramah menemanimu dari survei sampai pegang kunci.' },
  { icon: Sparkles, title: 'Tanpa ribet', desc: 'Harga jujur, proses jelas, chat langsung lewat WhatsApp.' },
];

export default function HomePage() {
  const featured = properti.filter((p) => p.featured).slice(0, 3);
  const byKota = {};
  properti.forEach((p) => { (byKota[p.lokasi.kota] ||= { kota: p.lokasi.kota, img: p.media.foto[0], n: 0 }).n++; });
  const kawasan = Object.values(byKota).sort((a, b) => b.n - a.n).slice(0, 6);

  return (
    <main className="relative z-10">
      {/* Hero — warm, lifestyle */}
      <section className="px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-forest">
              <Heart size={14} className="fill-forest" /> Cari rumah dengan hati
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.03] text-ink md:text-7xl">
              Pulang ke tempat yang terasa seperti <span className="text-forest">rumah</span>.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">Mau cari apa hari ini? Mulai dari suasana yang kamu impikan.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {LIFESTYLE.map((l) => (
                <Link key={l.label} href={l.href} className="flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-forest hover:text-forest">
                  <span>{l.emoji}</span> {l.label}
                </Link>
              ))}
            </div>
            <Link href="/properti" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-forest hover:underline">atau jelajahi semua properti <ArrowRight size={15} /></Link>
          </div>

          {/* Playful image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] rounded-tr-lg">
                <Image src="/images/rm5.jpg" alt="" fill priority sizes="30vw" className="object-cover" />
              </div>
              <div className="mt-10 space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-[2rem] rounded-bl-lg">
                  <Image src="/images/rm9.jpg" alt="" fill sizes="30vw" className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[2rem] rounded-tr-lg">
                  <Image src="/images/rm2.jpg" alt="" fill sizes="30vw" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 left-8 flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white shadow-lg">
              <Heart size={15} className="fill-white" /> 8.300+ keluarga senang
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
                <p className="mt-2 text-muted">Temukan lingkungan yang pas buatmu.</p>
              </div>
              <Link href="/properti" className="hidden items-center gap-1 text-sm font-bold text-forest hover:underline sm:inline-flex">Semua kota <ArrowUpRight size={16} /></Link>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {kawasan.map((k, i) => (
              <Reveal key={k.kota} delay={(i % 3) * 0.07}>
                <Link href={`/properti?kota=${encodeURIComponent(k.kota)}`} className="group relative block aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  <Image src={k.img} alt={k.kota} fill sizes="(max-width:640px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                    <div><p className="font-display text-xl font-bold">{k.kota}</p><p className="text-sm text-white/80">{k.n} properti</p></div>
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
          <Reveal><h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Lagi banyak dilirik</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => <Reveal key={p.id} delay={(i % 3) * 0.08}><PropertyCard item={p} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* Why — warm band */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-forest px-6 py-14 text-white md:px-14">
          <Reveal><h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">Cari rumah harusnya bikin senang, bukan stres.</h2></Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><w.icon size={22} /></span>
                  <h3 className="mt-4 font-display text-xl font-bold">{w.title}</h3>
                  <p className="mt-1.5 text-white/80">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Cerita mereka yang sudah pulang ke rumah baru</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.nama} delay={i * 0.1}>
                <figure className="h-full rounded-[1.75rem] bg-white p-7 shadow-sm">
                  <p className="text-3xl">{['🏡', '🔑', '🌿'][i % 3]}</p>
                  <blockquote className="mt-3 text-ink/85">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-forest font-display font-bold text-white">{t.nama[0]}</span>
                    <span><span className="block font-bold text-ink">{t.nama}</span><span className="block text-sm text-muted">{t.peran}</span></span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border-2 border-forest/15 bg-sand px-8 py-14 text-center md:py-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-ink md:text-4xl">Punya rumah untuk dijual atau disewa? Yuk, bantu kami carikan pemilik barunya.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={waLink(site.wa, 'Halo Beranda, saya mau pasang iklan properti.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-bold text-white transition hover:bg-forest-soft">Pasang Iklan Gratis <ArrowRight size={16} /></a>
              <Link href="/properti" className="rounded-full border-2 border-ink/15 bg-white px-7 py-3.5 font-bold text-ink transition hover:border-forest hover:text-forest">Jelajahi Properti</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
