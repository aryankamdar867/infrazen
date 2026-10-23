"use client";

import { siteConfig } from "@/content/site";

// Custom thin-line SVG icons (Steel blue accent section)
function IconHospital({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="6" width="20" height="17" />
      <line x1="3" y1="12" x2="23" y2="12" />
      <rect x="10" y="6" width="6" height="6" />
      <line x1="11" y1="15" x2="15" y2="15" />
      <line x1="13" y1="13" x2="13" y2="17" />
    </svg>
  );
}
function IconCpu({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="7" width="12" height="12" />
      <rect x="10" y="10" width="6" height="6" />
      <line x1="10" y1="3" x2="10" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="10" y1="19" x2="10" y2="23" />
      <line x1="16" y1="19" x2="16" y2="23" />
      <line x1="3" y1="10" x2="7" y2="10" />
      <line x1="3" y1="16" x2="7" y2="16" />
      <line x1="19" y1="10" x2="23" y2="10" />
      <line x1="19" y1="16" x2="23" y2="16" />
    </svg>
  );
}
function IconShield({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 3L4 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7L13 3z" />
      <polyline points="9,13 12,16 17,11" />
    </svg>
  );
}
function IconLayout({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="18" height="18" />
      <line x1="2" y1="8" x2="20" y2="8" />
      <line x1="9" y1="8" x2="9" y2="20" />
    </svg>
  );
}
function IconZap({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="13,2 6,13 11,13 9,20 16,9 11,9" />
    </svg>
  );
}
function IconFlame({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.5 14a5.5 5.5 0 1 0 9.5-3.7C16 8 14 6.5 13 3c-.5 3-2 4.5-3.5 5.5A5.5 5.5 0 0 0 8.5 14z" />
    </svg>
  );
}
function IconMaximize({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="14,2 20,2 20,8" />
      <polyline points="8,20 2,20 2,14" />
      <line x1="20" y1="2" x2="13" y2="9" />
      <line x1="2" y1="20" x2="9" y2="13" />
    </svg>
  );
}

const pillarIcons = [IconHospital, IconCpu, IconShield];
const activityIcons = [IconLayout, IconZap, IconFlame, IconMaximize];

const STEEL = "#2F6690";
const NAVY = "#0F2A47";

export default function HealthcareEPCSection() {
  return (
    <section
      id="healthcare"
      style={{
        background: "rgba(247, 245, 240, 0.92)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-20 sm:py-28"
    >
      {/* Steel blue top accent rule */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: STEEL, opacity: 0.6 }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="section-number">06</span>
            <span className="dim-label" style={{ color: STEEL }}>/ Healthcare EPC</span>
          </div>
          <div style={{ height: 2, background: STEEL, width: "3rem", marginBottom: "1.25rem" }} />
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
                {siteConfig.healthcareEPC.title}
              </h2>
              <p
                style={{
                  marginTop: "0.875rem",
                  color: "var(--text-body)",
                  fontSize: "1rem",
                  maxWidth: "58ch",
                  lineHeight: 1.7,
                }}
              >
                {siteConfig.healthcareEPC.subtitle}
              </p>
            </div>
            <span className="coord-label hidden lg:block">06 / HEALTH</span>
          </div>
        </div>

        {/* 3 turnkey pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5px",
            background: "var(--border-color)",
            border: "1.5px solid var(--border-color)",
            marginBottom: "4rem",
          }}
        >
          {siteConfig.healthcareEPC.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || IconHospital;
            return (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card)",
                  padding: "2rem 1.75rem",
                  borderTop: `2px solid ${idx === 1 ? NAVY : STEEL}`,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: STEEL,
                    border: `1px solid ${STEEL}40`,
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={24} />
                </div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "ui-monospace, monospace",
                    fontSize: "0.625rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--text-body)",
                    opacity: 0.65,
                    marginBottom: "0.35rem",
                  }}
                >
                  Pillar 0{idx + 1}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-archivo, ui-sans-serif)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: NAVY,
                    lineHeight: 1.25,
                    marginBottom: "0.75rem",
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-body)", lineHeight: 1.7 }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clinical activities grid — alt bg, white activity cards */}
        <div
          style={{
            background: "var(--bg-alt)",
            border: "1px solid var(--border-color)",
            padding: "2.5rem 2rem",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <span
              style={{
                display: "block",
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.625rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: STEEL,
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              CLINICAL &amp; STRUCTURAL PRECISION
            </span>
            <h3
              style={{
                fontFamily: "var(--font-archivo, ui-sans-serif)",
                fontWeight: 700,
                fontSize: "clamp(1.375rem, 3vw, 2rem)",
                color: NAVY,
                lineHeight: 1.15,
                marginBottom: "0.625rem",
              }}
            >
              {siteConfig.healthcareEPC.activitiesTitle}
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: 1.65 }}>
              High-specification healthcare design engineering strictly conforming to clinical hygiene, radiation barrier, and patient workflow protocols.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
              gap: "1rem",
            }}
          >
            {siteConfig.healthcareEPC.activities.map((activity, idx) => {
              const Icon = activityIcons[idx % activityIcons.length] || IconLayout;
              return (
                <div
                  key={idx}
                  style={{
                    background: "var(--bg-card)",
                    padding: "1.5rem",
                    border: "1px solid var(--border-color)",
                    borderTop: `2px solid ${STEEL}`,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: STEEL,
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-archivo, ui-sans-serif)",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: NAVY,
                      lineHeight: 1.25,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {activity.title}
                  </h4>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-body)", lineHeight: 1.65 }}>
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
