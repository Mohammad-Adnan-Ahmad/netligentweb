import "../../CSS/Feedbackvideos.css";

/* ══════════════════════════════════════
   VIDEO DATA  — replace youtubeId with real IDs
══════════════════════════════════════ */
const VIDEOS = [
  {
    id: 1,
    youtubeId: "WNc4OuhUtqc",   // ← replace with real YouTube ID
    thumb: "https://www.youtube.com/shorts/WNc4OuhUtqc?feature=share",
  },
  {
    id: 2,
    youtubeId: "lc8jxJjpM0Y",
    thumb: "https://www.youtube.com/shorts/lc8jxJjpM0Y?feature=share",
  },
  {
    id: 3,
    youtubeId: "beOC5X4U-ds",
    thumb: "https://www.youtube.com/shorts/beOC5X4U-ds?feature=share",
  },
  {
    id: 4,
    youtubeId: "pxtjyD6GHXk",
    thumb: "https://www.youtube.com/shorts/pxtjyD6GHXk?feature=share",
  },
  {
    id: 5,
    youtubeId: "sIrnMK1DW2Q",
    thumb: "https://youtu.be/sIrnMK1DW2Q",
  },
  {
    id: 6,
    youtubeId: "RklLMSL0QlY",
    thumb: "https://youtu.be/RklLMSL0QlY",
  },
];



/* ══════════════════════════════════════
   YOUTUBE BADGE (top-right of card)
══════════════════════════════════════ */
function YTBadge() {
  return (
    <div className="fv-yt-badge">
      <div className="fv-yt-icon" />
      <span className="fv-yt-text">YouTube</span>
    </div>
  );
}

/* ══════════════════════════════════════
   VIDEO CARD
══════════════════════════════════════ */
function VideoCard({ video }) {
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fv-card" onClick={handleClick}>
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
        alt="Student feedback video"
        className="fv-thumb"
        onError={e => {
          // Fallback to portrait photo if YouTube thumb fails
          e.target.src = video.thumb;
        }}
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="fv-card-overlay" />

      {/* YouTube badge top-right */}
      <YTBadge />

      {/* Play button centre */}
      <div className="fv-play-btn">
        <div className="fv-play-triangle" />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function FeedbackVideos() {
  return (
    <section className="fv-section">

      {/* ══ HEADER ══ */}
      <div className="fv-header">

        {/* Pill tag */}
        <div className="fv-tag">
          <div className="fv-tag-yt" />
          Student Feedback
        </div>

        {/* Title with spark dashes */}
        <div className="fv-title-wrap">
          {/* Left sparks */}
          <div className="fv-sparks-left">
            <span className="fv-spark" />
            <span className="fv-spark" />
            <span className="fv-spark" />
          </div>

          <h2 className="fv-title">
            Explore Our Journey
            <span className="fv-title-grad"> Through Videos</span>
            <span className="fv-sparkle">✦</span>
          </h2>

          {/* Right sparks (mirrored) */}
          <div className="fv-sparks-right">
            <span className="fv-spark" style={{ animationDelay: "0.1s" }} />
            <span className="fv-spark" style={{ animationDelay: "0.3s" }} />
            <span className="fv-spark" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* Subtitle */}
        <p className="fv-subtitle">
          Real students. Real experiences. Real impact.
        </p>
      </div>

      {/* ══ VIDEO GRID  3 × 2 ══ */}
      <div className="fv-grid">
        {VIDEOS.map(v => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>

      {/* ══ BOTTOM CTA BAR ══ */}
      <div className="fv-cta-wrap">
        <div className="fv-cta-bar">
          {/* Play icon */}
          <div className="fv-cta-icon">
            <div className="fv-cta-play" />
          </div>

          {/* Text */}
          <div className="fv-cta-text-block">
            <div className="fv-cta-title">Want to see more success stories?</div>
            <div className="fv-cta-sub">
              Subscribe to our YouTube channel for more inspiring videos.
            </div>
          </div>

          {/* CTA button */}
          <button
            className="fv-yt-btn"
            onClick={() =>
              window.open("https://www.youtube.com/@NetligentTechnologies", "_blank", "noopener,noreferrer")
            }
          >
            Visit Our YouTube Channel
            <span className="fv-yt-btn-arr">›</span>
          </button>
        </div>
      </div>

   
    </section>
  );
}