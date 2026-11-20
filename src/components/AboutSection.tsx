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
        background: "rgba(247, 245, 240, 0.94)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
      }}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div style={{ maxWidth: "84rem", margin: "0 auto" }}>
        {/* Header row: stacks on mobile/tablet, 2-cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-12 lg:mb-16 items-start lg:items-end">
          <div>
            <div className="section-number">03 / Company Overview</div>
            <h2
              className="heading-expanded"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--heading)",
                marginTop: "0.625rem",
                lineHeight: 1.15,
              }}
            >
              Engineering the Nation's Next-Generation Assets.
            </h2>
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-[var(--border-color)] pt-6 lg:pt-0 lg:pl-8">
            <p style={{ fontSize: "0.9375rem", color: "var(--slate)", lineHeight: 1.7, opacity: 0.9 }}>
              {siteConfig.about.whoWeAre.description}
            </p>
            <div style={{ marginTop: "1.25rem" }}>
              {siteConfig.about.headquartersPune.bullets.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--border-color)",
                    fontSize: "0.8125rem",
                    color: "var(--slate)",
                  }}
                >
                  <span style={{ color: "var(--secondary-steel)", marginTop: "2px", flexShrink: 0, fontWeight: 700 }}>—</span>
                  <span>{b}</span>
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
            marginBottom: "2rem",
          }}
          className="p-6 sm:p-10"
        >
          <div className="section-number" style={{ marginBottom: "1rem", color: "var(--primary-navy)" }}>Vision</div>
          <blockquote
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              color: "var(--primary-navy)",
              lineHeight: 1.5,
              maxWidth: "54ch",
              margin: 0,
            }}
          >
            &ldquo;{siteConfig.about.vision.statement}&rdquo;
          </blockquote>

          {/* 3 pillars: stacked on mobile, 3-cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-8 pt-8 border-t border-[var(--border-color)]">
            {siteConfig.about.vision.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <div
                  key={i}
                  className="border-t md:border-t-0 md:border-l first:border-t-0 md:first:border-l-0 border-[var(--border-color)] pt-5 md:pt-0 px-0 md:px-6"
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

        {/* Mission cards: 1 col on mobile, 3 cols on desktop */}
        <div>
          <div className="section-number" style={{ marginBottom: "1rem", color: "var(--primary-navy)" }}>Mission</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {siteConfig.about.mission.cards.map((card) => (
              <div
                key={card.tag}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border-color)",
                  borderRadius: "2px",
                }}
                className="p-6 sm:p-8"
              >
                <div className="dim-label" style={{ marginBottom: "0.75rem", color: "var(--secondary-steel)" }}>
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
