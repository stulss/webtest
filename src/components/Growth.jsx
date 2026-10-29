import { Reveal, Tilt } from "./fx.jsx";

export default function Growth({ growth, lacking, roadmap }) {
  return (
    <div className="growth">
      <div className="stack">
        {growth.map((g, i) => (
          <Reveal key={g.item} delay={i * 0.06}>
            <Tilt className="card growth-card" max={2}>
              <h3>{g.item}</h3>
              <div className="growth-ba">
                <div><span className="ba-tag">수강 전</span><p>{g.before}</p></div>
                <span className="ba-arrow" aria-hidden="true">→</span>
                <div><span className="ba-tag ba-after">수강 후</span><p>{g.after}</p></div>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="card lacking-card">
          <h3>아직 부족한 점</h3>
          <ul>{lacking.map((l) => <li key={l}>{l}</li>)}</ul>
        </div>
      </Reveal>

      <h3 className="roadmap-title">취업 전까지의 계획</h3>
      <ol className="roadmap">
        {roadmap.map((r, i) => (
          <Reveal as="li" key={r.when} delay={i * 0.08}>
            <span className="tl-when">{r.when}</span>
            <strong>{r.title}</strong>
            <p>{r.desc}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
