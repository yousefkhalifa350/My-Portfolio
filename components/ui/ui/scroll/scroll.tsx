"use client";
import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right";

const revealClassMap: Record<Direction, string> = {
  up: "reveal-wrap-up",
  left: "reveal-wrap-left",
  right: "reveal-wrap-right",
};

export function ScrollReveal({
  children,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px 0px -50px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : "false"}
      className={`reveal-wrap ${revealClassMap[direction]} ${className}`}
    >
      {children}
    </div>
  );
}