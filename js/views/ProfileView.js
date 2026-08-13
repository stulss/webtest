/**
 * ProfileView.js
 * -------------------------------------------------------------
 * MVC - View
 * ProfileModel 데이터를 히어로 영역과 공개범위 영역 DOM에 반영한다.
 * View는 데이터를 직접 소유하지 않고, render(model) 호출 시점의
 * 스냅샷만 그린다.
 * -------------------------------------------------------------
 */

class ProfileView {
  constructor({
    nameEl,
    sentenceEl,
    activityChipEl,
    evidenceChipEl,
    publicListEl,
    privateListEl,
  }) {
    this.nameEl = nameEl;
    this.sentenceEl = sentenceEl;
    this.activityChipEl = activityChipEl;
    this.evidenceChipEl = evidenceChipEl;
    this.publicListEl = publicListEl;
    this.privateListEl = privateListEl;
  }

  render(profileModel) {
    this.nameEl.textContent = profileModel.name;
    this.sentenceEl.textContent = profileModel.targetSentence;

    this.activityChipEl.textContent = profileModel
      .getHeroSummaryItems()
      .join(" · ");

    this.evidenceChipEl.textContent = `${profileModel.evidence.label} ↗`;
    this.evidenceChipEl.href = profileModel.evidence.url;

    this._renderList(this.publicListEl, profileModel.getPublicItems());
    this._renderList(this.privateListEl, profileModel.getPrivateItems());
  }

  _renderList(listEl, items) {
    listEl.innerHTML = items
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
  }
}
