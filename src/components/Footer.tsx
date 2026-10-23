"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

function IconMapPin({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.5 1.5A4.5 4.5 0 0 0 3 6c0 3.375 4.5 7.5 4.5 7.5s4.5-4.125 4.5-7.5a4.5 4.5 0 0 0-4.5-4.5z" />
      <circle cx="7.5" cy="6" r="1.5" />
    </svg>
  );
}

function IconPhone({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.5 10.5v2.25a1.125 1.125 0 0 1-1.23 1.125 11.14 11.14 0 0 1-4.86-1.73 11 11 0 0 1-3.38-3.38A11.14 11.14 0 0 1 2.3 3.9 1.125 1.125 0 0 1 3.42 2.75h2.25a1.125 1.125 0 0 1 1.13.97c.07.54.2 1.07.4 1.58a1.125 1.125 0 0 1-.26 1.19L5.99 7.44a9 9 0 0 0 3.38 3.38l.95-.95a1.125 1.125 0 0 1 1.2-.26c.51.2 1.04.33 1.58.4a1.125 1.125 0 0 1 .98 1.14z" />
    </svg>
  );
}

function IconMail({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1.5" y="2.5" width="12" height="10" rx="1" />
      <path d="M1.5 4.5l6 4.5 6-4.5" />
    </svg>
  );
}

function IconArrowUp({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="12" x2="7" y2="2" />
      <polyline points="3,6 7,2 11,6" />
    </svg>
  );
}

function IconShieldCheck({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.5 1.5L2 3.8v3.8c0 3.3 2.3 6.3 5.5 7.1 3.2-.8 5.5-3.8 5.5-7.1V3.8L7.5 1.5z" />
      <polyline points="4.5,7.5 6.5,9.5 10.5,5.5" />
    </svg>
  );
}

const NAVY = "#0F2A47";
const STEEL = "#2F6690";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
      }}
      className="pt-16 pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-[var(--border-color)]">
          {/* Brand & Corporate Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <Link href="#hero" className="inline-block mb-3 transition-transform hover:scale-[1.01]">
                <img
                  src="/infrazen-logo-horizontal.png"
                  alt="Infrazen Mega Projects Private Limited Logo"
                  style={{
                    height: "64px",
                    width: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                  className="h-14 sm:h-16"
                />
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono block font-semibold" style={{ color: STEEL }}>
                  CIN: U41001PN2024PTC233435
                </span>
                <span style={{ color: "var(--border-color)" }}>•</span>
                <span className="text-[11px] font-mono block" style={{ color: "var(--text-body)", opacity: 0.8 }}>
                  RoC Pune, Maharashtra
                </span>
              </div>
            </div>

            <p className="text-sm max-w-md leading-relaxed" style={{ color: "var(--text-body)" }}>
              &ldquo;{siteConfig.company.tagline}&rdquo;
            </p>

            <div className="pt-2 text-xs space-y-2.5" style={{ color: "var(--text-body)" }}>
              <div className="flex items-start gap-2.5">
                <span style={{ color: STEEL, marginTop: 1, flexShrink: 0 }}>
                  <IconMapPin size={15} />
                </span>
                <span>{siteConfig.company.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span style={{ color: STEEL, flexShrink: 0 }}>
                  <IconPhone size={15} />
                </span>
                <a
                  href={`tel:${siteConfig.company.contact.phoneRaw}`}
                  className="hover:underline"
                  style={{ color: NAVY, fontWeight: 500 }}
                >
                  {siteConfig.company.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span style={{ color: STEEL, flexShrink: 0 }}>
                  <IconMail size={15} />
                </span>
                <a
                  href={`mailto:${siteConfig.company.contact.email}`}
                  className="hover:underline"
                  style={{ color: NAVY, fontWeight: 500 }}
                >
                  {siteConfig.company.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Anchor Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.6875rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontWeight: 700,
                color: NAVY,
                marginBottom: "1rem",
              }}
            >
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{ color: "var(--text-body)", transition: "color 0.15s ease" }}
                    className="hover:text-[var(--primary-navy)] inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Statutory Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.6875rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontWeight: 700,
                color: NAVY,
                marginBottom: "1rem",
              }}
            >
              Statutory Credentials
            </h4>
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                padding: "1rem 1.25rem",
                borderRadius: "2px",
              }}
              className="space-y-2 text-xs font-mono"
            >
              <div className="flex justify-between">
                <span style={{ color: "var(--text-body)" }}>GSTIN:</span>
                <span style={{ color: NAVY, fontWeight: 600 }}>27AAHCI8006L1ZA</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--text-body)" }}>PAN:</span>
                <span style={{ color: NAVY, fontWeight: 600 }}>AAHCI8006L</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--text-body)" }}>TAN:</span>
                <span style={{ color: NAVY, fontWeight: 600 }}>PNEI12999A</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--text-body)" }}>ESIC / EPFO:</span>
                <span style={{ color: STEEL, fontWeight: 700 }}>Fully Active</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-body)" }}>
              <span style={{ color: STEEL }}>
                <IconShieldCheck size={14} />
              </span>
              <span>Ministry of Corporate Affairs, Govt. of India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--text-body)" }}>
          <p>© 2026 {siteConfig.company.legalName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:underline" style={{ color: NAVY }}>
              Privacy Policy
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.375rem 0.75rem",
                border: "1px solid var(--border-color)",
                background: "var(--bg-card)",
                borderRadius: "2px",
                color: NAVY,
                cursor: "pointer",
              }}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <IconArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
