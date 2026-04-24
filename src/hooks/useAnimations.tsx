import { useState, useEffect, useRef, ReactNode, RefObject } from 'react';

// Hook for scroll-triggered animations
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

// Hook for staggered children animations
export function useStaggerReveal(
  itemCount: number,
  staggerDelay = 100,
  threshold = 0.1
): [RefObject<HTMLDivElement | null>, boolean[]] {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * staggerDelay);
          }
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [itemCount, staggerDelay, threshold]);

  return [containerRef, visibleItems];
}

// Scroll to top on route change
export function useScrollToTop(): void {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

// Animated Section wrapper
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollReveal();

  const animationClass = isVisible ? `animate-${animation}` : '';

  return (
    <div
      ref={ref}
      className={`${className} ${animationClass}`}
      style={{
        opacity: isVisible ? undefined : 0,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
