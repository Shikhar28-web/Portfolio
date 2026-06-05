"use client";

import * as React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];
  initialIndex?: number;
  maxVisible?: number;
  cardWidth?: number;
  cardHeight?: number;
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;
  springStiffness?: number;
  springDamping?: number;
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  className?: string;
  onChangeIndex?: (index: number, item: T) => void;
  onAction?: (item: T) => void;
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

function wrapIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function signedOffset(index: number, active: number, length: number, loop: boolean) {
  const raw = index - active;
  if (!loop || length <= 1) return raw;

  const alt = raw > 0 ? raw - length : raw + length;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 5,
  cardWidth = 560,
  cardHeight = 360,
  overlap = 0.52,
  spreadDeg = 42,
  perspectivePx = 1200,
  depthPx = 130,
  tiltXDeg = 10,
  activeLiftPx = 20,
  activeScale = 1.03,
  inactiveScale = 0.94,
  springStiffness = 280,
  springDamping = 28,
  loop = true,
  autoAdvance = false,
  intervalMs = 2800,
  pauseOnHover = true,
  showDots = true,
  className,
  onChangeIndex,
    onAction,
  
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const length = items.length;
  const [active, setActive] = React.useState(() => wrapIndex(initialIndex, length));
  const [hovering, setHovering] = React.useState(false);

  // Responsive card dimensions
  const [responsiveWidth, setResponsiveWidth] = React.useState(cardWidth);
  const [responsiveHeight, setResponsiveHeight] = React.useState(cardHeight);

  React.useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 480) {
        setResponsiveWidth(Math.min(vw - 32, cardWidth));
        setResponsiveHeight(Math.round((vw - 32) * 0.6));
      } else if (vw < 768) {
        setResponsiveWidth(Math.min(vw - 48, cardWidth));
        setResponsiveHeight(Math.round(Math.min(vw - 48, cardWidth) * 0.62));
      } else if (vw < 1024) {
        setResponsiveWidth(Math.min(vw * 0.7, cardWidth));
        setResponsiveHeight(Math.round(Math.min(vw * 0.7, cardWidth) * 0.65));
      } else {
        setResponsiveWidth(cardWidth);
        setResponsiveHeight(cardHeight);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [cardWidth, cardHeight]);

  React.useEffect(() => {
    setActive((current) => wrapIndex(current, length));
  }, [length]);

  React.useEffect(() => {
    if (!length) return;
    onChangeIndex?.(active, items[active]!);
  }, [active, items, length, onChangeIndex]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(12, Math.round(responsiveWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < length - 1;

  const prev = React.useCallback(() => {
    if (!length || !canGoPrev) return;
    setActive((current) => wrapIndex(current - 1, length));
  }, [canGoPrev, length]);

  const next = React.useCallback(() => {
    if (!length || !canGoNext) return;
    setActive((current) => wrapIndex(current + 1, length));
  }, [canGoNext, length]);

  React.useEffect(() => {
    if (!autoAdvance || reduceMotion || !length) return;
    if (pauseOnHover && hovering) return;

    const timer = window.setInterval(() => {
      if (loop || active < length - 1) next();
    }, Math.max(700, intervalMs));

    return () => window.clearInterval(timer);
  }, [active, autoAdvance, hovering, intervalMs, length, loop, next, pauseOnHover, reduceMotion]);

  if (!length) return null;

  return (
    <div
      className={cn('w-full', className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="relative w-full"
        style={{ height: Math.max(300, responsiveHeight + 100) }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-48 w-[72%] rounded-full bg-black/10 blur-3xl dark:bg-white/5"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 w-[78%] rounded-full bg-black/15 blur-3xl dark:bg-black/30"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{ perspective: `${perspectivePx}px` }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, index) => {
              const offset = signedOffset(index, active, length, loop);
              const abs = Math.abs(offset);
              const visible = abs <= maxOffset;

              if (!visible) return null;

              const rotateZ = offset * stepDeg;
              const x = offset * cardSpacing;
              const y = abs * 10;
              const z = -abs * depthPx;
              const activeCard = offset === 0;
              const scale = activeCard ? activeScale : inactiveScale;
              const lift = activeCard ? -activeLiftPx : 0;
              const rotateX = activeCard ? 0 : tiltXDeg;
              const zIndex = 100 - abs;

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    'absolute bottom-0 overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]',
                    'will-change-transform select-none backdrop-blur-xl',
                    activeCard ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer',
                  )}
                  style={{
                    width: responsiveWidth,
                    height: responsiveHeight,
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: y + 42, x, rotateZ, rotateX, scale }
                  }
                  animate={{
                    opacity: 1,
                    x,
                    y: y + lift,
                    rotateZ,
                    rotateX,
                    scale,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: springStiffness,
                    damping: springDamping,
                  }}
                  onClick={() => setActive(index)}
                >
                  <div
                    className="h-full w-full"
                    style={{
                      transform: `translateZ(${z}px)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {renderCard ? (
                      renderCard(item, { active: activeCard })
                    ) : (
<DefaultCard
  item={item}
  active={activeCard}
  onAction={onAction}
/>                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {showDots ? (
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {items.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    isActive ? 'w-7 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/60',
                  )}
                  aria-label={`Go to ${item.title}`}
                />
              );
            })}
          </div>

          {items[active]?.href ? (
            <a
              href={items[active]!.href}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
              aria-label="Open project link"
            >
              <SquareArrowOutUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function DefaultCard<T extends CardStackItem>({
  item,
  active,
  onAction,
}: {
  item: T;
  active: boolean;
  onAction?: (item: T) => void;
}) {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[28px]">
      {/* Image — fills the full card */}
      <div className="absolute inset-0">
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white/5 text-sm text-white/60">
            No image
          </div>
        )}
      </div>

      {/* Subtle overlay — only visible on hover to reveal the button */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-400 group-hover:bg-black/50" />

      {/* "See more details" button — centred, fades in on hover */}
      {onAction ? (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onAction(item); }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#5ef0d8]"
          >
            See more details
            <SquareArrowOutUpRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}