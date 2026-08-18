/**
 * ProjectView.js
 * -------------------------------------------------------------
 * MVC - View
 * 프로젝트 카드 목록을 렌더링한다. 각 카드는 이름/설명/사용 기술/링크를
 * 항상 보여주고(스캔하기 쉽게), 그 안에 해당 프로젝트의 트러블슈팅
 * 아코디언이 들어갈 빈 컨테이너를 함께 그린다.
 *
 * 트러블슈팅 아코디언 자체의 렌더링/토글은 이 View가 하지 않는다 —
 * ProjectController가 프로젝트별로 TroubleshootingView/Controller를
 * 별도로 붙여서 처리한다(재사용, 책임 분리).
 * -------------------------------------------------------------
 */

class ProjectView {
  constructor(containerEl) {
    this.containerEl = containerEl;
  }

  render(projects) {
    this.containerEl.innerHTML = projects
      .map((project) => this._cardTemplate(project))
      .join("");
  }

  // 특정 프로젝트의 트러블슈팅 아코디언을 그릴 빈 컨테이너를 찾아준다.
  getTroubleshootingContainer(projectId) {
    return document.getElementById(`project-troubleshooting-${projectId}`);
  }

  _cardTemplate(project) {
    const techChips = project.techUsed
      .map((t) => `<span class="tech-chip">${escapeHtml(t)}</span>`)
      .join("");

    const link = project.link
      ? `<a class="chip chip-link" href="${project.link.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(
          project.link.label
        )} ↗</a>`
      : "";

    return `
    <article class="project-card" data-id="${escapeHtml(project.id)}">
      <div class="project-head">
        <h3 class="project-name">${escapeHtml(project.name)}</h3>
        ${link}
      </div>
      <p class="project-description">${escapeHtml(project.description)}</p>
      ${techChips ? `<div class="project-tech">${techChips}</div>` : ""}
      <div class="project-troubleshooting">
        <p class="project-troubleshooting-label">트러블슈팅</p>
        <div
          id="project-troubleshooting-${escapeHtml(project.id)}"
          class="troubleshooting-list"
        ></div>
      </div>
    </article>`;
  }
}
