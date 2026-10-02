import { properti, formatHarga } from '@/lib/data';

// Ringkasan harga satu kawasan, dihitung dari listing yang ada di dalamnya.
export function ringkasHarga(slug) {
  const list = properti.filter((p) => p.kawasan === slug);
  const jual = list.filter((p) => p.status === 'Dijual');
  const sewa = list.filter((p) => p.status === 'Disewakan');
  const rentang = (xs) => {
    if (!xs.length) return null;
    const lo = Math.min(...xs), hi = Math.max(...xs);
    return lo === hi ? formatHarga(lo) : `${formatHarga(lo)} – ${formatHarga(hi)}`;
  };
  const tanah = jual.filter((p) => p.spesifikasi.luasTanah > 0).map((p) => p.harga / p.spesifikasi.luasTanah);
  return {
    list,
    jual: rentang(jual.map((p) => p.harga)),
    sewa: rentang(sewa.map((p) => (p.periode === 'tahun' ? p.harga / 12 : p.harga))),
    perMeterTanah: tanah.length ? formatHarga(tanah.reduce((a, b) => a + b, 0) / tanah.length) : null,
  };
}
