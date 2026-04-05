import { useState, useEffect, useCallback } from 'react';

interface Vector {
  x: number;
  y: number;
}

export const useGravityEngine = (strength = 0.5, range = 300) => {
  const [mousePos, setMousePos] = useState<Vector>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateGravity = useCallback((elementRef: React.RefObject<HTMLElement>) => {
    if (!elementRef.current) return { x: 0, y: 0 };

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < range) {
      const force = (1 - distance / range) * strength;
      return {
        x: dx * force,
        y: dy * force
      };
    }

    return { x: 0, y: 0 };
  }, [mousePos, strength, range]);

  return { calculateGravity, mousePos };
};
