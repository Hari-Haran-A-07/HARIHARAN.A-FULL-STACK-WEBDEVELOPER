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
    // Detect touch device or reduced motion
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || prefersReducedMotion) {
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
        "a, button, [data-cursor-hover], input, textarea, [role='button']"
      );

      interactiveEls.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovered(true);
          const customText = el.getAttribute("data-cursor-text");
          if (customText) {
            setHoverText(customText);
          } else if (el.tagName === "A" && el.getAttribute("href")?.includes("github.com")) {
            setHoverText("GITHUB");
          } else if (el.tagName === "BUTTON" && el.textContent?.toLowerCase().includes("specs")) {
            setHoverText("SPECS");
          } else if (el.tagName === "BUTTON" && el.textContent?.toLowerCase().includes("resume")) {
            setHoverText("RESUME");
          }
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
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-white mix-blend-difference"
        style={{
          width: isHovered ? 6 : 5,
          height: isHovered ? 6 : 5,
          x: mousePosition.x - (isHovered ? 3 : 2.5),
          y: mousePosition.y - (isHovered ? 3 : 2.5),
        }}
        transition={{ type: "spring", damping: 35, stiffness: 450, mass: 0.15 }}
      />

      {/* Outer magnetic follower with subtle purple laser ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full flex items-center justify-center font-mono text-[9px] uppercase font-bold tracking-wider select-none text-center"
        animate={{
          x: mousePosition.x - (isHovered ? (hoverText ? 42 : 26) : 16),
          y: mousePosition.y - (isHovered ? (hoverText ? 42 : 26) : 16),
          width: isHovered ? (hoverText ? 84 : 52) : 32,
          height: isHovered ? (hoverText ? 84 : 52) : 32,
          backgroundColor: isHovered
            ? hoverText
              ? "rgba(161, 0, 255, 0.95)"
              : "rgba(161, 0, 255, 0.18)"
            : "rgba(255, 255, 255, 0.03)",
          borderColor: isHovered ? "rgba(161, 0, 255, 0.85)" : "rgba(255, 255, 255, 0.2)",
          color: hoverText ? "#FFFFFF" : "transparent",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 280, mass: 0.35 }}
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
