import { useState } from 'react';
import { TELLERBUD_LOGO_URL } from '../config/site';

interface TellerBudLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function TellerBudLogo({
  className = '',
  size = 'md',
  showTagline = false,
}: TellerBudLogoProps) {
  const [imgError, setImgError] = useState(false);

  // Logo Icon Height Requirements:
  // Header with tagline: slightly larger and clearer (lg:h-[68px], sm:h-[58px], h-[50px])
  // Standard Header (no tagline): (lg:h-[72px], sm:h-[62px], h-[50px])
  // Footer (lg): approximately 58–64 px high (lg:h-[62px], sm:h-[54px], h-[46px])
  const iconDimensionClasses = {
    sm: 'h-[40px] sm:h-[44px] w-auto',
    md: showTagline
      ? 'h-[50px] sm:h-[58px] lg:h-[68px] w-auto'
      : 'h-[50px] sm:h-[62px] lg:h-[72px] w-auto',
    lg: 'h-[46px] sm:h-[54px] lg:h-[62px] w-auto',
  }[size];

  // Brand Text Size Requirements:
  // Header with tagline: 22–30 px to maintain compact balance
  const titleSizeClasses = {
    sm: 'text-[18px] sm:text-[20px]',
    md: showTagline
      ? 'text-[22px] sm:text-[26px] lg:text-[30px]'
      : 'text-[24px] sm:text-[28px] lg:text-[34px]',
    lg: 'text-[24px] sm:text-[27px] lg:text-[32px]',
  }[size];

  // Spacing between logo icon and brand text: 12–16 px gap
  const gapClasses = {
    sm: 'gap-2.5 sm:gap-3',
    md: 'gap-3 sm:gap-3.5 lg:gap-4',
    lg: 'gap-3 sm:gap-3.5 lg:gap-4',
  }[size];

  const fallbackSizeClasses = {
    sm: 'w-[40px] h-[40px] text-sm',
    md: showTagline
      ? 'w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] lg:w-[68px] lg:h-[68px] text-lg sm:text-xl lg:text-2xl'
      : 'w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] lg:w-[72px] lg:h-[72px] text-xl sm:text-2xl lg:text-3xl',
    lg: 'w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] lg:w-[62px] lg:h-[62px] text-xl sm:text-2xl lg:text-2xl',
  }[size];

  return (
    <div className={`inline-flex items-center ${gapClasses} shrink-0 ${className}`}>
      {/* Official TellerBud Logo Icon */}
      {!imgError ? (
        <img
          src={TELLERBUD_LOGO_URL}
          alt="TellerBud Icon"
          className={`${iconDimensionClasses} object-contain shrink-0`}
          style={{ imageRendering: 'auto' }}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Fallback badge when logo image is not present */
        <div
          className={`${fallbackSizeClasses} bg-[#008C95] text-[#FCFCFB] font-bold rounded-2xl flex items-center justify-center tracking-tight shadow-xs shrink-0`}
        >
          TB
        </div>
      )}

      {/* Brand Text Block */}
      <div className="flex flex-col justify-center text-left shrink-0">
        <span
          className={`font-heading font-bold text-[#090D10] ${titleSizeClasses} tracking-tight leading-none shrink-0 group-hover:text-[#008C95] transition-colors`}
        >
          TellerBud
        </span>
        {showTagline && (
          <span className="font-sans italic font-medium text-[10px] sm:text-[11.5px] lg:text-[12.5px] text-[#005F67] tracking-tight leading-tight pt-1 sm:pt-1.5 whitespace-nowrap group-hover:text-[#008C95] transition-colors">
            Mobile Money At Your Fingertips
          </span>
        )}
      </div>
    </div>
  );
}



