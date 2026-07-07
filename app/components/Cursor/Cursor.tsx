"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 1024
    ) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Hover Effects
    const growCursor = () => {
      ring.style.width = "64px";
      ring.style.height = "64px";
      ring.style.borderColor = "#ec4899";
      ring.style.boxShadow = "0 0 35px rgba(236,72,153,.45)";
    };

    const shrinkCursor = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "rgba(236,72,153,.6)";
      ring.style.boxShadow = "0 0 25px rgba(236,72,153,.30)";
    };

    window.addEventListener("mousemove", handleMouseMove);

    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea, select, img, [data-cursor]",
    );

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", growCursor);
      element.addEventListener("mouseleave", shrinkCursor);
    });

    let animationFrame: number;

    const animate = () => {
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px,0)`;

      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.transform = `translate3d(${ringX - ring.offsetWidth / 2}px,${
        ringY - ring.offsetHeight / 2
      }px,0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", handleMouseMove);

      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", growCursor);
        element.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);
  return (
    <>
      {/* Inner Dot */}

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-9999 hidden h-2 w-2 rounded-full bg-pink-500 lg:block"
      />

      {/* Outer Ring */}

      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-9998 hidden h-10 w-10 rounded-full border border-pink-400/60 transition-[width,height,border-color,box-shadow] duration-300 ease-out lg:block"
      />
    </>
  );
}
