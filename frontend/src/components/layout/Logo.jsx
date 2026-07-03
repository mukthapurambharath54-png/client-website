import React from 'react';

/**
 * Zenex International logo — real HTML text so it stays crisp
 * and legible at every responsive size.
 *
 * Props:
 *  - size: 'sm' | 'md' | 'lg' — visual sizing preset
 *  - variant: 'light' (default red on light bg) | 'dark' (white on dark bg)
 *  - className: extra classes for the wrapper
 */
const SIZE_MAP = {
  sm: { word: 'text-lg', tag: 'text-[8px] tracking-[0.25em]', gap: 'mt-0.5', tm: 'text-[9px]' },
  md: { word: 'text-2xl', tag: 'text-[9px] tracking-[0.3em]', gap: 'mt-1', tm: 'text-[10px]' },
  lg: { word: 'text-3xl', tag: 'text-[10px] tracking-[0.32em]', gap: 'mt-1', tm: 'text-[11px]' },
};

const Logo = ({ size = 'md', variant = 'light', className = '' }) => {
  const s = SIZE_MAP[size] || SIZE_MAP.md;
  const wordColor = variant === 'dark' ? 'text-white' : 'text-red-600';
  const tagColor = variant === 'dark' ? 'text-slate-200' : 'text-[#0a2540]';
  return (
    <div
      className={`inline-flex flex-col leading-none select-none ${className}`}
      aria-label="Zenex International"
    >
      <div className="flex items-start">
        <span
          className={`font-extrabold tracking-tight ${wordColor} ${s.word}`}
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", lineHeight: 1 }}
        >
          Zenex
        </span>
        <span className={`ml-0.5 font-bold ${tagColor} ${s.tm}`}>™</span>
      </div>
      <span className={`${s.gap} font-bold uppercase ${tagColor} ${s.tag}`} style={{ lineHeight: 1 }}>
        International
      </span>
    </div>
  );
};

export default Logo;
