'use client'

import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'

export function Header() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skill' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close menu on resize to desktop
  React.useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <>
      {/* ── Header bar ─────────────────────────────── */}
      <header
        className={cn(
          // Mobile: full-width flat bar at the very top
          // Desktop: floating pill centred
          'fixed z-50 transition-all duration-300 ease-out',
          // Mobile styles
          'top-0 left-0 right-0 rounded-none border-b border-white/10 bg-black/80 backdrop-blur-2xl',
          // Desktop overrides
          'md:left-1/2 md:right-auto md:top-5 md:w-[calc(100%-2rem)] md:max-w-5xl md:-translate-x-1/2 md:rounded-full md:border md:border-white/10 md:bg-black/30 md:shadow-[0_20px_80px_rgba(0,0,0,0.45)]',
          scrolled && !open ? 'md:bg-black/50 md:border-white/15' : '',
          open ? 'bg-black/95' : '',
        )}
      >
        <nav className="flex h-14 w-full items-center justify-between px-4 md:h-16 md:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-white/90"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(94,240,216,0.9)]" />
            Shikhar
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={buttonVariants({
                  variant: 'ghost',
                  className: 'rounded-full px-4 py-2 text-sm font-medium capitalize text-white/75 hover:text-white',
                })}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <MenuToggleIcon open={open} className="size-4" duration={280} />
          </button>
        </nav>

        {/* ── Mobile slide-down menu ─────────────────── */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out md:hidden',
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          )}
          aria-hidden={!open}
        >
          <nav className="flex flex-col gap-1 border-t border-white/10 px-4 pb-5 pt-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-xl px-4 py-3 text-base font-medium capitalize text-white/75 transition-colors hover:bg-white/8 hover:text-white active:bg-white/12"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Backdrop (closes menu on outside tap) ───── */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
