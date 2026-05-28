'use client'

import React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'

export function Header() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'skill', href: '#skill' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
  ]

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-7xl -translate-x-1/2 rounded-full border border-white/10 bg-black/30 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 ease-out md:top-6',
        {
          'bg-black/45 border-white/15 shadow-[0_24px_90px_rgba(0,0,0,0.55)]': scrolled && !open,
          'bg-black/60 border-white/20': open,
        },
      )}
    >
      <nav
        className={cn('flex h-16 w-full items-center justify-between px-4 md:h-18 md:px-6 md:transition-all md:ease-out', {
          'md:px-8': scrolled,
        })}
      >
        <a href="#home" className="flex items-center gap-2 text-base font-semibold tracking-[0.22em] uppercase text-white/90">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(94,240,216,0.8)]" />
          Shikhar
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({ variant: 'ghost', className: 'rounded-full px-4 py-2 text-sm' })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="rounded-full md:hidden">
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <div
        className={cn(
          'bg-black/90 fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-white/10 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4',
          )}
        >
          <div className="grid gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                className={buttonVariants({ variant: 'ghost', className: 'justify-start' })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}