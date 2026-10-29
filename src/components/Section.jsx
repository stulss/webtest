import { Reveal, SplitText } from "./fx.jsx";

export default function Section({ id, num, title, desc, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-heading`}>
      <span className="section-bignum" aria-hidden="true">{num}</span>
      <div className="container">
        <Reveal as="p" className="section-num" y={16}>{num} /</Reveal>
        <h2 id={`${id}-heading`}><SplitText text={title} /></h2>
        {desc && <Reveal as="p" className="section-desc" delay={0.2} y={20}>{desc}</Reveal>}
        {children}
      </div>
    </section>
  );
}
