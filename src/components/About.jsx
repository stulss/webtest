import { CountUp, DrawLine, Reveal, Tilt } from "./fx.jsx";

// 벤토 그리드: 숫자 / 지금 하는 것 / 좋아하는 것 / 자격 / 걸어온 길
export default function About({ profile }) {
  return (
    <div className="bento">
      <div className="bento-stats">
        {profile.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <Tilt className="card stat-card">
              <strong className="stat-value"><CountUp to={s.value} />{s.suffix}</strong>
              <span className="stat-label">{s.label}</span>
            </Tilt>
          </Reveal>
        ))}
      </div>

      <Reveal className="bento-now">
        <Tilt className="card">
          <h3>지금 하는 것</h3>
          <ul className="now-list">
            {profile.now.map((n) => (
              <li key={n.label}>
                <span className="now-label">{n.label}</span>
                <span className="now-value">{n.value}</span>
              </li>
            ))}
          </ul>
        </Tilt>
      </Reveal>

      <Reveal className="bento-interest" delay={0.12}>
        <Tilt className="card">
          <h3>좋아하는 것</h3>
          <ul className="interest-list">
            {profile.interests.map((i) => (
              <li key={i.title}>
                <span className="interest-icon" aria-hidden="true">{i.icon}</span>
                <span><strong>{i.title}</strong><small>{i.desc}</small></span>
              </li>
            ))}
          </ul>
        </Tilt>
      </Reveal>

      <Reveal className="bento-cred" delay={0.1}>
        <Tilt className="card">
          <h3>자격 · 목표</h3>
          <ul className="cred-list">
            {profile.credentials.map((c) => (
              <li key={c.title}>
                <span className="tl-when">{c.when}</span>
                <strong>{c.title}</strong>
                <small>{c.org}</small>
              </li>
            ))}
          </ul>
        </Tilt>
      </Reveal>

      <Reveal className="bento-timeline" delay={0.1}>
        <div className="card">
          <h3>걸어온 길</h3>
          <DrawLine className="timeline">
            <ol>
              {profile.timeline.map((t, i) => (
                <Reveal as="li" key={t.title} delay={(i % 3) * 0.08} y={24}>
                  <span className="tl-when">{t.when}</span>
                  <strong>{t.title}</strong>
                  <p>{t.desc}</p>
                </Reveal>
              ))}
            </ol>
          </DrawLine>
        </div>
      </Reveal>
    </div>
  );
}
