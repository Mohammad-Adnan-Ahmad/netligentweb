// ── Canvas Grid Background ────────────────────────────────────────────────────
import { useEffect, useRef } from "react";
export default function GridBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    function draw() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#060818";
      ctx.fillRect(0, 0, W, H);
      const g1 = ctx.createRadialGradient(W*.22,H,0,W*.22,H,W*.45);
      g1.addColorStop(0,"rgba(109,40,217,0.55)"); g1.addColorStop(1,"rgba(0,0,0,0)");
      ctx.fillStyle=g1; ctx.fillRect(0,0,W,H);
      const g2 = ctx.createRadialGradient(W*.78,H,0,W*.78,H,W*.38);
      g2.addColorStop(0,"rgba(79,70,229,0.45)"); g2.addColorStop(1,"rgba(0,0,0,0)");
      ctx.fillStyle=g2; ctx.fillRect(0,0,W,H);
      const g3 = ctx.createRadialGradient(W*.5,H*.92,0,W*.5,H*.92,W*.32);
      g3.addColorStop(0,"rgba(139,92,246,0.4)"); g3.addColorStop(1,"rgba(0,0,0,0)");
      ctx.fillStyle=g3; ctx.fillRect(0,0,W,H);
      const vpX=W*.5, vpY=H*.60, hwB=W*.65;
      for(let i=1;i<=16;i++){
        const t=Math.pow(i/16,1.7);
        const y=vpY+(H-vpY)*t;
        const frac=(y-vpY)/(H-vpY);
        const hw=hwB*frac;
        const alpha=0.08+t*t*0.72;
        ctx.save(); ctx.shadowBlur=8; ctx.shadowColor=`rgba(167,139,250,${alpha*.8})`;
        ctx.strokeStyle=`rgba(167,139,250,${alpha})`; ctx.lineWidth=0.4+t*1.2;
        ctx.beginPath(); ctx.moveTo(vpX-hw,y); ctx.lineTo(vpX+hw,y); ctx.stroke(); ctx.restore();
      }
      for(let i=0;i<=26;i++){
        const tX=i/26;
        const bx=(vpX-hwB)+hwB*2*tX;
        const d=Math.abs(tX-.5)*2;
        const alpha=0.12+d*.55;
        ctx.save(); ctx.shadowBlur=6; ctx.shadowColor=`rgba(129,140,248,${alpha*.7})`;
        ctx.strokeStyle=`rgba(129,140,248,${alpha})`; ctx.lineWidth=0.4+d*.9;
        ctx.beginPath(); ctx.moveTo(vpX,vpY); ctx.lineTo(bx,H); ctx.stroke(); ctx.restore();
      }
      [0.55,0.72,0.86,1.0].forEach(t=>{
        const y=vpY+(H-vpY)*t;
        const frac=(y-vpY)/(H-vpY);
        const hw=hwB*frac;
        ctx.save(); ctx.shadowBlur=18; ctx.shadowColor="rgba(192,132,252,0.9)";
        ctx.strokeStyle=`rgba(192,132,252,${.4+t*.5})`; ctx.lineWidth=0.8+t*1.4;
        ctx.beginPath(); ctx.moveTo(vpX-hw,y); ctx.lineTo(vpX+hw,y); ctx.stroke(); ctx.restore();
      });
      const fm=ctx.createLinearGradient(0,vpY-H*.15,0,H);
      fm.addColorStop(0,"rgba(6,8,24,1)"); fm.addColorStop(0.18,"rgba(6,8,24,0.55)");
      fm.addColorStop(0.4,"rgba(6,8,24,0)"); fm.addColorStop(1,"rgba(6,8,24,0)");
      ctx.fillStyle=fm; ctx.fillRect(0,0,W,H);
      const eg=ctx.createLinearGradient(0,0,W,0);
      eg.addColorStop(0,"rgba(167,139,250,0)"); eg.addColorStop(.2,"rgba(167,139,250,.7)");
      eg.addColorStop(.5,"rgba(192,132,252,1)"); eg.addColorStop(.8,"rgba(167,139,250,.7)");
      eg.addColorStop(1,"rgba(167,139,250,0)");
      ctx.save(); ctx.shadowBlur=20; ctx.shadowColor="rgba(192,132,252,1)";
      ctx.strokeStyle=eg; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(0,H-1); ctx.lineTo(W,H-1); ctx.stroke(); ctx.restore();
    }
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);
  return (
    <canvas ref={canvasRef} style={{
      position:"absolute", inset:0, width:"100%", height:"100%",
      zIndex:0, pointerEvents:"none", display:"block",
    }}/>
  );
}