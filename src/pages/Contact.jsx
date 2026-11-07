import { useState } from "react";
import { useTheme } from "../theme";
import { SectionShell } from "../components/Bits";
import { Terminal, Mail, Github, Copy, CheckCircle2, Activity, Phone } from "lucide-react";

export default function Contact() {
  const { t } = useTheme();
  const [copied, setCopied] = useState(false);

  const contactData = {
    email: "brunsomasse@gmail.com",
    phone_gh: "+233 02 61 13 42 23",
    phone_bj: "+229 01 97 79 90 21"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionShell id="contact" title="Contact & Comm">
      <div style={{ maxWidth: "65ch" }}>
        
        {/* The DevOps Availability Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.bgRaised, padding: "6px 12px", borderRadius: 4, border: `1px solid ${t.line}`, marginBottom: 28, fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "#4ade80", boxShadow: "0 2px 8px rgba(74, 222, 128, 0.1)" }}>
          <Activity size={14} /> STATUS: 200 OK | ACCEPTING ARCHITECTURE PROJECTS
        </div>

        {/* Solutions-Oriented Copy */}
        <p style={{ color: t.inkSoft, fontSize: 17, lineHeight: 1.6, marginBottom: 16 }}>
          Whether you need to untangle a sprawling GCP IAM environment, design a multi-region Kubernetes cluster, or implement strict Infrastructure as Code pipelines, let's talk architecture.
        </p>

        {/* Interactive Terminal JSON Contact Block */}
        <div style={{ background: "#0D1117", border: `1px solid ${t.line}`, borderRadius: 6, overflow: "hidden", marginBottom: 36, boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px", borderBottom: `1px solid ${t.line}`, background: t.bgRaised }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: t.inkFaint, fontFamily: "'JetBrains Mono', monospace" }}>
              <Terminal size={14} /> zsh - contact.json
            </div>
            <button 
              onClick={handleCopy}
              style={{ background: "transparent", border: "none", color: copied ? "#4ade80" : t.inkSoft, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontFamily: "'JetBrains Mono', monospace", transition: "color 0.2s" }}
            >
              {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />} {copied ? "COPIED EMAIL" : "COPY EMAIL"}
            </button>
          </div>
          
          <div style={{ padding: "24px 16px", fontFamily: "'JetBrains Mono', monospace", fontSize: 14, display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <span style={{ color: "#4ade80" }}>mac@macs-MacBook-Air</span>
              <span style={{ color: "#e6edf3" }}>:</span>
              <span style={{ color: "#79c0ff" }}>~/contact</span>
              <span style={{ color: t.inkSoft }}> % </span> 
              <span style={{ color: "#e6edf3" }}>cat details.json</span>
            </div>
            <div style={{ color: "#e6edf3", paddingLeft: 16, lineHeight: 1.7 }}>
              <div>{`{`}</div>
              <div style={{ paddingLeft: 16 }}>
                <span style={{ color: "#79c0ff" }}>"email"</span>: <span style={{ color: "#a5d6ff" }}>"{contactData.email}"</span>,
              </div>
              <div style={{ paddingLeft: 16 }}>
                <span style={{ color: "#79c0ff" }}>"phone_gh"</span>: <span style={{ color: "#a5d6ff" }}>"{contactData.phone_gh}"</span>,
              </div>
              <div style={{ paddingLeft: 16 }}>
                <span style={{ color: "#79c0ff" }}>"phone_bj"</span>: <span style={{ color: "#a5d6ff" }}>"{contactData.phone_bj}"</span>
              </div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>

        {/* Professional Action Links */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href={`mailto:${contactData.email}`} style={{ display: "flex", alignItems: "center", gap: 8, color: t.ink, textDecoration: "none", fontSize: 14, fontWeight: 500, padding: "10px 18px", border: `1px solid ${t.line}`, borderRadius: 4, background: t.bgRaised, transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = t.line} onMouseLeave={(e) => e.currentTarget.style.background = t.bgRaised}>
            <Mail size={16} /> Email
          </a>
          <a href={`tel:${contactData.phone_gh.replace(/\s+/g, '')}`} style={{ display: "flex", alignItems: "center", gap: 8, color: t.ink, textDecoration: "none", fontSize: 14, fontWeight: 500, padding: "10px 18px", border: `1px solid ${t.line}`, borderRadius: 4, background: t.bgRaised, transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = t.line} onMouseLeave={(e) => e.currentTarget.style.background = t.bgRaised}>
            <Phone size={16} /> Call (GH)
          </a>
          <a href={`tel:${contactData.phone_bj.replace(/\s+/g, '')}`} style={{ display: "flex", alignItems: "center", gap: 8, color: t.ink, textDecoration: "none", fontSize: 14, fontWeight: 500, padding: "10px 18px", border: `1px solid ${t.line}`, borderRadius: 4, background: t.bgRaised, transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = t.line} onMouseLeave={(e) => e.currentTarget.style.background = t.bgRaised}>
            <Phone size={16} /> Call (BJ)
          </a>
          <a href="https://github.com/brunsomasse" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: t.ink, textDecoration: "none", fontSize: 14, fontWeight: 500, padding: "10px 18px", border: `1px solid ${t.line}`, borderRadius: 4, background: t.bgRaised, transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = t.line} onMouseLeave={(e) => e.currentTarget.style.background = t.bgRaised}>
            <Github size={16} /> GitHub
          </a>
        </div>
        
      </div>
    </SectionShell>
  );
}
