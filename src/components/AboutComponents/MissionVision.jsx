import React from "react";
import '../../CSS/About/MissionVision.css'
import { FaRegHandshake } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";


function MissionVision() {

  return (
    <section className="vmp-wrap">
      {/* TOP BADGE */}
      <div className="vmp-badge">
        <svg className="vmp-badge-icon" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2c4 3 4 7 2 11l-2 4-2-4c-2-4-2-8 2-11z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        OUR PURPOSE
      </div>

      {/* HEADING */}
      <h2 className="vmp-h2">
        Our <span className="vmp-title-gradient">Vision.</span> Our{" "}
        <span className="vmp-title-gradient">Mission.</span> Our{" "}
        <span className="vmp-title-gradient">Promise.</span>
      </h2>

      <div className="vmp-subrow">
        <span className="vmp-subline" />
        <p className="vmp-sub">
          Guided by purpose. Driven by impact. Committed to your success.
        </p>
        <span className="vmp-subline" />
      </div>

      {/* THREE CARDS */}
      <div className="vmp-cards">
        {/* VISION CARD */}
        <div className="vmp-card vmp-card-blue">
          <div className="vmp-icon-circle vmp-icon-blue">
           <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glowBlue" x="-50%" y="-50%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle  fill="none" stroke="#60a5fa" strokeWidth="2.5" filter="url(#glowBlue)"/>
  <g filter="url(#glowBlue)" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" fill="none">
    <line x1="100" y1="50" x2="100" y2="60"/>
    <line x1="72" y1="58" x2="78" y2="66"/>
    <line x1="128" y1="58" x2="122" y2="66"/>
    <line x1="58" y1="100" x2="68" y2="100"/>
    <line x1="142" y1="100" x2="132" y2="100"/>
    <line x1="72" y1="142" x2="78" y2="134"/>
    <line x1="128" y1="142" x2="122" y2="134"/>
  </g>
  <path d="M65 100 C65 100, 80 75, 100 75 C120 75, 135 100, 135 100 C135 100, 120 125, 100 125 C80 125, 65 100, 65 100 Z"
        fill="none" stroke="#60a5fa" strokeWidth="3.5" strokeLinejoin="round" filter="url(#glowBlue)"/>
  <circle cx="100" cy="100" r="13" fill="#60a5fa" filter="url(#glowBlue)"/>
  <circle cx="100" cy="100" r="13" fill="none" stroke="#0a0e27" strokeWidth="1.5"/>
  <circle cx="96" cy="96" r="3.5" fill="#0a0e27"/>
</svg>
          </div>
          <h3 className="vmp-card-title">
            Our <span className="vmp-blue">Vision</span>
          </h3>
          <span className="vmp-card-divider vmp-divider-blue" />
  


          <p className="vmp-card-text">
            To become a trusted name in IT education, empowering students
            with the skills, mindset, and opportunities needed to succeed in
            the tech world.
          </p>

        <img src="./mountain_neon_image.png"  className="mountain_neon_image" alt="" />
          
        </div>

         {/* PROMISE CARD */}
        <div className="vmp-card vmp-card-pink">
          <div className="vmp-icon-circle vmp-icon-pink">
          <img src="/handshake.svg" alt="Glow Line" className="handshake"/>

          </div>
          <h3 className="vmp-card-title">
            Our <span className="vmp-pink">Promise</span>
          </h3>
          <span className="vmp-card-divider vmp-divider-pink" />

          <p className="vmp-promise-lead">At Netligent, we believe:</p>
          <p className="vmp-promise-quote">&ldquo;Your growth is our success.&rdquo;</p>
          <p className="vmp-promise-sub">
            We are committed to helping every student move from
          </p>

          <div className="vmp-steps">
            <div className="vmp-step">
              <div className="vmp-step-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 5a2 2 0 012-2h4a2 2 0 012 2v15l-4-2-4 2V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M12 5a2 2 0 012-2h4a2 2 0 012 2v15l-4-2-4 2V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Learning</span>
            </div>

            <svg className="vmp-step-arrow" viewBox="0 0 24 12" fill="none">
              <path d="M1 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="vmp-step">
              <div className="vmp-step-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M9 9l-2.5 3L9 15M15 9l2.5 3L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Building</span>
            </div>

            <svg className="vmp-step-arrow" viewBox="0 0 24 12" fill="none">
              <path d="M1 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="vmp-step">
              <div className="vmp-step-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 19V13M10 19V9M16 19V11M22 19V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M16 5l5 0 0 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 13l5-5 5 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <span>Growing</span>
            </div>

            <svg className="vmp-step-arrow" viewBox="0 0 24 12" fill="none">
              <path d="M1 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="vmp-step">
              <div className="vmp-step-icon">
                {/* <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M9 8h5a2 2 0 010 4H9M9 8l1-2M9 12h6M9 12l2 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
                <LiaRupeeSignSolid />
              </div>
              <span>Earning</span>
            </div>
          </div>
        </div>
        {/* MISSION CARD */}
        <div className="vmp-card vmp-card-violet">
          <div className="vmp-icon-circle vmp-icon-violet">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="19" cy="21" r="11" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="19" cy="21" r="6.5" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="19" cy="21" r="2" fill="currentColor" />
              <path d="M19 21l8-9M27 12l3.5-1-1 3.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
            </svg>

            
          </div>
          <h3 className="vmp-card-title">
            Our <span className="vmp-violet">Mission</span>
          </h3>
          <span className="vmp-card-divider vmp-divider-violet" />


          <p className="vmp-card-text">
            To provide affordable, high-quality training and placement
            support that helps individuals transform their careers and
            achieve their goals.
          </p>

        <img src="./rocket_neon_image.png" className="rocket_neon_image" alt="" />
        </div>

       
      </div>

      {/* BOTTOM CTA BAR */}
      <div className="vmp-cta-bar">
        <div className="vmp-cta-left">
        <svg width="220" height="220" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="sparkle-svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ff8dfd"/>
      <stop offset="100%" stopColor="#b100ff"/>
    </radialGradient>

    <filter id="blurGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <g filter="url(#blurGlow)">
    <path
      d="M60 22
         C63 34 69 40 81 43
         C69 46 63 52 60 64
         C57 52 51 46 39 43
         C51 40 57 34 60 22Z"
      fill="url(#glow)"
    />
  </g>

  <g filter="url(#blurGlow)">
    <path
      d="M36 38
         C38 47 43 52 52 54
         C43 56 38 61 36 70
         C34 61 29 56 20 54
         C29 52 34 47 36 38Z"
      fill="none"
      stroke="#ff8dfd"
      strokeWidth="3"
    />
  </g>

  <g filter="url(#blurGlow)">
    <path
      d="M67 62
         C69 70 73 74 81 76
         C73 78 69 82 67 90
         C65 82 61 78 53 76
         C61 74 65 70 67 62Z"
      fill="url(#glow)"
    />
  </g>

  <circle cx="88" cy="55" r="3" fill="#ff8dfd"/>

  <path
    d="M41 24
       C42 28 44 30 48 31
       C44 32 42 34 41 38
       C40 34 38 32 34 31
       C38 30 40 28 41 24Z"
    fill="#ffb5ff"
  />
</svg>
        </div>
        <div className="vmp-cta-text">
          <p>
            <strong>Join Netligent and take your first step toward a successful tech career &mdash;</strong>
          </p>
          <p>
            because your future deserves more than just education... it
            deserves <span className="vmp-cta-highlight">the right direction.</span>
          </p>
        </div>
        <div className="vmp-cta-right">
          <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <linearGradient id="pinkGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#ff9cff"/>
      <stop offset="100%" stopColor="#ff00d4"/>
    </linearGradient>
  </defs>


  <path
    d="M20 110
       C60 140, 100 140, 130 105
       C145 85, 145 65, 125 55
       C110 48, 100 65, 110 78
       C125 95, 155 95, 180 80
       C210 60, 230 65, 250 45"
    stroke="url(#pinkGlow)"
    strokeWidth="2"
    strokeDasharray="8 10"
    opacity="0.7"
    fill="none"
  />

  <circle
    cx="128"
    cy="72"
    r="12"
    stroke="url(#pinkGlow)"
    strokeWidth="2"
    strokeDasharray="5 5"
    opacity="0.7"
    fill="none"
  />

  <g filter="url(#neonGlow)">
    <path
      d="M235 25L305 5L270 75L258 50L235 25Z"
      fill="none"
      stroke="url(#pinkGlow)"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    <path
      d="M235 25L258 50L305 5"
      stroke="url(#pinkGlow)"
      strokeWidth="3"
      fill="none"
    />

    <path
      d="M258 50L250 70L270 55"
      stroke="url(#pinkGlow)"
      strokeWidth="3"
      fill="none"
      strokeLinejoin="round"
    />
  </g>
</svg>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;