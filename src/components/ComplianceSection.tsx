"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

function IconShieldCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 1.5L2 4v4c0 3.5 2.8 6.7 6 7.5 3.2-.8 6-4 6-7.5V4L8 1.5z" />
      <polyline points="5,8 7,10 11,6" />
    </svg>
  );
}
function IconCopy({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="8" height="8" />
      <path d="M1 9V2a1 1 0 0 1 1-1h7" />
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
function IconInfo({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="6" />
      <line x1="7.5" y1="5" x2="7.5" y2="5.1" />
      <line x1="7.5" y1="7" x2="7.5" y2="11" />
    </svg>
  );
}

const NAVY = "#0F2A47";
const STEEL = "#2F6690";

export default function ComplianceSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const visibleItems = siteConfig.registrations.items.filter((item) => item.visible);

  return (
    <section
      id="compliance"
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
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="section-number">10</span>
            <span className="dim-label" style={{ color: STEEL }}>/ Compliance</span>
          </div>
          <div className="navy-rule" style={{ marginBottom: "1.25rem" }} />

          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between" }}>
            <div>
              <h2
                className="heading-expanded"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
                  color: NAVY,
                  lineHeight: 1.07,
                }}
              >
                {siteConfig.registrations.title}
              </h2>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "var(--text-body)",
                  fontSize: "0.9375rem",
                  maxWidth: "56ch",
                  lineHeight: 1.65,
                }}
              >
                Official statutory identifications, corporate registration, and labour welfare records.
              </p>
            </div>

            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.125rem",
                background: NAVY,
                color: "#fff",
                fontSize: "0.6875rem",
                fontFamily: "ui-monospace, monospace",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              <IconShieldCheck size={13} />
              <span>{siteConfig.registrations.badge}</span>
            </div>
          </div>
        </div>

        {/* Compliance table */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            overflow: "hidden",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
              aria-label="Corporate Registrations and Compliance Records"
            >
              <thead>
                <tr
                  style={{
                    background: "var(--bg-alt)",
                    borderBottom: "1px solid var(--border-color)",
                  }}
                >
                  {["Registration Authority / Type", "Statutory Identification Number", "Jurisdiction & Notes", ""].map((h, i) => (
                    <th
                      key={i}
                      scope="col"
                      style={{
                        padding: "0.875rem 1.5rem",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "0.625rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "var(--text-body)",
                        fontWeight: 700,
                        opacity: 0.75,
                        whiteSpace: "nowrap",
                      }}
                      className={i === 2 ? "hidden md:table-cell" : i === 3 ? "text-right" : ""}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleItems.map((item, idx) => (
                  <tr
                    key={item.id}
                    style={{
                      borderBottom: "1px solid var(--border-color)",
                      background: idx % 2 === 0 ? "var(--bg-card)" : "var(--bg-alt)",
                    }}
                  >
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        fontFamily: "var(--font-archivo, ui-sans-serif)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: NAVY,
                        minWidth: 220,
                      }}
                    >
                      {item.label}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        fontFamily: "ui-monospace, monospace",
                        fontWeight: 700,
                        fontSize: "0.8125rem",
                        color: NAVY,
                        letterSpacing: "0.06em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.value}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        fontSize: "0.75rem",
                        color: "var(--text-body)",
                        whiteSpace: "nowrap",
                      }}
                      className="hidden md:table-cell"
                    >
                      {item.notes || "Statutory Record"}
                    </td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "right" }}>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.value)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          padding: "0.375rem 0.75rem",
                          background: copiedId === item.id ? NAVY : "var(--bg-card)",
                          border: "1px solid var(--border-color)",
                          fontSize: "0.6875rem",
                          color: copiedId === item.id ? "#fff" : "var(--text-body)",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          fontFamily: "ui-monospace, monospace",
                          whiteSpace: "nowrap",
                        }}
                        aria-label={`Copy ${item.label}`}
                      >
                        {copiedId === item.id ? (
                          <>
                            <IconCheck size={12} />
                            <span style={{ fontWeight: 700 }}>Copied</span>
                          </>
                        ) : (
                          <>
                            <IconCopy size={12} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "var(--bg-alt)",
              borderTop: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            <span style={{ color: STEEL, flexShrink: 0, marginTop: 1 }}>
              <IconInfo size={14} />
            </span>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--text-body)",
                lineHeight: 1.65,
              }}
            >
              {siteConfig.registrations.complianceNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
