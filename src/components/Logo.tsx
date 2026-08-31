import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'icon' | 'badge' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const LogoEmblem: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#EC008C',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logoped City Emblem"
    >
      {/* Head - Circle */}
      <circle cx="50" cy="20" r="11" fill={color} />
      
      {/* Left quotation/figure shape */}
      {/* Symmetrical stylized speech quote / child figure */}
      <path
        d="M 45 35 
           H 26 
           C 20 35 16 39 16 45 
           V 67 
           C 16 71 18 75 22 75 
           C 25 75 27 73 29 70 
           C 33 64 38 60 45 60 
           V 35 Z"
        fill={color}
      />

      {/* Right quotation/figure shape (Mirrored) */}
      <path
        d="M 55 35 
           H 74 
           C 80 35 84 39 84 45 
           V 67 
           C 84 71 82 75 78 75 
           C 75 75 73 73 71 70 
           C 67 64 62 60 55 60 
           V 35 Z"
        fill={color}
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: {
      emblem: 'w-7 h-7',
      title: 'text-base font-black tracking-tight',
      sub: 'text-[9px]',
      badge: 'w-16 h-16 p-1.5',
    },
    md: {
      emblem: 'w-9 h-9',
      title: 'text-lg sm:text-xl font-black tracking-tight',
      sub: 'text-[10px]',
      badge: 'w-24 h-24 p-2',
    },
    lg: {
      emblem: 'w-12 h-12',
      title: 'text-2xl sm:text-3xl font-black tracking-tight',
      sub: 'text-xs',
      badge: 'w-36 h-36 p-3',
    },
    xl: {
      emblem: 'w-16 h-16',
      title: 'text-3xl sm:text-4xl font-black tracking-tight',
      sub: 'text-sm',
      badge: 'w-48 h-48 p-4',
    },
  };

  const currentSize = sizeMap[size];

  if (variant === 'icon') {
    return <LogoEmblem className={`${currentSize.emblem} ${className}`} />;
  }

  if (variant === 'badge') {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center select-none ${className}`}>
        {/* Top-left Pink/Magenta Wave */}
        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#EC008C] opacity-95 blur-[1px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#EC008C] rounded-br-[40px] pointer-events-none" />

        {/* Bottom-right Lime/Green Wave */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#00C853] opacity-95 blur-[1px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#00C853] rounded-tl-[40px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-4">
          <LogoEmblem className={`${currentSize.emblem} mb-1.5 drop-shadow-xs`} color="#EC008C" />
          <span className="font-heading font-black tracking-wider uppercase text-[#009933] text-sm sm:text-base leading-none">
            LOGOPED CITY
          </span>
          {showSubtitle && (
            <span className="text-[9px] font-semibold text-slate-500 mt-1 uppercase tracking-wider">
              Xorazm Filiallari
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-pink-50 via-white to-emerald-50 border border-slate-200/80 shadow-xs mb-2">
          <LogoEmblem className={currentSize.emblem} color="#EC008C" />
        </div>
        <span className={`font-heading ${currentSize.title} text-[#009933] uppercase leading-tight font-extrabold`}>
          LOGOPED CITY
        </span>
        {showSubtitle && (
          <span className={`${currentSize.sub} font-medium text-slate-500 mt-0.5`}>
            Bolalar nutqi va rivojlanish markazi
          </span>
        )}
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center rounded-xl bg-white p-1 shadow-xs border border-pink-100">
        <LogoEmblem className={currentSize.emblem} color="#EC008C" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center space-x-1.5 leading-none">
          <span className={`font-heading ${currentSize.title} text-[#009933] uppercase leading-none font-black`}>
            LOGOPED <span className="text-[#EC008C]">CITY</span>
          </span>
        </div>
        {showSubtitle && (
          <span className={`${currentSize.sub} font-semibold text-slate-500 tracking-tight leading-tight mt-0.5`}>
            Bolalar nutqi va rivojlanish markazi
          </span>
        )}
      </div>
    </div>
  );
};
