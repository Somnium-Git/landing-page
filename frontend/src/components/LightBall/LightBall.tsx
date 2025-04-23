'use client'
import styles from './LightBall.module.css'
import { useRef, useLayoutEffect } from 'react';

type LightBallProps = {
  x: string;
  y: string;
  width: string;
  height: string;
  isActive?: boolean;
}

export default function LightBall({ x, y, width, height, isActive = false }: LightBallProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = window.innerWidth  / 2;
    const centerY = window.innerHeight / 2;

    // ponto do centro da viewport, relativo ao topo-esquerdo do elemento
    const originX = centerX - rect.left;
    const originY = centerY - rect.top;

    el.style.setProperty('--origin-x', `${originX}px`);
    el.style.setProperty('--origin-y', `${originY}px`);
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.lightBall} ${isActive ? styles.rotate : ''}`}
      style={{ left: x, bottom: y, width, height }}
    >
      <div className={styles.light1} />
      <div className={styles.light2} />
      <div className={styles.light3} />
      <div className={styles.light4} />
      <div className={styles.light5} />
    </div>
  );
}
