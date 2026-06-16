import { useState, useEffect, useRef } from "react";
import "../../CSS/RealTraining.css";
import { IconPersonCheck, IconRupee, IconTrophy, IconHandshake, IconStar } from "../Icons/Icons";
/* ══════════════════════════════════
   SVG ICONS  (outlined, indigo/purple stroke)
══════════════════════════════════ */


/* ══════════════════════════════════
   COUNT-UP HOOK
══════════════════════════════════ */
function useCountUp(target, decimals, active) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 90; // ~1.5s at 60fps
    const id = setInterval(() => {
      frame++;
      const ease = 1 - Math.pow(1 - frame / total, 3);
      setV(+(ease * target).toFixed(decimals));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active, target, decimals]);
  return v;
}

/* ══════════════════════════════════
   Hiring Partners
══════════════════════════════════ */
const logos = [
  {name : 'TCS', url : 'tcs.png'},
  {name : 'Infocys', url : 'Infosys.png'},
  {name : 'Wipro', url : 'Wipro.png'},
  {name : 'Accenture', url : 'Accenture.png'},
  {name : 'Amazon', url : 'amazon.png'},
  {name : 'IBM', url : 'ibm.png'},
  {name : 'HCL', url : 'hcl.png'},
  {name : 'Tata', url : 'tata.png'},
  {name : 'Delote', url : 'delote.png'},
  {name : 'Flipkart', url : 'flipkart.png'},
  {name : 'Tech Mahindra', url : 'tata-mahindra.png'},
  {name : 'Acer', url : 'acer.png'},
  {name : 'Make-My-Trip', url : 'make-my-trip.png'},
  {name : 'Make-My-Trip', url : 'make-my-trip.png'},
  {name : 'Make-My-Trip', url : 'make-my-trip.png'},
  
 
]


/* ══════════════════════════════════
   STAT CARD
══════════════════════════════════ */
const STATS = [
  { Icon: IconPersonCheck, big: 20,  dec: 0, suffix: "+",  unit: "",    label: "Students Placed",},
  { Icon: IconRupee,       big: 3.5, dec: 1, suffix: "",   unit: "LPA", label: "Average Package",},
  { Icon: IconTrophy,      big: 10,  dec: 0, suffix: "",   unit: "LPA", label: "Highest Package",},
  { Icon: IconHandshake,   big: 15,  dec: 0, suffix: "+",  unit: "",    label: "Hiring Partners",},
  { Icon: IconStar,        big: 100, dec: 0, suffix: "%",  unit: "",    label: "Placement Support"},
];

function StatCard({ s, active }) {
  const v = useCountUp(s.big, s.dec, active);
  const display = s.dec > 0 ? v.toFixed(s.dec) : Math.round(v);
  return (
    <div className="rt-stat-card">
      <div className="rt-icon-circle"><s.Icon /></div>
      <div className={`rt-stat-num `}>
        <span className="big">{display}{s.suffix}</span>
        {s.unit && <span className="unit"> {s.unit}</span>}
      </div>
      <div className="rt-stat-label">{s.label}</div>
      <div className={`rt-stat-bar`} />
    </div>
  );
}

/* ══════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════ */
export default function RealTraining() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="rt-section" ref={ref}>
      <div className="rt-dot-grid" />

      {/* ── HEADER ── */}
      <div className="rt-header">

        {/* Title + sparks */}
        <div className="rt-title-block">
          <div className="rt-sparks">
            <span className="rt-spark"/>
            <span className="rt-spark"/>
            <span className="rt-spark"/>
          </div>
          <h2 className="rt-title">
            <span className="rt-title-line rt-navy">Real Training,</span>
            <span className="rt-title-line">
              <span className="rt-results-row">
                <span className="rt-gradient">{" "}Real Results.</span>
                {/* Decorative arrow */}
              </span>
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="rt-subtitle">
          At Netligent Technologies, we don't just teach – we prepare you for a successful IT career
          {" "}with practical skills,{" "}
          personalized attention
          , and strong placement support.
        </p>
      </div>

      {/* ── STAT CARDS ── */}
      <div className="rt-stats">
        {STATS.map((s, i) => <StatCard key={i} s={s} active={active}/>)}
      </div>

      {/* ── BOTTOM ROW ── */}
      <div className="rt-bottom">
        {/* Hiring partners */}
        <div className="rt-partners">
          <div className="rt-partners-pill">Our Hiring Partners</div>

          {/* Row 1 */}
          <div className="rt-logo-grid">
          {logos.map((l, i) => 
          <div className="rt-logo-card" key={i}>
             <img  src={l.url} alt={l.name} className="rt-logo-img"/>
          </div>
         
          )}
           
           
            {/* Accenture */}
            
          </div>

          
        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <div className="rt-footer">
        <div className="rt-footer-icon">🎓</div>
        <p className="rt-footer-text">
          Better Training. Better Opportunities. Better Tomorrow.
          {" "}That's the{" "}
          <span className="rt-footer-brand">Netligent Promise.</span>
        </p>
      </div>
    </section>
  );
}