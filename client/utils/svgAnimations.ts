import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// Register DrawSVGPlugin globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(DrawSVGPlugin);
}

/**
 * Animates SVG paths with a drawing effect
 * @param svgElement - The SVG element containing paths to animate
 * @param options - Animation options
 */
export const animateSVGDrawing = (
  svgElement: SVGSVGElement | null, 
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    repeat?: number;
    yoyo?: boolean;
    isLogo?: boolean;
  } = {}
): gsap.core.Timeline => {
  if (!svgElement) return gsap.timeline();

  const {
    duration = 1.5,
    stagger = 0.2,
    delay = 0,
    ease = "power2.out",
    repeat = 0,
    yoyo = false,
    isLogo = false
  } = options;

  const paths = svgElement.querySelectorAll("path, circle, rect, line, polyline, polygon");
  
  // Set initial state - all paths at 0% drawn
  gsap.set(paths, { drawSVG: "0%" });
  
  // For logo elements that need to be filled
  const filledElements = svgElement.querySelectorAll("path[fill='#AB322C']");
  if (filledElements.length > 0) {
    gsap.set(filledElements, { fillOpacity: 0 });
  }

  // Create and return the animation timeline
  const tl = gsap.timeline({ delay });
  
  // Special animation for VYALUX logo
  if (isLogo) {
    // Animate the triangle outline first
    tl.to(paths[0], {
      drawSVG: "100%",
      duration: duration * 0.8,
      ease
    });
    
    // Then animate the red triangle with fill
    tl.to(paths[1], {
      drawSVG: "100%",
      duration: duration * 0.6,
      ease
    }, "-=0.3");
    
    tl.to(filledElements, {
      fillOpacity: 1,
      duration: duration * 0.4,
      ease
    }, "-=0.2");
    
    // Then animate the letters V-Y-A-L-U-X in sequence
    const letterPaths = Array.from(paths).slice(2);
    tl.to(letterPaths, {
      drawSVG: "100%",
      duration: duration * 0.7,
      stagger: stagger * 0.8,
      ease,
      repeat,
      yoyo
    }, "-=0.4");
  } else {
    // Standard animation for non-logo SVGs
    tl.to(paths, {
      drawSVG: "100%",
      duration,
      stagger,
      ease,
      repeat,
      yoyo
    });
  }

  return tl;
};

/**
 * Adds floating animation to SVG elements
 * @param element - The element to animate
 * @param intensity - How much to move the element (default: mild)
 */
export const addFloatingAnimation = (
  element: Element | null,
  intensity: 'mild' | 'medium' | 'strong' = 'mild'
): void => {
  if (!element) return;
  
  const intensityValues = {
    mild: { y: 5, rotation: 1, duration: 3 },
    medium: { y: 10, rotation: 2, duration: 4 },
    strong: { y: 15, rotation: 3, duration: 5 }
  };
  
  const { y, rotation, duration } = intensityValues[intensity];

  gsap.to(element, {
    y: y,
    rotation: rotation,
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
};

/**
 * Creates a revealing effect for menu items
 * @param elements - Array of elements to animate
 * @param direction - Direction from which elements appear
 */
export const revealElements = (
  elements: Element[] | null,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'left'
): gsap.core.Timeline => {
  if (!elements || elements.length === 0) return gsap.timeline();

  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    top: { x: 0, y: -50 },
    bottom: { x: 0, y: 50 }
  };
  
  const { x, y } = directionMap[direction];

  // Set initial state
  gsap.set(elements, { 
    x, 
    y, 
    opacity: 0,
    pointerEvents: 'none' 
  });

  // Create animation timeline
  const tl = gsap.timeline();
  
  tl.to(elements, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.08,
    ease: "power3.out",
    pointerEvents: 'auto'
  });

  return tl;
};

/**
 * Adjusts menu item layout to fit within container height
 * @param containerElement - The container holding menu items
 * @param itemSelector - CSS selector for menu items
 */
export const adjustMenuLayout = (
  containerElement: HTMLElement | null,
  itemSelector: string
): void => {
  if (!containerElement) return;
  
  const menuItems = containerElement.querySelectorAll(itemSelector);
  if (menuItems.length === 0) return;
  
  // Reset any previous styles
  menuItems.forEach(item => {
    (item as HTMLElement).style.fontSize = "";
    (item as HTMLElement).style.padding = "";
    (item as HTMLElement).style.margin = "";
  });

  // Get container height and total items
  const containerHeight = containerElement.clientHeight;
  const totalItems = menuItems.length;
  
  // Calculate total height of all items
  let totalItemHeight = 0;
  menuItems.forEach(item => {
    totalItemHeight += (item as HTMLElement).offsetHeight;
  });
  
  // If items overflow container height
  if (totalItemHeight > containerHeight) {
    // Calculate scaling factor
    const scaleFactor = containerHeight / totalItemHeight;
    const newFontSize = parseInt(window.getComputedStyle(menuItems[0]).fontSize) * scaleFactor * 0.95;
    
    // Apply new sizes
    menuItems.forEach(item => {
      (item as HTMLElement).style.fontSize = `${Math.max(12, newFontSize)}px`;
      (item as HTMLElement).style.padding = `${4 * scaleFactor}px 0`;
      (item as HTMLElement).style.margin = `${4 * scaleFactor}px 0`;
    });
  }
};
