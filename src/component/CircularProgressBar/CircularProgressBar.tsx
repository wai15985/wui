import React, { useEffect, useState } from 'react';

type CircularProgressBarProps = {
  value: number;
  size?: number;
  pathWidth?: number;
  pathColor?: string;
  trailWidth?: number;
  trailColor?: string;
  totalAngle?: number;
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
  totalAngle = 360,
  rotate = 0,
  startFrom = 'TOP'
}: CircularProgressBarProps) => {
  const [percentage, setPercentage] = useState(0);

  const center = size / 2;
  const radius = center - Math.max(pathWidth, trailWidth);
  const angle = percentage * 3.6;
  const arcLength = 2 * Math.PI * radius;
  const trailStrokeDasharray = arcLength * (totalAngle / 360);
  const pathStrokeDasharray = (angle / 360) * arcLength * (totalAngle / 360);

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
        stroke-dasharray={[trailStrokeDasharray, arcLength - trailStrokeDasharray]}
        stroke-dashoffset={(StartAngle[startFrom] / 360) * arcLength}
        stroke-width={trailWidth}
        transform={`rotate(${rotate})`}
        transform-origin='center'
      />
      <circle
        r={radius}
        cx={center}
        cy={center}
        fill='transparent'
        strokeLinecap={pathStrokeDasharray > 0 ? 'round' : 'butt'}
        stroke={pathColor}
        stroke-dasharray={[pathStrokeDasharray, arcLength - pathStrokeDasharray]}
        stroke-dashoffset={(StartAngle[startFrom] / 360) * arcLength}
        stroke-width={pathWidth}
        style={{ transition: 'stroke-dasharray .3s ease' }}
        transform={`rotate(${rotate})`}
        transform-origin='center'
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
