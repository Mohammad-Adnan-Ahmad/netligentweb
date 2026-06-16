import { useEffect, useRef, useState } from "react";
import "../../CSS/CustomCurosr.css";

// ─── Constants ───────────────────────────────────────────
const CURSOR_LERP         = 0.12; // Circle lag speed  (lower = more lag)
const CURSOR_LERP_HOVER   = 0.084; // Slightly slower on hover
const DOT_LERP            = 0.85; // Dot snaps almost instantly

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// ─── CustomCursor ─────────────────────────────────────────
export default function CustomCursor() {
  const circleRef = useRef(null);
  const dotRef    = useRef(null);
  const rafRef    = useRef(null);

  const mouse     = useRef({ x: window.innerWidth / 2,  y: window.innerHeight / 2 });
  const circlePos = useRef({ x: window.innerWidth / 2,  y: window.innerHeight / 2 });
  const dotPos    = useRef({ x: window.innerWidth / 2,  y: window.innerHeight / 2 });

  const [state, setState] = useState("hidden"); // "hidden" | "default" | "hovering" | "clicking"

  useEffect(() => {
    let isHovering = false;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setState((prev) => (prev === "hidden" ? "default" : prev));
    };

    const onMouseDown = () => setState("clicking");
    const onMouseUp   = () => setState(isHovering ? "hovering" : "default");

    const isInteractive = (el) =>
      el.tagName === "A" ||
      el.tagName === "BUTTON" ||
      el.closest?.("a") ||
      el.closest?.("button") ||
      el.dataset?.cursor === "hover";

    const onMouseOver = (e) => {
      if (isInteractive(e.target)) {
        isHovering = true;
        setState("hovering");
      }
    };

    const onMouseOut = (e) => {
      if (isInteractive(e.target)) {
        isHovering = false;
        setState("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup",   onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout",  onMouseOut);

    // rAF animation loop
    const animate = () => {
      const lerpC = isHovering ? CURSOR_LERP_HOVER : CURSOR_LERP;

      circlePos.current.x = lerp(circlePos.current.x, mouse.current.x, lerpC);
      circlePos.current.y = lerp(circlePos.current.y, mouse.current.y, lerpC);
      dotPos.current.x    = lerp(dotPos.current.x,    mouse.current.x, DOT_LERP);
      dotPos.current.y    = lerp(dotPos.current.y,    mouse.current.y, DOT_LERP);

      if (circleRef.current) {
        circleRef.current.style.transform =
          `translate(${circlePos.current.x}px, ${circlePos.current.y}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout",  onMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Map state → CSS modifier class
  const stateClass = state === "hidden" ? "is-hidden"
                   : state === "hovering" ? "is-hovering"
                   : state === "clicking" ? "is-clicking"
                   : "is-default";

  return (
    <>
      {/* Outer trailing circle */}
      <div ref={circleRef} className={`cursor-circle ${stateClass}`} />

      {/* Inner dot — exact mouse position */}
      <div ref={dotRef} className={`cursor-dot ${stateClass}`} />
    </>
  );
}