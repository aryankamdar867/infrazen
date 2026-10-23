"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";

function IconSearch({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="7" />
      <line x1="15" y1="15" x2="20" y2="20" />
    </svg>
  );
}
function IconPenTool({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19l7-7-3-3-7 7 3 3z" />
      <path d="M18 13l-1.5-7.5L4 2l3.5 12.5L11 13l-3-3" />
    </svg>
  );
}
function IconWrench({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconCheck2({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14 9,11" />
    </svg>
  );
}
function IconSmallCheck({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1,6 4,9 10,2" />
    </svg>
  );
}

const phaseIcons = [IconSearch, IconPenTool, IconWrench, IconCheck2];

const NAVY = "#0F2A47";
const STEEL = "#2F6690";
const ORANGE = "#F26A1B";

export default function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(1);
  const [lineProgress, setLineProgress] = useState(0.25);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalDist = rect.height;
      const curr = windowH - rect.top;
      const prog = Math.min(1, Math.max(0.1, curr / totalDist));
      setLineProgress(prog);
      if (prog < 0.35) setActivePhase(1);
      else if (prog < 0.6) setActivePhase(2);
      else if (prog < 0.85) setActivePhase(3);
      else setActivePhase(4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="approach"
      ref={containerRef}
      style={{
        background: "rgba(247, 245, 240, 0.92)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="section-number">08</span>
            <span className="dim-label" style={{ color: STEEL }}>/ Approach</span>
          </div>
          <div className="orange-rule" style={{ marginBottom: "1.25rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "end" }}>
            <div>
              <h2
                className="heading-expanded"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
                  color: NAVY,
                  lineHeight: 1.07,
                }}
              >
                {siteConfig.approach.title}
              </h2>
              <p
                style={{
                  marginTop: "0.875rem",
                  color: "var(--text-body)",
                  fontSize: "1rem",
                  maxWidth: "56ch",
                  lineHeight: 1.7,
                }}
              >
                {siteConfig.approach.subtitle}
              </p>
            </div>
            <span className="coord-label hidden lg:block">08 / METHOD</span>
          </div>
        </div>

        {/* Timeline track (desktop) */}
        <div
          className="hidden lg:block"
          style={{ position: "relative", marginBottom: "3.5rem", paddingTop: "2rem" }}
        >
          {/* Track base */}
          <div style={{ height: 2, background: "var(--border-color)", position: "relative" }}>
            {/* Progress line in Safety Orange */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: 2,
                background: ORANGE,
                width: `${lineProgress * 100}%`,
                transition: "width 0.3s ease",
              }}
            />
          </div>

          {/* Phase nodes */}
          <div
            style={{
              position: "absolute",
              top: "calc(2rem - 9px)",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {siteConfig.approach.phases.map((phase) => {
              const isPast = activePhase >= phase.phase;
              return (
                <div
                  key={phase.phase}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  {/* Square node */}
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      background: isPast ? NAVY : "var(--bg-card)",
                      border: `2px solid ${isPast ? NAVY : "var(--border-color)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => { setActivePhase(phase.phase); setLineProgress((phase.phase - 0.1) / 4); }}
                  >
                    {isPast && (
                      <svg width="9" height="9" viewBox="0 0 8 8" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="1,4.5 3,6.5 7,1.5" />
                      </svg>
                    )}
                  </div>
                  <span
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "ui-monospace, monospace",
                      fontSize: "0.625rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: isPast ? NAVY : "var(--text-body)",
                      fontWeight: isPast ? 700 : 500,
                      opacity: isPast ? 1 : 0.6,
                      transition: "color 0.25s ease",
                    }}
                  >
                    {phase.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.5px",
            background: "var(--border-color)",
            border: "1.5px solid var(--border-color)",
          }}
        >
          {siteConfig.approach.phases.map((phase, idx) => {
            const Icon = phaseIcons[idx] || IconSearch;
            const isActive = activePhase === phase.phase;
            return (
              <div
                key={phase.phase}
                onClick={() => { setActivePhase(phase.phase); setLineProgress((phase.phase - 0.1) / 4); }}
                style={{
                  background: isActive ? "var(--bg-card)" : "var(--bg-alt)",
                  padding: "2rem 1.75rem",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                  borderTop: isActive ? `3px solid ${ORANGE}` : "3px solid transparent",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isActive ? NAVY : STEEL,
                      border: `1px solid ${isActive ? NAVY : "var(--border-color)"}`,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: "0.625rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "var(--text-body)",
                      opacity: 0.6,
                      fontWeight: 600,
                    }}
                  >
                    Phase 0{phase.phase}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-archivo, ui-sans-serif)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: isActive ? NAVY : "var(--text-body)",
                    lineHeight: 1.2,
                    marginBottom: "0.625rem",
                    transition: "color 0.2s ease",
                  }}
                >
                  {phase.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-body)",
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  {phase.description}
                </p>

                <ul
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-color)",
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  {phase.keyDeliverables.map((d, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.75rem",
                        color: "var(--text-body)",
                      }}
                    >
                      <span style={{ color: STEEL, flexShrink: 0 }}><IconSmallCheck size={10} /></span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
