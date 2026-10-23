"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";
import { useWorldScene } from "@/components/3d/WorldScene3D";

function IconCheck({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1.5,6.5 4.5,9.5 10.5,2.5" />
    </svg>
  );
}
function IconArrow({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="2" y1="6.5" x2="11" y2="6.5" />
      <polyline points="7.5,3 11,6.5 7.5,10" />
    </svg>
  );
}

// Blueprint annotation line component
function AnnotationLine({
  label,
  x1,
  y1,
  x2,
  y2,
}: {
  label: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2F6690" strokeWidth="0.75" strokeDasharray="3 2" />
      <circle cx={x1} cy={y1} r="2" fill="#2F6690" />
      <text
        x={x2 + 4}
        y={y2 + 4}
        fontSize="7"
        fill="#2F6690"
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.04em"
      >
        {label}
      </text>
    </g>
  );
}

export default function MegaInfraSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0.15);
  const { setBridgeProgress } = useWorldScene();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalDist = rect.height - windowH;
      if (totalDist <= 0) return;
      const prog = Math.min(1, Math.max(0, -rect.top / totalDist));
      setScrollProgress(prog);
      setBridgeProgress(Math.max(0.2, prog));
      if (prog < 0.33) setActiveStep(1);
      else if (prog < 0.66) setActiveStep(2);
      else setActiveStep(3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setBridgeProgress]);

  return (
    <section
      id="infrastructure"
      ref={containerRef}
      style={{
        background: "rgba(233, 230, 223, 0.90)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-20 sm:py-28"
    >
      {/* Top accent rule in Safety Orange */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--accent-orange)", opacity: 0.8 }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="section-number">05</span>
            <span className="dim-label" style={{ color: "var(--secondary-steel)" }}>
              / Mega Infrastructure
            </span>
          </div>
          <div className="orange-rule" style={{ marginBottom: "1.25rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "end" }}>
            <div>
              <h2
                className="heading-expanded"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
                  color: "var(--primary-navy)",
                  lineHeight: 1.07,
                }}
              >
                {siteConfig.megaInfrastructure.title}
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
                High-tensile expressways, civil hydrology, and regional connectivity corridors delivered from Pune across India.
              </p>
            </div>
            <span className="coord-label hidden lg:block">05 / CIVIL</span>
          </div>
        </div>

        {/* 2-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="block lg:grid"
        >
          {/* Left: steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {/* Capability card */}
            <div
              style={{
                padding: "1.5rem 1.75rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderLeft: "3px solid var(--primary-navy)",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--primary-navy)",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                ◈ {siteConfig.megaInfrastructure.capability.title}
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: 1.65 }}>
                {siteConfig.megaInfrastructure.capability.description}
              </p>
            </div>

            {/* 3 steps */}
            {siteConfig.megaInfrastructure.steps.map((step) => {
              const isActive = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => {
                    setActiveStep(step.step);
                    const newProg = (step.step - 0.5) / 3;
                    setScrollProgress(newProg);
                    setBridgeProgress(Math.max(0.2, newProg));
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "1.5rem 1.75rem",
                    background: isActive ? "var(--bg-card)" : "transparent",
                    border: "1px solid",
                    borderColor: isActive ? "var(--border-color)" : "transparent",
                    borderLeft: isActive ? "3px solid var(--accent-orange)" : "3px solid transparent",
                    borderRadius: 0,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    marginBottom: "2px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.625rem" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 28,
                        height: 28,
                        background: isActive ? "var(--primary-navy)" : "transparent",
                        border: `1.5px solid ${isActive ? "var(--primary-navy)" : "var(--border-color)"}`,
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        fontFamily: "ui-monospace, monospace",
                        color: isActive ? "#fff" : "var(--text-body)",
                        letterSpacing: "0.04em",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-archivo, ui-sans-serif)",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        color: isActive ? "var(--primary-navy)" : "var(--text-body)",
                        lineHeight: 1.2,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {step.title}
                    </h3>
                    {isActive && (
                      <span style={{ marginLeft: "auto", color: "var(--secondary-steel)" }}>
                        <IconArrow size={13} />
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-body)", lineHeight: 1.65, paddingLeft: "2.625rem" }}>
                    {step.description}
                  </p>
                  {isActive && (
                    <ul style={{ marginTop: "0.875rem", paddingLeft: "2.625rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      {step.highlights.map((h, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-body)" }}>
                          <span style={{ color: "var(--secondary-steel)", flexShrink: 0 }}><IconCheck size={11} /></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Blueprint diagram — procedural SVG bridge drawing */}
          <div
            style={{
              position: "sticky",
              top: "6rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              padding: "1.75rem",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "0.625rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--secondary-steel)",
                  fontWeight: 700,
                }}
              >
                PROCEDURAL STRUCTURAL VIEW
              </span>
              {/* Stage dots */}
              <div style={{ display: "flex", gap: 6 }}>
                {[1, 2, 3].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setActiveStep(s);
                      const newProg = (s - 0.5) / 3;
                      setScrollProgress(newProg);
                      setBridgeProgress(Math.max(0.2, newProg));
                    }}
                    style={{
                      height: 6,
                      width: activeStep === s ? 20 : 6,
                      background: activeStep === s ? "var(--primary-navy)" : "var(--border-color)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      padding: 0,
                    }}
                    aria-label={`Stage ${s}`}
                  />
                ))}
              </div>
            </div>

            {/* SVG architectural bridge drawing */}
            <svg
              viewBox="0 0 320 200"
              style={{ width: "100%", height: "auto", display: "block" }}
              aria-label="Procedural cable-stayed bridge diagram"
            >
              {/* Background */}
              <rect width="320" height="200" fill="#F7F5F0" />

              {/* Grid lines */}
              {[40, 80, 120, 160, 200, 240, 280].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#CFCBC2" strokeWidth="0.5" opacity="0.6" />
              ))}
              {[50, 100, 150].map((y) => (
                <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#CFCBC2" strokeWidth="0.5" opacity="0.6" />
              ))}

              {/* Water */}
              <rect x="0" y="158" width="320" height="42" fill="#2F6690" opacity="0.15" />
              <text x="8" y="173" fontSize="6" fill="#2F6690" fontFamily="ui-monospace, monospace" letterSpacing="0.06em" opacity="0.8">WATER LEVEL</text>

              {/* Piers — appear in step 1 */}
              {scrollProgress > 0 && (
                <>
                  {/* Pier L */}
                  <rect x="95" y="140" width="10" height="18" fill="#0F2A47" opacity="0.85" />
                  <rect x="90" y="135" width="20" height="6" fill="#0F2A47" opacity="0.85" />
                  {/* Pier R */}
                  <rect x="215" y="140" width="10" height="18" fill="#0F2A47" opacity="0.85" />
                  <rect x="210" y="135" width="20" height="6" fill="#0F2A47" opacity="0.85" />

                  {/* Pylons */}
                  <rect x="98" y="70" width="4" height="66" fill="#0F2A47" />
                  <rect x="218" y="70" width="4" height="66" fill="#0F2A47" />

                  {/* Steel accent band on pylons */}
                  <rect x="97" y="95" width="6" height="4" fill="#2F6690" />
                  <rect x="217" y="95" width="6" height="4" fill="#2F6690" />

                  <AnnotationLine label="PYLON HT: 80m" x1={100} y1={70} x2={38} y2={50} />
                </>
              )}

              {/* Deck — appears in step 2+ */}
              {scrollProgress > 0.33 && (
                <>
                  <rect x="20" y="136" width="280" height="5" fill="#0F2A47" opacity="0.9" />
                  <rect x="20" y="133" width="280" height="3" fill="#2F6690" opacity="0.3" />
                  {/* Guard rail */}
                  <line x1="20" y1="133" x2="300" y2="133" stroke="#0F2A47" strokeWidth="1" opacity="0.5" />
                  <line x1="20" y1="130" x2="300" y2="130" stroke="#0F2A47" strokeWidth="0.5" opacity="0.3" />

                  {/* Vehicles */}
                  {[55, 115, 175, 245].map((vx, vi) => (
                    <rect key={vi} x={vx} y={128} width={10} height={5} rx={1} fill={vi % 2 === 0 ? "#0F2A47" : "#2F6690"} opacity="0.9" />
                  ))}

                  <AnnotationLine label="DECK: 25m wide" x1={160} y1={133} x2={265} y2={116} />
                </>
              )}

              {/* Cables — appears in step 3 */}
              {scrollProgress > 0.66 && (
                <>
                  {/* L pylon cables */}
                  {[40, 62, 82, 125, 148, 168].map((x, i) => (
                    <line key={`lc${i}`} x1={100} y1={72 + i * 3} x2={x} y2={136} stroke="#2F6690" strokeWidth="0.8" opacity="0.75" />
                  ))}
                  {/* R pylon cables */}
                  {[152, 172, 195, 237, 258, 280].map((x, i) => (
                    <line key={`rc${i}`} x1={220} y1={72 + i * 3} x2={x} y2={136} stroke="#2F6690" strokeWidth="0.8" opacity="0.75" />
                  ))}
                  <AnnotationLine label="40 STAY CABLES" x1={160} y1={110} x2={200} y2={88} />
                </>
              )}

              {/* Dimension arrows */}
              <line x1="20" y1="188" x2="300" y2="188" stroke="#0F2A47" strokeWidth="0.75" opacity="0.5" />
              <text x="160" y="197" fontSize="6" fill="#3A4654" fontFamily="ui-monospace, monospace" textAnchor="middle" letterSpacing="0.05em">SPAN: 280m</text>
            </svg>

            <div
              style={{
                marginTop: "0.875rem",
                paddingTop: "0.75rem",
                borderTop: "1px solid var(--border-color)",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                color: "var(--text-body)",
                textTransform: "uppercase",
              }}
            >
              <span>SCROLL TO ASSEMBLE</span>
              <span style={{ color: "var(--secondary-steel)", fontWeight: 700 }}>100% PROCEDURAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
