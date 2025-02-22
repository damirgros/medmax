"use client";

import { useState, useEffect, Ref, useRef } from "react";

export function useInView(
  options?: IntersectionObserverInit
): [Ref<HTMLDivElement>, boolean] {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        options
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [options]);

  return [ref, inView];
}
