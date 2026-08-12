/* =========================================================
   VIEW
   Model 데이터를 DOM으로 그림. 모델이 바뀌면 스스로 갱신.
   사용자 입력을 "해석"하지 않고 그대로 Controller에 보고만 함.
   ========================================================= */

class CardView {
  constructor(model, onUserToggle) {
    this.model = model;
    this.onUserToggle = onUserToggle; // Controller가 넘겨준 콜백
    this.el = this._buildElement();

    // 모델이 바뀌면(다른 경로로 바뀌어도) 뷰가 스스로 갱신되도록 구독
    this.model.onChange(() => this._render());
  }

  _buildElement() {
    const article = document.createElement('article');
    article.className = 'card';
    article.dataset.id = this.model.id;
    if (this.model.accentBorder) {
      article.style.borderColor = this.model.accentBorder;
    }

    article.innerHTML = `
      <h3 class="card-title">${this.model.title}</h3>
      <dl class="sar">
        <dt>상황</dt>
        <dd>${this.model.situation}</dd>
        <dt>행동</dt>
        <dd>${this.model.action}</dd>
        <dt>결과</dt>
        <dd>${this.model.result}</dd>
      </dl>
      ${this._buildTagMarkup()}
      ${this._buildEvidenceMarkup()}
    `;

    if (this.model.tagType === 'expand') {
      this.expandBtn = article.querySelector('.expand-btn');
      this.expandPanel = article.querySelector('.expand-panel');
      this._bindExpandEvents();
    }

    return article;
  }

  _buildTagMarkup() {
    if (this.model.tagType === 'observed') {
      return `<span class="observed-tag">${this.model.tagText}</span>`;
    }

    if (this.model.tagType === 'expand') {
      const btnId = `expand-btn-${this.model.id}`;
      const panelId = `detail-${this.model.id}`;
      return `
        <button class="expand-btn" type="button" aria-expanded="false" aria-controls="${panelId}" id="${btnId}">
          더 자세히 보기
        </button>
        <div class="expand-panel" data-open="false" id="${panelId}">
          <div class="expand-panel-inner">
            <p>${this.model.detailText}</p>
          </div>
        </div>
      `;
    }

    return '';
  }

  _buildEvidenceMarkup() {
    if (!this.model.evidenceUrl) return '';

    return `
      <a class="evidence-tag" href="${this.model.evidenceUrl}" target="_blank" rel="noopener noreferrer">
        ${this.model.evidenceLabel}
      </a>
    `;
  }

  _bindExpandEvents() {
    // View는 "클릭이 일어났다"만 Controller에 보고 — 상태를 직접 바꾸지 않음
    this.expandBtn.addEventListener('click', () => {
      this.onUserToggle(this.model.id);
    });
  }

  // 모델 상태 -> DOM 반영 (단방향)
  _render() {
    if (this.model.tagType !== 'expand') return;

    this.expandPanel.setAttribute('data-open', String(this.model.isOpen));
    this.expandBtn.setAttribute('aria-expanded', String(this.model.isOpen));
    this.expandBtn.textContent = this.model.isOpen ? '접기' : '더 자세히 보기';
  }
}
