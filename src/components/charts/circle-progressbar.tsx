'use client';

import cn from '@/utils/class-names';
import React, { useEffect, useRef, useState } from 'react';

const classes = {
  base: 'transform',
  startAngle: {
    0: 'rotate-0',
    45: '-rotate-45',
    90: '-rotate-90',
    180: '-rotate-180',
    270: '-rotate-[270deg]',
    360: '-rotate-[360deg]',
  },
  fixLabelAngle: {
    0: 'rotate-0',
    45: 'rotate-45',
    90: 'rotate-90',
    180: 'rotate-180',
    270: 'rotate-[270deg]',
    360: 'rotate-[360deg]',
  },
};

interface CircleProgressBarProps {
  percentage: number;
  size: number;
  strokeWidth: number;
  stroke: string;
  strokeClassName?: string;
  progressColor: string;
  progressBarClassName?: string;
  label?: React.ReactNode;
  useParentResponsive?: boolean;
  gradientColor?: string;
  startAngle?: keyof typeof classes.startAngle;
}

export default function CircleProgressBar({
  percentage,
  size,
  strokeWidth,
  stroke,
  strokeClassName,
  progressColor,
  progressBarClassName,
  useParentResponsive,
  gradientColor,
  label,
  startAngle = 90,
}: CircleProgressBarProps) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const progressBarRef = useRef<SVGCircleElement | null>(null);
  useEffect(() => {
    const progressBarRefEl = progressBarRef.current;
    if (progressBarRefEl) {
      progressBarRefEl.style.transition = 'stroke-dashoffset 0.3s ease-in-out';
      progressBarRefEl.style.strokeDashoffset = offset.toString();
    }
    // Cleanup function to remove transition style when unmounting
    return () => {
      if (progressBarRefEl) {
        progressBarRefEl.style.transition = '';
      }
    };
  }, [offset]);

  // Safari browser transform css issue with foreignObject
  const [isSafari, setSafari] = useState(false);
  useEffect(() => {
    let isBrowserSafari = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setSafari(() => isBrowserSafari);
  }, []);

  return (
    <svg
      {...(!useParentResponsive && { width: size, height: size })}
      viewBox={`0 0 ${size} ${size}`}
      className={cn(
        'transition-all duration-200',
        !isSafari && classes.base,
        !isSafari && classes.startAngle[startAngle]
      )}
    >
      {gradientColor && (
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={progressColor} />
            <stop offset="100%" stopColor={gradientColor} />
          </linearGradient>
        </defs>
      )}

      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={'transparent'}
        strokeWidth={strokeWidth}
        stroke={stroke}
        {...(strokeClassName && { className: strokeClassName })}
      />

      <circle
        ref={progressBarRef}
        cx={cx}
        cy={cy}
        r={radius}
        fill="transparent"
        strokeWidth={strokeWidth}
        stroke={gradientColor ? 'url(#gradient)' : progressColor}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={-offset}
        strokeLinecap="round"
        {...(progressBarClassName && { className: progressBarClassName })}
      />

      {label && (
        <foreignObject x={0} y={0} width={size} height={size}>
          <div
            className={cn(
              'flex h-full w-full flex-col items-center justify-center transition-all duration-200',
              !isSafari && 'transform',
              !isSafari && classes.fixLabelAngle[startAngle]
            )}
          >
            {label}
          </div>
        </foreignObject>
      )}
    </svg>
  );
}
