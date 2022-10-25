import React, { useEffect, useState } from 'react';

type CircularProgressBarProps = {
  value: number;
  size?: number;
  pathWidth?: number;
  pathColor?: string;
  trailWidth?: number;
  trailColor?: string;
  round?: number;
  rotate?: number;
  startFrom?: keyof typeof StartAngle;
};

/**
 * Primary UI component for user interaction
 */
export const CircularProgressBar = ({
  size = 180,
  pathWidth = 5,
  pathColor = '#000',
  trailWidth = 5,
  trailColor = '#eaeaea',
  value,
  round = 360,
  rotate = 0,
  startFrom = 'TOP'
}: CircularProgressBarProps) => {
  const [percentage, setPercentage] = useState(0);

  const center = size / 2;
  const radius = center - Math.max(pathWidth, trailWidth);
  const angle = percentage * 3.6;
  const circumference = 2 * Math.PI * radius;
  const trailLength = circumference * (round / 360);
  const pathLength = (angle / 360) * circumference * (round / 360);
  const offset = ((StartAngle[startFrom] - rotate) / 360) * circumference;

  useEffect(() => {
    setTimeout(() => setPercentage(value > 100 ? 100 : value));
  }, [value]);

  return (
    <svg height={size} width={size}>
      <circle
        r={radius}
        cx={center}
        cy={center}
        fill='transparent'
        stroke={trailColor}
        strokeLinecap='round'
        strokeDasharray={`${trailLength} ${circumference - trailLength}`}
        strokeDashoffset={offset}
        strokeWidth={trailWidth}
      />
      <circle
        r={radius}
        cx={center}
        cy={center}
        fill='transparent'
        strokeLinecap={pathLength > 0 ? 'round' : 'butt'}
        stroke={pathColor}
        strokeDasharray={`${pathLength} ${circumference - pathLength}`}
        strokeDashoffset={offset}
        strokeWidth={pathWidth}
        style={{ transition: 'stroke-dasharray .3s ease' }}
      />
    </svg>
  );
};

export enum StartAngle {
  TOP = 90,
  LEFT = 180,
  BOTTOM = 270,
  RIGHT = 360
}
