"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Counter({ end, prefix = "", suffix = "", active }: {
  end: number; prefix?: string; suffix?: string; active: boolean;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const dur = 1600;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, end]);
  return <>{prefix}{val}{suffix}</>;
}

export default function NumbersStrip() {
  const { ref, inView } = useInView();
  return (
    <section
      id="numbers"
      ref={ref}
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "84rem", margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "3rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div>
            <div className="section-number" style={{ color: "var(--primary-navy)" }}>02 / Financial Highlights</div>
            <h2
              className="heading-expanded"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--primary-navy)",
                marginTop: "0.5rem",
                fontWeight: 700,
              }}
            >
              Growth Story
            </h2>
          </div>
          <p
            style={{
              maxWidth: "32ch",
              fontSize: "0.875rem",
              color: "var(--text-body)",
              lineHeight: 1.65,
              marginTop: "auto",
            }}
          >
            Infrazen is on a rapid growth trajectory, demonstrating strong execution capability and growing market trust across India.
          </p>
        </div>

        {/* Stat columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {siteConfig.numbers.items.map((item, i) => (
            <div
              key={item.id}
              className="pt-6 pb-6 lg:py-8 lg:pr-7 lg:mr-7 border-t-2 border-[var(--accent-orange)] lg:border-r border-[var(--border-color)] last:border-r-0 last:mr-0 last:pr-0"
            >
              <div className="dim-label" style={{ marginBottom: "0.75rem" }}>
                Metric 0{i + 1}
              </div>
              <div
                className="stat-number text-4xl sm:text-5xl font-bold font-[var(--font-heading)] text-[var(--primary-navy)]"
              >
                <Counter
                  end={item.number}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  active={inView}
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--primary-navy)",
                  margin: "0.5rem 0 0.375rem",
                }}
              >
                {item.label}
              </h3>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-body)", lineHeight: 1.55 }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Growth strip */}
        <div
          className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
        >
          <div className="dim-label flex-shrink-0">YoY Growth Trajectory</div>
          <div className="flex items-center gap-3 flex-wrap">
            {[
              { label: "FY 24–25 Delivered", val: "₹12 Cr", accent: false },
              { label: "FY 25–26", val: "₹20 Cr", accent: true },
              { label: "Order Book", val: "₹100 Cr+", accent: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="py-1.5 px-3 rounded-[2px]"
                  style={{
                    border: s.accent ? "1px solid var(--secondary-steel)" : "1px solid var(--border-color)",
                    background: s.accent ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <div className="dim-label">{s.label}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--primary-navy)",
                    }}
                  >
                    {s.val}
                  </div>
                </div>
                {i < 2 && (
                  <span style={{ color: "rgba(46,62,80,0.35)", fontSize: "0.875rem" }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
