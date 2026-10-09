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
  @keyframes portraitKenBurns {
    0% { transform: scale(1) translate3d(0, 0, 0); }
    50% { transform: scale(1.055) translate3d(-1.4%, 1%, 0); }
    100% { transform: scale(1.03) translate3d(1.2%, -0.8%, 0); }
  }
  @keyframes portraitScan {
    0% { transform: translateY(-120%); }
    100% { transform: translateY(280%); }
  }
  @keyframes portraitGrain {
    0%, 100% { opacity: 0.22; transform: translate3d(0, 0, 0); }
    50% { opacity: 0.32; transform: translate3d(-1%, 1%, 0); }
  }
  .bp-portrait-img {
    animation: portraitKenBurns 18s ease-in-out infinite alternate;
    will-change: transform;
  }
  .bp-portrait-scan {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 38%;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%);
    animation: portraitScan 6.5s linear infinite;
    mix-blend-mode: overlay;
  }
  .bp-portrait-grain {
    position: absolute;
    inset: -20%;
    pointer-events: none;
    opacity: 0.28;
    mix-blend-mode: overlay;
    animation: portraitGrain 0.8s steps(2) infinite;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>");
    background-size: 180px 180px;
  }
  .bp-portrait-vignette {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(ellipse at 50% 28%, transparent 38%, rgba(0,0,0,0.5) 100%);
  }
  @media (prefers-reduced-motion: reduce) {
    .bp-portrait-img, .bp-portrait-scan, .bp-portrait-grain { animation: none !important; }
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
