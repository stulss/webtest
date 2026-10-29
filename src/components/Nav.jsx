import { useActiveSection } from "../hooks/useActiveSection.js";

const ITEMS = [
  ["about", "소개"],
  ["strengths", "강점"],
  ["projects", "프로젝트"],
  ["techstack", "기술"],
  ["growth", "성장"],
  ["disclosure", "공개 범위"],
];
const IDS = ITEMS.map(([id]) => id);

export default function Nav({ name }) {
  const active = useActiveSection(IDS);
  return (
    <nav className="nav" aria-label="섹션 이동">
      <div className="container nav-inner">
        <a className="nav-logo" href="#top">{name}</a>
        <ul>
          {ITEMS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
