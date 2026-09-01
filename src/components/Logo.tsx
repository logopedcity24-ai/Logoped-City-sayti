import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'icon' | 'badge' | 'stacked' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const LogoEmblem: React.FC<{ className?: string; alt?: string; color?: string }> = ({
  className = 'w-10 h-10',
  alt = 'Logoped City Logo',
}) => {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`object-contain ${className}`}
      loading="eager"
    />
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
      emblem: 'w-8 h-8',
      title: 'text-base font-black tracking-tight',
      sub: 'text-[9px]',
      badge: 'w-16 h-16',
    },
    md: {
      emblem: 'w-10 h-10 sm:w-11 sm:h-11',
      title: 'text-lg sm:text-xl font-black tracking-tight',
      sub: 'text-[10px]',
      badge: 'w-24 h-24 sm:w-28 sm:h-28',
    },
    lg: {
      emblem: 'w-14 h-14',
      title: 'text-2xl sm:text-3xl font-black tracking-tight',
      sub: 'text-xs',
      badge: 'w-36 h-36',
    },
    xl: {
      emblem: 'w-20 h-20',
      title: 'text-3xl sm:text-4xl font-black tracking-tight',
      sub: 'text-sm',
      badge: 'w-48 h-48',
    },
  };

  const currentSize = sizeMap[size];

  if (variant === 'image' || variant === 'badge') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-100 p-1 flex items-center justify-center ${currentSize.badge} ${className}`}>
        <LogoEmblem className="w-full h-full rounded-xl" />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-white shadow-xs border border-slate-200/80 p-0.5 ${currentSize.emblem} ${className}`}>
        <LogoEmblem className="w-full h-full rounded-lg" />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="relative p-1 rounded-2xl bg-white border border-slate-200/80 shadow-xs mb-2 overflow-hidden">
          <LogoEmblem className={`${currentSize.emblem} rounded-xl`} />
        </div>
        <span className={`font-heading ${currentSize.title} text-[#009933] uppercase leading-tight font-black`}>
          LOGOPED <span className="text-[#EC008C]">CITY</span>
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
    <div className={`flex items-center space-x-2.5 sm:space-x-3 ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center rounded-xl bg-white p-0.5 shadow-xs border border-slate-200/80 overflow-hidden">
        <LogoEmblem className={`${currentSize.emblem} rounded-lg`} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center space-x-1.5 leading-none">
          <span className={`font-heading ${currentSize.title} text-[#009933] uppercase leading-none font-black tracking-tight`}>
            LOGOPED <span className="text-[#EC008C]">CITY</span>
          </span>
        </div>
        {showSubtitle && (
          <span className={`${currentSize.sub} font-semibold text-slate-500 tracking-tight leading-tight mt-1`}>
            Bolalar nutqi va rivojlanish markazi
          </span>
        )}
      </div>
    </div>
  );
};
