import { ServiceCard, type ServiceCardData } from '@/components/ServiceCard';

const SERVICES: ServiceCardData[] = [
  {
    icon: '🛠️',
    title: 'Reparación de PC y notebook',
    description: 'Diagnóstico y solución de fallas de hardware y software con explicación clara.'
  },
  {
    icon: '🧼',
    title: 'Limpieza y eliminación de virus',
    description: 'Limpieza profunda, eliminación de malware y mejora de seguridad del sistema.'
  },
  {
    icon: '💿',
    title: 'Instalación de sistema operativo',
    description: 'Windows, drivers, programas esenciales, configuración y respaldo.'
  },
  {
    icon: '🚀',
    title: 'Optimización de rendimiento',
    description: 'Mejora de arranque, velocidad general y configuración recomendada.'
  },
  {
    icon: '🖨️',
    title: 'Soporte para impresoras y periféricos',
    description: 'Configuración, detección de fallas y solución de problemas frecuentes.'
  },
  {
    icon: '🧑‍💻',
    title: 'Soporte técnico personalizado',
    description: 'Asistencia para hogares, emprendedores y pequeños comercios.'
  }
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            Servicios
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Soluciones pensadas para que tus equipos funcionen mejor y sin complicaciones.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}