// 홈 화면(소개·경력·프로젝트·연락처)에 들어가는 내용입니다. 글은 posts/ 폴더에서 자동으로 가져옵니다.

export const profile = {
  name: 'Neo Atelier',
  owner: 'HG',
  role: 'Founder & Houdini FX Artist · Neo Atelier',
  tagline: '영화 VFX에서 쌓은 FX 경험과 AI 에이전트로, 혼자서도 스튜디오처럼 작업합니다.',
};

// 연락처는 이메일과 링크드인만 둡니다. linkedin이 비어 있으면 화면에 표시하지 않습니다.
export const contacts = {
  email: 'aquarius21c@gmail.com',
  linkedin: '',
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

export const projects = [
  {
    title: 'UrbanStrike · AI 게임 스튜디오',
    summary:
      'AI 팀장 14명이 기획부터 테스트까지 맡는 게임 스튜디오를 만들고, 언리얼 엔진 5.8로 디비전 스타일 3인칭 슈터 데모를 제작하고 있습니다. 저는 CEO로서 범위, 방향, 승인, 품질 판단을 맡습니다.',
    image: 'projects/urbanstrike.jpg',
    imageAlt: 'UrbanStrike 3인칭 시점으로 미완성 건물 안에서 적과 교전하는 장면',
    tags: ['Unreal Engine 5.8', 'AI 에이전트', 'Niagara', 'Blender'],
    // 이 태그가 붙은 글이 있으면 제목이 그 태그 페이지로 연결됩니다.
    tag: 'UrbanStrike',
  },
];
