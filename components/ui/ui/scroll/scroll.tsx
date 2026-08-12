"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "left" | "right";
const directionMap = {
  up:    { y: 60, x: 0 },
  left:  { x: 60, y: 0 },
  right: { x: -60, y: 0 },
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
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { x, y } = directionMap[direction];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      data-visible={inView ? "true" : "false"}
      className={className}
    >
      {children}
    </motion.div>
  );
}