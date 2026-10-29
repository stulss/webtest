import { useAccordion } from "../hooks/useAccordion.js";

// 강점·트러블슈팅 공용 아코디언. rows = [[라벨, 내용], ...]
export default function Accordion({ id, title, rows, extra, variant }) {
  const { open, toggle, panelRef } = useAccordion();
  return (
    <article className={`acc acc-${variant}`}>
      <button
        className="acc-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        id={`toggle-${id}`}
        onClick={toggle}
      >
        <span className="acc-title">{title}</span>
        <span className="toggle-icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div
        className="acc-panel"
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`toggle-${id}`}
        hidden
        ref={panelRef}
      >
        <dl>
          {rows.map(([k, v]) => (
            <div className="acc-row" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        {extra}
      </div>
    </article>
  );
}
