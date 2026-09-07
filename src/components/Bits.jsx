import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "../theme";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomScrambleChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

export function AsciiPortrait({ rows, loopInterval = 9000, label = "Portrait" }) {
  const { t } = useTheme();
  const containerRef = useRef(null);
  const [cell, setCell] = useState({ fontSize: 6, lineHeight: 10 });
  const [display, setDisplay] = useState(() => rows.map((r) => " ".repeat(r.length)));
  const queueRef = useRef(null);
  const frameRef = useRef(0);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const colCount = rows[0]?.length || 1;
  const rowCount = rows.length;

  useLayoutEffect(() => {
    function measure() {
      const el = containerRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      setCell({ fontSize: w / (colCount * 0.62), lineHeight: h / rowCount });
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [colCount, rowCount]);

  useEffect(() => {
    function buildQueue(fromRows, toRows) {
      return toRows.map((rowStr, r) =>
        rowStr.split("").map((ch, c) => {
          const from = fromRows[r]?.[c] || " ";
          const start = Math.floor(Math.random() * 30);
          const end = start + Math.floor(Math.random() * 25) + 8;
          return { from, to: ch, start, end, char: null };
        })
      );
    }

    function step() {
      let complete = 0;
      let total = 0;
      const out = queueRef.current.map((rowQueue) =>
        rowQueue
          .map((q) => {
            total++;
            if (frameRef.current >= q.end) {
              complete++;
              return q.to;
            } else if (frameRef.current >= q.start) {
              if (!q.char || Math.random() < 0.25) q.char = randomScrambleChar();
              return q.char;
            }
            return q.from;
          })
          .join("")
      );
      setDisplay(out);
      if (complete === total) {
        timeoutRef.current = setTimeout(runLoop, loopInterval);
      } else {
        frameRef.current++;
        rafRef.current = requestAnimationFrame(step);
      }
    }

    function runLoop() {
      const blank = rows.map((r) => " ".repeat(r.length));
      queueRef.current = buildQueue(blank, rows);
      frameRef.current = 0;
      cancelAnimationFrame(rafRef.current);
      step();
    }

    runLoop();

    return () => {
      clearTimeout(timeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [rows, loopInterval]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>{label}</span>
      <pre
        aria-hidden="true"
        style={{
          margin: 0,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: cell.fontSize,
          lineHeight: `${cell.lineHeight}px`,
          letterSpacing: 0,
          color: t.ink,
          opacity: 0.82,
          whiteSpace: "pre",
        }}
      >
        {display.join("\n")}
      </pre>
    </div>
  );
}

export function RotatingRole({ roles, interval = 2600, style }) {
  const [display, setDisplay] = useState(roles[0]);
  const frameRef = useRef(0);
  const queueRef = useRef([]);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const roleIndexRef = useRef(0);

  useEffect(() => {
    function step() {
      let output = "";
      let complete = 0;
      const queue = queueRef.current;
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i];
        if (frameRef.current >= q.end) {
          complete++;
          output += q.to;
        } else if (frameRef.current >= q.start) {
          if (!q.char || Math.random() < 0.3) q.char = randomScrambleChar();
          output += q.char;
        } else {
          output += q.from;
        }
      }
      setDisplay(output);
      if (complete === queue.length) {
        timeoutRef.current = setTimeout(scrambleToNext, interval);
      } else {
        frameRef.current++;
        rafRef.current = requestAnimationFrame(step);
      }
    }

    function scrambleToNext() {
      const fromText = roles[roleIndexRef.current];
      roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
      const toText = roles[roleIndexRef.current];
      const length = Math.max(fromText.length, toText.length);
      queueRef.current = [];
      for (let i = 0; i < length; i++) {
        const from = fromText[i] || "";
        const to = toText[i] || "";
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20) + 10;
        queueRef.current.push({ from, to, start, end, char: null });
      }
      frameRef.current = 0;
      cancelAnimationFrame(rafRef.current);
      step();
    }

    timeoutRef.current = setTimeout(scrambleToNext, interval);

    return () => {
      clearTimeout(timeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [roles, interval]);

  return <span style={style}>{display}</span>;
}

export function XIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.8l-5.3-6.9L5 22H1.9l8.2-9.3L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L7.4 4H5.3l12.4 16Z" />
    </svg>
  );
}

export function SkillPill({ label }) {
  const { t } = useTheme();
  return (
    <span
      style={{
        fontSize: 13,
        fontFamily: "'JetBrains Mono', monospace",
        color: t.pillInk,
        background: t.pillBg,
        padding: "7px 13px",
        borderRadius: 999,
        border: `1px solid ${t.line}`,
      }}
    >
      {label}
    </span>
  );
}

export function IconLink({ href, label, children }) {
  const { t } = useTheme();
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      style={{
        width: 34,
        height: 34,
        border: `1px solid ${t.line}`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: t.ink,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

export function SectionShell({ id, title, count, children }) {
  const { t } = useTheme();
  return (
    <section id={id} style={{ padding: "64px 32px", borderTop: `1px solid ${t.line}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 26,
              fontWeight: 600,
              color: t.ink,
              margin: 0,
            }}
          >
            {title}
          </h2>
          {count && (
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: t.inkFaint }}>
              {count}
            </span>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
