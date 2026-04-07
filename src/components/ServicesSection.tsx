import { ServiceCard, type ServiceCardData } from '@/components/ServiceCard';

const SERVICES: ServiceCardData[] = [
  {
    icon: '🛠️',
    title: 'Reparacion de PC y notebook',
    description: 'Diagnostico y solucion de fallas de hardware y software con explicacion clara.'
  },
  {
    icon: '🧼',
    title: 'Limpieza y eliminacion de virus',
    description: 'Limpieza profunda, eliminacion de malware y mejora de seguridad del sistema.'
  },
  {
    icon: '💿',
    title: 'Instalacion de sistema operativo',
    description: 'Windows, drivers, programas esenciales, configuracion y respaldo.'
  },
  {
    icon: '🚀',
    title: 'Optimizacion de rendimiento',
    description: 'Mejora de arranque, velocidad general y configuracion recomendada.'
  },
  {
    icon: '🖨️',
    title: 'Soporte para impresoras y perifericos',
    description: 'Configuracion, deteccion de fallas y solucion de problemas frecuentes.'
  },
  {
    icon: '🧑‍💻',
    title: 'Soporte tecnico personalizado',
    description: 'Asistencia para hogares, emprendedores y pequenos comercios.'
  }
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          <div className="section-kicker reveal-up">Servicios principales</div>
          <h2 className="reveal-up reveal-up-delay-1 mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            Soluciones pensadas para que tus equipos funcionen mejor
          </h2>
          <p className="reveal-up reveal-up-delay-2 mt-3 text-sm text-slate-600">
            Desde mantenimiento y formateos hasta recuperacion de rendimiento, trabajamos con un enfoque claro,
            practico y rapido.
          </p>
        </div>
      </div>

      <div className="stagger-grid mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
