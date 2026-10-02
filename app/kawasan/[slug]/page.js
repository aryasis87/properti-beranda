import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Clock, TriangleAlert } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import Reveal from '@/components/ui/Reveal';
import { kawasan, getKawasan } from '@/lib/data';
import { ringkasHarga } from '@/lib/kawasan';

export function generateStaticParams() {
  return kawasan.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const k = getKawasan(slug);
  if (!k) return { title: 'Kawasan tidak ditemukan' };
  return {
    title: `Panduan kawasan ${k.nama}, ${k.kota}`,
    description: `${k.ringkas} Suasana, perkiraan waktu tempuh, kisaran harga, dan listing di ${k.nama}.`,
    alternates: { canonical: `/kawasan/${k.slug}` },
    openGraph: { images: [{ url: k.foto }] },
  };
}

export default async function KawasanPage({ params }) {
  const { slug } = await params;
  const k = getKawasan(slug);
  if (!k) notFound();
  const h = ringkasHarga(k.slug);
  const lain = kawasan.filter((x) => x.slug !== k.slug);

  return (
    <main className="relative z-10">
      <section className="px-4 pt-8 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/kawasan" className="inline-flex items-center gap-1 text-sm font-semibold text-muted transition hover:text-forest"><ArrowLeft size={15} /> Semua kawasan</Link>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-gold">Panduan kawasan · {k.kota}</p>
              <h1 className="mt-3 font-display text-5xl font-bold leading-[1.02] text-ink md:text-7xl">{k.nama}</h1>
              <p className="mt-5 max-w-lg text-lg text-ink/80">{k.ringkas}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Suasana">
                {k.suasana.map((s) => <li key={s} className="rounded-full border-2 border-ink/10 bg-white px-4 py-1.5 text-sm font-semibold text-ink">{s}</li>)}
              </ul>
              <p className="mt-5 text-sm text-muted">Cocok untuk: <span className="font-bold text-ink">{k.cocok.join(', ')}</span></p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] rounded-tr-lg">
              <Image src={k.foto} alt="" fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-forest p-7 text-white">
            <h2 className="font-display text-2xl font-bold">Kisaran harga</h2>
            <dl className="mt-5 space-y-4">
              {h.jual && <div><dt className="text-sm text-white/90">Dijual</dt><dd className="font-display text-2xl font-bold">{h.jual}</dd></div>}
              {h.perMeterTanah && <div><dt className="text-sm text-white/90">Rata-rata per m² tanah</dt><dd className="font-display text-2xl font-bold">{h.perMeterTanah}</dd></div>}
              {h.sewa && <div><dt className="text-sm text-white/90">Sewa, setara per bulan</dt><dd className="font-display text-2xl font-bold">{h.sewa}</dd></div>}
            </dl>
            <p className="mt-5 text-xs text-white/90">Dihitung dari {h.list.length} listing Beranda di kawasan ini, bukan harga pasar resmi.</p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-ink"><Clock size={20} className="text-forest" /> Seberapa jauh?</h2>
            <dl className="mt-5 divide-y divide-black/5">
              {k.jarak.map(([ke, waktu]) => (
                <div key={ke} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-ink/80">{ke}</dt>
                  <dd className="shrink-0 font-bold text-ink">{waktu}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted">Perkiraan dengan mobil di luar jam sibuk.</p>
          </div>

          <div className="rounded-[2rem] border-2 border-forest/20 bg-sand p-7">
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-ink"><TriangleAlert size={20} className="text-forest" /> Perlu kamu tahu</h2>
            <ul className="mt-5 space-y-3">
              {k.catatan.map((c) => <li key={c} className="text-ink/85">{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Yang tersedia di {k.nama}</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {h.list.map((p, i) => <Reveal key={p.id} delay={(i % 3) * 0.08}><PropertyCard item={p} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-sand/60 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-ink">Kawasan lain</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {lain.map((x) => (
              <li key={x.slug}>
                <Link href={`/kawasan/${x.slug}`} className="group flex items-center gap-4 rounded-[1.75rem] bg-white p-3 shadow-sm transition hover:-translate-y-0.5">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl"><Image src={x.foto} alt="" fill sizes="64px" className="object-cover" /></span>
                  <span className="min-w-0 flex-1"><span className="block font-display text-lg font-bold text-ink group-hover:text-forest">{x.nama}</span><span className="block text-sm text-muted">{x.kota} · {x.cocok.join(', ')}</span></span>
                  <ArrowUpRight size={16} className="mr-2 shrink-0 text-forest" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
