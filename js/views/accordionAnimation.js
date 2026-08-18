/**
 * accordionAnimation.js
 * -------------------------------------------------------------
 * View 계층에서 아코디언 패널(강점, 트러블슈팅 등)을 부드럽게
 * 펼치고 접는 공통 로직. display:none 계열인 [hidden] 속성은
 * CSS만으로 애니메이션할 수 없어서, 높이를 측정해 트랜지션한다.
 *
 * 호출부(각 View의 updateCard)는 반드시 아래 패턴으로
 * prefers-reduced-motion을 먼저 분기해야 한다:
 *
 *   const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 *   if (expanded) {
 *     reduced ? panel.removeAttribute("hidden") : expandPanel(panel);
 *   } else {
 *     reduced ? panel.setAttribute("hidden", "") : collapsePanel(panel);
 *   }
 *
 * 이유: reduced-motion 전역 CSS가 transition을 꺼버리면 transitionend가
 * 아예 발생하지 않아, 아래 함수의 정리 콜백(hidden 복구/인라인 height
 * 제거)이 영원히 실행되지 않는다 — 접었는데 hidden이 안 붙어 포커스는
 * 가능한데 안 보이는 상태(포커스 트랩) 같은 실제 접근성 회귀로 이어진다.
 * -------------------------------------------------------------
 */

function expandPanel(panel) {
  panel.removeAttribute("hidden");
  const target = panel.scrollHeight;
  panel.style.overflow = "hidden";
  panel.style.height = "0px";
  panel.offsetHeight; // 강제 리플로우
  panel.style.height = target + "px";
  panel.addEventListener("transitionend", function handler(e) {
    if (e.propertyName !== "height") return;
    panel.style.height = "";
    panel.style.overflow = "";
    panel.removeEventListener("transitionend", handler);
  });
}

function collapsePanel(panel) {
  const current = panel.scrollHeight;
  panel.style.overflow = "hidden";
  panel.style.height = current + "px";
  panel.offsetHeight; // 강제 리플로우
  panel.style.height = "0px";
  panel.addEventListener("transitionend", function handler(e) {
    if (e.propertyName !== "height") return;
    panel.setAttribute("hidden", "");
    panel.style.height = "";
    panel.style.overflow = "";
    panel.removeEventListener("transitionend", handler);
  });
}
