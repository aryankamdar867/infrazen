"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices with hover capability
    const mediaFine = window.matchMedia("(pointer: fine) and (hover: hover)");
    const mediaReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaFine.matches || mediaReduced.matches) {
      return;
    }

    setIsEnabled(true);

    let currentX = -100;
    let currentY = -100;
    let targetX = -100;
    let targetY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop for outer trailing ring
    const loop = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      setTrailingPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Precision inner center dot in Primary Navy */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "6px" : "4px",
          height: isHovering ? "6px" : "4px",
          background: "#0F2A47",
        }}
      />

      {/* Outer trailing architectural crosshair ring in Steel Blue */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovering ? "36px" : "22px",
          height: isHovering ? "36px" : "22px",
          borderColor: isHovering ? "#2F6690" : "rgba(47, 102, 144, 0.35)",
          borderWidth: "1px",
          backgroundColor: isHovering ? "rgba(47, 102, 144, 0.08)" : "transparent",
        }}
      />
    </div>
  );
}
