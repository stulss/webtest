/* =========================================================
   BOOTSTRAP
   실제 강점 3개의 내용은 여기 데이터로만 존재합니다.
   내용을 바꿀 땐 이 배열만 수정하면 되고, HTML/CSS/다른 JS는
   건드릴 필요가 없습니다.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const catalogModel = new CatalogModel([
    {
      id: 'walk',
      title: '1년째 이어온 저녁 산책 습관',
      situation: '매 끼니 식사 후, 지난 1년 동안',
      action: '식사 후 20분씩 걷는 산책을 하루도 빠지지 않고 이어감',
      result: '1년째 유지 중이며 체력이 눈에 띄게 좋아짐',
      tagType: 'observed',
      evidenceUrl: 'https://github.com/stulss',
      evidenceLabel: '근거 보기'
    },
    {
      id: 'cert',
      title: '공조냉동설비기사 취득을 위해 매일 11시간씩 공부',
      situation: '2026년 3월부터 7월까지, 도서관에서',
      action: '매일 오전 9시부터 오후 8시까지 자격증 교재로 공부함',
      result: '현재도 시험을 준비하며 학습을 이어가는 중',
      tagType: 'expand',
      detailText: '전공자격증이라 공부를 다시 시작. 냉동과 법률이 어려웠고 이번년도는 시험 일정이 끝나서 다음년도에 응시예정.'
    },
    {
      id: 'team',
      title: '팀 과제에서 자료 정리를 맡아 마감 안에 끝냄',
      situation: '조별 과제에서 팀원 4명이 역할을 나눌 때',
      action: '자료 조사와 발표 자료 정리를 맡아 마감 이틀 전까지 초안을 완성함',
      result: '팀원들이 검토·수정할 시간을 확보했고 제출도 늦지 않음',
      tagType: 'observed',
      tagText: '관찰 가능한 결과: 초안을 마감 이틀 전에 완성해 팀원들이 검토할 시간을 확보함',
      accentBorder: '#8a6733'
    }
  ]);

  const mountEl = document.getElementById('strengths-list');
  new CatalogController(catalogModel, mountEl);
});
