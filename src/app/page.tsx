import type { Metadata } from 'next';
import { Banner } from '@/components/Banner';
import { BlogPreview } from '@/components/BlogPreview';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import type { BannerRow, Post } from '@/lib/supabase/types';

export const metadata: Metadata = {
  title: 'Servicio Técnico Informático en San Juan',
  description: 'Reparación de computadoras, eliminación de virus, instalación de sistema y optimización. Atención en San Juan, Argentina.'
};

export default async function HomePage() {
  const supabase = createServerSupabaseClient();

  const [{ data: banners }, { data: posts }] = await Promise.all([
    supabase.from('banners').select<'*', BannerRow>('*').eq('active', true).order('id', { ascending: true }).limit(1),
    supabase
      .from('posts')
      .select<'*', Post>('id,title,slug,content,category,featured_image,created_at')
      .order('created_at', { ascending: false })
      .limit(3)
  ]);

  const activeBanner = banners?.[0];

  return (
    <>
      <Hero />
      <Banner title={activeBanner?.title ?? 'Promoción especial: Limpieza y optimización de PC con descuento.'} active={!!activeBanner} />
      <ServicesSection />
      <WhyChooseUs />
      <BlogPreview posts={posts ?? []} />
    </>
  );
}


