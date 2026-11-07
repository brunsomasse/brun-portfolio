import { createContext, useContext } from "react";

export const themeTokens = {
  light: {
    bg: "#F5F4EF",
    bgRaised: "#FFFFFF",
    ink: "#15181B",
    inkSoft: "#565C63",
    inkFaint: "#8A8F94",
    line: "#DEDBD2",
    accent: "#2F5D62",
    accentInk: "#F5F4EF",
    pillBg: "#EAE7DD",
    pillInk: "#33413F",
  },
  dark: {
    bg: "#14171A",
    bgRaised: "#1B1F23",
    ink: "#EDEEEC",
    inkSoft: "#A7ACB0",
    inkFaint: "#6C7276",
    line: "#2B3033",
    accent: "#6FBFB0",
    accentInk: "#0F1414",
    pillBg: "#21262A",
    pillInk: "#C7D6D3",
  },
};

export const ThemeContext = createContext({
  dark: false,
  setDark: () => {},
  t: themeTokens.light,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export const NAV_ITEMS = [
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/community", label: "Community" },
  { path: "/contact", label: "Contact" },
];

export const ROLE_TITLES = ["Cloud Solutions Architect", "DevOps Engineer", "Infrastructure Automation Specialist"];

export const SKILLS = [
  "AWS (EKS)", "Oracle Cloud (OCI)", "GCP", "Kubernetes", "Docker / Minikube",
  "Terraform / IaC", "CI/CD Pipelines", "Python", "C++", "Linux / WSL", 
  "Identity-Aware Proxy", "Datadog"
];

export const WORK_ITEMS = [
  {
    index: "01",
    slug: "aws-eks-cluster",
    title: "Multi-Region AWS EKS Private Cluster",
    desc: "Designed a multi-environment, multi-region AWS EKS private cluster infrastructure architecture spanning localized deployment layers and Google Cloud Storage bucket structures.",
    tags: ["AWS", "Kubernetes", "GCS", "Architecture"],
    meta: "Infrastructure",
  },
  {
    index: "02",
    slug: "gcp-akamai-iap",
    title: "GCP Load Balancer & Akamai Integration",
    desc: "Created an end-to-end integration architecture plan utilizing Akamai, Google Cloud Platform Load Balancers, and Identity-Aware Proxy templates across separated DEV and UAT environments.",
    tags: ["GCP", "Akamai", "Security", "IAP"],
    meta: "Enterprise",
  },
  {
    index: "03",
    slug: "google-ads-mcp",
    title: "Containerized Google Ads MCP Server",
    desc: "Designed a local containerized deployment architecture for a Google Ads Model Context Protocol (MCP) server, building a custom Python Dockerfile environment for FastMCP stdio transport connections.",
    tags: ["Docker", "Python", "API", "MCP"],
    meta: "Deployment",
  },
  {
    index: "04",
    slug: "umb-minigolf-ui",
    title: "UMB Interactive Web Application Identity",
    desc: "Developed a visual user interface mockup and vector asset identity suite for the Union des Minigolfeurs du Bénin (UMB) web application using a framework-free visual page-builder layout system.",
    tags: ["UI/UX", "Frontend", "Vector Assets"],
    meta: "Frontend",
  },
];
