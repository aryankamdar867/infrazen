"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <line x1="2" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" />
      <line x1="2" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 2h3l1 3-1.5 1.5a8 8 0 003 3L9 8l3 1v3a1 1 0 01-1 1C4.5 13 1 9.5 1 5a1 1 0 011-3z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      setIsVisible(y < lastScrollY || y < 100);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 50,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.28s ease, background 0.28s ease, border-color 0.28s ease",
    background: isScrolled
      ? "rgba(247, 245, 240, 0.96)"
      : "rgba(247, 245, 240, 0.88)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: isScrolled ? "1px solid var(--border-color)" : "1px solid transparent",
  };

  return (
    <header style={navStyle}>
      <div
        style={{
          maxWidth: "84rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.25rem",
        }}
        className="h-[70px] sm:h-[76px]"
      >
        {/* Official Brand Logo */}
        <Link
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
          className="group transition-transform hover:scale-[1.01]"
        >
          <img
            src="/infrazen-logo-horizontal.png"
            alt="Infrazen Mega Projects Private Limited Logo"
            style={{
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
            className="h-[38px] sm:h-[48px] md:h-[56px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main Navigation"
          style={{
            gap: "0.125rem",
          }}
          className="hidden lg:flex items-center"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--slate)",
                letterSpacing: "0.04em",
                padding: "0.375rem 0.75rem",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--secondary-steel)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text-body)"; }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.company.contact.phoneRaw}`}
            className="hidden md:flex items-center gap-1.5"
            style={{
              fontSize: "0.6875rem", color: "var(--text-body)", textDecoration: "none",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.02em",
            }}
          >
            <IconPhone />
            {siteConfig.company.contact.phoneDisplay}
          </a>
          <a href="#contact" className="btn-navy" style={{ whiteSpace: "nowrap", fontSize: "0.6875rem" }}>
            Start a Project
          </a>
        </div>

        {/* Mobile quick actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${siteConfig.company.contact.phoneRaw}`}
            className="flex items-center justify-center w-8 h-8 border border-[var(--border-color)] text-[var(--primary-navy)] rounded-[2px]"
            aria-label="Call Infrazen desk"
          >
            <IconPhone />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              padding: "0.375rem",
              background: "transparent",
              border: "1px solid var(--border-color)",
              borderRadius: "2px",
              color: "var(--primary-navy)",
              cursor: "pointer",
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            top: "70px", left: 0, right: 0, bottom: 0,
            background: "rgba(247, 245, 240, 0.98)",
            backdropFilter: "blur(16px)",
            zIndex: 49,
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div>
            <div className="mb-6 flex justify-center pb-4 border-b border-[var(--border-color)]">
              <img
                src="/infrazen-logo-full.png"
                alt="Infrazen Mega Projects Private Limited Logo"
                style={{ height: "72px", width: "auto", objectFit: "contain" }}
              />
            </div>
            <div className="dim-label" style={{ marginBottom: "1rem" }}>Navigation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-archivo)",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "var(--primary-navy)",
                    textDecoration: "none",
                    padding: "0.875rem 0",
                    borderBottom: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {item.label}
                  <span style={{ color: "var(--primary-navy)", fontSize: "1rem" }}>→</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border-color)" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text-body)", marginBottom: "1rem", lineHeight: 1.6 }}>
              <strong style={{ display: "block", marginBottom: "0.25rem", fontFamily: "var(--font-archivo)", color: "var(--primary-navy)" }}>
                {siteConfig.company.legalName}
              </strong>
              <span style={{ color: "var(--text-body)", opacity: 0.75 }}>{siteConfig.company.address.full}</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-navy"
              style={{ width: "100%", justifyContent: "center", display: "flex" }}
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
