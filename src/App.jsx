import { lazy, Suspense } from "react";
import { useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA as data } from "./data/portfolioData.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import About from "./components/About.jsx";
import Strengths from "./components/Strengths.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Growth from "./components/Growth.jsx";
import { CursorGlow, Marquee, ScrollBar } from "./components/fx.jsx";

const Scene3D = lazy(() => import("./components/Scene3D.jsx"));

export default function App() {
  const { profile } = data;
  const reduced = useReducedMotion();
  return (
    <>
      <Suspense fallback={null}><Scene3D reduced={!!reduced} /></Suspense>
      <ScrollBar />
      <CursorGlow />
      <a className="skip-link" href="#main">본문 바로가기</a>
      <Nav name={profile.name} />
      <Hero profile={profile} />
      <Marquee items={[...profile.keywords, "PORTFOLIO"]} />
      <main id="main">
        <Section id="about" num="01" title="소개" desc="지금 무엇을 하고, 무엇을 좋아하며, 어떻게 여기까지 왔는지입니다.">
          <About profile={profile} />
        </Section>
        <Section id="strengths" num="02" title="강점" desc="항목을 눌러 상황·행동·결과를 자세히 볼 수 있습니다.">
          <Strengths items={data.strengths} />
        </Section>
        <Section id="projects" num="03" title="프로젝트" desc="직접 만든 프로젝트와, 만들면서 실제로 겪은 문제·해결 과정입니다. 팀 프로젝트는 제가 직접 한 부분만 적었습니다.">
          <Projects items={data.projects} />
        </Section>
        <Section id="techstack" num="04" title="기술" desc="레벨(①~⑤)은 이력서의 자가진단 기준입니다. 점수보다 무엇을 해봤는지를 근거로 적었습니다.">
          <Skills groups={data.techStack} />
        </Section>
        <Section id="growth" num="05" title="성장과 다음 목표" desc="수강 전과 후가 어떻게 달라졌는지, 그리고 아직 부족한 점까지 숨기지 않고 적었습니다.">
          <Growth growth={data.growth} lacking={data.lacking} roadmap={data.roadmap} />
        </Section>
        <Section id="disclosure" num="06" title="공개 범위">
          <div className="disclosure-grid">
            <div>
              <h3>공개하는 것</h3>
              <ul className="disclosure-list is-public">
                {profile.publicItems.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div>
              <h3>공개하지 않는 것</h3>
              <ul className="disclosure-list is-private">
                {profile.privateItems.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <footer className="site-footer">
        <div className="container"><p>&copy; 2026 {profile.name}</p></div>
      </footer>
    </>
  );
}
