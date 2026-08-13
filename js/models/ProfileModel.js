/**
 * ProfileModel.js
 * -------------------------------------------------------------
 * MVC - Model
 * 프로필(대상 문장, 공개/비공개 범위, 근거)에 대한 데이터를 캡슐화한다.
 * View/Controller는 이 클래스를 통해서만 프로필 데이터에 접근한다.
 * -------------------------------------------------------------
 */

class ProfileModel {
  /**
   * @param {Object} data
   * @param {string} data.name
   * @param {string} data.targetSentence
   * @param {string[]} data.publicItems
   * @param {string[]} [data.heroSummaryItems] - 히어로 영역용 짧은 요약(없으면 publicItems 사용)
   * @param {string[]} data.privateItems
   * @param {{label:string,url:string}} data.evidence
   */
  constructor({
    name,
    targetSentence,
    publicItems,
    heroSummaryItems,
    privateItems,
    evidence,
  }) {
    this.name = name;
    this.targetSentence = targetSentence;
    this.publicItems = [...publicItems];
    this.heroSummaryItems = [...(heroSummaryItems || publicItems)];
    this.privateItems = [...privateItems];
    this.evidence = { ...evidence };
  }

  getPublicItems() {
    return [...this.publicItems];
  }

  getHeroSummaryItems() {
    return [...this.heroSummaryItems];
  }

  getPrivateItems() {
    return [...this.privateItems];
  }
}
