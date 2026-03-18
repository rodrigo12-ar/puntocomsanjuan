import { SITE } from '@/lib/site';

export type BannerData = {
  title: string;
  active: boolean;
};

export function Banner({ title, active }: BannerData) {
  if (!active) return null;

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="card overflow-hidden">
        <div className="flex flex-col items-start justify-between gap-3 p-6 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold text-slate-100">Promoción</div>
            <div className="mt-1 text-base font-bold text-slate-50">{title}</div>
          </div>
          <a className="btn-primary" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
            Aprovechar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

