import Link from "next/link";
import { siteConfig } from "@/content/site";

function IconArrowLeft({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="13" y1="8" x2="3" y2="8" />
      <polyline points="7,4 3,8 7,12" />
    </svg>
  );
}

function IconShieldCheck({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2L3 5v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V5l-7-3z" />
      <polyline points="6.5,10 9,12.5 13.5,7.5" />
    </svg>
  );
}

export const metadata = {
  title: "Privacy Policy | Infrazen Mega Projects Private Limited",
  description: "Privacy policy and data governance statement for Infrazen Mega Projects Private Limited, Pune, Maharashtra.",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        background: "var(--bg-main)",
        minHeight: "100vh",
        color: "var(--text-body)",
        paddingTop: "5rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.75rem",
            fontFamily: "ui-monospace, monospace",
            fontWeight: 700,
            color: "var(--primary-navy)",
            textDecoration: "none",
            marginBottom: "2rem",
            letterSpacing: "0.08em",
          }}
        >
          <IconArrowLeft size={14} />
          <span>RETURN TO HOME</span>
        </Link>

        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            padding: "3rem 2.5rem",
            borderRadius: "3px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "var(--primary-navy)", marginBottom: "1rem" }}>
            <IconShieldCheck size={20} />
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              Legal Governance
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-archivo, ui-sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--primary-navy)",
              lineHeight: 1.15,
            }}
          >
            Privacy Policy &amp; Data Protection Statement
          </h1>

          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.75rem",
              fontFamily: "ui-monospace, monospace",
              color: "var(--text-body)",
              opacity: 0.75,
            }}
          >
            Effective Date: January 1, 2026 | Last Revised: February 2026 | Document Ref: IZ-LEGAL-DP-2026-v2
          </p>

          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              fontSize: "0.875rem",
              lineHeight: 1.75,
            }}
          >
            <section>
              <h2
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--primary-navy)",
                  marginBottom: "0.75rem",
                }}
              >
                1. Corporate Identification
              </h2>
              <p>
                This privacy statement governs the digital portal of{" "}
                <strong style={{ color: "var(--primary-navy)" }}>{siteConfig.company.legalName}</strong> (&ldquo;Infrazen&rdquo;, &ldquo;Company&rdquo;), registered under the Companies Act, 2013, with CIN{" "}
                <code style={{ fontFamily: "ui-monospace, monospace", color: "var(--secondary-steel)" }}>U41001PN2024PTC233435</code>, having its registered office at {siteConfig.company.address.full}.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--primary-navy)",
                  marginBottom: "0.75rem",
                }}
              >
                2. Information Collection &amp; Use
              </h2>
              <p>
                We collect personal information solely when voluntarily submitted through our technical RFP and inquiry portals (including corporate name, officer designation, official email, telephone, and project specifications). This information is processed exclusively for evaluating infrastructure engineering partnerships, procurement feasibility, and statutory communications.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--primary-navy)",
                  marginBottom: "0.75rem",
                }}
              >
                3. Statutory Compliance (DPDP Act, 2023)
              </h2>
              <p>
                Infrazen adheres strictly to the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000. Data is never monetized, rented, or transferred to third-party commercial brokers. Data disclosures occur solely under lawful directives from Indian judicial, statutory, or regulatory authorities.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--primary-navy)",
                  marginBottom: "0.75rem",
                }}
              >
                4. Data Security &amp; Storage
              </h2>
              <p>
                Inquiries transmitted via our portal utilize industry-standard TLS encryption. Data is retained in compliant cloud environments with restricted engineering access protocols. Inquiries older than 36 months without active contractual engagement are systematically purged.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontFamily: "var(--font-archivo, ui-sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--primary-navy)",
                  marginBottom: "0.75rem",
                }}
              >
                5. Grievance Officer &amp; Inquiries
              </h2>
              <p>
                For questions regarding this policy, data correction, or grievance redressal under Indian regulations, please direct correspondence to:
              </p>
              <div
                style={{
                  marginTop: "0.75rem",
                  padding: "1rem 1.25rem",
                  background: "var(--bg-alt)",
                  border: "1px solid var(--border-color)",
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "0.75rem",
                }}
              >
                <div>Legal &amp; Compliance Desk</div>
                <div>Infrazen Mega Projects Private Limited</div>
                <div>Office No: A 95, Ground Floor, Patil Plaza, Pune - 411009</div>
                <div>Email: {siteConfig.company.contact.email}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
