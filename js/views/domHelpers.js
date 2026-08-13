/**
 * domHelpers.js
 * -------------------------------------------------------------
 * View 계층에서 공통으로 쓰는 순수 함수 모음.
 * (사용자 입력값을 HTML에 꽂을 때 XSS를 막기 위한 escapeHtml 포함)
 * -------------------------------------------------------------
 */

function escapeHtml(value) {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
