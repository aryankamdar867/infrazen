"use client";

import { siteConfig } from "@/content/site";

function IconExcellence() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
      <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" />
    </svg>
  );
}
function IconInnovation() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
      <path d="M12 2a7 7 0 015.66 11.22L16 15H8l-1.66-1.78A7 7 0 0112 2z" />
      <line x1="8" y1="15" x2="8" y2="19" /><line x1="16" y1="15" x2="16" y2="19" />
      <line x1="9" y1="22" x2="15" y2="22" />
    </svg>
  );
}
function IconSustainability() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
      <path d="M12 22c-5 0-9-4-9-9C3 8 7 4 12 4s9 4 9 9-4 9-9 9z" />
      <path d="M8 12c0-2 2-4 4-4 0 2-1 4-4 4z" />
      <path d="M16 12c0-2-2-4-4-4 0 2 1 4 4 4z" />
      <line x1="12" y1="8" x2="12" y2="22" />
    </svg>
  );
}

const pillarIcons = [IconExcellence, IconInnovation, IconSustainability];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "5rem 1.5rem",
        background: "rgba(247, 245, 240, 0.92)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "84rem", margin: "0 auto" }}>
        {/* Header row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "4rem", alignItems: "end" }}>
          <div>
            <div className="section-number">03 / Company Overview</div>
            <h2
              className="heading-expanded"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--heading)",
                marginTop: "0.625rem",
              }}
            >
              Engineering the Nation's Next-Generation Assets.
            </h2>
          </div>
          <div style={{ borderLeft: "1px solid var(--hairline)", paddingLeft: "2rem" }}>
            <p style={{ fontSize: "0.9375rem", color: "var(--slate)", lineHeight: 1.7, opacity: 0.85 }}>
              {siteConfig.about.whoWeAre.description}
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              {siteConfig.about.headquartersPune.bullets.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--hairline)",
                    fontSize: "0.8125rem",
                    color: "var(--slate)",
                  }}
                >
                  <span style={{ color: "var(--violet)", marginTop: "2px", flexShrink: 0 }}>—</span>
                  {b}
                </div>
              ))}
            </div>
            <div className="coord-label" style={{ marginTop: "1rem" }}>
              Patil Plaza, Mitra Mandal Chowk, Pune 411009
            </div>
          </div>
        </div>

        {/* Vision block */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--border-color)",
            borderRadius: "2px",
            padding: "2.5rem",
            marginBottom: "2rem",
          }}
        >
          <div className="section-number" style={{ marginBottom: "1rem", color: "var(--primary-navy)" }}>Vision</div>
          <blockquote
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
              fontWeight: 600,
              color: "var(--primary-navy)",
              lineHeight: 1.5,
              maxWidth: "54ch",
              margin: 0,
            }}
          >
            &ldquo;{siteConfig.about.vision.statement}&rdquo;
          </blockquote>

          {/* 3 pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0",
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border-color)",
            }}
          >
            {siteConfig.about.vision.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <div
                  key={i}
                  style={{
                    paddingRight: i < 2 ? "2rem" : "0",
                    paddingLeft: i > 0 ? "2rem" : "0",
                    borderLeft: i > 0 ? "1px solid var(--border-color)" : "none",
                  }}
                >
                  <div style={{ color: "var(--secondary-steel)", marginBottom: "0.75rem" }}>
                    <Icon />
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--primary-navy)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-body)", lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission cards */}
        <div>
          <div className="section-number" style={{ marginBottom: "1.5rem", color: "var(--primary-navy)" }}>Mission</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background: "var(--border-color)",
              border: "1px solid var(--border-color)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            {siteConfig.about.mission.cards.map((card) => (
              <div
                key={card.tag}
                style={{
                  background: "#FFFFFF",
                  padding: "2rem",
                }}
              >
                <div className="dim-label" style={{ marginBottom: "1rem", color: "var(--secondary-steel)" }}>
                  {card.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "var(--primary-navy)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-body)", lineHeight: 1.65 }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
