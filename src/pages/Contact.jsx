import { useTheme } from "../theme";
import { SectionShell } from "../components/Bits";

export default function Contact() {
  const { t } = useTheme();
  return (
    <SectionShell id="contact" title="Get in touch">
      <p style={{ color: t.inkSoft, maxWidth: "56ch" }}>
        The quickest ways to reach me are below — phone, email, or through the social
        links in the footer. Replace these with your real details before publishing.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 28, maxWidth: 560 }}>
        <div style={{ border: `1px solid ${t.line}`, borderRadius: 3, padding: 20, background: t.bgRaised }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Phone</div>
          <a href="tel:+000000000000" style={{ fontSize: 15, color: t.ink, textDecoration: "none" }}>+000 00 000 0000</a>
        </div>
        <div style={{ border: `1px solid ${t.line}`, borderRadius: 3, padding: 20, background: t.bgRaised }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkFaint, marginBottom: 8 }}>Email</div>
          <a href="mailto:hello@example.com" style={{ fontSize: 15, color: t.ink, textDecoration: "none" }}>hello@example.com</a>
        </div>
      </div>
    </SectionShell>
  );
}
