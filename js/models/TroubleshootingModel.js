/**
 * TroubleshootingModel.js
 * -------------------------------------------------------------
 * MVC - Model
 * TroubleshootingEntry: 이 포트폴리오를 만들며 겪은 결함 1건
 * (문제-시도-비교-배운 점 + 펼침 상태)을 표현하는 단위 모델.
 * StrengthModel의 Strength/StrengthCollection과 동일한 형태 —
 * 아코디언 상태 관리 패턴을 그대로 재사용한다.
 * TroubleshootingCollection: 목록 관리 + id로 펼침 상태 토글.
 * -------------------------------------------------------------
 */

class TroubleshootingEntry {
  constructor({ id, problem, attempt, comparison, lesson }) {
    this.id = id;
    this.problem = problem;
    this.attempt = attempt;
    this.comparison = comparison;
    this.lesson = lesson;
    this.expanded = false;
  }

  toggle() {
    this.expanded = !this.expanded;
    return this.expanded;
  }
}

class TroubleshootingCollection {
  constructor(items = []) {
    this.items = items.map((item) => new TroubleshootingEntry(item));
  }

  getAll() {
    return this.items;
  }

  findById(id) {
    return this.items.find((item) => item.id === id) || null;
  }

  toggle(id) {
    const item = this.findById(id);
    if (!item) return null;
    item.toggle();
    return item;
  }
}
