import { useTheme, SKILLS } from "../theme";
import { SkillPill, PortraitImage } from "../components/Bits";
// Added: Lucide icons from your package.json dependencies
import { Award, ShieldCheck } from "lucide-react";

export default function Home() {
  const { t } = useTheme();

  return (
    <section
      className="bp-hero"
      style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: "72px 32px 88px",
        display: "grid",
        gridTemplateColumns: "0.85fr 1.15fr",
        gap: 56,
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "1 / 1",
          borderRadius: 6,
          background: t.bgRaised,
          border: `1px solid ${t.line}`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "14px 16px",
            borderBottom: `1px solid ${t.line}`,
            background: t.bgRaised,
            flex: "none",
            zIndex: 1,
          }}
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: t.inkFaint }}>// currently</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2, color: t.ink }}>Architecting Multi-Environment AWS EKS Clusters</div>
        </div>
        <div style={{ position: "relative", flex: 1, minHeight: 0, background: "#111" }}>
          <PortraitImage src="/brun-portrait.jpg" label="Portrait of Brun Somasse" />
        </div>
      </div>

      <div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4.4vw, 46px)", lineHeight: 1.08, color: t.ink, margin: 0 }}>
          Brun Somasse
        </h1>
        
        {/* Added: High-visibility Certification Banner */}
        <div style={{ display: "flex", gap: 16, marginTop: 16, marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#ff9900", fontSize: 14, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
            <Award size={16} /> AWS Solutions Architect
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#f80000", fontSize: 14, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
            <ShieldCheck size={16} /> OCI Solutions Architect
          </div>
        </div>

        <p style={{ marginTop: 12, fontSize: 17, color: t.inkSoft, maxWidth: "56ch" }}>
          A{" "}
          <span style={{ display: "inline-block", background: t.pillBg, color: t.pillInk, fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, padding: "3px 9px", borderRadius: 4, margin: "0 2px" }}>
            Cloud Engineer & DevOps Professional
          </span>{" "}
          specializing in multi-cloud solution architecture and infrastructure automation. I focus on building scalable, declarative environments rather than relying on manual console modifications.
        </p>
        
        <p style={{ marginTop: 14, fontSize: 17, color: t.inkSoft, maxWidth: "56ch" }}>
          My core expertise lies in deploying configuration pipelines, managing container states with Kubernetes (EKS/AKS), and writing declarative Infrastructure as Code (IaC) architectures across AWS, Oracle Cloud Infrastructure, and Azure.
        </p>

        <p style={{ marginTop: 14, fontSize: 15, color: t.inkFaint, maxWidth: "56ch" }}>
          Beyond the terminal, I serve as a Volunteer Mentor guiding learners through cloud computing modules, and I design structured tech-literacy lesson plans for the next generation of engineers.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 28 }}>
          {SKILLS.map((s) => (
            <SkillPill key={s} label={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
