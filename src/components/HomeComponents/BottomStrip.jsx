import React from 'react'

function BottomStrip({isDesktop, isMobile, isTablet}) {
  return (
    //  {/* ══ BOTTOM STRIP ══ */}
      <div style={{
        position:"fixed", zIndex:20, width:'100%',
        bottom: "0px",
        background:"rgba(255,255,255,0.04)",
        border:"1px solid rgba(255,255,255,0.08)",
        backdropFilter:"blur(8px)",
        padding: isMobile ? "12px 14px" : isTablet ? "13px 28px" : "13px 48px",
        display:"flex", alignItems:"center", justifyContent:"center",
        gap: isMobile ? 12 : isTablet ? 24 : 48,
        flexWrap:"wrap",
        marginTop: isDesktop ? 14 : 0,
      }}>
        {[
          {icon:"✅",text:"Industry-Relevant Courses"},
          {icon:"🛡️",text:"AI-Powered Learning"},
          {icon:"⚙️",text:"Hands-on Projects"},
          {icon:"👥",text:"100% Placement Support"},
        ].map(item=>(
          <div key={item.text} style={{
            display:"flex", alignItems:"center", gap:6,
            fontSize:isMobile?10:isTablet?12:13, color:"#94a3b8", fontWeight:500,
          }}>
            <span style={{ fontSize:isMobile?12:14 }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
  )
}

export default BottomStrip