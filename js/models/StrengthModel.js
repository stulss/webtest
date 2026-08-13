/**
 * StrengthModel.js
 * -------------------------------------------------------------
 * MVC - Model
 * Strength: 강점/취향 1개(상황-행동-결과 + 펼침 상태)를 표현하는 단위 모델.
 * StrengthCollection: Strength 목록을 관리하고, id로 펼침 상태를 토글한다.
 * -------------------------------------------------------------
 */

class Strength {
  constructor({
    id,
    title,
    situation,
    action,
    result,
    pending = false,
    evidenceLabel = null,
    evidenceUrl = null,
  }) {
    this.id = id;
    this.title = title;
    this.situation = situation;
    this.action = action;
    this.result = result;
    this.pending = pending;
    this.evidenceLabel = evidenceLabel;
    this.evidenceUrl = evidenceUrl;
    this.expanded = false;
  }

  toggle() {
    this.expanded = !this.expanded;
    return this.expanded;
  }
}

class StrengthCollection {
  constructor(items = []) {
    this.items = items.map((item) => new Strength(item));
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
