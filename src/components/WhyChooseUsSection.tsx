"use client";

import { siteConfig } from "@/content/site";

// Custom thin-line SVG icons — Distinction section
function IconShieldAlert({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L3 7v7c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L13 2z" />
      <line x1="13" y1="10" x2="13" y2="14" />
      <circle cx="13" cy="17" r="0.75" fill="currentColor" />
    </svg>
  );
}
function IconBoxes({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="13" width="10" height="10" />
      <rect x="14" y="13" width="10" height="10" />
      <rect x="8" y="3" width="10" height="10" />
      <line x1="7" y1="13" x2="12" y2="13" />
      <line x1="14" y1="13" x2="19" y2="13" />
    </svg>
  );
}
function IconTrend({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="2,18 9,11 14,15 24,6" />
      <polyline points="18,6 24,6 24,12" />
    </svg>
  );
}
function IconAward({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="13" r="9" />
      <polyline points="11,22 16,32 21,22" />
      <polyline points="16,4 18,9 24,9 19,13 21,19 16,15 11,19 13,13 8,9 14,9" />
    </svg>
  );
}
function IconHandshake({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14l-4-4H9L2 17l6 6 7-7" />
      <path d="M13 18l4 4h6l7-7-6-6-7 7" />
    </svg>
  );
}
function IconCheck({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1,6 4,9 10,2" />
    </svg>
  );
}

const cardIcons = [IconShieldAlert, IconBoxes, IconTrend];

const NAVY = "#0F2A47";
const STEEL = "#2F6690";
const ORANGE = "#F26A1B";

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      style={{
        background: "rgba(233, 230, 223, 0.90)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-20 sm:py-28"
    >
      {/* Safety orange top accent rule */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: ORANGE, opacity: 0.8 }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="section-number">09</span>
            <span className="dim-label" style={{ color: STEEL }}>/ Why Infrazen</span>
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
                {siteConfig.whyChooseInfrazen.title}
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
                Engineered for high-stakes institutional execution where safety, precision, and delivery speed are paramount.
              </p>
            </div>
            <span className="coord-label hidden lg:block">09 / PROMISE</span>
          </div>
        </div>

        {/* 3 capability cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5px",
            background: "var(--border-color)",
            border: "1.5px solid var(--border-color)",
            marginBottom: "3.5rem",
          }}
        >
          {siteConfig.whyChooseInfrazen.cards.map((card, idx) => {
            const Icon = cardIcons[idx] || IconShieldAlert;
            return (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card)",
                  padding: "2.25rem 1.875rem",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: `3px solid ${idx === 1 ? ORANGE : idx === 2 ? STEEL : NAVY}`,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: STEEL,
                    border: `1px solid ${STEEL}40`,
                    marginBottom: "1.5rem",
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
                    marginBottom: "0.4rem",
                  }}
                >
                  Distinction 0{idx + 1}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-archivo, ui-sans-serif)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: NAVY,
                    lineHeight: 1.25,
                    marginBottom: "0.875rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-body)",
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  {card.description}
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
                    fontFamily: "ui-monospace, monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span style={{ color: STEEL }}><IconCheck size={10} /></span>
                  Verified Infrazen Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* Track record strip */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5px",
            overflow: "hidden",
          }}
          className="block sm:grid"
        >
          {/* Experience */}
          <div style={{ padding: "2.5rem 2rem", background: "var(--bg-card)", display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: NAVY,
                border: `1.5px solid ${NAVY}40`,
                flexShrink: 0,
              }}
            >
              <IconAward size={28} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  color: NAVY,
                  lineHeight: 1,
                }}
              >
                {siteConfig.whyChooseInfrazen.trackRecord.experience.value}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: NAVY,
                  marginTop: "0.25rem",
                  lineHeight: 1.25,
                }}
              >
                {siteConfig.whyChooseInfrazen.trackRecord.experience.label}
              </h4>
              <p style={{ fontSize: "0.75rem", color: "var(--text-body)", marginTop: "0.25rem", lineHeight: 1.55 }}>
                {siteConfig.whyChooseInfrazen.trackRecord.experience.desc}
              </p>
            </div>
          </div>

          {/* Commitment */}
          <div
            style={{
              padding: "2.5rem 2rem",
              background: "var(--bg-alt)",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: STEEL,
                border: `1.5px solid ${STEEL}40`,
                flexShrink: 0,
              }}
            >
              <IconHandshake size={28} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  color: NAVY,
                  lineHeight: 1,
                }}
              >
                {siteConfig.whyChooseInfrazen.trackRecord.commitment.value}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: NAVY,
                  marginTop: "0.25rem",
                  lineHeight: 1.25,
                }}
              >
                {siteConfig.whyChooseInfrazen.trackRecord.commitment.label}
              </h4>
              <p style={{ fontSize: "0.75rem", color: "var(--text-body)", marginTop: "0.25rem", lineHeight: 1.55 }}>
                {siteConfig.whyChooseInfrazen.trackRecord.commitment.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
