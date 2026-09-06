import { useTheme } from "../theme";
import { SectionShell } from "../components/Bits";

const STATS = [
  ["Focus", "Multi-cloud infrastructure"],
  ["Primary clouds", "GCP · Azure"],
  ["Certifications", "AWS & Oracle Solutions Architect"],
  ["Toolbelt", "Terraform · Helm · Bash"],
  ["Also building", "React / TypeScript apps"],
  ["Community role", "UMB Board, Bénin"],
];

const PARAGRAPHS = [
  "I'm a DevOps / Cloud Engineer working across GKE and AKS environments, spending most of my time in Terraform, Helm, and Azure DevOps pipelines, the parts of the stack nobody notices until they break.",
  "Recently that's meant consolidating IAM into least-privilege custom roles on GCP, scaling environments up and down around release lockdowns, and working through Wiz findings to remediate hardcoded secrets across our Helm charts and git history.",
  "Off the clock, I sit on the board of the Union des Minigolfeurs du Bénin as Secrétaire aux Activités Sportives, where I also built a React/TypeScript scorecard app for our tournaments, and I teach a no-code web design course for people getting started outside of engineering.",
];

export default function About() {
  const { t } = useTheme();
  return (
    <SectionShell id="about" title="About">
      <div className="bp-about-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56 }}>
        <div>
          {PARAGRAPHS.map((p, i) => (
            <p key={i} style={{ color: t.inkSoft, maxWidth: "62ch", marginTop: i === 0 ? 0 : 16 }}>
              {p}
            </p>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${t.line}` }}>
          {STATS.map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: `1px solid ${t.line}`, fontSize: 14.5 }}>
              <span style={{ color: t.inkSoft }}>{k}</span>
              <span style={{ fontWeight: 600, textAlign: "right", color: t.ink }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
