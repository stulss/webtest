/**
 * TechStackModel.js
 * -------------------------------------------------------------
 * MVC - Model
 * TechItem: 기술 1개(이름 + 상태 + 채택/학습 이유)를 표현하는 단위 모델.
 * 펼침 상태 없음 — 상태바/숙련도 표시 없이 항상 전부 보이는 짧은 목록이라
 * 인터랙션이 필요 없다.
 * TechStackCollection: 목록만 보관한다.
 * -------------------------------------------------------------
 */

class TechItem {
  constructor({ name, status, reason }) {
    this.name = name;
    this.status = status;
    this.reason = reason;
  }
}

class TechStackCollection {
  constructor(items = []) {
    this.items = items.map((item) => new TechItem(item));
  }

  getAll() {
    return this.items;
  }
}
