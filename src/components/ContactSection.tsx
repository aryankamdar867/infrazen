"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/content/site";

function IconPhone({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.67 11.27v2.67a1.33 1.33 0 0 1-1.45 1.33 13.2 13.2 0 0 1-5.75-2.05 13 13 0 0 1-4-4 13.2 13.2 0 0 1-2.05-5.8A1.33 1.33 0 0 1 2.74 2h2.67a1.33 1.33 0 0 1 1.33 1.15c.08.64.24 1.26.47 1.86a1.33 1.33 0 0 1-.3 1.41L5.78 7.55a10.67 10.67 0 0 0 4 4l1.13-1.13a1.33 1.33 0 0 1 1.41-.3c.6.23 1.22.39 1.86.47a1.33 1.33 0 0 1 1.16 1.35z" />
    </svg>
  );
}

function IconMessageSquare({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 10a2 2 0 0 1-2 2H4l-3 3V3a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v7z" />
    </svg>
  );
}

function IconMapPin({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 1.33A4.67 4.67 0 0 0 3.33 6c0 3.5 4.67 8.67 4.67 8.67s4.67-5.17 4.67-8.67A4.67 4.67 0 0 0 8 1.33z" />
      <circle cx="8" cy="6" r="1.67" />
    </svg>
  );
}

function IconSend({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="14.67" y1="1.33" x2="7.33" y2="8.67" />
      <polygon points="14.67 1.33 10 14.67 7.33 8.67 1.33 6 14.67 1.33" />
    </svg>
  );
}

function IconCheck({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14 9 11" />
    </svg>
  );
}

const NAVY = "#0F2A47";
const STEEL = "#2F6690";
const ORANGE = "#F26A1B";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: siteConfig.contact.projectTypes[0] || "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(siteConfig.company.contact.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          projectType: siteConfig.contact.projectTypes[0] || "",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Submission could not be completed. Please reach out directly by telephone.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network issue encountered. Please contact our corporate desk directly.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "rgba(233, 230, 223, 0.90)",
        borderTop: "1px solid var(--border-color)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="section-number">11</span>
            <span className="dim-label" style={{ color: STEEL }}>/ Contact</span>
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
                {siteConfig.contact.title}
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
                {siteConfig.contact.subtitle}
              </p>
            </div>
            <span className="coord-label hidden lg:block">18.5204° N, 73.8567° E</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Coordinates, Direct Channels, Map */}
          <div className="lg:col-span-5 space-y-6">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                padding: "2rem",
                borderRadius: "3px",
              }}
            >
              <span className="dim-label block mb-2" style={{ color: STEEL }}>CORPORATE HEADQUARTERS</span>
              <h3
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: NAVY,
                  marginBottom: "1rem",
                  lineHeight: 1.25,
                }}
              >
                Infrazen Mega Projects Pvt. Ltd.
              </h3>

              <div className="space-y-3 text-sm" style={{ color: "var(--text-body)" }}>
                <div className="flex items-start gap-3">
                  <div style={{ color: NAVY, marginTop: 2, flexShrink: 0 }}>
                    <IconMapPin size={16} />
                  </div>
                  <p className="leading-relaxed">{siteConfig.company.address.full}</p>
                </div>
              </div>

              {/* Direct Actions: Call & WhatsApp */}
              <div className="pt-6 mt-6 border-t border-[var(--border-color)] flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.company.contact.phoneRaw}`}
                  className="btn-navy"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", padding: "0.625rem 1.25rem" }}
                >
                  <IconPhone size={14} />
                  <span>Call {siteConfig.company.contact.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.company.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.company.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.8125rem",
                    padding: "0.625rem 1.25rem",
                    background: STEEL,
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  <IconMessageSquare size={14} />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Map Container */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                padding: "0.5rem",
                borderRadius: "3px",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden", background: "var(--bg-alt)" }}>
                <iframe
                  title="Infrazen Headquarters Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.567115857211!2d73.85412497595563!3d18.50325996970868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c069bb2f77e9%3A0xe54efba77f113642!2sPatil%20Plaza%2C%20Mitra%20Mandal%20Chowk%2C%20Pune%2C%20Maharashtra%20411009!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-3 text-[11px] font-mono flex justify-between" style={{ color: "var(--text-body)" }}>
                <span>PATIL PLAZA, PUNE 411009</span>
                <span style={{ color: NAVY, fontWeight: 700 }}>VERIFIED OFFICE LOC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Formal RFP / Engagement Inquiry Form */}
          <div className="lg:col-span-7">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                padding: "2.5rem 2rem",
                borderRadius: "3px",
              }}
            >
              <div className="mb-6 pb-4 border-b border-[var(--border-color)]">
                <span className="dim-label block mb-1" style={{ color: STEEL }}>TECHNICAL / TENDER INQUIRY</span>
                <h3
                  style={{
                    fontFamily: "var(--font-archivo, ui-sans-serif)",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    color: NAVY,
                  }}
                >
                  Initiate Project Discussion
                </h3>
              </div>

              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      margin: "0 auto",
                      borderRadius: "50%",
                      background: "rgba(15,42,71,0.08)",
                      color: NAVY,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconCheck size={28} />
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-archivo, ui-sans-serif)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: NAVY,
                    }}
                  >
                    Inquiry Successfully Logged
                  </h4>
                  <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-body)" }}>
                    Thank you. Our engineering desk has received your submission and will review the specifications within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-outline mt-4"
                    style={{ fontSize: "0.75rem", padding: "0.5rem 1rem" }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-body)" }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Er. Rajesh Patil"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          border: "1px solid var(--border-color)",
                          borderRadius: "2px",
                          fontSize: "0.875rem",
                          color: NAVY,
                          background: "#FFFFFF",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-body)" }}>
                        Entity / Organization *
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Maharashtra PWD / Apollo Hospital"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          border: "1px solid var(--border-color)",
                          borderRadius: "2px",
                          fontSize: "0.875rem",
                          color: NAVY,
                          background: "#FFFFFF",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-body)" }}>
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98220 00000"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          border: "1px solid var(--border-color)",
                          borderRadius: "2px",
                          fontSize: "0.875rem",
                          color: NAVY,
                          background: "#FFFFFF",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-body)" }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@domain.gov.in"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          border: "1px solid var(--border-color)",
                          borderRadius: "2px",
                          fontSize: "0.875rem",
                          color: NAVY,
                          background: "#FFFFFF",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-body)" }}>
                      Scope / Engagement Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "1px solid var(--border-color)",
                        borderRadius: "2px",
                        fontSize: "0.875rem",
                        color: NAVY,
                        background: "#FFFFFF",
                        outline: "none",
                      }}
                    >
                      {siteConfig.contact.projectTypes.map((type, i) => (
                        <option key={i} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-body)" }}>
                      Project Specifications / Requirements *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope, location, estimated timeline, and statutory requirements..."
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "1px solid var(--border-color)",
                        borderRadius: "2px",
                        fontSize: "0.875rem",
                        color: NAVY,
                        background: "#FFFFFF",
                        outline: "none",
                        resize: "none",
                      }}
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 text-xs" style={{ background: "rgba(242,106,27,0.1)", color: NAVY, borderLeft: "3px solid #F26A1B" }}>
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-orange w-full py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <IconSend size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center" style={{ color: "var(--text-body)", opacity: 0.75 }}>
                    Confidentiality assured under Indian IT Act &amp; DPDP Act standards. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
