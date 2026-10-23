function IconLock({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="12" height="8" rx="1" />
      <path d="M5.5 8V5a3.5 3.5 0 0 1 7 0v3" />
    </svg>
  );
}

function IconDoc({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.5 1.5H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5l-3.5-3.5z" />
      <polyline points="8.5,1.5 8.5,5 12,5" />
    </svg>
  );
}

interface PlaceholderProps {
  title: string;
  category: string;
  note: string;
}

export default function PlaceholderNotice({ title, category, note }: PlaceholderProps) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px dashed var(--border-color)",
        padding: "2rem",
        textAlign: "center",
        margin: "2.5rem 0",
        borderRadius: "3px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--border-color)",
          color: "var(--primary-navy)",
          marginBottom: "1rem",
        }}
      >
        <IconLock size={18} />
      </div>

      <span
        style={{
          display: "block",
          fontFamily: "ui-monospace, monospace",
          fontSize: "0.625rem",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "var(--secondary-steel)",
          fontWeight: 700,
          marginBottom: "0.25rem",
        }}
      >
        {category}
      </span>

      <h4
        style={{
          fontFamily: "var(--font-archivo, ui-sans-serif)",
          fontWeight: 700,
          fontSize: "1.125rem",
          color: "var(--primary-navy)",
          lineHeight: 1.25,
        }}
      >
        {title}
      </h4>

      <p
        style={{
          marginTop: "0.5rem",
          fontSize: "0.8125rem",
          color: "var(--text-body)",
          maxWidth: "46ch",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
        }}
      >
        {note}
      </p>

      <div
        style={{
          marginTop: "1rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.6875rem",
          fontFamily: "ui-monospace, monospace",
          color: "var(--secondary-steel)",
        }}
      >
        <IconDoc size={12} />
        <span>INFRAZEN ARCHITECTURAL SPECIFICATION</span>
      </div>
    </div>
  );
}
