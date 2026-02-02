import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

type CursorState = 'default' | 'hover' | 'click';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(true);

  // Mouse position with spring animation for smooth following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable') ||
        target.classList.contains('inner') ||
        target.classList.contains('inner5') ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.clickable')
      ) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    // Detect clicks
    const handleMouseDown = () => setCursorState('click');
    const handleMouseUp = () => setCursorState('default');

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  // Cursor variants for different states
  const cursorVariants = {
    default: {
      scale: 1,
      mixBlendMode: 'difference' as const,
    },
    hover: {
      scale: 1.5,
      mixBlendMode: 'difference' as const,
    },
    click: {
      scale: 0.8,
      mixBlendMode: 'difference' as const,
    },
  };

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
        variants={cursorVariants}
        animate={cursorState}
        transition={{
          scale: { duration: 0.2, ease: 'easeOut' },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Cursor ring/outline */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={cursorState === 'hover' ? { scale: 1.8 } : { scale: 1 }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
        }}
      />
    </>
  );
}
