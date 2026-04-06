export function WhyChooseUs() {
  const items = [
    { title: 'Servicios Rapidos', desc: 'Tiempos de respuesta cortos y prioridades claras.' },
    { title: 'Diagnosticos Profecionales', desc: 'Diagnóstico preciso antes de intervenir.' },
    { title: 'Presupuestos Transparentes', desc: 'Presupuesto transparente y opciones por etapa.' },
    { title: 'Soporte Confiable', desc: 'Soporte confiable para hogares y comercios.' }
  ] as const;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">¿Por qué elegirnos?</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((x) => (
          <div key={x.title} className="card p-6">
            <div className="text-base font-bold text-slate-90">{x.title}</div>
            <p className="mt-2 text-sm text-slate-900">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



