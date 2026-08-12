/* =========================================================
   CONTROLLER
   사용자 입력을 받아 Model을 갱신함.
   Model과 View를 조립하는 책임도 가짐.
   ========================================================= */

class CatalogController {
  constructor(model, mountEl) {
    this.model = model;
    this.mountEl = mountEl;
    this.views = [];

    this._buildViews();
    this._mount();
  }

  _buildViews() {
    this.views = this.model.cards.map(
      (cardModel) => new CardView(cardModel, (id) => this.handleToggle(id))
    );
  }

  _mount() {
    this.views.forEach((view) => this.mountEl.appendChild(view.el));
  }

  // "더 자세히 보기" 버튼을 눌렀을 때 View가 호출하는 유일한 진입점
  handleToggle(id) {
    const card = this.model.findById(id);
    if (card) card.toggle();
  }
}
