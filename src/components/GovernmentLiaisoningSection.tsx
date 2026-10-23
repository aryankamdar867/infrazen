"use client";

import { siteConfig } from "@/content/site";

// Custom thin-line SVG icons — Regulatory & Advisory section
function IconFileCheck({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9l-6-6z" />
      <polyline points="15,3 15,9 21,9" />
      <polyline points="9,16 11,18 17,13" />
    </svg>
  );
}
function IconCompass({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="13" cy="13" r="10" />
      <polygon points="13,5 16,13 13,16 10,13" />
      <circle cx="13" cy="13" r="1.5" />
    </svg>
  );
}
function IconSpreadsheet({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="20" height="20" />
      <line x1="3" y1="10" x2="23" y2="10" />
      <line x1="3" y1="17" x2="23" y2="17" />
      <line x1="11" y1="3" x2="11" y2="23" />
    </svg>
  );
}
function IconLineChart({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="2,16 7,10 12,13 17,6 20,8" />
      <line x1="2" y1="19" x2="20" y2="19" />
    </svg>
  );
}
function IconGlobe({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="9" />
      <path d="M2 11h18M11 2a16 16 0 0 1 4 9 16 16 0 0 1-4 9 16 16 0 0 1-4-9 16 16 0 0 1 4-9z" />
    </svg>
  );
}
function IconMapPin({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 2a7 7 0 0 1 7 7c0 5-7 13-7 13S4 14 4 9a7 7 0 0 1 7-7z" />
      <circle cx="11" cy="9" r="2.5" />
    </svg>
  );
}
function IconShieldCheck({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 1.5L1.5 4v3.5c0 3 2.5 5.5 5.5 6 3-0.5 5.5-3 5.5-6V4L7 1.5z" />
      <polyline points="4.5,7 6.5,9 9.5,5.5" />
    </svg>
  );
}
function IconCheck({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1.5,6.5 4.5,9.5 10.5,2.5" />
    </svg>
  );
}

const liaisonIcons = [IconFileCheck, IconCompass, IconSpreadsheet];
const advisoryIcons = [IconLineChart, IconGlobe, IconMapPin];

const NAVY = "#0F2A47";
const STEEL = "#2F6690";
const ORANGE = "#F26A1B";

export default function GovernmentLiaisoningSection() {
  return (
    <section
      id="liaisoning"
      style={{
        background: "rgba(233, 230, 223, 0.90)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-20 sm:py-28"
    >
      {/* Top accent line in Safety Orange */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: ORANGE, opacity: 0.8 }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="section-number">07</span>
            <span className="dim-label" style={{ color: STEEL }}>/ Government Liaisoning</span>
          </div>
          <div style={{ height: 2, background: ORANGE, width: "3rem", marginBottom: "1.25rem" }} />
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
                {siteConfig.governmentLiaisoning.title}
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
                {siteConfig.governmentLiaisoning.description}
              </p>
            </div>
            <span className="coord-label hidden lg:block">07 / LIAISON</span>
          </div>
        </div>

        {/* 3 government liaisoning service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "1.5px",
            background: "var(--border-color)",
            border: "1.5px solid var(--border-color)",
            marginBottom: "3.5rem",
          }}
        >
          {siteConfig.governmentLiaisoning.services.map((item, idx) => {
            const Icon = liaisonIcons[idx] || IconFileCheck;
            return (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card)",
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  borderTop: `2px solid ${idx === 1 ? ORANGE : NAVY}`,
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
                  Regulatory Stream 0{idx + 1}
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
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-body)", lineHeight: 1.7, flexGrow: 1 }}>
                  {item.description}
                </p>

                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.6875rem",
                    color: "var(--text-body)",
                  }}
                >
                  <span style={{ color: STEEL }}><IconShieldCheck size={13} /></span>
                  <span>Central, State &amp; Municipal Jurisdiction</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory services — pre-development expertise */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            padding: "2.5rem 2rem",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ height: 2, background: ORANGE, width: "2.5rem", marginBottom: "1rem" }} />
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
              PRE-DEVELOPMENT EXPERTISE
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
              {siteConfig.advisoryServices.title}
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: 1.65 }}>
              {siteConfig.advisoryServices.subtitle}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {siteConfig.advisoryServices.items.map((service, idx) => {
              const Icon = advisoryIcons[idx % advisoryIcons.length] || IconLineChart;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "1.5rem",
                    background: "var(--bg-alt)",
                    border: "1px solid var(--border-color)",
                    borderTop: `2px solid ${idx % 2 === 0 ? NAVY : STEEL}`,
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
                    {service.title}
                  </h4>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-body)", lineHeight: 1.65, marginBottom: "1rem" }}>
                    {service.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.6875rem",
                      color: "var(--text-body)",
                      fontFamily: "ui-monospace, monospace",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <span style={{ color: STEEL }}><IconCheck size={11} /></span>
                    Statutory Compliant
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
