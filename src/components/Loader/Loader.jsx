import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Start hiding after the page is loaded
    const handleLoad = () => {
      setTimeout(() => {
        setHide(true);

        setTimeout(() => {
          setVisible(false);
        }, 700);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`nl-loader ${hide ? "nl-loader-hide" : ""}`}>
      
      {/* Background glow */}
      <div className="nl-loader-glow nl-glow-one" />
      <div className="nl-loader-glow nl-glow-two" />

      <div className="nl-loader-content">

        {/* Logo container */}
        <div className="nl-logo-wrapper">

          {/* Outer rotating ring */}
          <div className="nl-orbit nl-orbit-one" />
          <div className="nl-orbit nl-orbit-two" />

          {/* Logo glow */}
          <div className="nl-logo-glow" />

          {/* Netligent Logo */}
          <img
            src="/brand_logo.png"
            alt="Netligent Technologies"
            className="nl-loader-logo"
          />

        </div>

        {/* Brand name */}
        <div className="nl-brand-name">
          <span>NETLIGENT</span>
          <small>TECHNOLOGIES</small>
        </div>

        {/* Loading text */}
        <div className="nl-loading-text">
          <span>Loading</span>
          <div className="nl-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>

        {/* Loading bar */}
        <div className="nl-progress">
          <div className="nl-progress-bar" />
        </div>

      </div>

      {/* Bottom text */}
      <div className="nl-loader-bottom">
        Learn. Practice. Get Hired.
      </div>

    </div>
  );
}
