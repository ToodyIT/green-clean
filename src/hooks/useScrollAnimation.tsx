import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Варианты анимаций
export const animations = {
  fadeIn: (isVisible: boolean, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transition: `opacity 0.6s ease-out ${delay}s`,
  }),
  
  fadeInUp: (isVisible: boolean, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.6s ease-out ${delay}s`,
  }),
  
  fadeInDown: (isVisible: boolean, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
    transition: `all 0.6s ease-out ${delay}s`,
  }),
  
  fadeInLeft: (isVisible: boolean, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
    transition: `all 0.6s ease-out ${delay}s`,
  }),
  
  fadeInRight: (isVisible: boolean, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
    transition: `all 0.6s ease-out ${delay}s`,
  }),
  
  scaleIn: (isVisible: boolean, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    transition: `all 0.6s ease-out ${delay}s`,
  }),
  
  slideInUp: (isVisible: boolean, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
  }),
  
  rotateIn: (isVisible: boolean, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'rotate(0deg) scale(1)' : 'rotate(-10deg) scale(0.9)',
    transition: `all 0.6s ease-out ${delay}s`,
  }),
};
