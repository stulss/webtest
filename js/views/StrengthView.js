/**
 * StrengthView.js
 * -------------------------------------------------------------
 * MVC - View
 * 강점(Strength) 카드 목록을 아코디언 형태로 렌더링한다.
 * 펼침/접힘은 전체를 다시 그리지 않고 updateCard()로 해당 카드만 갱신한다.
 * 버튼(<button>) 요소를 토글 트리거로 사용해 마우스 클릭과
 * 키보드(Enter/Space)를 모두 네이티브로 지원한다.
 * -------------------------------------------------------------
 */

class StrengthView {
  constructor(containerEl) {
    this.containerEl = containerEl;
  }

  render(strengths) {
    this.containerEl.innerHTML = strengths
      .map((s) => this._cardTemplate(s))
      .join("");
  }

  updateCard(strength) {
    const card = this.containerEl.querySelector(
      `[data-id="${strength.id}"]`
    );
    if (!card) return;

    const btn = card.querySelector(".strength-toggle");
    const panel = card.querySelector(".strength-panel");
    const icon = card.querySelector(".toggle-icon");

    btn.setAttribute("aria-expanded", String(strength.expanded));
    icon.textContent = strength.expanded ? "−" : "+";

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (strength.expanded) {
      reduced ? panel.removeAttribute("hidden") : expandPanel(panel);
    } else {
      reduced ? panel.setAttribute("hidden", "") : collapsePanel(panel);
    }
  }

  _cardTemplate(s) {
    const pendingBadge = s.pending
      ? '<span class="pending-badge">확인 필요</span>'
      : "";

    const evidence =
      s.evidenceUrl && !s.pending
        ? `<p class="evidence-link"><a href="${s.evidenceUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            s.evidenceLabel || "근거 보기"
          )}</a></p>`
        : "";

    return `
    <article class="strength-card${s.pending ? " is-pending" : ""}" data-id="${escapeHtml(s.id)}">
      <button
        class="strength-toggle"
        type="button"
        aria-expanded="${s.expanded}"
        aria-controls="panel-${s.id}"
        id="toggle-${s.id}"
      >
        <span class="strength-title">${escapeHtml(s.title)}${pendingBadge}</span>
        <span class="toggle-icon" aria-hidden="true">${s.expanded ? "−" : "+"}</span>
      </button>
      <div
        class="strength-panel"
        id="panel-${s.id}"
        role="region"
        aria-labelledby="toggle-${s.id}"
        ${s.expanded ? "" : "hidden"}
      >
        <dl>
          <dt>상황</dt><dd>${escapeHtml(s.situation)}</dd>
          <dt>행동</dt><dd>${escapeHtml(s.action)}</dd>
          <dt>결과</dt><dd>${escapeHtml(s.result)}</dd>
        </dl>
        ${evidence}
      </div>
    </article>`;
  }
}
