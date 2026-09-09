"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleHoverElements = () => {
      const interactiveEls = document.querySelectorAll(
        "a, button, [data-cursor-hover], input, textarea"
      );

      interactiveEls.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovered(true);
          const customText = el.getAttribute("data-cursor-text");
          if (customText) setHoverText(customText);
        });

        el.addEventListener("mouseleave", () => {
          setIsHovered(false);
          setHoverText("");
        });
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    handleHoverElements();

    // Re-check for dynamically rendered interactive elements
    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          x: mousePosition.x - (isHovered ? 4 : 3),
          y: mousePosition.y - (isHovered ? 4 : 3),
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
      />

      {/* Smooth outer follower with purple laser accent */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center font-mono text-[10px] uppercase font-bold tracking-wider"
        animate={{
          x: mousePosition.x - (isHovered ? (hoverText ? 44 : 28) : 18),
          y: mousePosition.y - (isHovered ? (hoverText ? 44 : 28) : 18),
          width: isHovered ? (hoverText ? 88 : 56) : 36,
          height: isHovered ? (hoverText ? 88 : 56) : 36,
          backgroundColor: isHovered
            ? hoverText
              ? "rgba(161, 0, 255, 0.95)"
              : "rgba(161, 0, 255, 0.2)"
            : "rgba(255, 255, 255, 0.05)",
          borderColor: isHovered ? "rgba(161, 0, 255, 0.8)" : "rgba(255, 255, 255, 0.25)",
          color: hoverText ? "#FFFFFF" : "transparent",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.4 }}
        style={{
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        {hoverText}
      </motion.div>
    </>
  );
}
