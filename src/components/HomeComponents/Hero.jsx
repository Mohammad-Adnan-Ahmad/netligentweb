import { useState, useEffect, useRef } from "react";

import '../../CSS/Hero.css'
import {
  HackingIcon, AwsIcon, DevOpsIcon, WebDevIcon, CCNAIcon, AILogo,
  LockIcon, DataIcon, PowerBIIcon, DataScience, BrainIcon,
} from "../Icons/Icons";
import GridBackground from "./GridBackground";
import BottomStrip from "./BottomStrip";

// ─────────────────────────────────────────────────────────────────────────────
const COURSES = [
  { name: "Cloud Computing",        Icon: AwsIcon,      color: "#FF9900" },
  { name: "AWS DevOps",             Icon: DevOpsIcon,   color: "#60a5fa" },
  { name: "Ethical Hacking",        Icon: HackingIcon,  color: "#FFD43B" },
  { name: "Cyber Security",         Icon: LockIcon,     color: "#34d399" },
  { name: "CCNA / CCNP",            Icon: CCNAIcon,     color: "#60a5fa" },
  { name: "Data Science",           Icon: DataScience,  color: "#F2C811" },
  { name: "Data Analytics",         Icon: DataIcon,     color: "#a78bfa" },
  { name: "Artificial Intelligence",Icon: AILogo,       color: "#f97316" },
  { name: "Machine Learning",       Icon: BrainIcon,    color: "#a78bfa" },
  { name: "Web Development",        Icon: WebDevIcon,   color: "#60a5fa" },
];

const STRENGTHS = [
  {
    emoji: "🎓",
    name: "Strong Teaching & Mentorship",
    desc: "Expert instructors guide you every step of the way",
    color: "#818cf8",
    bg: "rgba(129,140,248,0.1)",
    border: "rgba(129,140,248,0.3)",
    bar: "linear-gradient(90deg,#818cf8,#6d28d9)",
    pct: "90%",
  },
  {
    emoji: "🛠️",
    name: "Hands-on Practical Training",
    desc: "Build real projects that belong in your portfolio",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.1)",
    border: "rgba(96,165,250,0.3)",
    bar: "linear-gradient(90deg,#60a5fa,#2563eb)",
    pct: "95%",
  },
  {
    emoji: "🎯",
    name: "Personalized Attention",
    desc: "Small batch sizes — you never get left behind",
    color: "#34d399",
    bg: "rgba(52,211,153,0.1)",
    border: "rgba(52,211,153,0.3)",
    bar: "linear-gradient(90deg,#34d399,#059669)",
    pct: "85%",
  },
  {
    emoji: "💼",
    name: "Industry-Relevant Courses",
    desc: "Curriculum updated to match what employers actually need",
    color: "#f97316",
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.3)",
    bar: "linear-gradient(90deg,#f97316,#ea580c)",
    pct: "98%",
  },
];

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
    ctx.fillText(bits[idx],                px, py - 8 * s);
    ctx.fillText(bits[(idx+1)%bits.length], px, py + 1 * s);
    ctx.fillText(bits[(idx+2)%bits.length], px, py + 10 * s);
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
export default function Hero() {
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

  // ── Animated left section state ──
  const [readyWords,       setReadyWords]       = useState([false, false, false]);
  const [showSubtitle,     setShowSubtitle]     = useState(false);
  const [showDivider,      setShowDivider]      = useState(false);
  const [showStrengthLabel,setShowStrengthLabel]= useState(false);
  const [strengthsVisible, setStrengthsVisible] = useState([false, false, false, false]);

  useEffect(() => { pauseRef.current = paused; }, [paused]);

  // Orbit animation
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

  // Left section entrance animation sequence
  useEffect(() => {
    const timers = [];

    // "Are" "You" "Ready?" pop in one by one
    [0, 1, 2].forEach(i => {
      timers.push(setTimeout(() => {
        setReadyWords(prev => { const n = [...prev]; n[i] = true; return n; });
      }, 400 + i * 520));
    });

    const afterWords = 400 + 3 * 520;

    // Subtitle fades in
    timers.push(setTimeout(() => setShowSubtitle(true), afterWords + 300));

    // Divider + label
    timers.push(setTimeout(() => {
      setShowDivider(true);
      setShowStrengthLabel(true);
    }, afterWords + 700));

    // Strength cards slide in one by one
    [0, 1, 2, 3].forEach(i => {
      timers.push(setTimeout(() => {
        setStrengthsVisible(prev => { const n = [...prev]; n[i] = true; return n; });
      }, afterWords + 1000 + i * 280));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

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

        {/* ── LEFT — Animated "Are You Ready" section ── */}
        <div className={`hero-left${stacked ? " centered" : ""}`}>

          {/* "Are You Ready?" — each word pops in */}
          <div className="hl-ready-wrap">
            {["Are", "You", "Ready?"].map((word, i) => (
              <span
                key={word}
                className={`hl-ready-word${readyWords[i] ? " pop" : ""}`}
                style={{ fontSize: HEADING }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <div className={`hl-subtitle${showSubtitle ? " show" : ""}`}>
            {"\u0027"}Where Learning Meets Real-World Skills{"\u0027"}
          </div>
          
           <p className="hl-seo-text">
            Build job-ready technology skills with practical, industry-focused IT training in Bhopal.
            Learn from experienced trainers, work on real-world projects and prepare for career
            opportunities with our placement assistance.
          </p>

          {/* Divider */}
          <div className={`hl-divider${showDivider ? " show" : ""}`} />

          {/* Strengths label */}
          <div className={`hl-strength-label${showStrengthLabel ? " show" : ""}`}>
            Our Strengths
          </div>

          

          {/* Strength cards */}
          <div className="hl-strengths">
            {STRENGTHS.map((s, i) => (
              <div
                key={s.name}
                className={`hl-strength-item${strengthsVisible[i] ? " show" : ""}`}
              >
                <div
                  className="hl-strength-icon"
                  style={{
                    background: s.bg,
                    borderColor: s.border,
                    boxShadow: `0 0 18px ${s.color}22`,
                  }}
                >
                  {s.emoji}
                </div>
                <div className="hl-strength-text">
                  <div className="hl-strength-name">{s.name}</div>
                  <div className="hl-strength-desc">{s.desc}</div>
                  <div
                    className="hl-strength-bar"
                    style={{ background: s.bar, maxWidth: s.pct }}
                  />
                </div>
              </div>
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
            > 
               
            </div>

            {/* Center AI bubble */}
            <div
              className="orbit-center"
              style={{ width: CENTER_CIRC, height: CENTER_CIRC }}
            >
              <img src="AI_logo2.png" alt="AI Powered Courses" className="AI_Logo" />
             
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

      {/* <BottomStrip isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} /> */}

      {/* <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } body { background: #050818; }`}</style> */}
    </div>
  );
}