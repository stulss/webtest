import Accordion from "./Accordion.jsx";
import { Reveal } from "./fx.jsx";

export default function Strengths({ items }) {
  return (
    <div className="stack">
      {items.map((s, i) => (
        <Reveal key={s.id} delay={i * 0.1}>
        <Accordion
          id={s.id}
          variant="strength"
          title={s.title}
          rows={[["상황", s.situation], ["행동", s.action], ["결과", s.result]]}
          extra={
            s.evidenceUrl && (
              <p className="evidence-link">
                <a href={s.evidenceUrl} target="_blank" rel="noopener noreferrer">
                  {s.evidenceLabel || "근거 보기"}
                </a>
              </p>
            )
          }
        />
        </Reveal>
      ))}
    </div>
  );
}
