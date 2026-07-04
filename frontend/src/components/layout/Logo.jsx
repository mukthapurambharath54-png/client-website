import React from 'react';

const SIZE_MAP = {
  sm: 'w-24',
  md: 'w-32',
  lg: 'w-40',
};

const Logo = ({ size = 'md', className = '' }) => {
  const sizeClass = SIZE_MAP[size] || SIZE_MAP.md;
  return (
    <div className={`inline-flex items-center select-none ${className}`} aria-label="Zenex International">
      <img
        src="/logo.png"
        alt="Zenex International"
        className={`${sizeClass} h-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
