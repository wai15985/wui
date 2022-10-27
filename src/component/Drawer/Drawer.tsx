import React, { HTMLAttributes, useEffect, useLayoutEffect, useState } from 'react';
import styles from './Drawer.module.scss';
import cn from 'clsx';
import { createPortal } from 'react-dom';

type DrawerProps = {
  open: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
  className: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Primary UI component for user interaction
 */
export const Drawer = ({ open, position, className, children, ...props }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [backdrop, setBackdrop] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    isOpen && setBackdrop(true);
    !isOpen && setTimeout(() => setBackdrop(false), 300);
  }, [isOpen]);

  useLayoutEffect(() => {
    if (!document.getElementById('wui-drawer')) {
      const div = document.createElement('div');
      div.id = 'wui-drawer';
      document.body.appendChild(div);
    }
  }, []);

  return createPortal(
    <>
      {backdrop && (
        <div
          className={cn(styles.backdrop, { [styles.closing]: !isOpen })}
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={cn(styles.drawer, styles[`${position}`], className, { [styles.open]: isOpen })}
        {...props}
      >
        {children}
      </div>
    </>,
    document.getElementById('wui-drawer') || document.body
  );
};
