import { LEVELS } from "../data/portfolioData.js";
import { Reveal, Tilt } from "./fx.jsx";

function Pips({ level }) {
  return (
    <span className="pips" role="img" aria-label={`자가 레벨 ${level}/5`} title={LEVELS[level]}>
      {[1, 2, 3, 4, 5].map((n) => <i key={n} className={n <= level ? "on" : ""} />)}
    </span>
  );
}

export default function Skills({ groups }) {
  return (
    <div className="skills">
      <ol className="level-legend" aria-label="레벨 기준">
        {Object.entries(LEVELS).map(([n, text]) => (
          <li key={n}><b>{n}</b> {text}</li>
        ))}
      </ol>
      {groups.map((g) => (
        <div key={g.group} className="skill-group">
          <h3>{g.group}</h3>
          <div className="techstack-list">
            {g.items.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.06}>
                <Tilt className="card tech-card">
                  <div className="tech-card-head">
                    <span className="tech-name">{t.name}</span>
                    <span className="tech-level">
                      {t.before && t.before !== t.level && <><small>{t.before}</small><em aria-hidden="true">→</em></>}
                      <Pips level={t.level} />
                    </span>
                  </div>
                  <p className="tech-reason">{t.reason}</p>
                  {t.url && (
                    <a className="tech-link" href={t.url} target="_blank" rel="noopener noreferrer">증빙 보기 ↗</a>
                  )}
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
