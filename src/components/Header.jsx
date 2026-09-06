import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme, NAV_ITEMS } from "../theme";

export default function Header() {
  const { t, dark, setDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) => ({
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 14.5,
    fontFamily: "'Inter', sans-serif",
    textDecoration: "none",
    color: isActive ? t.ink : t.inkSoft,
    borderBottom: isActive ? `1px solid ${t.ink}` : "1px solid transparent",
    paddingBottom: 2,
  });

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: dark ? "rgba(20,23,26,0.86)" : "rgba(245,244,239,0.88)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${t.line}`,
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0, textDecoration: "none" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              overflow: "hidden",
              flex: "none",
              background: t.accent,
            }}
          >
            <img src="/brun.jpg" alt="Brun" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: t.ink, whiteSpace: "nowrap" }}>Brun</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: t.inkSoft, whiteSpace: "nowrap" }}>
              DevOps / Cloud Engineer
            </div>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 30 }} className="bp-nav">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} style={linkStyle}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: "none" }}>
          <a
            href="#"
            className="bp-resume"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              background: dark ? t.accent : t.ink,
              color: dark ? t.accentInk : t.bg,
            }}
          >
            Download résumé
          </a>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: `1px solid ${t.line}`,
              background: "none",
              color: t.ink,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="bp-menu-btn"
            aria-label="Open menu"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: `1px solid ${t.line}`,
              background: "none",
              color: t.ink,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="bp-mobile-menu"
          style={{ borderTop: `1px solid ${t.line}`, padding: "12px 20px 18px", display: "flex", flexDirection: "column", gap: 4 }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              style={{ textAlign: "left", background: "none", border: "none", padding: "10px 0", fontSize: 15, color: t.ink, textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
