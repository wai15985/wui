import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.scss';
import cn from 'clsx';
import ArrowUp from '../../assets/icn_chervon_up.svg';

type AccordionProps = {
  label: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  disable?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Primary UI component for user interaction
 */
export const Accordion = ({
  label,
  icon,
  className,
  children,
  disable,
  ...props
}: AccordionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>(0);
  const [expanded, setExpanded] = useState(false);

  const getHeight = () => {
    ref.current && setHeight(ref.current?.clientHeight);
  };

  useEffect(() => {
    getHeight();
  }, [children]);

  return (
    <div className={cn(styles.container, className)} aria-disabled={disable} {...props}>
      <button
        className={styles.button}
        onClick={() => {
          getHeight();
          setTimeout(() => setExpanded(!expanded), 100);
        }}
        aria-expanded={expanded}
      >
        {label}
        <div className={styles.icon}>{icon ?? <img src={ArrowUp} />}</div>
      </button>
      <div
        className={styles.detail}
        style={{ height: expanded ? height : 0 }}
        onTransitionEnd={() => expanded && setHeight('auto')}
      >
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
};
