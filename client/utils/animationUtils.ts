import { gsap } from "gsap";
import { RefObject } from "react";

/**
 * Animate menu transition from current menu to submenu
 * @param menuItemsRef - Reference to menu items
 * @param setCurrentMenu - State setter for current menu
 * @param newMenu - Target menu to animate to
 */
export const animateToSubmenu = (
  menuItemsRef: React.MutableRefObject<HTMLDivElement[]>, 
  setCurrentMenu: (menu: any) => void, 
  newMenu: any
): void => {
  // Animate current menu out
  gsap.to(menuItemsRef.current, {
    y: -30,
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.out",
    onComplete: () => {
      setCurrentMenu(newMenu);
      // Reset array for new menu items
      menuItemsRef.current = [];
    },
  });
};

/**
 * Animate back from submenu to previous menu
 * @param menuItemsRef - Reference to menu items
 * @param setCurrentMenu - State setter for current menu
 * @param targetMenu - Target menu to animate back to
 */
export const animateBack = (
  menuItemsRef: React.MutableRefObject<HTMLDivElement[]>, 
  setCurrentMenu: (menu: any) => void, 
  targetMenu: any
): void => {
  // Animate current menu out
  gsap.to(menuItemsRef.current, {
    y: 30,
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.out",
    onComplete: () => {
      setCurrentMenu(targetMenu);
      // Reset array for new menu items
      menuItemsRef.current = [];
    },
  });
};

/**
 * Apply hover animation to menu items
 * @param element - The DOM element to animate
 * @param isHovering - Whether the element is being hovered
 */
export const applyHoverAnimation = (
  element: HTMLElement,
  isHovering: boolean
): void => {
  if (isHovering) {
    gsap.to(element, {
      color: "#AB322C",
      duration: 0.3,
      ease: "power1.out"
    });
  } else {
    gsap.to(element, {
      color: "#F2F2F2",
      duration: 0.3,
      ease: "power1.in"
    });
  }
};

/**
 * Apply hover animation to back button
 * @param element - The DOM element to animate
 * @param isHovering - Whether the element is being hovered
 */
export const applyBackButtonHoverAnimation = (
  element: HTMLElement,
  isHovering: boolean
): void => {
  const arrow = element.querySelector("svg");
  
  if (isHovering) {
    gsap.to(element, {
      color: "#AB322C",
      duration: 0.3,
      ease: "power1.out"
    });
    
    if (arrow) {
      gsap.to(arrow, {
        x: -3,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  } else {
    gsap.to(element, {
      color: "#F2F2F2",
      duration: 0.3,
      ease: "power1.in"
    });
    
    if (arrow) {
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  }
};

/**
 * Apply hover animation to contact links
 * @param element - The DOM element to animate
 * @param isHovering - Whether the element is being hovered
 */
export const applyContactLinkHoverAnimation = (
  element: HTMLElement,
  isHovering: boolean
): void => {
  if (isHovering) {
    gsap.to(element, {
      color: "#AB322C",
      x: 5,
      duration: 0.3,
      ease: "power2.out"
    });
  } else {
    gsap.to(element, {
      color: "#F2F2F2",
      x: 0,
      duration: 0.3,
      ease: "power2.in"
    });
  }
};

/**
 * Reveal elements with staggered animation
 * @param elements - Array of elements to animate
 * @param direction - Direction of animation ('left', 'right', 'top', 'bottom')
 */
export const revealElements = (
  elements: HTMLElement[],
  direction: 'left' | 'right' | 'top' | 'bottom' = 'left'
): void => {
  let fromVars = {};
  
  switch(direction) {
    case 'left':
      fromVars = { x: -50, opacity: 0 };
      break;
    case 'right':
      fromVars = { x: 50, opacity: 0 };
      break;
    case 'top':
      fromVars = { y: -30, opacity: 0 };
      break;
    case 'bottom':
      fromVars = { y: 30, opacity: 0 };
      break;
  }
  
  gsap.fromTo(
    elements,
    fromVars,
    { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      duration: 0.6, 
      stagger: 0.1,
      ease: "power3.out"
    }
  );
};
