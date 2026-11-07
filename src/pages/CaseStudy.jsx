import { useParams, Link } from "react-router-dom";
import { useTheme } from "../theme";
import { ArrowLeft, Server, Code, GitBranch } from "lucide-react";

export default function CaseStudy() {
  const { projectId } = useParams();
  const { t } = useTheme();

  // Placeholder for your architecture project data
  const projectDetails = {
    title: "Multi-Environment AWS EKS Cluster",
    role: "Cloud Solutions Architect",
    summary: "Designed and deployed a highly available, multi-region private Kubernetes cluster infrastructure.",
    stack: ["AWS EKS", "Terraform", "GitHub Actions", "Docker"],
    architecture: "The infrastructure spans localized deployment layers with Google Cloud Storage bucket structures for artifact management. IAM policies were strictly managed via declarative configuration."
  };

  return (
    <section
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "80px 32px",
        color: t.ink,
      }}
    >
      <Link 
        to="/work" 
        style={{ display: "flex", alignItems: "center", gap: 8, color: t.inkSoft, textDecoration: "none", marginBottom: 40, fontSize: 14 }}
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, margin: "0 0 16px 0" }}>
        {projectDetails.title}
      </h1>
      
      <div style={{ display: "flex", gap: 16, marginBottom: 40, borderBottom: `1px solid ${t.line}`, paddingBottom: 24 }}>
        <span style={{ color: t.inkSoft, fontSize: 14 }}>
          <Server size={14} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} /> 
          {projectDetails.role}
        </span>
      </div>

      <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, textTransform: "uppercase", color: t.inkFaint, marginBottom: 12 }}>
        // Executive Summary
      </h3>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: t.inkSoft, marginBottom: 40 }}>
        {projectDetails.summary}
      </p>

      <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, textTransform: "uppercase", color: t.inkFaint, marginBottom: 12 }}>
        // Tech Stack & Tooling
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
        {projectDetails.stack.map(tech => (
          <span key={tech} style={{ background: t.bgRaised, border: `1px solid ${t.line}`, padding: "4px 12px", borderRadius: 4, fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
            {tech}
          </span>
        ))}
      </div>

      <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, textTransform: "uppercase", color: t.inkFaint, marginBottom: 12 }}>
        // Architecture & Implementation
      </h3>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: t.inkSoft }}>
        {projectDetails.architecture}
      </p>

    </section>
  );
}
