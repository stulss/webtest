/**
 * TroubleshootingController.js
 * -------------------------------------------------------------
 * MVC - Controller
 * TroubleshootingCollection(Model)과 TroubleshootingView(View)를 연결한다.
 * StrengthController와 동일한 패턴: 위임 클릭 리스너 1개, 토글 시
 * 해당 카드만 다시 그리도록 지시한다. <button> 요소라 Enter/Space는
 * 브라우저가 네이티브로 처리한다.
 * -------------------------------------------------------------
 */

class TroubleshootingController {
  constructor(collection, view) {
    this.collection = collection;
    this.view = view;
  }

  init() {
    this.view.render(this.collection.getAll());
    this.view.containerEl.addEventListener("click", (event) => {
      const toggleBtn = event.target.closest(".troubleshooting-toggle");
      if (!toggleBtn) return;
      this._handleToggle(toggleBtn);
    });
  }

  _handleToggle(toggleBtn) {
    const card = toggleBtn.closest(".troubleshooting-card");
    if (!card) return;
    const id = card.dataset.id;
    const entry = this.collection.toggle(id);
    if (entry) {
      this.view.updateCard(entry);
    }
  }
}
