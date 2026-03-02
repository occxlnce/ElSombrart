'use client';

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

function IconX({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function IconChevronRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black/80">
      {children}
    </span>
  );
}

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const location = useLocation();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!open) return null;

  const primaryLinks: Array<{ label: string; to: string }> = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
  ];

  const secondaryLinks: Array<{ label: string; to: string }> = [
    { label: 'Contact', to: '/about' },
    { label: 'Process', to: '/process' },
    { label: 'Commissions', to: '/about' },
  ];

  return (
    <div className="fixed inset-0 z-[9999]">
      <button
        type="button"
        aria-label="Close menu backdrop"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <div className="absolute inset-0 flex items-start justify-end p-4 sm:p-5">
        <div className="relative w-full max-w-[420px] max-h-[calc(100dvh-2rem)] rounded-[28px] bg-white text-black shadow-2xl overflow-hidden">
          <div className="relative px-5 sm:px-6 pt-5 sm:pt-6" style={{ paddingTop: 'max(env(safe-area-inset-top), 1.25rem)' }}>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-white text-black"
            >
              <IconX className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-center pt-1">
              <img
                src="/sombralogo.png"
                alt="El-Sombrart logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
          </div>

          <div className="px-5 sm:px-6 pt-8 sm:pt-10 pb-5 overflow-y-auto" style={{ maxHeight: 'calc(100dvh - 9rem)' }}>
            <nav className="space-y-6">
              {primaryLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center justify-between text-black hover:text-black/70"
                >
                  <span className="text-[28px] sm:text-[32px] leading-[1.05] font-[500]">{item.label}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-black/80 text-white shrink-0">
                    <IconChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 h-px w-full bg-black/10" />

            <div className="mt-6 grid grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-4 text-[13px] sm:text-[14px]">
              {secondaryLinks.map((item) => (
                <Link
                  key={`${item.label}-${item.to}`}
                  to={item.to}
                  className="flex items-center justify-between text-black/70 hover:text-black"
                >
                  <span>{item.label}</span>
                  <span className="text-black/40 shrink-0">›</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-black/10 bg-white px-4 sm:px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-[12px] tracking-[0.22em] text-black/50">SOCIALS</span>
                <div className="flex items-center gap-2">
                  <a href="https://behance.net/el-sombrart" target="_blank" rel="noopener noreferrer" className="text-black">
                    <SocialIcon>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M9.18 11.46c.3.4.45.92.45 1.55 0 .62-.16 1.12-.47 1.5-.5.63-1.44.95-2.8.95H3V6h3.75c1.32.02 2.22.34 2.7.95.3.39.45.86.45 1.4 0 .56-.14 1.01-.42 1.35-.16.2-.39.37-.7.52.47.17.82.43 1.06.79ZM5.2 7.75v2.44h1.67c.48 0 .86-.09 1.14-.27.28-.18.42-.5.42-.96 0-.5-.19-.83-.57-.99-.32-.15-.73-.22-1.23-.22H5.2Zm0 3.97v2.95h1.66c.59 0 1.02-.08 1.3-.24.5-.29.75-.84.75-1.65 0-.69-.24-1.16-.73-1.42-.27-.15-.7-.23-1.28-.23H5.2Zm12.18-2.12c.62.72.93 1.69.93 2.9v.28h-5.42c.03.75.29 1.27.78 1.56.3.18.66.27 1.08.27.45 0 .81-.12 1.1-.35.16-.13.3-.31.42-.54h1.95c-.05.43-.28.87-.68 1.32-.62.72-1.48 1.08-2.6 1.08-1.03 0-1.94-.32-2.72-.95-.78-.63-1.17-1.67-1.17-3.1 0-1.34.35-2.38 1.06-3.1.71-.72 1.63-1.08 2.76-1.08 1.06 0 1.96.36 2.51 1.07Zm-3.14.98c-.28.29-.46.69-.53 1.19h3.35c-.04-.54-.21-.95-.5-1.22-.29-.27-.66-.41-1.09-.41-.47 0-.84.15-1.23.44ZM13.5 7.02h3.9v1.2h-3.9v-1.2Z" />
                      </svg>
                    </SocialIcon>
                  </a>
                </div>
              </div>
            </div>

            <div className="pb-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
