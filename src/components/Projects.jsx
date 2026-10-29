import Accordion from "./Accordion.jsx";
import { Magnetic, Reveal, Tilt } from "./fx.jsx";

export default function Projects({ items }) {
  return (
    <div className="stack stack-lg">
      {items.map((p, idx) => (
        <Reveal key={p.id}>
          <Tilt className="card project-card" max={2}>
            <div className="project-top">
              <span className="project-idx">{String(idx + 1).padStart(2, "0")}</span>
              <span className="project-status">{p.status}</span>
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-subtitle">{p.subtitle}</p>

            <dl className="project-meta">
              <div><dt>기간</dt><dd>{p.period}</dd></div>
              <div><dt>구분</dt><dd>{p.kind}</dd></div>
              <div><dt>역할</dt><dd>{p.role}</dd></div>
              <div><dt>기여도</dt><dd>{p.contribution}</dd></div>
            </dl>

            <p className="project-description">{p.description}</p>

            {p.techUsed?.length > 0 && (
              <div className="project-tech">
                {p.techUsed.map((t) => <span className="tech-chip" key={t}>{t}</span>)}
              </div>
            )}

            {p.highlights.length > 0 && (
              <ul className="project-list">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            )}

            {p.results.length > 0 && (
              <div className="project-results">
                {p.results.map((r) => <p key={r}>{r}</p>)}
              </div>
            )}

            <div className="project-links">
              {p.links.map((l) => (
                <Magnetic key={l.url}>
                  <a className="chip chip-link" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                </Magnetic>
              ))}
              {p.note && <span className="project-note">{p.note}</span>}
            </div>

            <div className="project-troubleshooting">
              <p className="project-troubleshooting-label">트러블슈팅</p>
              <div className="stack">
                {p.troubleshooting.map((t) => (
                  <Accordion
                    key={t.id}
                    id={`ts-${p.id}-${t.id}`}
                    variant="ts"
                    title={t.problem}
                    rows={t.rows}
                  />
                ))}
              </div>
            </div>

            {p.lacking && (
              <p className="project-lacking"><strong>보완할 점</strong> {p.lacking}</p>
            )}
          </Tilt>
        </Reveal>
      ))}
    </div>
  );
}
