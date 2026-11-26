import { useParams, Link } from "react-router-dom";
import { useTheme, WORK_ITEMS } from "../theme";
import { ArrowLeft, Server, ExternalLink, GitBranch } from "lucide-react";

const CASE_STUDIES = {
  "aws-hybrid-cicd": {
    title: "Hybrid Serverless & EC2 Cloud Lab with CI/CD",
    role: "Cloud Solutions Architect & DevOps Engineer · eu-north-1",
    logo: "/abs-lab-logo.webp",
    diagram: "/abs-aws-hybrid-architecture.webp",
    summary: "End-to-end hybrid cloud architecture in AWS eu-north-1 pairing a zero-API-Gateway Node.js 22 serverless web service (AWS Lambda + Lambda Web Adapter) with a GitHub to CodePipeline, CodeBuild, and S3 CI/CD pipeline and an Amazon Linux 2023 EC2 host.",
    stack: ["AWS Lambda (Node.js 22)", "Lambda Web Adapter", "CodePipeline", "CodeBuild", "EC2 (AL2023)", "S3", "IAM", "Docker", "Nginx"],
    architecture: "Commits pushed to main trigger AWS CodeConnections and start abs-web-pipeline. CodeBuild executes buildspec.yml to package the runtime bundle, sync assets to s3://abs-bucket-eu-north-1, and update abs-web-function live. In parallel, EC2 instance abs-lab-web-001 bootstraps Nginx and Docker via User Data, queries IMDSv2 metadata, and pulls brand assets from S3 via an IAM Instance Profile.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/brunsomasse/aws-lab", icon: "git" },
      { label: "Live Lambda Endpoint", url: "https://43hotg65xkglcmxdhrsq47z65i0xictv.lambda-url.eu-north-1.on.aws/?name=ABS", icon: "ext" }
    ]
  }
};

export default function CaseStudy() {
  const { projectId } = useParams();
  const { t } = useTheme();
  const wf = WORK_ITEMS.find((w) => w.slug === projectId || w.index === projectId);
  const d = CASE_STUDIES[projectId] || (wf ? { title: wf.title, role: wf.meta, summary: wf.desc, stack: wf.tags, architecture: wf.desc } : CASE_STUDIES["aws-hybrid-cicd"]);

  return (
    <section style={{ maxWidth: 840, margin: "0 auto", padding: "80px 32px", color: t.ink }}>
      <Link to="/work" style={{ display: "flex", alignItems: "center", gap: 8, color: t.inkSoft, textDecoration: "none", marginBottom: 40, fontSize: 14 }}>
        <ArrowLeft size={16} /> Back to Projects
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
        {d.logo && <img src={d.logo} alt={d.title} style={{ width: 56, height: 56, borderRadius: 12, objectFit: "cover", border: `1px solid ${t.line}` }} />}
        <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 34, margin: 0 }}>{d.title}</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", marginBottom: 36, borderBottom: `1px solid ${t.line}`, paddingBottom: 24 }}>
        <span style={{ color: t.inkSoft, fontSize: 14 }}><Server size={14} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />{d.role}</span>
        {d.links && (
          <div style={{ display: "flex", gap: 12 }}>
            {d.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontFamily: "JetBrains Mono, monospace", color: t.accent, textDecoration: "none", border: `1px solid ${t.line}`, background: t.bgRaised, padding: "6px 12px", borderRadius: 6 }}>
                {l.icon === "git" ? <GitBranch size={14} /> : <ExternalLink size={14} />}{l.label}
              </a>
            ))}
          </div>
        )}
      </div>
      {d.diagram && (
        <div style={{ marginBottom: 40, borderRadius: 12, overflow: "hidden", border: `1px solid ${t.line}`, background: t.bgRaised }}>
          <img src={d.diagram} alt={d.title} style={{ width: "100%", display: "block" }} />
        </div>
      )}
      <h3 style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, textTransform: "uppercase", color: t.inkFaint, marginBottom: 12 }}>// Executive Summary</h3>
      <p style={{ fontSize: 17, lineHeight: 1.65, color: t.inkSoft, marginBottom: 36 }}>{d.summary}</p>
      <h3 style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, textTransform: "uppercase", color: t.inkFaint, marginBottom: 12 }}>// Tech Stack & Tooling</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
        {d.stack.map((tech) => (
          <span key={tech} style={{ background: t.pillBg, color: t.pillInk, border: `1px solid ${t.line}`, padding: "5px 12px", borderRadius: 6, fontSize: 13, fontFamily: "JetBrains Mono, monospace" }}>{tech}</span>
        ))}
      </div>
      <h3 style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, textTransform: "uppercase", color: t.inkFaint, marginBottom: 12 }}>// Architecture & Implementation</h3>
      <p style={{ fontSize: 17, lineHeight: 1.65, color: t.inkSoft }}>{d.architecture}</p>
    </section>
  );
}
