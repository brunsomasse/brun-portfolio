import { useTheme, WORK_ITEMS } from "../theme";
import { SectionShell } from "../components/Bits";

export default function Work() {
  const { t } = useTheme();
  return (
    <SectionShell id="work" title="Work" count="04 selected">
      {WORK_ITEMS.map((item, i) => (
        <div
          key={item.index}
          className="bp-work-item"
          style={{
            display: "grid",
            gridTemplateColumns: "64px 1fr auto",
            gap: 24,
            alignItems: "start",
            padding: i === 0 ? "0 0 26px" : "26px 0",
            borderBottom: `1px solid ${t.line}`,
          }}
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: t.inkFaint, fontSize: 13, paddingTop: 4 }}>{item.index}</div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 600, color: t.ink }}>{item.title}</div>
            <div style={{ color: t.inkSoft, marginTop: 8, maxWidth: "60ch", fontSize: 14.5 }}>{item.desc}</div>
            <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {item.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, border: `1px solid ${t.line}`, borderRadius: 4, padding: "3px 8px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: t.inkFaint, whiteSpace: "nowrap", paddingTop: 5, textAlign: "right" }}>
            {item.meta}
          </div>
        </div>
      ))}
    </SectionShell>
  );
}
