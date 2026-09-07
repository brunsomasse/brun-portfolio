import { useEffect, useState } from "react";
import { useTheme } from "../theme";

export function RotatingRole({ roles, interval = 2200, style }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % roles.length), interval);
    return () => clearInterval(id);
  }, [roles, interval]);
  return (
    <span
      key={idx}
      style={{
        display: "inline-block",
        animation: "roleFadeIn 0.45s ease",
        ...style,
      }}
    >
      {roles[idx]}
    </span>
  );
}

export function XIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.8l-5.3-6.9L5 22H1.9l8.2-9.3L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L7.4 4H5.3l12.4 16Z" />
    </svg>
  );
}

export function SkillPill({ label }) {
  const { t } = useTheme();
  return (
    <span
      style={{
        fontSize: 13,
        fontFamily: "'JetBrains Mono', monospace",
        color: t.pillInk,
        background: t.pillBg,
        padding: "7px 13px",
        borderRadius: 999,
        border: `1px solid ${t.line}`,
      }}
    >
      {label}
    </span>
  );
}

export function IconLink({ href, label, children }) {
  const { t } = useTheme();
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      style={{
        width: 34,
        height: 34,
        border: `1px solid ${t.line}`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: t.ink,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

export function SectionShell({ id, title, count, children }) {
  const { t } = useTheme();
  return (
    <section id={id} style={{ padding: "64px 32px", borderTop: `1px solid ${t.line}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 26,
              fontWeight: 600,
              color: t.ink,
              margin: 0,
            }}
          >
            {title}
          </h2>
          {count && (
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: t.inkFaint }}>
              {count}
            </span>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
