// 홈 화면(소개·경력·프로젝트·연락처)에 들어가는 내용입니다. 글은 posts/ 폴더에서 자동으로 가져옵니다.

export const profile = {
  name: 'Neo Atelier',
  keywords: 'Houdini · VFX · AI Automation',
  nameEn: 'HYUNGI JEON',
  nameKo: '전현기',
  role: 'Founder & Houdini FX Artist',
  tagline: '영화 VFX에서 쌓은 FX 경험과 AI 에이전트로, 혼자서도 스튜디오처럼 작업합니다.',
};

// 연락처는 이메일과 링크드인만 둡니다. 값이 비어 있으면 화면에 표시하지 않습니다.
export const contacts = {
  email: 'aquarius21c@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hyungijeon/',
};

// 소개 섹션에 넣는 FX 릴 (Vimeo 공개 영상)
export const reel = {
  vimeoId: '878370325',
  title: 'Hyungi Jeon FX Reel 2023',
  caption: '영화 VFX에서 작업한 FX를 모은 릴 · 1분 55초',
};

export const experience = [
  {
    period: '2026 — 현재',
    title: 'Founder · Neo Atelier',
    summary:
      'AI 에이전트 하네스로 운영하는 1인 스튜디오를 차렸습니다. 방향과 결정은 제가 하고, 기획·제작·테스트는 역할별 AI 에이전트가 실행합니다. 게임, 시네마틱, Houdini FX 작업을 프리랜서로 진행합니다.',
    tags: ['AI 에이전트', 'Unreal Engine', 'Houdini', '프리랜서'],
  },
  {
    period: '10년 이상',
    title: 'Houdini FX Artist · 영화 VFX',
    summary:
      '국내와 할리우드 작품을 포함해 10년 넘게 영화 VFX를 작업했습니다. 폭발, 연기, 파편 같은 FX를 주로 맡았고, Houdini와 언리얼 엔진을 영상 제작에 써 왔습니다.',
    tags: ['Houdini', 'FX', 'Pyro', 'RBD', 'Unreal Engine'],
  },
];

// stats의 icon: 'video' | 'clock' | 'team' | 'stage'
// link: 사이트 안 주소(posts/..., docs/...) 또는 https:// 로 시작하는 바깥 주소
export const projects = [
  {
    title: 'UrbanStrike 버티컬 슬라이스',
    summary:
      '언리얼 엔진 5.8로 만드는 디비전 스타일 3인칭 슈터 데모입니다. 히트스캔 사격, 반동, 총구 화염·예광탄·피격 FX, 적 AI 전투, 실내 맵까지 이틀 동안 만든 과정을 정리했습니다.',
    image: 'projects/urbanstrike.jpg',
    imageAlt: 'UrbanStrike 3인칭 시점으로 미완성 건물 안에서 적과 교전하는 장면',
    link: 'posts/2026-10-27-ai-game-studio/',
    stats: [
      { icon: 'video', label: '확인 영상 58초' },
      { icon: 'clock', label: '실제 작업 약 18시간' },
    ],
    tags: ['Unreal Engine 5.8', 'Lumen', 'Nanite', 'Niagara'],
  },
  {
    title: 'AI 게임 스튜디오 하네스',
    summary:
      '게임 회사의 팀장 14명을 AI 에이전트로 두고, 기획부터 출시와 유지보수까지 7단계를 게이트로 끊어 운영하는 설계입니다. 저는 CEO로서 비전과 게이트 승인만 결정합니다.',
    image: 'projects/studio-harness.jpg',
    imageAlt: 'UrbanStrike 스튜디오 하네스 설계 문서 첫 화면',
    link: 'docs/urbanstrike-studio-harness.html',
    stats: [
      { icon: 'team', label: 'AI 팀장 14명' },
      { icon: 'stage', label: '7단계 · 게이트 6개' },
    ],
    tags: ['Claude Code', 'AI 에이전트', '하네스'],
  },
  {
    title: 'UrbanStrike 스튜디오 콘솔',
    summary:
      '하네스를 웹으로 옮긴 운영 화면입니다. 현재 단계와 다음 게이트, 스프린트 티켓, 공정별 테스트, 열린 버그를 한 화면에서 확인합니다.',
    image: 'projects/studio-console.jpg',
    imageAlt: 'UrbanStrike 스튜디오 콘솔의 단계·게이트 화면',
    link: 'docs/urbanstrike-studio-console.html',
    stats: [],
    tags: ['HTML', '대시보드'],
  },
  {
    title: 'comfy-monitor',
    summary:
      'Claude Code 안에서 ComfyUI의 큐, VRAM, RAM, GPU 사용량을 상태줄과 10분 그래프 패널로 보여 주는 Claude Code 플러그인입니다. ComfyUI를 창 없이(헤드리스로) 돌릴 때 쓰려고 직접 만들었습니다.',
    image: 'projects/comfy-monitor.jpg',
    imageAlt: 'comfy-monitor 소개 문서 첫 화면',
    link: 'docs/comfy-monitor.html',
    stats: [
      { icon: 'stage', label: 'v0.3.0 · 1단계 완료' },
      { icon: 'clock', label: '10분 그래프 패널' },
    ],
    tags: ['Claude Code', 'ComfyUI', '플러그인'],
  },
  {
    title: 'Neo Atelier 블로그',
    summary:
      '지금 보고 계신 사이트입니다. Obsidian에서 쓴 글을 저장소에 올리면 GitHub Actions가 자동으로 빌드해서 배포합니다.',
    image: 'projects/neo-atelier-blog.jpg',
    imageAlt: 'Neo Atelier 블로그 홈 화면',
    link: 'https://github.com/aquarius21c/NeoDevBlog',
    stats: [],
    tags: ['Astro', 'GitHub Pages', 'Obsidian'],
  },
];
