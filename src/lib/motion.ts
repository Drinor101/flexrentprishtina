import type { CSSProperties } from 'react';

// Inline custom properties read by the .fx-up / .scroll-reveal rules in index.css
export const stagger = (ms: number): CSSProperties =>
  ({ '--d': `${ms}ms`, '--reveal-delay': `${ms}ms` }) as CSSProperties;

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
