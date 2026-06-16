import { useState, useEffect, useRef } from "react";
// import "../../CSS/HeroSection.css";
import {
  HackingIcon, AwsIcon, DevOpsIcon, WebDevIcon,CCNAIcon,AILogo,
  LockIcon, DataIcon, PowerBIIcon, DataScience, BrainIcon, 
} from "../Icons/Icons";
import GridBackground from "./GridBackground";
import BottomStrip    from "./BottomStrip";

// ─────────────────────────────────────────────────────────────────────────────
const COURSES = [
  
  { name: "Cloud Computing", Icon: AwsIcon,     color: "#FF9900" },
  { name: "AWS DevOps",          Icon: DevOpsIcon,  color: "#60a5fa" },
  { name: "Ethical Hacking",          Icon: HackingIcon,  color: "#FFD43B" },
  { name: "Cyber Security",  Icon: LockIcon,    color: "#34d399" },
  { name: "CCNA / CCNP",    Icon: CCNAIcon,    color: "#60a5fa" },
  { name: "Data Science",        Icon: DataScience, color: "#F2C811" },
  { name: "Data Analytics",    Icon: DataIcon,   color: "#a78bfa" },
  { name: "Artificial Intelligence",            Icon: AILogo,    color: "#f97316" },
  { name: "Machine Learning",Icon: BrainIcon,   color: "#a78bfa" },
   { name: "Web Development", Icon: WebDevIcon,  color: "#60a5fa" },
];

// ─────────────────────────────────────────────────────────────────────────────
// TYPING HEADING
// ─────────────────────────────────────────────────────────────────────────────
const LINE1     = "AI-Powered Learning";
const LINE2     = "Job-Ready Skills";
const FULL_TEXT = LINE1 + "\n" + LINE2;

function TypingHeading({ fontSize, isMobile }) {
  const [displayed,   setDisplayed]   = useState("");
  const [showCursor,  setShowCursor]  = useState(true);
  const idxRef   = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    idxRef.current = 0;
    setDisplayed("");

    function typeNext() {
      idxRef.current += 1;
      setDisplayed(FULL_TEXT.slice(0, idxRef.current));
      if (idxRef.current < FULL_TEXT.length) {
        const ch    = FULL_TEXT[idxRef.current - 1];
        const delay = ch === " " ? 55 : ch === "\n" ? 260 : 42 + Math.random() * 28;
        timerRef.current = setTimeout(typeNext, delay);
      } else {
        timerRef.current = setTimeout(() => eraseNext(), 2800);
      }
    }

    function eraseNext() {
      idxRef.current -= 1;
      setDisplayed(FULL_TEXT.slice(0, idxRef.current));
      if (idxRef.current > 0) {
        timerRef.current = setTimeout(eraseNext, 22);
      } else {
        timerRef.current = setTimeout(() => { idxRef.current = 0; typeNext(); }, 500);
      }
    }

    timerRef.current = setTimeout(typeNext, 600);
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  const newlineIdx    = displayed.indexOf("\n");
  const line1         = newlineIdx === -1 ? displayed : displayed.slice(0, newlineIdx);
  const line2         = newlineIdx === -1 ? ""        : displayed.slice(newlineIdx + 1);
  const cursorInLine2 = newlineIdx !== -1;

  const cursorStyle = { opacity: showCursor ? 1 : 0 };

  return (
    <div className={`typing-wrapper${isMobile ? " mobile" : ""}`}>
      {/* Line 1 — white */}
      <div
        className="typing-line1"
        style={{
          fontSize,
          minHeight: `${fontSize * 1.13 * 2}px`,
        }}
      >
        {line1}
        {!cursorInLine2 && (
          <span
            className={`typing-cursor line1${fontSize < 30 ? " small" : ""}`}
            style={cursorStyle}
          />
        )}
      </div>

      {/* Line 2 — gradient */}
      <div
        className="typing-line2"
        style={{ fontSize, minHeight: `${fontSize * 1.13}px` }}
      >
        {line2}
        {cursorInLine2 && (
          <span className="typing-cursor line2-wrap">
            <span className="typing-cursor line2" style={cursorStyle} />
          </span>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// IT FLOATING PARTICLES
// ─────────────────────────────────────────────────────────────────────────────
const IT_PARTICLES = [
  { type:0, x:7,  y:10, color:"#818cf8", speed:0.016, phase:0.0, size:1.0  },
  { type:1, x:80, y:15, color:"#60a5fa", speed:0.022, phase:1.4, size:0.85 },
  { type:2, x:55, y:6,  color:"#a78bfa", speed:0.013, phase:2.7, size:1.1  },
  { type:3, x:18, y:68, color:"#34d399", speed:0.028, phase:0.5, size:0.9  },
  { type:4, x:88, y:40, color:"#60a5fa", speed:0.019, phase:3.3, size:1.0  },
  { type:5, x:38, y:80, color:"#818cf8", speed:0.032, phase:1.1, size:0.8  },
  { type:6, x:70, y:72, color:"#c084fc", speed:0.024, phase:4.0, size:0.95 },
  { type:7, x:5,  y:40, color:"#38bdf8", speed:0.017, phase:2.2, size:1.05 },
  { type:8, x:62, y:22, color:"#f472b6", speed:0.026, phase:0.9, size:0.85 },
  { type:9, x:25, y:30, color:"#fb923c", speed:0.021, phase:3.8, size:0.9  },
  { type:0, x:90, y:82, color:"#818cf8", speed:0.018, phase:5.2, size:0.75 },
  { type:3, x:47, y:50, color:"#34d399", speed:0.014, phase:1.7, size:0.7  },
  { type:2, x:12, y:85, color:"#a78bfa", speed:0.030, phase:2.9, size:0.8  },
  { type:5, x:75, y:55, color:"#60a5fa", speed:0.023, phase:0.3, size:0.9  },
  { type:8, x:32, y:14, color:"#f472b6", speed:0.020, phase:4.5, size:1.0  },
];

function drawITIcon(ctx, type, px, py, s, color, t) {
  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.strokeStyle = color;
  ctx.fillStyle   = color;
  ctx.shadowColor = color;
  ctx.shadowBlur  = 10;
  ctx.lineWidth   = 1.2 * s;
  ctx.lineCap     = "round";
  ctx.lineJoin    = "round";

  if (type === 0) {
    ctx.font = `bold ${Math.round(16 * s)}px monospace`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.globalAlpha  = 0.5;
    ctx.fillText("< />", px, py);

  } else if (type === 1) {
    ctx.font = `${Math.round(11 * s)}px monospace`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.globalAlpha  = 0.45;
    const bits = ["01","10","1","0","11","00"];
    const idx  = Math.floor(t * 0.5) % bits.length;
    ctx.fillText(bits[idx],               px, py - 8 * s);
    ctx.fillText(bits[(idx+1)%bits.length],px, py + 1 * s);
    ctx.fillText(bits[(idx+2)%bits.length],px, py + 10 * s);

  } else if (type === 2) {
    [12, 8, 4].forEach((r, i) => {
      const rs = r * s;
      ctx.globalAlpha = 0.22 + i * 0.15;
      ctx.beginPath();
      ctx.arc(px, py + rs * 0.6, rs, Math.PI * 1.25, Math.PI * 1.75);
      ctx.stroke();
    });
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(px, py + 12 * s * 0.6 + 1.5 * s, 1.8 * s, 0, Math.PI * 2);
    ctx.fill();

  } else if (type === 3) {
    const hw = 10 * s, pin = 4 * s, gap = 3.5 * s;
    ctx.globalAlpha = 0.45;
    ctx.strokeRect(px - hw, py - hw, hw * 2, hw * 2);
    ctx.globalAlpha = 0.25;
    ctx.strokeRect(px - hw * 0.55, py - hw * 0.55, hw * 1.1, hw * 1.1);
    ctx.globalAlpha = 0.4;
    [-gap, 0, gap].forEach(o => {
      ctx.beginPath(); ctx.moveTo(px + o, py - hw); ctx.lineTo(px + o, py - hw - pin); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px + o, py + hw); ctx.lineTo(px + o, py + hw + pin); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px - hw, py + o); ctx.lineTo(px - hw - pin, py + o); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px + hw, py + o); ctx.lineTo(px + hw + pin, py + o); ctx.stroke();
    });

  } else if (type === 4) {
    ctx.font = `bold ${Math.round(14 * s)}px monospace`;
    ctx.textAlign    = "left";
    ctx.textBaseline = "middle";
    ctx.globalAlpha  = 0.5;
    ctx.strokeRect(px - 16 * s, py - 10 * s, 32 * s, 20 * s);
    ctx.globalAlpha = 0.6;
    ctx.fillText(">_", px - 10 * s, py);

  } else if (type === 5) {
    ctx.globalAlpha = 0.4;
    const cr = 7 * s;
    ctx.beginPath();
    ctx.arc(px - cr * 0.6, py + cr * 0.1, cr * 0.75, 0, Math.PI * 2);
    ctx.arc(px + cr * 0.5, py + cr * 0.1, cr * 0.6,  0, Math.PI * 2);
    ctx.arc(px,            py - cr * 0.3, cr,          0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.55;
    ctx.stroke();

  } else if (type === 6) {
    const lw = 10 * s, lh = 9 * s, shw = 6 * s;
    ctx.globalAlpha = 0.45;
    ctx.strokeRect(px - lw / 2, py, lw, lh);
    ctx.beginPath();
    ctx.arc(px, py, shw / 2, Math.PI, 0);
    ctx.stroke();
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.arc(px, py + lh * 0.45, 1.8 * s, 0, Math.PI * 2);
    ctx.fill();

  } else if (type === 7) {
    ctx.globalAlpha = 0.4;
    const dw = 12 * s, dh = 5 * s;
    [0, 7 * s, 14 * s].forEach(yo => {
      ctx.beginPath();
      ctx.ellipse(px, py - 10 * s + yo, dw / 2, dh / 2, 0, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.beginPath();
    ctx.moveTo(px - dw / 2, py - 10 * s); ctx.lineTo(px - dw / 2, py + 4 * s);
    ctx.moveTo(px + dw / 2, py - 10 * s); ctx.lineTo(px + dw / 2, py + 4 * s);
    ctx.stroke();

  } else if (type === 8) {
    ctx.globalAlpha = 0.5;
    const nr = 3.5 * s;
    [[0, -11*s], [-7*s, 5*s], [7*s, 5*s]].forEach(([ox, oy]) => {
      ctx.beginPath();
      ctx.arc(px + ox, py + oy, nr, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.beginPath();
    ctx.moveTo(px, py - 11*s + nr); ctx.lineTo(px, py - 2*s);
    ctx.moveTo(px, py - 2*s);       ctx.lineTo(px - 7*s, py + 5*s - nr);
    ctx.moveTo(px, py - 2*s);       ctx.lineTo(px + 7*s, py + 5*s - nr);
    ctx.stroke();

  } else if (type === 9) {
    ctx.globalAlpha = 0.45;
    const br = 7 * s;
    ctx.beginPath();
    ctx.ellipse(px, py, br * 0.65, br, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(px, py - br - 3 * s, 3.5 * s, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px - 2*s, py - br - 5*s); ctx.lineTo(px - 6*s, py - br - 9*s);
    ctx.moveTo(px + 2*s, py - br - 5*s); ctx.lineTo(px + 6*s, py - br - 9*s);
    ctx.stroke();
    [-2*s, 2*s, 6*s].forEach(yo => {
      ctx.beginPath();
      ctx.moveTo(px - br*0.65, py + yo); ctx.lineTo(px - br*1.3,  py + yo - 2*s);
      ctx.moveTo(px + br*0.65, py + yo); ctx.lineTo(px + br*1.3,  py + yo - 2*s);
      ctx.stroke();
    });
  }

  ctx.restore();
}

function FloatingCircles({ containerRef }) {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef    = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");

    const onMouseMove = e => {
      const rect = container.getBoundingClientRect();
      targetRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top)  / rect.height,
      };
    };
    const onTouchMove = e => {
      const rect  = container.getBoundingClientRect();
      const touch = e.touches[0];
      targetRef.current = {
        x: (touch.clientX - rect.left) / rect.width,
        y: (touch.clientY - rect.top)  / rect.height,
      };
    };

    window.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchmove", onTouchMove, { passive: true });

    let t = 0;
    function animate() {
      canvas.width  = container.offsetWidth;
      canvas.height = container.offsetHeight;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.055;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.055;
      t += 0.008;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const positions = IT_PARTICLES.map((def, i) => {
        const baseX  = def.x / 100;
        const baseY  = def.y / 100;
        const floatX = Math.sin(t * def.speed * 80 + def.phase) * 0.025;
        const floatY = Math.cos(t * def.speed * 60 + def.phase) * 0.018;
        const depth  = 0.045 + (i % 5) * 0.022;
        return {
          px: (baseX + floatX + (mx - 0.5) * depth) * W,
          py: (baseY + floatY + (my - 0.5) * depth) * H,
          color: def.color,
        };
      });

      // Constellation lines
      const MAX_DIST = 180;
      for (let a = 0; a < positions.length - 1; a++) {
        for (let b = a + 1; b < positions.length; b++) {
          const dx   = positions[a].px - positions[b].px;
          const dy   = positions[a].py - positions[b].py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / MAX_DIST) * 0.15;
            ctx.strokeStyle = positions[a].color;
            ctx.lineWidth   = 0.7;
            ctx.beginPath();
            ctx.moveTo(positions[a].px, positions[a].py);
            ctx.lineTo(positions[b].px, positions[b].py);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // IT icons
      IT_PARTICLES.forEach((def, i) => {
        const { px, py } = positions[i];
        drawITIcon(ctx, def.type, px, py, def.size, def.color, t);
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
    };
  }, [containerRef]);

  return <canvas ref={canvasRef} className="floating-canvas" />;
}

// ─────────────────────────────────────────────────────────────────────────────
// BREAKPOINT HOOK
// ─────────────────────────────────────────────────────────────────────────────
function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [paused,     setPaused]     = useState(false);
  const rafRef   = useRef(null);
  const lastRef  = useRef(null);
  const pauseRef = useRef(false);
  const heroRef  = useRef(null);
  const w        = useWidth();

  const isMobile  = w < 640;
  const isTablet  = w >= 640 && w < 1024;
  const isDesktop = w >= 1024;

  useEffect(() => { pauseRef.current = paused; }, [paused]);

  useEffect(() => {
    const step = ts => {
      if (lastRef.current !== null && !pauseRef.current)
        setOrbitAngle(a => (a + (ts - lastRef.current) * 0.016) % 360);
      lastRef.current = ts;
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Responsive sizing (numeric values still live in JS — only visual layout is CSS)
  const ORBIT_R     = isDesktop ? 200 : isTablet ? 138 : 130;
  const NODE_SIZE   = isDesktop ? 60  : isTablet ? 50  : 45;
  const CENTER_CIRC = isDesktop ? 188 : isTablet ? 148 : 120;
  const AI_FONT     = isDesktop ? 56  : isTablet ? 44  : 36;
  const HEADING     = isDesktop ? 50  : isTablet ? 36  : 26;
  const containerSz = (ORBIT_R + NODE_SIZE / 2 + 20) * 2;
  const COUNT       = COURSES.length;

  const stacked = !isDesktop;

  return (
    <div className="hero-root">
      {/* <GridBackground /> */}

      {/* ══ HERO ══ */}
      <div
        ref={heroRef}
        className={`hero-section${stacked ? " stacked" : ""}${stacked && isMobile ? " mobile" : ""}`}
      >
        <FloatingCircles containerRef={heroRef} />

        {/* ── LEFT copy ── */}
        <div className={`hero-left${stacked ? " centered" : ""}`}>

          {/* Badge */}
          <div className={`hero-badge${isMobile ? " mobile" : ""}`}>
            👥100% Placement Support
          </div>

          {/* Typing heading */}
          <TypingHeading fontSize={HEADING} isMobile={isMobile} />

          {/* Body */}
          <p className={`hero-body${isMobile ? " mobile" : isTablet ? " tablet" : ""}`}>
            All courses are powered with latest Gen AI tools & designed as per industry demand to make you job-ready for the future.
          </p>

          {/* CTA Buttons */}
          <div className={`hero-cta-row${stacked ? " centered" : ""}${isMobile ? " mobile" : ""}`}>
            {[
              { l: "Explore Courses", primary: true  },
              { l: "Watch Demo",      primary: false },
            ].map(b => (
              <button
                key={b.l}
                className={`cta-btn ${b.primary ? "primary" : "secondary"}${isMobile ? " mobile" : ""}`}
              >
                {b.l}
                {/* <span className={`cta-btn-icon ${b.primary ? "primary" : "secondary"}`}>▶</span> */}
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT orbital ── */}
        <div className="hero-right">

          {/* Orbital stage */}
          <div
            className="orbit-stage"
            style={{ width: containerSz, height: containerSz }}
          >
            {/* Outer ring */}
            <div
              className="orbit-ring-outer"
              style={{ width: ORBIT_R * 2, height: ORBIT_R * 2 }}
            />

            {/* Inner ring */}
            <div
              className="orbit-ring-inner"
              style={{ width: ORBIT_R * 2 * 0.63, height: ORBIT_R * 2 * 0.63 }}
            />

            {/* Center AI bubble */}
            <div
              className="orbit-center"
              style={{ width: CENTER_CIRC, height: CENTER_CIRC }}
            >
              {/* <div className="orbit-center-ai" style={{ fontSize: AI_FONT }}>AI</div> */}
              <img src="AI_logo2.png" alt="AI_Logo" className="AI_Logo"/>
              <div className={`orbit-center-label${isMobile ? " mobile" : ""}`}>
                All courses
              </div>
              <div className={`orbit-center-sublabel${isMobile ? " mobile" : ""}`}>
                with{" "}
                <span className="orbit-center-sublabel-gradient">Gen AI</span>
              </div>
            </div>

            {/* Course nodes */}
            {COURSES.map(({ name, Icon, color }, i) => {
              const rad = ((360 / COUNT * i + orbitAngle) * Math.PI) / 180;
              const cx  = Math.cos(rad - Math.PI / 2) * ORBIT_R;
              const cy  = Math.sin(rad - Math.PI / 2) * ORBIT_R;
              return (
                <div
                  key={name}
                  className="orbit-node"
                  style={{
                    width: NODE_SIZE,
                    transform: `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px))`,
                  }}
                >
                  <div
                    className="orbit-node-circle"
                    style={{
                      width: NODE_SIZE,
                      height: NODE_SIZE,
                      border: `2px solid ${color}55`,
                      boxShadow: `0 0 14px ${color}55, inset 0 0 8px ${color}1a`,
                    }}
                    onMouseEnter={e => {
                      setPaused(true);
                      e.currentTarget.style.boxShadow = `0 0 32px ${color}bb, inset 0 0 16px ${color}33`;
                      e.currentTarget.style.transform = "scale(1.15)";
                    }}
                    onMouseLeave={e => {
                      setPaused(false);
                      e.currentTarget.style.boxShadow = `0 0 14px ${color}55, inset 0 0 8px ${color}1a`;
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onTouchStart={() => setPaused(true)}
                    onTouchEnd={() => setPaused(false)}
                  >
                    <Icon />
                  </div>
                  <span className={`orbit-node-label${isMobile ? " mobile" : ""}`}>
                    {name}
                  </span>
                </div>
              );
            })}

            {/* Accent dots */}
            {[30, 120, 210, 300].map((deg, i) => {
              const r  = (deg * Math.PI) / 180;
              const dx = Math.cos(r - Math.PI / 2) * ORBIT_R;
              const dy = Math.sin(r - Math.PI / 2) * ORBIT_R;
              return (
                <div
                  key={i}
                  className="orbit-accent-dot"
                  style={{
                    transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`,
                    background:  i % 2 === 0 ? "#60a5fa" : "#a78bfa",
                    boxShadow: `0 0 8px ${i % 2 === 0 ? "#60a5fa" : "#a78bfa"}`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      {/* <BottomStrip isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} /> */}

      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } body { background: #050818; }`}</style>
    </div>
  );
}