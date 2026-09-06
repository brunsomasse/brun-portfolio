import { useTheme } from "../theme";
import { SectionShell } from "../components/Bits";

const CARDS = [
  {
    title: "Union des Minigolfeurs du Bénin",
    body: "Board member serving as Secrétaire aux Activités Sportives, handling governance documents and Bénin ministry compliance filings for the federation, based in Cotonou.",
  },
  {
    title: "No-Code Web Design course",
    body: "I teach a course on designing for the web without code — curriculum, teaching notes, and materials built for people starting outside of a traditional engineering path.",
  },
];

export default function Community() {
  const { t } = useTheme();
  return (
    <SectionShell id="community" title="Community & teaching">
      <div className="bp-side-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {CARDS.map((c) => (
          <div key={c.title} style={{ border: `1px solid ${t.line}`, borderRadius: 3, padding: 22, background: t.bgRaised }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, margin: 0, color: t.ink }}>{c.title}</h3>
            <p style={{ color: t.inkSoft, fontSize: 14.5, marginTop: 10 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
