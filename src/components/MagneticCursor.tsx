import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MagneticCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('.interactive') ||
        target.closest('.group')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', mouseOver);
    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', mouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Premium Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-neon-green pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          opacity: 1,
          borderColor: isHovered ? '#00f3ff' : '#39ff14',
          boxShadow: isHovered ? '0 0 35px #00f3ff' : '0 0 15px #39ff14',
          borderWidth: isHovered ? '1px' : '1px'
        }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      />
      
      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: 1
        }}
      />
    </>
  );
};

export default MagneticCursor;
