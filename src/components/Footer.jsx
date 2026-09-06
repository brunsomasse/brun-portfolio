import { Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "../theme";
import { IconLink } from "./Bits";

export default function Footer() {
  const { t } = useTheme();
  return (
    <footer style={{ borderTop: `1px solid ${t.line}`, padding: "52px 32px 30px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="bp-footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Phone</div>
            <a href="tel:+000000000000" style={{ fontSize: 15, color: t.ink, textDecoration: "none" }}>+000 00 000 0000</a>
          </div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Email</div>
            <a href="mailto:hello@example.com" style={{ fontSize: 15, color: t.ink, textDecoration: "none" }}>hello@example.com</a>
          </div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Follow</div>
            <div style={{ display: "flex", gap: 12 }}>
              <IconLink href="#" label="GitHub"><Github size={16} /></IconLink>
              <IconLink href="#" label="LinkedIn"><Linkedin size={16} /></IconLink>
              <IconLink href="#" label="X / Twitter"><Twitter size={15} /></IconLink>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Based in</div>
            <div style={{ fontSize: 15, color: t.ink }}>Available on request</div>
          </div>
        </div>
        <div
          style={{
            marginTop: 44,
            paddingTop: 20,
            borderTop: `1px solid ${t.line}`,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            fontSize: 13,
            color: t.inkFaint,
          }}
        >
          <span>Copyright © {new Date().getFullYear()} Brun.</span>
          <span>Built with a page of my own.</span>
        </div>
      </div>
    </footer>
  );
}
