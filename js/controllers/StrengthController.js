/**
 * StrengthController.js
 * -------------------------------------------------------------
 * MVC - Controller
 * StrengthCollection(Model)과 StrengthView(View)를 연결한다.
 * 카드 헤더(button) 클릭 이벤트를 위임 방식으로 한 번만 등록하고,
 * Model 상태를 바꾼 뒤 해당 카드만 다시 그리도록 View에 지시한다.
 *
 * <button> 요소를 사용하므로 Enter/Space 키 입력은 브라우저가
 * 네이티브로 click 이벤트를 발생시켜 별도 keydown 처리 없이도
 * 키보드로 동작한다.
 * -------------------------------------------------------------
 */

class StrengthController {
  constructor(collection, view) {
    this.collection = collection;
    this.view = view;
  }

  init() {
    this.view.render(this.collection.getAll());
    this.view.containerEl.addEventListener("click", (event) => {
      const toggleBtn = event.target.closest(".strength-toggle");
      if (!toggleBtn) return;
      this._handleToggle(toggleBtn);
    });
  }

  _handleToggle(toggleBtn) {
    const card = toggleBtn.closest(".strength-card");
    if (!card) return;
    const id = card.dataset.id;
    const strength = this.collection.toggle(id);
    if (strength) {
      this.view.updateCard(strength);
      if (strength.expanded) {
        this._scrollCardIntoView(card);
      }
    }
  }

  // 카드가 펼쳐지면서 아래로 새로 드러난 내용이 화면 밖으로 벗어나 있으면
  // 화면을 따라 내려준다. prefers-reduced-motion이면 즉시 이동한다.
  _scrollCardIntoView(card) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    card.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
    });
  }
}
