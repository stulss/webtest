/**
 * portfolioData.js
 * -------------------------------------------------------------
 * 페이지에 표시될 원본 데이터(콘텐츠).
 * 출처: IT 직무 역량 이력서(수강 전·후 자가진단, 2026-10-28 작성) + 기존 확정 사항.
 * 문서에 없는 사실은 새로 지어내지 않는다.
 * 연락처·이메일·생년월일·거주지·병역은 비공개 원칙에 따라 싣지 않는다.
 * 레벨(①~⑤)은 이력서의 자가진단 기준표를 그대로 따른다.
 * -------------------------------------------------------------
 */

export const LEVELS = {
  1: "입문 — 개념·문법을 알고 강의·튜토리얼을 따라 해봄",
  2: "기초 — 문서·검색을 참고하면 간단한 기능을 혼자 만들 수 있음",
  3: "활용 — 기능 단위를 스스로 설계·구현하고 에러를 혼자 디버깅",
  4: "숙련 — 프로젝트 구조를 잡고 성능·품질 문제를 개선",
  5: "전문 — 내부 동작 원리를 설명하고 다른 사람을 가르칠 수 있음",
};

export const PORTFOLIO_DATA = {
  profile: {
    name: "홍주형",
    role: "DevOps · 정보보안 직무 준비",
    tagline: "현장의 복잡한 일을 순서와 소통으로 정리해 온 사람",
    targetSentence:
      "현장과 행정 업무를 거쳐, SKT 연계 AI 인재 양성 과정(SKT_ALEPH_A)에서 웹 서비스 개발과 보안관제를 직접 만들며 DevOps·정보보안 직무를 준비하고 있습니다.",
    publicItems: [
      "최근 공부한 내용: Python(Flask), Java(Spring Boot), Next.js, Docker, 보안관제 실습",
      "취미: 게임, 야구",
      "관심 분야: IT",
    ],
    heroSummaryItems: ["최근 공부한 내용", "취미", "관심 분야"],
    privateItems: ["집 주소", "전화번호", "이메일 주소", "생년월일"],
    evidence: {
      label: "GitHub에서 근거 보기",
      url: "https://github.com/stulss",
    },
    extraLinks: [
      { label: "포트폴리오 허브", url: "https://hongjuhyung.vercel.app" },
    ],
    keywords: ["DevOps", "정보보안", "Flask", "Next.js", "Docker", "Wazuh·Graylog"],
    // 한눈에 보는 현재 상태
    now: [
      { label: "수강 중", value: "SKT_ALEPH_A · 2026.08.11 ~ 11.12" },
      { label: "진행 중", value: "NEXUS WORK 보안관제 팀 프로젝트 (발표 11/6)" },
      { label: "준비 중", value: "네트워크관리사 2급 (모의고사 70~80점대)" },
      { label: "취업 가능", value: "2026년 11월 · 희망 직무 DevOps·클라우드 / 정보보안·네트워크" },
    ],
    // 숫자로 보는 지금까지
    stats: [
      { value: 3, suffix: "개", label: "대표 프로젝트" },
      { value: 32, suffix: "개", label: "GitHub 공개 저장소" },
      { value: 16, suffix: "개", label: "Vercel 배포" },
      { value: 100, suffix: "%", label: "교육 출석 (20일 중 20일)" },
    ],
    interests: [
      { icon: "🎮", title: "게임", desc: "혼자 몰입하는 시간" },
      { icon: "⚾", title: "기아타이거즈 직관", desc: "현장에서 느끼는 응원 분위기" },
      { icon: "💻", title: "IT 기기", desc: "소식을 찾아보며 직접 배워보고 싶어짐" },
    ],
    // 걸어온 길 — 이력서의 학력·경력·교육 이력에서 날짜가 확인된 것만
    timeline: [
      {
        when: "2016 — 2022",
        title: "동원과학기술대학교 냉동공조설비 전공",
        desc: "전문학사(3.56/4.5)를 거쳐 전공심화과정(공학사, 3.52/4.5)까지 졸업했습니다.",
      },
      {
        when: "2021.07 — 2023.07",
        title: "간호학과 학과조교",
        desc: "학과 행정 지원, 학생 문의 대응, 수업·실습 자료 준비를 맡았습니다.",
      },
      {
        when: "2023.08 — 2024.02",
        title: "그린컴퓨터아카데미 Java 양성과정 수료",
        desc: "Java·Spring·Oracle 기반 웹 & 데이터 융합개발자 과정(국비)을 수료했습니다.",
      },
      {
        when: "2024.01 — 2025.02",
        title: "산학협력단 HiVE사업 전담매니저",
        desc: "평생직업교육 강좌 개설·운영, 강사·수강생 모집, 둘 사이의 소통을 지원했습니다.",
      },
      {
        when: "2025.03 — 2025.11",
        title: "일학습공동훈련센터 매니저",
        desc: "HRD-Net 행정 처리, 담당 기업 관리·신규 기업 발굴, 학생 취업관리, OJT·OFF-JT 일정 운영을 맡았습니다.",
      },
      {
        when: "2025.11 — 2026.04",
        title: "(주)에스투에스 주방직원",
        desc: "조리와 현장 업무, 매출·매입표 작성, 매장 운영 관리를 수행했습니다.",
      },
      {
        when: "2026.08 — 현재",
        title: "코리아AI아카데미 SKT_ALEPH_A",
        desc: "SK텔레콤 연계 AI 인재 양성 과정(국비)을 수강하며 프로젝트 3개를 만들었습니다.",
      },
    ],
    credentials: [
      { when: "2015.07", title: "건설재료시험기능사", org: "한국산업인력공단" },
      { when: "2015.04", title: "콘크리트기능사", org: "한국산업인력공단" },
      { when: "준비 중", title: "네트워크관리사 2급", org: "기출문제·모의고사 70~80점대" },
    ],
  },

  strengths: [
    {
      id: "build",
      title: "강점 1. 낯선 분야를 직접 만들어 보며 익히는 실행력",
      pending: false,
      situation:
        "현장·행정 업무를 거친 뒤 IT 직무로 방향을 바꿔, 2026년 8월부터 SKT_ALEPH_A 과정(출석률 100%)을 수강하기 시작했습니다.",
      action:
        "강의를 듣는 데서 멈추지 않고 Flask·MySQL 사내 포털, React·Socket.io 실시간 협업 앱, Node·Supabase 기반 ZTNA 보안 Agent를 직접 만들어 배포했습니다.",
      result:
        "대표 프로젝트 3개를 완성했고, 프로젝트별 포트폴리오 사이트 3개와 Vercel 배포 16개, GitHub 공개 저장소로 결과를 확인할 수 있습니다.",
      evidenceLabel: "GitHub에서 코드 보기 ↗",
      evidenceUrl: "https://github.com/stulss",
    },
    {
      id: "trace",
      title: "강점 2. 문제의 원인을 끝까지 추적하는 꼼꼼함",
      pending: false,
      situation:
        "NEXUS WORK에서 pfSense를 거치면 모든 접속이 방화벽 IP로만 기록되어, 로그 기반 탐지에 쓸 출발지 IP가 틀리게 남고 있었습니다.",
      action:
        "원인을 프록시 구간에서 찾아 Waitress가 프록시 헤더를 보존하도록 설정하고, 이어서 MySQL 포트를 루프백에만 바인딩하며 시험용 DB 계정이 남는 버그도 고쳤습니다.",
      result:
        "실제 클라이언트 IP가 기록되어 IP 차단 같은 자동 대응이 의미를 갖게 됐고, 자체 방어 점검 18항목을 모두 통과했습니다. 로그는 출발지가 정확해야 쓸모가 있다는 점을 배웠습니다.",
      evidenceLabel: "NEXUS WORK 코드 보기 ↗",
      evidenceUrl: "https://github.com/stulss/nexus-work",
    },
    {
      id: "coordinate",
      title: "강점 3. 사람 사이를 순서대로 정리하는 조율력",
      pending: false,
      situation:
        "산학협력단·일학습공동훈련센터·학과 조교로 일하며 강사와 수강생, 기업과 학생, 학과와 학생 사이의 일정과 문의를 조율해 왔습니다. 지금은 4명 팀 프로젝트의 부팀장입니다.",
      action:
        "일정과 절차를 먼저 정리해 공유하는 방식으로 일했고, 팀 프로젝트에서도 로그 필드·DB 계정·연동 문서처럼 역할이 맞닿는 지점을 먼저 정해 두었습니다.",
      result:
        "웹·DB 하드닝을 맡은 제 영역이 Wazuh·Graylog·n8n·pfSense 쪽 팀원 작업과 이어졌고, 탐지에서 자동 대응까지 하나의 흐름으로 통합됐습니다.",
      evidenceLabel: null,
      evidenceUrl: null,
    },
  ],

  // 기술 자가진단: level = 이력서 기준 ①~⑤, before = 수강 전 레벨(없으면 null)
  techStack: [
    {
      group: "언어",
      items: [
        { name: "Python", before: 1, level: 3, reason: "Flask 3 + PyMySQL + PyJWT 로그인 알림 봇 구현, Wazuh·Graylog 실습 스크립트와 리포트 생성 코드 작성", url: "https://github.com/stulss/n8n-login-alert-bot" },
        { name: "JavaScript", before: 1, level: 2, reason: "plan-do-see-diary, team-pm-app 등 프로젝트 (ESLint·Prettier 설정 포함)", url: "https://github.com/stulss/team-pm-app" },
        { name: "TypeScript", before: null, level: 2, reason: "패스키 인증, 컨텍스트 인계 실험 사이트, 실시간 정보 보드, 카드뉴스 메이커 구현", url: "https://github.com/stulss/webtest-passkey" },
        { name: "Java", before: 2, level: 2, reason: "Spring Boot 3.5 / Java 17 기반 보안 게시판 구현. 이전에는 그린컴퓨터아카데미 양성과정 수료", url: "https://github.com/stulss/secure-bulletin-board" },
      ],
    },
    {
      group: "프레임워크",
      items: [
        { name: "Spring Boot", before: 1, level: 2, reason: "회원가입·로그인·CRUD 게시판에 BCrypt, 서버 측 인가, XSS·SQL Injection 방어 적용. JUnit·Postman·OWASP ZAP으로 검증", url: "https://github.com/stulss/secure-bulletin-board" },
        { name: "Flask", before: null, level: 2, reason: "Flask 3 + JWT 인증·DB 연동 로그인 알림 봇, NEXUS WORK 포털 개발", url: "https://github.com/stulss/n8n-login-alert-bot" },
        { name: "Next.js", before: null, level: 2, reason: "App Router 기반 패스키 인증 사이트 등 3개를 Vercel에 배포", url: "https://github.com/stulss/webtest-passkey" },
        { name: "React", before: null, level: 2, reason: "react-konva + Vite 카드뉴스 메이커, Team PM App 화면, 그리고 이 포트폴리오", url: "https://github.com/stulss/card-news-maker" },
        { name: "Vitest · Playwright", before: null, level: 1, reason: "ai-context-handover-lab, realtime-info-board에 단위·E2E 테스트 설정", url: "https://github.com/stulss/realtime-info-board-t05" },
      ],
    },
    {
      group: "데이터 · 인프라",
      items: [
        { name: "MySQL", before: null, level: 2, reason: "Docker 컨테이너로 MySQL 8.4 운영, Flask 앱에서 PyMySQL로 연동", url: "https://github.com/stulss/n8n-login-alert-bot" },
        { name: "PostgreSQL (Supabase)", before: null, level: 2, reason: "보안 게시판 배포용 DB와 Team PM App DB로 사용", url: "https://github.com/stulss/secure-bulletin-board" },
        { name: "Redis", before: null, level: 1, reason: "패스키 인증 사이트에서 ioredis 사용, Team PM App 실시간 동기화", url: "https://github.com/stulss/webtest-passkey" },
        { name: "Docker", before: null, level: 2, reason: "Wazuh, Graylog+MongoDB+OpenSearch, MySQL, n8n, Flask 컨테이너 구성·운영과 이미지 백업. 보안 게시판 Dockerfile 작성", url: null },
        { name: "Vercel", before: null, level: 2, reason: "프로젝트 16개 배포·운영", url: "https://hongjuhyung.vercel.app" },
        { name: "Wazuh · Graylog (SIEM)", before: null, level: 2, reason: "Docker로 Wazuh 4.9, Graylog 6.1 구성, 로그 수집·알림 연동 실습 스크립트 작성", url: "https://github.com/stulss/python" },
        { name: "n8n", before: null, level: 2, reason: "Docker로 운영하며 로그인 알림 봇과 연동", url: "https://github.com/stulss/n8n-login-alert-bot" },
        { name: "Git · GitHub", before: 1, level: 2, reason: "공개 저장소 32개 운영, 포크·팀 프로젝트(TeamPJ4) 참여", url: "https://github.com/stulss" },
      ],
    },
  ],

  projects: [
    {
      id: "nexus-work",
      name: "NEXUS WORK",
      subtitle: "사내 업무 포털 AI 에이전트 프롬프트 인젝션 탐지 및 자동 대응",
      period: "2026.10.17 ~ 진행 중",
      kind: "보안관제 팀 프로젝트 · 4명 · 수업·과제",
      role: "부팀장 · 역할 A (웹·DB 하드닝, 포털 개발)",
      contribution: "40%",
      status: "진행 중 (리허설 11/5, 발표 11/6)",
      description:
        "AI 에이전트가 붙은 사내 업무 포털에서 프롬프트 인젝션 공격을 탐지하고 자동으로 대응하는 보안관제 시나리오입니다. 저는 웹·DB 하드닝과 포털 개발을 맡았습니다.",
      techUsed: ["Python", "Flask", "MySQL 8.4", "Docker", "Waitress", "Argon2id", "팀: Wazuh · Graylog · n8n · pfSense"],
      highlights: [
        "Flask + MySQL 포털의 인증·세션·인가·입력 검증 하드닝",
        "DB 최소권한 설계: 기밀 표는 읽기 전용 계정, n8n 전용 계정은 대응용 열만 수정",
        "보안 이벤트를 JSON 로그와 GELF로 Graylog에 전송, n8n/SOAR용 IP 차단 REST API 제공",
        "SOC 대시보드, IAM 6대 역할, SSE 실시간 보안 로그, XDR E2E 자동 테스트",
      ],
      results: [
        "내 커밋 34건 (10/17~10/27, +30,123 / -2,374행, 문서 포함)",
        "자체 방어 점검 18항목 전체 통과 (SQL 인젝션, XSS, 업로드 우회, IDOR, CSRF, 세션 위조 등)",
        "코드 취약점 점검 보고 0건",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/stulss/nexus-work" },
        { label: "프로젝트 포트폴리오", url: "https://nexus-portfolio-gray-eta.vercel.app" },
      ],
      troubleshooting: [
        {
          id: "client-ip",
          problem: "pfSense 경유 시 모든 접속이 방화벽 IP로만 기록됨",
          rows: [
            ["해결", "Waitress 프록시 헤더를 보존하도록 설정해 실제 클라이언트 IP를 기록했습니다. (10/22)"],
            ["배운 점", "로그 기반 탐지는 출발지 IP가 정확해야 의미가 있습니다."],
          ],
        },
        {
          id: "mysql-port",
          problem: "MySQL 포트가 외부에 열려 있을 수 있는 구성",
          rows: [["해결", "포트를 3307로 통일하고 루프백에만 바인딩했습니다. (10/22)"]],
        },
        {
          id: "test-account",
          problem: "n8n 계정 시험 뒤 시험용 DB 계정이 서버에 남음",
          rows: [
            ["해결", "정리 로직의 버그를 수정했습니다. (10/20)"],
            ["배운 점", "역할 간 연결 지점(로그 필드, DB 계정, 연동 문서)을 먼저 정해 두어야 통합이 됩니다."],
          ],
        },
      ],
      lacking:
        "Wazuh·Graylog 탐지 규칙과 pfSense 네트워크는 팀원 담당이라 직접 구성 경험 보강이 필요합니다.",
    },
    {
      id: "team-pm-app",
      name: "Team PM App",
      subtitle: "원격 팀 협업·프로젝트 관리 웹앱",
      period: "2026.10.14 ~ 2026.10.23",
      kind: "개인 프로젝트 · 수업·과제",
      role: "1인 개발 (기획, DB 설계, 백엔드·프론트엔드, 보안 점검, 테스트, 배포)",
      contribution: "100%",
      status: "배포 완료",
      description:
        "2~10명 규모의 원격 팀이 프로젝트와 작업을 칸반 보드로 함께 관리하는 실시간 협업 웹앱입니다.",
      techUsed: ["React (Vite)", "Node.js + Express", "PostgreSQL (Supabase)", "Socket.io + Redis", "JWT", "Vercel"],
      highlights: [
        "프로젝트·멤버·역할 관리, 작업 CRUD, 드래그 앤 드롭 칸반 보드",
        "댓글·멘션, 알림(배정·댓글·마감), 프로젝트 대시보드",
        "Socket.io + Redis로 다른 브라우저 화면에 약 0.3초 내 실시간 동기화",
      ],
      results: [
        "첫 진입 번들 594KB → 341KB, 42.6% 절감",
        "단위·통합 테스트 538개, DB 스모크 359항목, 브라우저 E2E 89단계 통과 (프로젝트 포트폴리오 문서 기준)",
      ],
      links: [
        { label: "배포 사이트", url: "https://team-pm-app-sand.vercel.app" },
        { label: "GitHub", url: "https://github.com/stulss/team-pm-app" },
        { label: "프로젝트 포트폴리오", url: "https://team-pm-app-portfolio.vercel.app" },
      ],
      troubleshooting: [
        {
          id: "bundle",
          problem: "첫 진입 번들이 594KB로 큼",
          rows: [["해결", "라우트 단위 지연 로딩으로 341KB까지 줄였습니다. (42.6% 절감)"]],
        },
        {
          id: "kanban-order",
          problem: "칸반 카드를 옮길 때마다 여러 행을 UPDATE해야 함",
          rows: [
            ["해결", "위치 값을 실수형으로 두어 이동한 카드 한 행만 UPDATE하도록 했습니다."],
            ["배운 점", "Refresh Token 회전·재사용 감지, FOR UPDATE 락 같은 인증·동시성 문제를 직접 설계하며 배웠습니다."],
          ],
        },
      ],
      lacking:
        "실사용자 피드백 없이 자체 테스트로만 검증했습니다. 실제 사용 환경에서의 검증이 필요합니다.",
    },
    {
      id: "byte-back",
      name: "BYTE BACK & ZTNA 보안 Agent",
      subtitle: "최부장의 비밀 금고 · 클라우드 침해 방어전",
      period: "2026.10.05 ~ 2026.10.28",
      kind: "개인 프로젝트 · 수업·과제",
      role: "단계별 방어 과제(1~22단계)와 엔드포인트 보안 Agent 구현",
      contribution: "100%",
      status: "완료",
      description:
        "제로 트러스트(ZTNA) 접속 통제와 XDR 침해 탐지를 단계별로 구현한 보안 프로젝트입니다.",
      techUsed: ["Node.js (ESM)", "Supabase (Auth·DB·RLS)", "Vercel Serverless", "WebCrypto ECDSA (P-256)", "Groq / OpenAI"],
      highlights: [
        "클라우드 방어(1~12단계): 브라우저에 있던 기밀 데이터를 DB와 서버리스 API로 이전, 로그인·토큰 검증, 소유자 단위(RLS) 격리",
        "ZTNA 판정 규칙 3종: 등록 기기만 허용, 위험 작업 시 추가 인증, 비인가 영역 차단",
        "XDR 탐지: 10분 내 120건 초과 요청과 낯선 IP를 침해 징후로 식별, 기기 ECDSA 서명 인증",
        "엔드포인트 Agent(13~22단계): PC 자원 실측, 방화벽 읽기 전용 진단, 독립 실행 패키지(78개 파일 SHA-256 검증)",
      ],
      results: ["단계별 공식 판정 전 단계 합격(1~22단계), 점검 19개 통과 (프로젝트 포트폴리오 문서 기준)"],
      links: [
        { label: "배포 사이트", url: "https://stulss-choi-bujang-secret-vault.vercel.app" },
        { label: "GitHub", url: "https://github.com/stulss/choi-bujang-secret-vault" },
        { label: "프로젝트 포트폴리오", url: "https://ztna-vault-portfolio.vercel.app" },
      ],
      troubleshooting: [
        {
          id: "leaked-key",
          problem: "공개 설정 파일에 키가 들어 있었음",
          rows: [["해결", "키를 제거하고 .env.example로 분리했습니다. (10/26)"]],
        },
        {
          id: "hardcoded-data",
          problem: "브라우저에 기밀 데이터가 하드코딩되어 있었음",
          rows: [["해결", "데이터를 제거하고 서버 API로만 접근하도록 바꿨습니다."]],
        },
      ],
      lacking: null,
    },
    {
      id: "portfolio-site",
      name: "이 포트폴리오 웹사이트",
      subtitle: "바닐라 MVC에서 React로 전환",
      period: "2026.08 ~",
      kind: "개인 프로젝트",
      role: "기획, 구현, 접근성 점검",
      contribution: "100%",
      status: "계속 개선 중",
      description:
        "학습한 것을 실제로 적용해보고 싶어서 AI 도구와 함께 기획하고 만든 개인 포트폴리오입니다. 처음에는 프레임워크 없이 객체지향 MVC로 만들었고, 이후 React(Vite)와 3D·스크롤 효과로 다시 만들었습니다.",
      techUsed: ["React", "Vite", "three.js", "Framer Motion", "CSS"],
      highlights: [],
      results: [],
      links: [{ label: "GitHub에서 코드 보기", url: "https://github.com/stulss" }],
      troubleshooting: [
        {
          id: "contrast",
          problem: "강점 카드 라벨 색상이 배경과 명암비 4.02:1로 접근성 기준 미달",
          rows: [
            ["시도", "회색 후보 5개(#7c8592, #828a97, #88909c, #8b93a0, #9098a5)의 명암비를 상대휘도 공식으로 직접 계산했습니다."],
            ["비교", "각각 5.21 / 5.59 / 6.04 / 6.28 / 6.69로 나왔고, WCAG AA 기준(4.5:1)보다 여유 있게 통과하는 값을 선택했습니다."],
            ["배운 점", "색은 눈대중이 아니라 공식으로 검증해야 한다는 것, 기준선에 딱 맞추기보다 여유를 두는 게 안전하다는 것을 배웠습니다."],
          ],
        },
        {
          id: "focus-ring",
          problem: "강점 카드가 Tab으로 선택돼도 포커스 표시가 안 보임",
          rows: [
            ["시도", "개발자도구로 원인을 추적한 결과, 부모 요소의 overflow:hidden이 바깥쪽으로 그려지는 포커스 링을 잘라내고 있었습니다."],
            ["비교", "포커스 링을 바깥쪽(기본값)으로 둘지, 카드 안쪽(inset)으로 그리도록 바꿀지 비교했습니다."],
            ["배운 점", "접근성 결함은 눈으로만 봐서는 안 보이고, 실제로 키보드로 조작해봐야 드러난다는 것을 배웠습니다."],
          ],
        },
        {
          id: "favicon",
          problem: "로컬 파일을 직접 열면 콘솔에 보안 경고가 발생",
          rows: [
            ["시도", "오류 메시지를 분석한 결과, 파비콘을 지정하지 않으면 브라우저가 자동으로 요청을 시도하다가 file:// 환경에서 차단된다는 걸 알아냈습니다."],
            ["비교", "빈 파비콘을 명시해서 요청 자체를 없애는 방법을 선택했습니다."],
            ["배운 점", "사소해 보이는 설정 하나가 실제 사용자 경험(콘솔 오류)에 영향을 줄 수 있다는 것을 배웠습니다."],
          ],
        },
      ],
      lacking: null,
    },
  ],

  // 수강 전·후 비교 (이력서 12번)
  growth: [
    {
      item: "주력 기술",
      before: "Java·Spring·Oracle 양성과정 수료(2023.08~2024.02), Python·JavaScript 기초",
      after: "Python(Flask)·Java(Spring Boot)·TypeScript(Next.js·React)·Node.js(Express), Supabase, Docker, Wazuh·Graylog·n8n 실습",
    },
    {
      item: "만들 수 있는 것",
      before: "학습용 코드와 간단한 정적 페이지",
      after: "웹 서비스(사내 업무 포털, 실시간 협업 웹앱), 로그 수집·자동 대응 연동, ZTNA 접속 판정·XDR 탐지 규칙 프로토타입",
    },
    {
      item: "프로젝트 · 포트폴리오",
      before: "2023년 학습·포트폴리오 실습 저장소 중심",
      after: "대표 프로젝트 3개와 프로젝트별 포트폴리오 사이트 3개, GitHub 공개 저장소 32개, Vercel 배포 16개",
    },
    {
      item: "CS · 면접 대비",
      before: "Git ①, 데이터베이스 이론 ①, 객체지향 ①",
      after: "웹 동작 원리 ②, Git ②, 운영체제·네트워크·DB 이론·객체지향 ①",
    },
  ],

  lacking: [
    "자료구조·알고리즘, 코딩테스트: 풀이 기록과 근거가 없어 기업 코딩테스트 대비가 필요합니다.",
    "운영체제·네트워크·DB 이론: 환경 구성과 연동 경험은 있지만 내부 동작 원리를 설명하는 수준에는 못 미칩니다.",
    "보안관제 프로젝트의 탐지·네트워크 영역(Wazuh·Graylog 규칙, pfSense)은 연동 중심이라 직접 구성 경험을 보강해야 합니다.",
    "정보보안·네트워크·클라우드 분야 자격증은 아직 없습니다. 네트워크관리사 2급을 준비 중이며 모의고사는 70~80점대입니다.",
  ],

  roadmap: [
    { when: "2026.11", title: "NEXUS WORK 마무리 · 자격증 응시 · 직무 지원", desc: "리허설 11/5, 발표 11/6. 증거 자료와 README를 정리해 포트폴리오에 반영하고, 네트워크관리사 2급(현재 모의고사 70~80점대)에 응시하고, 보안관제·클라우드 직무에 지원합니다." },
    { when: "2026.12", title: "코딩테스트 기초", desc: "자료구조·알고리즘을 처음부터 다시 시작합니다. 주 5문제 이상 풀고 풀이 노트를 기록합니다." },
    { when: "2027.01", title: "CS 이론 정리 + 탐지 규칙 실습", desc: "운영체제·네트워크·DB 이론 정리 글을 쓰고, Wazuh·Graylog 탐지 규칙을 직접 구성해 봅니다." },
  ],
};
