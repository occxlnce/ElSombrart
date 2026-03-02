'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOverlay } from './menu-overlay';
import { initNorrisAnimation } from '@/lib/norris-animation';

function IconMenu({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    initNorrisAnimation();
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9000] pointer-events-none">
        <div className="px-4 sm:px-6 pt-4 sm:pt-6" style={{ paddingTop: 'max(env(safe-area-inset-top), 1rem)' }}>
          <div className="pointer-events-auto flex items-center justify-between gap-3">
            <Link to="/" aria-label="Go to home" className="inline-flex items-center">
              <img
                src="/sombralogo.png"
                alt="El-Sombrart logo"
                className="h-8 sm:h-9 w-auto max-w-[55vw] object-contain brightness-0 invert"
              />
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-2xl border border-black/10 bg-white/80 text-black backdrop-blur"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>

          <div className="pointer-events-auto flex items-center justify-center gap-6 mt-4">
            <a href="https://behance.net/el-sombrart" target="_blank" rel="noopener noreferrer" className="norris text-white text-sm font-medium uppercase tracking-wider">Behance</a>
          </div>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
