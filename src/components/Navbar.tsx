"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="5" x2="17" y2="5" />
      <line x1="3" y1="10" x2="17" y2="10" />
      <line x1="3" y1="15" x2="17" y2="15" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setIsScrolled(y > 50);
          setIsVisible(y < lastScrollYRef.current || y < 100);
          lastScrollYRef.current = y;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 50,
    transform: isVisible || mobileOpen ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.28s ease, background 0.28s ease, border-color 0.28s ease",
    background: isScrolled
      ? "rgba(247, 245, 240, 0.96)"
      : "rgba(247, 245, 240, 0.88)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: isScrolled ? "1px solid var(--border-color)" : "1px solid transparent",
  };

  return (
    <>
      <header style={navStyle}>
        <div
          style={{
            maxWidth: "84rem",
            margin: "0 auto",
            padding: "0 1.25rem",
            height: "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
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
              className="h-[36px] sm:h-[48px] md:h-[56px]"
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

          {/* Right CTAs Desktop */}
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

          {/* Mobile quick actions (Phone icon + 3-dash Hamburger button) */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.company.contact.phoneRaw}`}
              className="flex items-center justify-center w-9 h-9 border border-[var(--border-color)] text-[var(--primary-navy)] bg-white/80 active:scale-95 rounded-[2px]"
              aria-label="Call Infrazen desk"
            >
              <IconPhone />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-10 h-10 border border-[var(--border-color)] text-[var(--primary-navy)] bg-white/80 active:scale-95 rounded-[2px] cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Drawer mounted outside the transformed header */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(247, 245, 240, 0.99)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            height: "100dvh",
            width: "100vw",
            overflowY: "auto",
            overscrollBehavior: "contain",
          }}
        >
          {/* Top Bar inside Drawer */}
          <div
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 1.25rem",
              borderBottom: "1px solid var(--border-color)",
              flexShrink: 0,
            }}
          >
            <img
              src="/infrazen-logo-horizontal.png"
              alt="Infrazen Mega Projects Logo"
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-10 h-10 border border-[var(--border-color)] text-[var(--primary-navy)] bg-white/90 active:scale-95 rounded-[2px] cursor-pointer"
              aria-label="Close navigation menu"
            >
              <IconClose />
            </button>
          </div>

          {/* Nav links scrollable body */}
          <div
            style={{
              flex: 1,
              padding: "1.5rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div>
              <div
                className="dim-label"
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  color: "var(--secondary-steel)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Navigation Menu
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {siteConfig.navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "var(--font-heading)",
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
                    <span>{item.label}</span>
                    <span style={{ color: "var(--secondary-steel)", fontSize: "1.125rem", fontWeight: 700 }}>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                <a
                  href={`tel:${siteConfig.company.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold rounded-[2px] border border-[var(--border-color)] bg-white text-[var(--primary-navy)]"
                  style={{ textDecoration: "none" }}
                >
                  <IconPhone />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.company.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.company.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold rounded-[2px] border border-[var(--secondary-steel)] bg-[var(--secondary-steel)] text-white"
                  style={{ textDecoration: "none" }}
                >
                  <span>WhatsApp</span>
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-navy"
                style={{ width: "100%", justifyContent: "center", display: "flex", padding: "0.875rem" }}
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
