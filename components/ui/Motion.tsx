"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE_ARCHITECTURAL = [0.22, 1, 0.36, 1] as const;

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * FadeUp — Quiet vertical reveal for major editorial headings & narrative text
 */
export const FadeUp: React.FC<MotionProps & { yOffset?: number }> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  yOffset = 16,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration,
        ease: EASE_ARCHITECTURAL,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * ImageReveal — Photographic entrance with barely perceptible scale settlement (1.02 -> 1)
 */
export const ImageReveal: React.FC<
  MotionProps & { scaleStart?: number; xOffset?: number }
> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  scaleStart = 1.02,
  xOffset = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleStart, x: xOffset }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration,
        ease: EASE_ARCHITECTURAL,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * FadeIn — Simple quiet fade for secondary details & captions
 */
export const FadeIn: React.FC<MotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration,
        ease: EASE_ARCHITECTURAL,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
