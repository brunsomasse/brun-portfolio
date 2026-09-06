import { useTheme } from "../theme";

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
