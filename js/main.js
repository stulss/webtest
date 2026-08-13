/**
 * main.js
 * -------------------------------------------------------------
 * 애플리케이션 진입점.
 * DOM이 준비되면 PortfolioData(Model 원본 데이터)를 AppController에
 * 주입해 애플리케이션을 시작한다.
 * -------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  const app = new AppController(PORTFOLIO_DATA);
  app.init();
});
