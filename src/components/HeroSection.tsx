"use client";

import { siteConfig } from "@/content/site";

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <line x1="2" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="10,5 14,9 10,13" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <polyline points="3,6 8,11 13,6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: "2rem",
      }}
      className="pt-28 sm:pt-32"
    >
      {/* 12-column grid-line overlay */}
      <div
        className="grid-lines"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Left text-legibility gradient — keeping headline razor-sharp on left, 3D tower open on right */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(247,245,240,0.96) 0%, rgba(247,245,240,0.90) 50%, rgba(247,245,240,0.15) 72%, transparent 88%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
        aria-hidden
      />
      {/* Mobile legibility wash — soft 85% cream wash so text has 100% readability while 3D tower/cranes silhouette gently */}
      <div
        className="block md:hidden"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(247,245,240,0.85)",
          pointerEvents: "none",
          zIndex: 1,
        }}
        aria-hidden
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "84rem",
          margin: "0 auto",
          padding: "2rem 1.5rem 0",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "46rem" }}>
          {/* Annotation coordinate label with Official Emblem */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            <img
              src="/infrazen-emblem.png"
              alt="Infrazen Mega Projects Emblem"
              style={{
                height: "38px",
                width: "auto",
                objectFit: "contain",
              }}
              className="h-8 sm:h-9"
            />
            <div
              className="coord-label"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
              }}
            >
              <span>18.5204° N, 73.8567° E</span>
              <span style={{ width: "3rem", height: 1, background: "var(--border-color)", display: "inline-block" }} />
              <span>PUNE, MAHARASHTRA</span>
            </div>
          </div>

          {/* Hero Headline — Archivo 700 */}
          <h1
            className="heading-expanded"
            style={{
              fontSize: "clamp(2.125rem, 6vw, 7.5rem)",
              color: "var(--primary-navy)",
              marginBottom: "1.5rem",
              maxWidth: "18ch",
              fontWeight: 700,
            }}
          >
            Building the Future with{" "}
            <span
              style={{
                color: "var(--secondary-steel)",
                fontWeight: 700,
              }}
            >
              World-Class
            </span>{" "}
            Infrastructure.
          </h1>

          {/* Sub-headline — Public Sans 400-500 */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              color: "var(--text-body)",
              lineHeight: 1.7,
              maxWidth: "38ch",
              marginBottom: "2.5rem",
              fontWeight: 400,
            }}
          >
            {siteConfig.hero.subheadline}
          </p>

          {/* CTA row — left-anchored, asymmetric */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <a href={siteConfig.hero.primaryCta.href} className="btn-navy">
              {siteConfig.hero.primaryCta.label}
              <IconArrow />
            </a>

            <a href={siteConfig.hero.secondaryCta.href} className="btn-outline">
              {siteConfig.hero.secondaryCta.label}
            </a>

            {/* Dimension callout line with Safety Orange rule */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginLeft: "1rem",
              }}
            >
              <div style={{ height: 2, width: "3rem", background: "var(--accent-orange)" }} />
              <div>
                <div className="dim-label">Est. order book</div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--primary-navy)",
                    lineHeight: 1,
                  }}
                >
                  ₹50 Cr+
                </div>
              </div>
            </div>
          </div>

          {/* Key capability pills */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border-color)",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            {[
              "Turnkey Hospital EPC",
              "Highways & Bridges",
              "Govt. Liaisoning",
              "15+ Yrs Combined Experience",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.6875rem",
                  color: "var(--text-body)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 5, height: 5,
                    background: "var(--secondary-steel)",
                    borderRadius: "1px",
                    display: "block",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 1.5rem",
          maxWidth: "84rem",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <a
          href="#numbers"
          aria-label="Scroll to next section"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "rgba(46,62,80,0.5)",
            textDecoration: "none",
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            transition: "color 0.2s",
          }}
        >
          <div
            style={{
              width: 28, height: 44,
              border: "1px solid rgba(46,62,80,0.25)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "6px",
            }}
          >
            <div
              style={{
                width: 4, height: 8,
                background: "var(--violet)",
                borderRadius: "2px",
                animation: "scrollBounce 1.6s ease-in-out infinite",
              }}
            />
          </div>
          Scroll
          <IconChevronDown />
        </a>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
