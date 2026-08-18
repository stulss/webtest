/**
 * AppController.js
 * -------------------------------------------------------------
 * MVC - Controller (최상위)
 * Model 인스턴스를 생성하고, DOM 요소를 찾아 View 인스턴스를 만든 뒤,
 * 하위 Controller(StrengthController, ProjectController)를 초기화한다.
 * 즉, "무엇을(Model) 어디에(View) 어떻게 연결할지(하위 Controller)"를
 * 총괄하는 조립 지점.
 * -------------------------------------------------------------
 */

class AppController {
  constructor(data) {
    this.profileModel = new ProfileModel(data.profile);
    this.strengthCollection = new StrengthCollection(data.strengths);
    this.projectCollection = new ProjectCollection(data.projects);
    this.techStackCollection = new TechStackCollection(data.techStack);

    this.profileView = new ProfileView({
      nameEl: document.getElementById("profile-name"),
      sentenceEl: document.getElementById("target-sentence"),
      activityChipEl: document.getElementById("hero-activity-chip"),
      evidenceChipEl: document.getElementById("hero-evidence-chip"),
      publicListEl: document.getElementById("public-list"),
      privateListEl: document.getElementById("private-list"),
    });

    this.strengthView = new StrengthView(
      document.getElementById("strength-list")
    );

    this.projectView = new ProjectView(
      document.getElementById("project-list")
    );

    this.techStackView = new TechStackView(
      document.getElementById("techstack-list")
    );

    this.strengthController = new StrengthController(
      this.strengthCollection,
      this.strengthView
    );

    this.projectController = new ProjectController(
      this.projectCollection,
      this.projectView
    );
  }

  init() {
    this.profileView.render(this.profileModel);
    this.strengthController.init();
    this.projectController.init();
    this.techStackView.render(this.techStackCollection.getAll());
  }
}
