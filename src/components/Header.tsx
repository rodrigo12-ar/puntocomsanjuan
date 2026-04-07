'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BUSINESS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Nosotros' },
  { href: '/contact', label: 'Contacto' }
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold text-white">
            {BUSINESS.name}
          </Link>

          <nav className="hidden gap-2 md:flex">
            {nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded px-3 py-2 text-sm transition',
                    active
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.whatsappWaMe}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex"
            >
              WhatsApp
            </a>

            <Link href="/contact" className="btn-outline hidden sm:inline-flex">
              Contacto
            </Link>

            <button
              type="button"
              className="inline-flex items-center rounded border border-slate-700 px-3 py-2 text-sm text-white transition hover:bg-slate-900 md:hidden"
              onClick={() => setMobileOpen((current) => !current)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Cerrar menu' : 'Abrir menu'}
            >
              Menu
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <nav id="mobile-nav" className="mt-3 grid gap-2 border-t border-slate-800 pt-3 md:hidden">
            {nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded px-3 py-2 text-sm transition',
                    active
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-2 grid gap-2 sm:hidden">
              <a
                href={BUSINESS.whatsappWaMe}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                WhatsApp
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center"
              >
                Instagram
              </a>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
