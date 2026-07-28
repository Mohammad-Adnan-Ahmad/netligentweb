import { useState } from "react";
import "../../CSS/Nav.css";
import { Link, NavLink } from "react-router-dom";




// ── Top-level nav links. Only "Courses" carries a dropdown; the rest are plain links ──
const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Courses",  href: "/our-courses" },
  { label: "Career",   href: "/career" },
  { label: "Services", href: "/services" },
  { label: "Gallery",  href: "/gallery" },
];

// ── Courses mega-menu: left column = category names, right column = flyout
//    of whichever category is currently hovered ──


// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen,       setMenuOpen]       = useState(false);
 
 
  return (
    <>
      <div className="demo-bg">
        <div className="topbar">

          {/* ── Box 1: Navbar ── */}
          <nav className="navbar">

            <div className="brand">
               <img 
            src="/brand_logo.png" 
            alt="Netligent Technologies"
            className="brand-logo"
            />
            </div>
           
            <div className="divider" />

            <ul className="nav-links">
              {NAV_LINKS.map((nav) =>
               (
                  <li key={nav.label}>
                    <NavLink
                      to={nav.href}
                      className="nav-link"
                    >
                      {nav.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            {/* Hamburger */}
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </nav>

          {/* ── Box 2: Contact Us ── */}
           <Link to='/contact-us'>
             <div className="cta-box">
              <button className="cta-btn">Contact Us</button>
          </div>
           </Link>
         
        </div>

        {/* ── Mobile dropdown menu ── */}
        <div className={`mobile-menu-wrapper${menuOpen ? " open" : ""}`}>
          <div className="mobile-menu">
            {NAV_LINKS.map((nav) =>
             (
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className="mobile-link-toggle mobile-link-plain"
      
                >
                  {nav.label}
                </NavLink>
              )
            )}

            <Link to='/contact-us'>
              <button className="mobile-cta">Contact Us</button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}