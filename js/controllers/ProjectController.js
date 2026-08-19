/**
 * ProjectController.js
 * -------------------------------------------------------------
 * MVC - Controller
 * ProjectCollection(Model)과 ProjectView(View)를 연결한다.
 * 프로젝트 카드를 렌더링한 뒤, 프로젝트마다 자신의 트러블슈팅
 * 컬렉션을 가지고 있는 TroubleshootingController를 하나씩 붙여서
 * 각 프로젝트 안의 아코디언이 독립적으로 동작하게 한다.
 *
 * 의존성: TroubleshootingView, TroubleshootingController가 이 파일보다
 * 먼저 로드되어 있어야 한다.
 * -------------------------------------------------------------
 */

class ProjectController {
  constructor(collection, view) {
    this.collection = collection;
    this.view = view;
    this.troubleshootingControllers = [];
  }

  init() {
    this.view.render(this.collection.getAll());

    this.collection.getAll().forEach((project) => {
      const container = this.view.getTroubleshootingContainer(project.id);
      if (!container) return;

      const troubleshootingView = new TroubleshootingView(container);
      const troubleshootingController = new TroubleshootingController(
        project.troubleshootingCollection,
        troubleshootingView
      );
      troubleshootingController.init();
      this.troubleshootingControllers.push(troubleshootingController);
    });
  }
}
