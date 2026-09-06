import { Github, Linkedin } from "lucide-react";
import { useTheme } from "../theme";
import { IconLink, XIcon } from "./Bits";

export default function Footer() {
  const { t } = useTheme();
  return (
    <footer style={{ borderTop: `1px solid ${t.line}`, padding: "52px 32px 30px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="bp-footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Phone</div>
            <a href="tel:+2290197799021" style={{ fontSize: 15, color: t.ink, textDecoration: "none", display: "block" }}>+229 01 97 79 90 21</a>
            <a href="tel:+2330261134223" style={{ fontSize: 15, color: t.ink, textDecoration: "none", display: "block", marginTop: 4 }}>+233 02 61 13 42 23</a>
          </div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Email</div>
            <a href="mailto:brunsomasse@gmail.com" style={{ fontSize: 15, color: t.ink, textDecoration: "none" }}>brunsomasse@gmail.com</a>
          </div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Follow</div>
            <div style={{ display: "flex", gap: 12 }}>
              <IconLink href="https://github.com/brunsomasse" label="GitHub"><Github size={16} /></IconLink>
              <IconLink href="https://www.linkedin.com/in/brunsomasse/" label="LinkedIn"><Linkedin size={16} /></IconLink>
              <IconLink href="https://x.com/brunsomasse" label="X"><XIcon size={15} /></IconLink>
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
          <span>Copyright © {new Date().getFullYear()} Brun Somasse.</span>
          <span>Built with a page of my own.</span>
        </div>
      </div>
    </footer>
  );
}
