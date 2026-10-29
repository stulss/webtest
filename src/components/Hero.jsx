import { HeroParallax, Magnetic, Reveal, SplitText } from "./fx.jsx";

export default function Hero({ profile }) {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <HeroParallax>
          <p className="eyebrow">{profile.role}</p>
          <h1><SplitText text={profile.name} delay={0.2} /></h1>
          <Reveal delay={0.6}>
            <p className="tagline">“{profile.tagline}”</p>
            <p className="target-sentence">{profile.targetSentence}</p>
          </Reveal>
          <Reveal delay={0.9}>
            <div className="hero-highlights">
              <span className="chip">{profile.heroSummaryItems.join(" · ")}</span>
              <Magnetic>
                <a className="chip chip-link" href={profile.evidence.url} target="_blank" rel="noopener noreferrer">
                  {profile.evidence.label} ↗
                </a>
              </Magnetic>
              {profile.extraLinks.map((l) => (
                <Magnetic key={l.url}>
                  <a className="chip chip-link" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                </Magnetic>
              ))}
            </div>
            <ul className="keywords" aria-label="핵심 키워드">
              {profile.keywords.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </Reveal>
        </HeroParallax>
        <div className="scroll-hint" aria-hidden="true"><span /> SCROLL</div>
      </div>
    </header>
  );
}
