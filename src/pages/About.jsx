import { useTheme } from "../theme";
import { SectionShell } from "../components/Bits";

const STATS = [
  ["Focus", "Multi-cloud architecture & IaC"],
  ["Certifications", "AWS, OCI & KCNA"],
  ["Core Stack", "Kubernetes (EKS/AKS) · Terraform · Docker"],
  ["Languages", "Python · Bash · C++"],
  ["Mentorship", "ALX AWS Program"],
  ["Base", "Accra, Ghana"],
];

const PARAGRAPHS = [
  "I am a Cloud Solutions Architect and DevOps Professional specializing in multi-cloud infrastructure automation and container orchestration. I spend most of my time working across Kubernetes environments (AWS EKS, Azure AKS, and GKE), writing declarative Infrastructure as Code (IaC) with Terraform, and building resilient deployment pipelines.",
  "My recent work spans from designing highly available, multi-region AWS EKS private clusters to implementing complex GCP Load Balancer and Akamai Identity-Aware Proxy integrations. I am a strong advocate for declarative state management over manual console modifications—keeping environments secure, automated, and predictably scalable.",
  "Outside the terminal, I serve as a Volunteer Mentor for the ALX AWS Program, guiding learners through cloud computing modules, technical exam preparation, and squad identity building. I also sit on the board of the Union des Minigolfeurs du Bénin (UMB), where I lead digital identity initiatives and develop UI/UX vector assets for our web platforms."
];

export default function About() {
  const { t } = useTheme();
  return (
    <SectionShell id="about" title="About">
      <div className="bp-about-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56 }}>
        <div>
          {PARAGRAPHS.map((p, i) => (
            <p key={i} style={{ color: t.inkSoft, maxWidth: "62ch", marginTop: i === 0 ? 0 : 16, lineHeight: 1.6, fontSize: 16 }}>
              {p}
            </p>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${t.line}` }}>
          {STATS.map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px solid ${t.line}`, fontSize: 14.5 }}>
              <span style={{ color: t.inkSoft }}>{k}</span>
              <span style={{ fontWeight: 600, textAlign: "right", color: t.ink, fontFamily: k === "Languages" || k === "Core Stack" ? "'JetBrains Mono', monospace" : "inherit", fontSize: k === "Languages" || k === "Core Stack" ? 13 : 14.5 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
