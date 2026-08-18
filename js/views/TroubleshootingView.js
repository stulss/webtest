/**
 * TroubleshootingView.js
 * -------------------------------------------------------------
 * MVC - View
 * 트러블슈팅 항목을 아코디언으로 렌더링한다. 기본으로는 "문제"만
 * 보이고(스캔하기 쉽게), 펼치면 시도·비교·배운 점이 나온다.
 * StrengthView와 동일한 마크업/접근성 패턴(네이티브 <button>,
 * aria-expanded, role="region", 인셋 포커스 링 대응 클래스)을 따르고,
 * accordionAnimation.js의 공유 헬퍼로 펼침/접힘을 애니메이션한다.
 * -------------------------------------------------------------
 */

class TroubleshootingView {
  constructor(containerEl) {
    this.containerEl = containerEl;
  }

  render(entries) {
    this.containerEl.innerHTML = entries
      .map((entry) => this._cardTemplate(entry))
      .join("");
  }

  updateCard(entry) {
    const card = this.containerEl.querySelector(`[data-id="${entry.id}"]`);
    if (!card) return;

    const btn = card.querySelector(".troubleshooting-toggle");
    const panel = card.querySelector(".troubleshooting-panel");
    const icon = card.querySelector(".toggle-icon");

    btn.setAttribute("aria-expanded", String(entry.expanded));
    icon.textContent = entry.expanded ? "−" : "+";

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (entry.expanded) {
      reduced ? panel.removeAttribute("hidden") : expandPanel(panel);
    } else {
      reduced ? panel.setAttribute("hidden", "") : collapsePanel(panel);
    }
  }

  _cardTemplate(entry) {
    return `
    <article class="troubleshooting-card" data-id="${escapeHtml(entry.id)}">
      <button
        class="troubleshooting-toggle"
        type="button"
        aria-expanded="${entry.expanded}"
        aria-controls="ts-panel-${entry.id}"
        id="ts-toggle-${entry.id}"
      >
        <span class="troubleshooting-title">${escapeHtml(entry.problem)}</span>
        <span class="toggle-icon" aria-hidden="true">${entry.expanded ? "−" : "+"}</span>
      </button>
      <div
        class="troubleshooting-panel"
        id="ts-panel-${entry.id}"
        role="region"
        aria-labelledby="ts-toggle-${entry.id}"
        ${entry.expanded ? "" : "hidden"}
      >
        <dl>
          <dt>시도</dt><dd>${escapeHtml(entry.attempt)}</dd>
          <dt>비교</dt><dd>${escapeHtml(entry.comparison)}</dd>
          <dt>배운 점</dt><dd>${escapeHtml(entry.lesson)}</dd>
        </dl>
      </div>
    </article>`;
  }
}
