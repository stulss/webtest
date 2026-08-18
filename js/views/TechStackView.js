/**
 * TechStackView.js
 * -------------------------------------------------------------
 * MVC - View
 * 기술 스택 목록을 렌더링한다. 상태바/숙련도 표시 없이 이름·상태
 * 태그·채택 이유만 보여주는 정적(비인터랙션) 카드 목록이다.
 * -------------------------------------------------------------
 */

class TechStackView {
  constructor(containerEl) {
    this.containerEl = containerEl;
  }

  render(items) {
    this.containerEl.innerHTML = items
      .map((item) => this._cardTemplate(item))
      .join("");
  }

  _cardTemplate(item) {
    return `
    <article class="tech-card">
      <div class="tech-card-head">
        <span class="tech-name">${escapeHtml(item.name)}</span>
        <span class="tech-status">${escapeHtml(item.status)}</span>
      </div>
      <p class="tech-reason">${escapeHtml(item.reason)}</p>
    </article>`;
  }
}
