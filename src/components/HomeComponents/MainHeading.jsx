import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../CSS/MainHeading.css";

export default function MainHeading() {
  const bannerRef = useRef(null);
  const innerRef = useRef(null);
  const dotsLeftRef = useRef(null);
  const dotsRightRef = useRef(null);
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);
  const word1Ref = useRef(null); // "Start"
  const word2Ref = useRef(null); // "Your"
  const word3Ref = useRef(null); // "Career Journey"
  const word4Ref = useRef(null); // "with"
  const word5Ref = useRef(null); // "Bhopal's"
  const word6Ref = useRef(null); // "Best Institute"

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Banner container fades in
      tl.fromTo(
        bannerRef.current,
        { opacity: 0, y: -18 },
        { opacity: 1, y: 0, duration: 0.5 }
      )

      // 2. Border scales in from center
      .fromTo(
        innerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.55, ease: "expo.out" },
        "-=0.1"
      )

      // 3. Glow pulses in (pseudo-elements via box-shadow trick on a real el)
      .fromTo(
        innerRef.current,
        { boxShadow: "0 0 0px 0px rgba(79,195,247,0)" },
        {
          boxShadow: "0 0 18px 3px rgba(79,195,247,0.18)",
          duration: 0.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        },
        "-=0.1"
      )

      // 4. Dot patterns slide in
      .fromTo(
        dotsLeftRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 0.25, duration: 0.45 },
        "-=0.4"
      )
      .fromTo(
        dotsRightRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 0.25, duration: 0.45 },
        "<"
      )

      // 5. Arrows slide in
      .fromTo(
        arrowLeftRef.current,
        { x: -16, opacity: 0 },
        { x: 0, opacity: 0.9, duration: 0.35 },
        "-=0.2"
      )
      .fromTo(
        arrowRightRef.current,
        { x: 16, opacity: 0 },
        { x: 0, opacity: 0.9, duration: 0.35 },
        "<"
      )

      // 6. Words stagger up — clip reveal
      .fromTo(
        [
          word1Ref.current,
          word2Ref.current,
          word3Ref.current,
          word4Ref.current,
          word5Ref.current,
          word6Ref.current,
        ],
        { y: 28, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.48,
          stagger: 0.09,
          ease: "power2.out",
        },
        "-=0.15"
      )

      // 7. Highlight color pop — cyan
      .fromTo(
        word3Ref.current,
        { color: "#ffffff", textShadow: "0 0 0px #29b6f6" },
        {
          color: "#29b6f6",
          textShadow: "0 0 14px rgba(41,182,246,0.55)",
          duration: 0.4,
          ease: "power1.inOut",
        },
        "-=0.25"
      )

      // 8. Highlight color pop — purple
      .fromTo(
        word6Ref.current,
        { color: "#ffffff", textShadow: "0 0 0px #ba68c8" },
        {
          color: "#ba68c8",
          textShadow: "0 0 14px rgba(186,104,200,0.55)",
          duration: 0.4,
          ease: "power1.inOut",
        },
        "-=0.3"
      )

      // 9. Subtle floating loop on the whole banner
      .to(
        bannerRef.current,
        {
          y: -4,
          duration: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        },
        "+=0.2"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="announcement-banner" ref={bannerRef}>
        <div className="banner-inner" ref={innerRef}>
          <div className="banner-dots-left" ref={dotsLeftRef} />
          <div className="banner-dots-right" ref={dotsRightRef} />

          <span className="banner-arrow banner-arrow-left" ref={arrowLeftRef}>»</span>

          <h1 className="banner-text">
            <span className="word" ref={word1Ref}>Best</span>{" "}
            <span className="word highlight-cyan" ref={word3Ref}>IT Training & Placement </span>{" "}
            <span className="word" ref={word2Ref}>Institute</span>{" "}
         
            <span className="word" ref={word4Ref}>in Bhopal</span>{" "}
          </h1>

          <span className="banner-arrow banner-arrow-right" ref={arrowRightRef}>«</span>
        </div>
      </div>
    </div>
  );
}