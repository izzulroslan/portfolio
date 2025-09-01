import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

// NEW: accept `enabled` (default true)
export const ChromaGrid = ({
  items,
  onItemClick,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  enabled = true, // <--- added
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const data = items?.length ? items : [];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);

    // CLEANUP: kill any tweens on unmount
    return () => {
      gsap.killTweensOf(pos.current);
      if (fadeRef.current) gsap.killTweensOf(fadeRef.current);
    };
  }, []);

  // NEW: pause/stop all animations when disabled (e.g., modal open)
  useEffect(() => {
    if (!enabled) {
      // stop any ongoing tweens & restore neutral state
      gsap.killTweensOf(pos.current);
      if (fadeRef.current) {
        gsap.killTweensOf(fadeRef.current);
        gsap.set(fadeRef.current, { opacity: 1 });
      }
      // Optional: center the cursor light so it doesn't render offscreen
      if (setX.current && setY.current && rootRef.current) {
        const { width, height } = rootRef.current.getBoundingClientRect();
        setX.current(width / 2);
        setY.current(height / 2);
      }
    }
  }, [enabled]);

  const moveTo = (x, y) => {
    // if disabled, ignore moves
    if (!enabled) return;
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    if (!enabled) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    if (!enabled) return;
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardMove = (e) => {
    if (!enabled) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        "--r": `${radius}px`,
        "--cols": columns,
        "--rows": rows,
        // disable pointer events while disabled to avoid any hidden work
        pointerEvents: enabled ? "auto" : "none",
      }}
      // only attach handlers when enabled
      onPointerMove={enabled ? handleMove : undefined}
      onPointerLeave={enabled ? handleLeave : undefined}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={enabled ? handleCardMove : undefined}
          onClick={enabled ? () => onItemClick?.(c) : undefined}
          style={{
            "--card-border": c.borderColor || "transparent",
            "--card-gradient": c.gradient,
            cursor: enabled ? "pointer" : "default",
          }}
        >
          <div className="chroma-img-wrapper">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              decoding="async"   // <--- small perf win
            />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;