import Link from 'next/link';
import { SITE } from '@/lib/site';

const quickStats = [
  { value: 'Respuesta rapida', detail: 'Atencion agil por WhatsApp e Instagram.' },
  { value: 'Diagnostico claro', detail: 'Explicaciones simples antes de avanzar.' },
  { value: 'Soporte local', detail: `Servicio cercano en ${SITE.city}.` }
] as const;

const highlights = [
  { icon: '⚡', title: 'Respuesta rapida' },
  { icon: '🧠', title: 'Diagnostico preciso' },
  { icon: '🛡️', title: 'Mas seguridad' },
  { icon: '💬', title: 'Atencion directa' }
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute left-0 top-24 h-44 w-44 rounded-full bg-cyan-100/50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="space-y-6">
          <div className="section-kicker reveal-up">Servicio tecnico informatico en {SITE.city}</div>

          <h1 className="reveal-up reveal-up-delay-1 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Soluciones informaticas claras, rapidas y profesionales
          </h1>

          <p className="reveal-up reveal-up-delay-2 max-w-xl text-base text-slate-700 md:text-lg">
            Reparacion de PC y notebooks, limpieza, optimizacion, instalacion de sistemas, soporte tecnico y atencion
            personalizada en San Juan.
          </p>

          <div className="reveal-up reveal-up-delay-3 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
              Pedir diagnostico
            </a>

            <Link className="btn-outline" href="/contact">
              Ver contacto
            </Link>
          </div>

          <div className="stagger-grid grid gap-3 sm:grid-cols-3">
            {quickStats.map((item) => (
              <div key={item.value} className="stat-chip">
                <div className="text-sm font-semibold text-slate-900">{item.value}</div>
                <div className="mt-1 text-sm text-slate-600">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card hero-panel reveal-up reveal-up-delay-2 p-8">
          <div className="space-y-5">
            <div>
              <div className="section-kicker">Que resolvemos</div>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Problemas de rendimiento, formateos, virus, fallas de software, instalaciones, mantenimiento y soporte
                tecnico para hogares y comercios.
              </p>
            </div>

            <div className="stagger-grid grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="text-xl">{item.icon}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
