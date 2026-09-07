import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext, themeTokens } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

const responsiveCss = `
  @keyframes roleFadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .bp-menu-btn{ display:none !important; }
  @media(max-width:860px){
    .bp-nav{ display:none !important; }
    .bp-resume{ display:none !important; }
    .bp-menu-btn{ display:flex !important; }
  }
  @media(max-width:900px){
    .bp-hero{ grid-template-columns:1fr !important; padding-top:44px !important; padding-bottom:56px !important; }
  }
  @media(max-width:820px){
    .bp-about-grid{ grid-template-columns:1fr !important; }
  }
  @media(max-width:720px){
    .bp-side-grid{ grid-template-columns:1fr !important; }
  }
  @media(max-width:760px){
    .bp-footer-grid{ grid-template-columns:1fr 1fr !important; }
  }
  @media(max-width:640px){
    .bp-work-item{ grid-template-columns:32px 1fr !important; }
  }
`;

export default function App() {
  const [dark, setDark] = useState(false);
  const t = dark ? themeTokens.dark : themeTokens.light;

  return (
    <ThemeContext.Provider value={{ dark, setDark, t }}>
      <style>{responsiveCss}</style>
      <div
        style={{
          background: t.bg,
          color: t.ink,
          minHeight: "100vh",
          fontFamily: "'Inter', -apple-system, sans-serif",
          lineHeight: 1.55,
          transition: "background .25s ease, color .25s ease",
        }}
      >
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
