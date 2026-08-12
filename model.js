/* =========================================================
   MODEL
   강점 카드 하나의 데이터와 "펼침" 상태만 가짐.
   DOM, 이벤트, 렌더링에 대해 전혀 모름.
   ========================================================= */

class CardModel {
  /**
   * @param {object} data
   * @param {string} data.id
   * @param {string} data.title
   * @param {string} data.situation  - 상황
   * @param {string} data.action     - 행동
   * @param {string} data.result     - 결과
   * @param {'observed'|'expand'} data.tagType
   *   'observed' → 결과 아래에 한 줄짜리 관찰 가능한 근거 텍스트만 표시
   *   'expand'   → "더 자세히 보기" 버튼으로 펼쳐지는 상세 설명 표시
   * @param {string} [data.tagText]     - tagType이 'observed'일 때 표시할 텍스트
   * @param {string} [data.detailText]  - tagType이 'expand'일 때 펼쳐서 보여줄 텍스트
   * @param {string|null} [data.accentBorder] - 카드 테두리 강조색 (선택)
   * @param {string|null} [data.evidenceUrl]   - 근거 페이지로 이동하는 링크 (선택, 카드별로 있을 때만 표시)
   * @param {string} [data.evidenceLabel]       - evidenceUrl이 있을 때 링크에 표시할 텍스트
   */
  constructor({
    id,
    title,
    situation,
    action,
    result,
    tagType,
    tagText = '',
    detailText = '',
    accentBorder = null,
    evidenceUrl = null,
    evidenceLabel = '근거 보기',
    isOpen = false
  }) {
    this.id = id;
    this.title = title;
    this.situation = situation;
    this.action = action;
    this.result = result;
    this.tagType = tagType;
    this.tagText = tagText;
    this.detailText = detailText;
    this.accentBorder = accentBorder;
    this.evidenceUrl = evidenceUrl;
    this.evidenceLabel = evidenceLabel;
    this.isOpen = isOpen;

    this._listeners = [];
  }

  // Observer 패턴: 상태가 바뀌면 구독 중인 View에게 알림
  onChange(listener) {
    this._listeners.push(listener);
  }

  _emitChange() {
    this._listeners.forEach((listener) => listener(this));
  }

  open() {
    if (this.tagType !== 'expand') return;
    this.isOpen = true;
    this._emitChange();
  }

  close() {
    if (this.tagType !== 'expand') return;
    this.isOpen = false;
    this._emitChange();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }
}

class CatalogModel {
  constructor(items) {
    this.cards = items.map((item) => new CardModel(item));
  }

  findById(id) {
    return this.cards.find((card) => card.id === id);
  }
}
