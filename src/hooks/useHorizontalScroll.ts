import { useRef, useState, useCallback } from "react";

interface UseHorizontalScrollReturn {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  isDragging: boolean;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollToNext: () => void;
  scrollToPrev: () => void;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseLeave: () => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  updateScrollState: () => void;
}

export const useHorizontalScroll = (
  itemWidth: number = 320,
  gap: number = 24
): UseHorizontalScrollReturn => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [, setStartTouchX] = useState(0);

  // Update scroll button states
  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  // Scroll to next item
  const scrollToNext = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = itemWidth + gap;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateScrollState, 300);
  }, [itemWidth, gap, updateScrollState]);

  // Scroll to previous item
  const scrollToPrev = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = itemWidth + gap;
    scrollContainerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateScrollState, 300);
  }, [itemWidth, gap, updateScrollState]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.scrollBehavior = "auto";
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth";
    }
    updateScrollState();
  }, [updateScrollState]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollContainerRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.scrollBehavior = "smooth";
      }
      updateScrollState();
    }
  }, [isDragging, updateScrollState]);

  // Touch handlers for mobile - simplified for better native scrolling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setStartTouchX(e.touches[0].clientX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Small delay to ensure scroll has finished
    setTimeout(() => {
      updateScrollState();
    }, 100);
  }, [updateScrollState]);

  return {
    scrollContainerRef,
    isDragging,
    canScrollLeft,
    canScrollRight,
    scrollToNext,
    scrollToPrev,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
    updateScrollState,
  };
};