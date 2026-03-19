import type { Metadata } from 'next';
import { Banner } from '@/components/Banner';
import { BlogPreview } from '@/components/BlogPreview';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export const metadata: Metadata = {
  title: 'Servicio Técnico Informático en San Juan',
  description:
    'Reparación de computadoras, eliminación de virus, instalación de sistema y optimización. Atención en San Juan, Argentina.'
};

export default function HomePage() {
  const banners = [
    {
      title: 'Servicio Técnico Profesional',
      subtitle: 'Reparamos tu PC o notebook en tiempo récord'
    }
  ];

  const posts = [
    {
      id: 1,
      title: '¿Tu notebook no carga?',
      slug: 'notebook-no-carga',
      content: 'Problemas comunes y cómo solucionarlos.',
      category: 'Reparación',
      featured_image: '',
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Cómo acelerar tu PC',
      slug: 'acelerar-pc',
      content: 'Consejos para mejorar el rendimiento.',
      category: 'Optimización',
      featured_image: '',
      created_at: new Date().toISOString()
    }
  ];

  const activeBanner = banners[0];

  return (
    <>
      <Hero />

      <Banner
        title={
          activeBanner?.title ??
          'Promoción especial: Limpieza y optimización de PC con descuento.'
        }
        active={!!activeBanner}
      />

      <ServicesSection />

      <WhyChooseUs />

      <BlogPreview posts={posts} />
    </>
  );
}

