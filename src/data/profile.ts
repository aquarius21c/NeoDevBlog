// 홈 화면(소개·경력·프로젝트·연락처)에 들어가는 내용입니다. 글은 posts/ 폴더에서 자동으로 가져옵니다.
// 글자는 ko(한국어)와 en(영어) 두 벌로 적습니다. 한쪽을 고치면 다른 쪽도 같이 고쳐 주세요.

import type { Lang } from '../i18n';

type Text = Record<Lang, string>;

export const profile = {
  name: 'Neo Atelier',
  keywords: 'Houdini · VFX · AI Automation',
  nameEn: 'HYUNGI JEON',
  nameKo: '전현기',
  role: 'Founder & Houdini FX Artist',
  tagline: {
    ko: '영화 VFX에서 쌓은 FX 경험과 AI 에이전트로, 혼자서도 스튜디오처럼 작업합니다.',
    en: 'Film VFX experience and AI agents, so one person can work like a studio.',
  } as Text,
};

// 소개 섹션의 문단. **굵게** 표시한 부분은 강조됩니다.
export const about: Record<Lang, string[]> = {
  ko: [
    '안녕하세요, **전현기**입니다. 국내와 할리우드 작품을 포함해 10년 넘게 **영화 VFX**에서 폭발, 연기, 파편 같은 FX를 만들어 왔습니다.',
    'AI를 공부하면서 역할이 다른 AI 에이전트들에게 일을 나눠 맡기는 **에이전트 하네스**를 배웠고, 이 방식으로 혼자서도 스튜디오처럼 일하는 **Neo Atelier**를 시작했습니다. 저는 방향과 결정, 품질 판단을 맡고, AI는 그 결정을 빠르게 실행합니다.',
    '지금은 이 구조로 언리얼 엔진 슈터 게임 **UrbanStrike**를 만들고 있고, 만드는 과정은 이 블로그와 유튜브에 기록하고 있습니다.',
  ],
  en: [
    "Hi, I'm **Hyungi Jeon**. For more than 10 years I've worked in **film VFX**, on Korean and Hollywood productions, building FX such as explosions, smoke and debris.",
    'While studying AI I learned to use **agent harnesses**, where AI agents with different roles split up the work. I started **Neo Atelier** to work like a studio on my own this way. I set the direction, make the decisions and judge the quality, and the AI carries those decisions out quickly.',
    "Right now I'm using this setup to build **UrbanStrike**, an Unreal Engine shooter, and I document the process on this blog and on YouTube.",
  ],
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
  caption: {
    ko: '영화 VFX에서 작업한 FX를 모은 릴 · 1분 55초',
    en: 'FX work from film VFX · 1:55',
  } as Text,
};

export const experience: { period: Text; title: Text; summary: Text; tags: Record<Lang, string[]> }[] = [
  {
    period: { ko: '2026 — 현재', en: '2026 — Present' },
    title: { ko: 'Founder · Neo Atelier', en: 'Founder · Neo Atelier' },
    summary: {
      ko: 'AI 에이전트 하네스로 운영하는 1인 스튜디오를 차렸습니다. 방향과 결정은 제가 하고, 기획·제작·테스트는 역할별 AI 에이전트가 실행합니다. 게임, 시네마틱, Houdini FX 작업을 프리랜서로 진행합니다.',
      en: 'Founded a one-person studio run on an AI agent harness. I make the calls, and role-based AI agents handle planning, production and testing. I take freelance work in games, cinematics and Houdini FX.',
    },
    tags: {
      ko: ['AI 에이전트', 'Unreal Engine', 'Houdini', '프리랜서'],
      en: ['AI agents', 'Unreal Engine', 'Houdini', 'Freelance'],
    },
  },
  {
    period: { ko: '10년 이상', en: '10+ years' },
    title: { ko: 'Houdini FX Artist · 영화 VFX', en: 'Houdini FX Artist · Film VFX' },
    summary: {
      ko: '국내와 할리우드 작품을 포함해 10년 넘게 영화 VFX를 작업했습니다. 폭발, 연기, 파편 같은 FX를 주로 맡았고, Houdini와 언리얼 엔진을 영상 제작에 써 왔습니다.',
      en: 'More than 10 years in film VFX on Korean and Hollywood productions. Mostly explosions, smoke and debris, using Houdini and Unreal Engine for film work.',
    },
    tags: {
      ko: ['Houdini', 'FX', 'Pyro', 'RBD', 'Unreal Engine'],
      en: ['Houdini', 'FX', 'Pyro', 'RBD', 'Unreal Engine'],
    },
  },
];

// stats의 icon: 'video' | 'clock' | 'team' | 'stage'
// link: 사이트 안 주소(posts/..., docs/...) 또는 https:// 로 시작하는 바깥 주소
export const projects: {
  title: Text;
  summary: Text;
  image: string;
  imageAlt: Text;
  link: string;
  stats: { icon: string; label: Text }[];
  tags: Record<Lang, string[]>;
}[] = [
  {
    title: { ko: 'UrbanStrike 버티컬 슬라이스', en: 'UrbanStrike vertical slice' },
    summary: {
      ko: '언리얼 엔진 5.8로 만드는 디비전 스타일 3인칭 슈터 데모입니다. 히트스캔 사격, 반동, 총구 화염·예광탄·피격 FX, 적 AI 전투, 실내 맵까지 이틀 동안 만든 과정을 정리했습니다.',
      en: 'A Division-style third-person shooter demo in Unreal Engine 5.8. Hitscan shooting, recoil, muzzle flash, tracer and impact FX, enemy AI combat and an interior map, built in two days.',
    },
    image: 'projects/urbanstrike.jpg',
    imageAlt: {
      ko: 'UrbanStrike 3인칭 시점으로 미완성 건물 안에서 적과 교전하는 장면',
      en: 'UrbanStrike third-person view of a firefight inside an unfinished building',
    },
    link: 'posts/2026-10-27-ai-game-studio/',
    stats: [
      { icon: 'video', label: { ko: '확인 영상 58초', en: '58s test video' } },
      { icon: 'clock', label: { ko: '실제 작업 약 18시간', en: 'About 18 hours of work' } },
    ],
    tags: {
      ko: ['Unreal Engine 5.8', 'Lumen', 'Nanite', 'Niagara'],
      en: ['Unreal Engine 5.8', 'Lumen', 'Nanite', 'Niagara'],
    },
  },
  {
    title: { ko: 'AI 게임 스튜디오 하네스', en: 'AI game studio harness' },
    summary: {
      ko: '게임 회사의 팀장 14명을 AI 에이전트로 두고, 기획부터 출시와 유지보수까지 7단계를 게이트로 끊어 운영하는 설계입니다. 저는 CEO로서 비전과 게이트 승인만 결정합니다.',
      en: "A game studio design with 14 AI agent leads, running seven stages from concept to release and live ops, split by approval gates. As CEO I only set the vision and approve the gates.",
    },
    image: 'projects/studio-harness.jpg',
    imageAlt: { ko: 'UrbanStrike 스튜디오 하네스 설계 문서 첫 화면', en: 'First screen of the UrbanStrike studio harness design doc' },
    link: 'docs/urbanstrike-studio-harness.html',
    stats: [
      { icon: 'team', label: { ko: 'AI 팀장 14명', en: '14 AI leads' } },
      { icon: 'stage', label: { ko: '7단계 · 게이트 6개', en: '7 stages · 6 gates' } },
    ],
    tags: {
      ko: ['Claude Code', 'AI 에이전트', '하네스'],
      en: ['Claude Code', 'AI agents', 'Harness'],
    },
  },
  {
    title: { ko: 'UrbanStrike 스튜디오 콘솔', en: 'UrbanStrike studio console' },
    summary: {
      ko: '하네스를 웹으로 옮긴 운영 화면입니다. 현재 단계와 다음 게이트, 스프린트 티켓, 공정별 테스트, 열린 버그를 한 화면에서 확인합니다.',
      en: 'The harness as a web console. Current stage, next gate, sprint tickets, per-stage tests and open bugs on one screen.',
    },
    image: 'projects/studio-console.jpg',
    imageAlt: { ko: 'UrbanStrike 스튜디오 콘솔의 단계·게이트 화면', en: 'Stages and gates view of the UrbanStrike studio console' },
    link: 'docs/urbanstrike-studio-console.html',
    stats: [],
    tags: { ko: ['HTML', '대시보드'], en: ['HTML', 'Dashboard'] },
  },
  {
    title: { ko: 'comfy-monitor', en: 'comfy-monitor' },
    summary: {
      ko: 'Claude Code 안에서 ComfyUI의 큐, VRAM, RAM, GPU 사용량을 상태줄과 10분 그래프 패널로 보여 주는 Claude Code 플러그인입니다. ComfyUI를 창 없이(헤드리스로) 돌릴 때 쓰려고 직접 만들었습니다.',
      en: "A Claude Code plugin that shows ComfyUI's queue, VRAM, RAM and GPU usage in the status line and a 10-minute graph panel. I built it for running ComfyUI headless.",
    },
    image: 'projects/comfy-monitor.jpg',
    imageAlt: { ko: 'comfy-monitor 소개 문서 첫 화면', en: 'First screen of the comfy-monitor doc' },
    link: 'docs/comfy-monitor.html',
    stats: [
      { icon: 'stage', label: { ko: 'v0.3.0 · 1단계 완료', en: 'v0.3.0 · Stage 1 done' } },
      { icon: 'clock', label: { ko: '10분 그래프 패널', en: '10-minute graph panel' } },
    ],
    tags: { ko: ['Claude Code', 'ComfyUI', '플러그인'], en: ['Claude Code', 'ComfyUI', 'Plugin'] },
  },
  {
    title: { ko: 'Neo Atelier 블로그', en: 'Neo Atelier blog' },
    summary: {
      ko: '지금 보고 계신 사이트입니다. Obsidian에서 쓴 글을 저장소에 올리면 GitHub Actions가 자동으로 빌드해서 배포합니다.',
      en: "The site you're reading. Posts written in Obsidian go into the repo, and GitHub Actions builds and deploys them.",
    },
    image: 'projects/neo-atelier-blog.jpg',
    imageAlt: { ko: 'Neo Atelier 블로그 홈 화면', en: 'Neo Atelier blog home page' },
    link: 'https://github.com/aquarius21c/NeoDevBlog',
    stats: [],
    tags: { ko: ['Astro', 'GitHub Pages', 'Obsidian'], en: ['Astro', 'GitHub Pages', 'Obsidian'] },
  },
];
