import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { kawasan } from '@/lib/data';
import { ringkasHarga } from '@/lib/kawasan';

export const metadata = {
  title: 'Panduan kawasan',
  description: 'Kotabaru, Cinere, Sanur, dan Lembang: suasana, perkiraan waktu tempuh, kisaran harga, dan untuk siapa kawasan itu paling cocok.',
  alternates: { canonical: '/kawasan' },
};

const TAHAP = [
  ['Keluarga', 'Sekolah yang bisa dijangkau, jalan yang aman untuk anak, dan ruang untuk tumbuh.'],
  ['Mahasiswa', 'Dekat kampus, transportasi mudah, dan kamar dengan pengelola yang jelas.'],
  ['Pensiun', 'Rumah tanpa tangga, ritme yang pelan, dan layanan kesehatan dalam jangkauan.'],
];

export default function KawasanIndex() {
  return (
    <main className="relative z-10">
      <PageHeader kicker="Kawasan" title="Pilih kawasannya dulu" subtitle="Empat panduan kawasan — termasuk kekurangannya. Waktu tempuh adalah perkiraan, harga dihitung dari listing yang ada." />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-6 md:grid-cols-2">
            {kawasan.map((k, i) => {
              const h = ringkasHarga(k.slug);
              return (
                <li key={k.slug}>
                  <Reveal delay={(i % 2) * 0.08}>
                    <Link href={`/kawasan/${k.slug}`} className="group block overflow-hidden rounded-[2.5rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                      <span className="relative block aspect-[16/9]">
                        <Image src={k.foto} alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                      </span>
                      <span className="block p-7">
                        <span className="flex items-start justify-between gap-4">
                          <span>
                            <span className="block text-sm font-bold uppercase tracking-[0.12em] text-gold">{k.kota}</span>
                            <span className="mt-1 block font-display text-3xl font-bold text-ink group-hover:text-forest">{k.nama}</span>
                          </span>
                          <ArrowUpRight size={22} className="mt-2 shrink-0 text-forest" />
                        </span>
                        <span className="mt-3 block text-ink/80">{k.ringkas}</span>
                        <span className="mt-5 flex flex-wrap gap-2">
                          {k.cocok.map((c) => <span key={c} className="rounded-full bg-forest/10 px-3 py-1 text-sm font-bold text-forest">{c}</span>)}
                          <span className="rounded-full bg-sand px-3 py-1 text-sm font-semibold text-ink">{h.list.length} listing</span>
                        </span>
                        {h.jual && <span className="mt-4 block text-sm text-muted">Dijual {h.jual}</span>}
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-sand px-6 py-12 md:px-12">
          <h2 className="font-display text-3xl font-bold text-ink">Yang dicari tiap tahap hidup</h2>
          <dl className="mt-8 grid gap-6 md:grid-cols-3">
            {TAHAP.map(([t, isi]) => (
              <div key={t}>
                <dt className="font-display text-xl font-bold text-forest">{t}</dt>
                <dd className="mt-2 text-ink/85">{isi}</dd>
                <dd className="mt-3 text-sm font-semibold text-ink">{kawasan.filter((k) => k.cocok.includes(t)).map((k) => k.nama).join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
