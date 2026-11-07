import { Link } from "react-router-dom";
import { useTheme, WORK_ITEMS } from "../theme";
import { SectionShell } from "../components/Bits";
import { ArrowRight } from "lucide-react";

export default function Work() {
  const { t } = useTheme();
  
  return (
    <SectionShell id="work" title="Infrastructure & Deployments" count="03 selected">
      {WORK_ITEMS.map((item, i) => (
        <div
          key={item.index}
          className="bp-work-item"
          style={{
            display: "grid",
            gridTemplateColumns: "64px 1fr auto",
            gap: 24,
            alignItems: "start",
            padding: i === 0 ? "0 0 32px" : "32px 0",
            borderBottom: `1px solid ${t.line}`,
          }}
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: t.inkFaint, fontSize: 13, paddingTop: 4 }}>
            {item.index}
          </div>
          
          <div>
            <Link 
              to={`/work/${item.slug || item.index}`} 
              style={{ textDecoration: "none" }}
            >
              <div style={{ fontSize: 19, fontWeight: 600, color: t.ink, display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s" }} 
                   onMouseEnter={(e) => e.currentTarget.style.color = "#4ade80"}
                   onMouseLeave={(e) => e.currentTarget.style.color = t.ink}
              >
                {item.title}
              </div>
            </Link>
            
            <div style={{ color: t.inkSoft, marginTop: 10, maxWidth: "65ch", fontSize: 15, lineHeight: 1.6 }}>
              {item.desc}
            </div>
            
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {item.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, border: `1px solid ${t.line}`, borderRadius: 4, padding: "4px 10px", background: t.bgRaised }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 16 }}>
              <Link 
                to={`/work/${item.slug || item.index}`} 
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: t.ink, textDecoration: "none", borderBottom: `1px solid ${t.line}`, paddingBottom: 2 }}
              >
                View Architecture <ArrowRight size={14} />
              </Link>
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
