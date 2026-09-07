import { useMemo } from "react";
import { useTheme, SKILLS, AVATAR_ASCII_ROWS, GHOST_SOURCE } from "../theme";
import { SkillPill, AsciiPortrait } from "../components/Bits";

export default function Home() {
  const { t } = useTheme();
  const ghostText = useMemo(() => {
    const words = GHOST_SOURCE.split(" ");
    let out = "";
    for (let i = 0; i < 90; i++) out += words[i % words.length] + " ";
    return out;
  }, []);

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
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2, color: t.ink }}>Building on GKE + AKS</div>
        </div>
        <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
          <p
            style={{
              position: "absolute",
              inset: 0,
              padding: 16,
              margin: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              lineHeight: 1.5,
              color: t.ink,
              opacity: 0.14,
              textAlign: "justify",
              userSelect: "none",
              overflow: "hidden",
            }}
          >
            {ghostText}
          </p>
          <AsciiPortrait rows={AVATAR_ASCII_ROWS} label="Portrait of Brun Somasse rendered as animated character art" />
        </div>
      </div>

      <div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4.4vw, 46px)", lineHeight: 1.08, color: t.ink, margin: 0 }}>
          Brun Somasse
        </h1>
        <p style={{ marginTop: 20, fontSize: 17, color: t.inkSoft, maxWidth: "56ch" }}>
          A{" "}
          <span style={{ display: "inline-block", background: t.pillBg, color: t.pillInk, fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, padding: "3px 9px", borderRadius: 4, margin: "0 2px" }}>
            DevOps / Cloud Engineer
          </span>{" "}
          keeping multi-cloud infrastructure secure, automated, and boring in the best way.
          This is my personal corner, where I share the systems I build and the projects I run on the side.
        </p>
        <p style={{ marginTop: 14, fontSize: 17, color: t.inkSoft, maxWidth: "56ch" }}>
          I work across GCP and Azure (GKE and AKS clusters, Terraform-managed IAM, Helm-packaged
          services) with a habit of finding the hardcoded secret before Wiz does. Outside of work,
          I build small products for causes I care about and teach people how to design for the web
          without writing a line of code.
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
