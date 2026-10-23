"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";

// Custom thin-line SVG icons
function IconBuilding({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="6" width="12" height="18" />
      <rect x="16" y="12" width="8" height="12" />
      <line x1="8" y1="10" x2="12" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
      <line x1="8" y1="18" x2="12" y2="18" />
      <line x1="19" y1="16" x2="22" y2="16" />
      <line x1="19" y1="20" x2="22" y2="20" />
    </svg>
  );
}
function IconHardHat({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 18h18M14 7v5M9 12a5 5 0 0 1 10 0" />
      <path d="M5 18a9 9 0 0 1 18 0" />
      <rect x="5" y="18" width="18" height="4" rx="1" />
    </svg>
  );
}
function IconCross({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="10" y="4" width="8" height="20" rx="1" />
      <rect x="4" y="10" width="20" height="8" rx="1" />
    </svg>
  );
}
function IconActivity({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3,14 8,14 11,7 14,21 17,10 20,14 25,14" />
    </svg>
  );
}
function IconLandmark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="24" x2="24" y2="24" />
      <line x1="4" y1="11" x2="24" y2="11" />
      <line x1="14" y1="4" x2="4" y2="11" />
      <line x1="14" y1="4" x2="24" y2="11" />
      <line x1="7" y1="11" x2="7" y2="24" />
      <line x1="12" y1="11" x2="12" y2="24" />
      <line x1="16" y1="11" x2="16" y2="24" />
      <line x1="21" y1="11" x2="21" y2="24" />
    </svg>
  );
}
function IconCompass({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="14" cy="14" r="10" />
      <polygon points="14,6 17,14 14,17 11,14" />
      <circle cx="14" cy="14" r="1.5" />
    </svg>
  );
}
function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="2" y1="7" x2="12" y2="7" />
      <polyline points="8,3 12,7 8,11" />
    </svg>
  );
}
function IconCheck({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="2,7 5,10 11,3" />
    </svg>
  );
}

const iconComponents: React.FC<{ size?: number }>[] = [
  IconBuilding, IconHardHat, IconCross, IconActivity, IconLandmark, IconCompass,
];

// Accent colours for card top lines/fills only (alternating Navy, Steel Blue, Safety Orange)
const lineAccentColors = [
  "#0F2A47", "#2F6690", "#F26A1B", "#0F2A47", "#2F6690", "#F26A1B",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "rgba(247, 245, 240, 0.92)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-20 sm:py-28"
    >
      <div className="grid-lines" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-14 sm:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="section-number" style={{ color: "var(--primary-navy)" }}>04</span>
              <span className="dim-label" style={{ color: "var(--secondary-steel)" }}>
                / Services
              </span>
            </div>
            <div className="navy-rule mb-5" />
            <h2
              className="heading-expanded"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "var(--primary-navy)",
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              {siteConfig.services.title}
            </h2>
            <p
              style={{
                marginTop: "1rem",
                color: "var(--text-body)",
                fontSize: "1.0625rem",
                maxWidth: "52ch",
                lineHeight: 1.65,
              }}
            >
              {siteConfig.services.subtitle}
            </p>
          </div>
          <div className="lg:col-span-4 text-right hidden lg:block">
            <span className="coord-label">18.5204° N, 73.8567° E</span>
          </div>
        </div>

        {/* 6 service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5px",
            background: "var(--border-color)",
            border: "1.5px solid var(--border-color)",
          }}
        >
          {siteConfig.services.items.map((service, index) => {
            const Icon = iconComponents[index % iconComponents.length];
            const lineAccent = lineAccentColors[index % lineAccentColors.length];
            return (
              <ServiceCard
                key={service.id}
                service={service}
                Icon={Icon}
                lineAccent={lineAccent}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof siteConfig.services.items)[0];
  Icon: React.FC<{ size?: number }>;
  lineAccent: string;
  index: number;
}

function ServiceCard({ service, Icon, lineAccent, index }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        padding: "2.25rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "default",
        transition: "background 0.2s ease",
        ...(hovered ? { background: "var(--bg-main)" } : {}),
      }}
    >
      <div>
        {/* Top accent line */}
        <div
          style={{
            height: "2px",
            background: lineAccent,
            width: hovered ? "100%" : "2.5rem",
            marginBottom: "1.75rem",
            transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        {/* Icon + index */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
          <div
            style={{
              color: lineAccent,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${lineAccent}`,
              borderRadius: 2,
              flexShrink: 0,
            }}
          >
            <Icon size={26} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--text-body)",
              opacity: 0.6,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              lineHeight: 1,
              paddingTop: 4,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Category (Text is Steel Blue, never orange as text on light background!) */}
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            color: "var(--secondary-steel)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: "0.35rem",
          }}
        >
          {service.category}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "1.175rem",
            color: "var(--primary-navy)",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          {service.title}
        </h3>

        {/* Summary */}
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-body)",
            lineHeight: 1.7,
            fontFamily: "var(--font-body)",
          }}
        >
          {service.summary}
        </p>

        {/* Feature list */}
        <ul
          style={{
            marginTop: "1.25rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border-color)",
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
          }}
        >
          {service.features.map((feat, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                color: "var(--text-body)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span style={{ color: "var(--secondary-steel)", flexShrink: 0 }}>
                <IconCheck size={12} />
              </span>
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer link */}
      <div
        style={{
          marginTop: "1.75rem",
          paddingTop: "1rem",
          borderTop: "1px solid var(--border-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          color: "var(--secondary-steel)",
          transition: "color 0.2s ease",
        }}
      >
        <span>Explore Capability</span>
        <span
          style={{
            transform: hovered ? "translateX(3px)" : "translateX(0)",
            transition: "transform 0.2s ease",
          }}
        >
          <IconArrowRight size={13} />
        </span>
      </div>
    </div>
  );
}
