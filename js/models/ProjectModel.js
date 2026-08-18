/**
 * ProjectModel.js
 * -------------------------------------------------------------
 * MVC - Model
 * Project: 프로젝트 1개(이름/설명/사용 기술/링크)를 표현하는 단위 모델.
 * 프로젝트마다 겪은 트러블슈팅 이력은 TroubleshootingCollection으로
 * 감싸서 들고 있는다 — 트러블슈팅 자체의 아코디언 상태 관리 로직은
 * TroubleshootingModel.js를 그대로 재사용한다(중복 없음).
 * ProjectCollection: 프로젝트 목록 관리. 앞으로 프로젝트가 늘어나면
 * PortfolioData.js의 projects 배열에 항목만 추가하면 된다.
 *
 * 의존성: 이 파일보다 TroubleshootingModel.js가 먼저 로드되어 있어야 한다.
 * -------------------------------------------------------------
 */

class Project {
  constructor({ id, name, description, techUsed = [], link = null, troubleshooting = [] }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.techUsed = techUsed;
    this.link = link;
    this.troubleshootingCollection = new TroubleshootingCollection(troubleshooting);
  }
}

class ProjectCollection {
  constructor(items = []) {
    this.items = items.map((item) => new Project(item));
  }

  getAll() {
    return this.items;
  }
}
