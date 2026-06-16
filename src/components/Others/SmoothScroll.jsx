import { useEffect, useRef, useState } from "react";
import "../../CSS/SmoothScroll.css";

// ─────────────────────────────────────────
//  SmoothScroll
//
//  Drop this once at your app root, alongside <CustomCursor />.
//  It adds:
//    1. A glowing scroll-progress bar at the top of the page
//    2. JS-powered smooth scroll for anchor links  <a href="#section">
//    3. Smooth wheel scrolling via lerp (optional — enable if needed)
// ─────────────────────────────────────────

const SCROLL_LERP = 0.09; // Lower = smoother but slower (0.06–0.14 is ideal)

export default function SmoothScroll({ children, enableLerpScroll = false }) {
  const progressRef  = useRef(null);
  const wrapperRef   = useRef(null);
  const currentY     = useRef(0);
  const targetY      = useRef(0);
  const rafRef       = useRef(null);
  const [complete, setComplete] = useState(false);

  // ── 1. Scroll progress bar ──────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const progress     = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      setComplete(progress >= 99.5);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialise on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── 2. Smooth anchor-link scrolling ────────────────────
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;

      const id     = anchor.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - 80; // 80px offset for fixed headers
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // ── 3. Optional lerp scroll (JS-driven ultra-smooth) ───
  // Enable via enableLerpScroll={true} prop.
  // Note: This overrides native scroll so use only when you
  // want full control (e.g. portfolios, landing pages).
  useEffect(() => {
    if (!enableLerpScroll) return;

    const onWheel = (e) => {
      e.preventDefault();
      targetY.current = Math.max(
        0,
        Math.min(
          targetY.current + e.deltaY,
          document.documentElement.scrollHeight - window.innerHeight
        )
      );
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentY.current = lerp(currentY.current, targetY.current, SCROLL_LERP);

      // Stop animating when close enough (avoids infinite tiny updates)
      if (Math.abs(currentY.current - targetY.current) > 0.5) {
        window.scrollTo(0, currentY.current);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Sync targetY on native scroll (keyboard, scrollbar drag, etc.)
    const onScroll = () => {
      targetY.current = window.scrollY;
    };

    window.addEventListener("wheel",  onWheel,  { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true  });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("wheel",  onWheel);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [enableLerpScroll]);

  return (
    <>
      {/* Glowing progress bar — fixed at top of viewport */}
      <div
        ref={progressRef}
        className={`scroll-progress-bar ${complete ? "is-complete" : ""}`}
        role="progressbar"
        aria-hidden="true"
      />

      {/* Page content */}
      <div ref={wrapperRef}>
        {children}
      </div>
    </>
  );
}