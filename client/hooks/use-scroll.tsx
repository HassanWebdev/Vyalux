import { useEffect, RefObject } from 'react';

interface UseScrollOptions {
  speed?: number;
  preventDefaultWheel?: boolean;
  enableTouchScroll?: boolean;
}

/**
 * Hook that enables custom scrolling behavior on an element
 */
export const useScroll = (
  ref: RefObject<HTMLElement>,
  options: UseScrollOptions = {}
) => {
  const { 
    speed = 1.5, 
    preventDefaultWheel = true,
    enableTouchScroll = true
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Wheel event handler
    const handleWheel = (e: WheelEvent) => {
      if (preventDefaultWheel) {
        e.preventDefault();
      }
      
      // Calculate smooth scroll amount
      const delta = e.deltaY || e.deltaX;
      element.scrollTop += delta * speed;
    };

    // Touch events for mobile
    let startY: number;
    let startScrollTop: number;
    
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].pageY;
      startScrollTop = element.scrollTop;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (startY === undefined) return;
      
      const deltaY = startY - e.touches[0].pageY;
      element.scrollTop = startScrollTop + deltaY;
      
      // Prevent default only if scrolling within bounds
      const isAtTop = element.scrollTop <= 0;
      const isAtBottom = element.scrollTop + element.clientHeight >= element.scrollHeight;
      
      // Only prevent default if we're not at the boundaries,
      // or if we are at a boundary but trying to scroll further within the element
      if (!(isAtTop && deltaY < 0) && !(isAtBottom && deltaY > 0)) {
        e.preventDefault();
      }
    };

    // Add event listeners
    element.addEventListener('wheel', handleWheel, { passive: false });
    
    if (enableTouchScroll) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    
    // Clean up
    return () => {
      element.removeEventListener('wheel', handleWheel);
      
      if (enableTouchScroll) {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [ref, speed, preventDefaultWheel, enableTouchScroll]);
};

export default useScroll;
