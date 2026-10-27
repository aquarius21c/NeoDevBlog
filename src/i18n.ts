import { url } from './utils';

export type Lang = 'ko' | 'en';

/** 언어별 주소. 한국어는 /, 영어는 /en/ 아래에 둡니다. */
export function localeUrl(lang: Lang, path = '') {
  return url(lang === 'en' ? `en/${path.replace(/^\//, '')}` : path);
}

// 영문 페이지가 있는 주소(base 뒤 경로). 나머지(글, 태그)는 한국어만 있어서 ENG를 누르면 영문 홈으로 갑니다.
const shared = ['', 'archive/'];

/** 지금 페이지의 다른 언어 주소를 돌려줍니다. */
export function switchUrl(pathname: string, to: Lang) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  rest = rest.replace(/^\//, '');
  if (rest === 'en' || rest.startsWith('en/')) rest = rest.replace(/^en\/?/, '');
  if (rest && !rest.endsWith('/')) rest += '/';
  return localeUrl(to, shared.includes(rest) ? rest : '');
}

export const ui = {
  ko: {
    siteDescription: 'Houdini FX 아티스트 전현기의 1인 AI 스튜디오, Neo Atelier의 작업 기록',
    nav: { home: '홈', archive: '전체 글', tags: '태그' },
    homeSections: '홈 섹션',
    contacts: '연락처',
    email: '이메일',
    noPosts: '아직 글이 없습니다.',
    draft: '초안',
    video: '영상',
    allPosts: '전체 글 보기',
    archiveTitle: '전체 글',
    archiveLead: '작업 과정과 배운 점을 최신순으로 정리했습니다.',
    koreanOnly: '',
    footer: 'Astro로 만들고 GitHub Pages로 배포합니다.',
    langLabel: '언어 선택',
  },
  en: {
    siteDescription: 'Work log of Neo Atelier, the one-person AI studio of Houdini FX artist Hyungi Jeon',
    nav: { home: 'Home', archive: 'Writing', tags: 'Tags' },
    homeSections: 'Home sections',
    contacts: 'Contact',
    email: 'Email',
    noPosts: 'No posts yet.',
    draft: 'Draft',
    video: 'Video',
    allPosts: 'View all writing',
    archiveTitle: 'Writing',
    archiveLead: 'Notes on how the work gets made and what I learned along the way, newest first.',
    koreanOnly: 'Korean',
    footer: 'Built with Astro and deployed on GitHub Pages.',
    langLabel: 'Language',
  },
} as const;

const tagNamesEn: Record<string, string> = {
  개발기: 'Dev log',
  언리얼엔진: 'Unreal Engine',
  게임개발: 'Game dev',
  에이전트: 'Agents',
  파이프라인: 'Pipeline',
};

export function tagLabel(tag: string, lang: Lang = 'ko') {
  return lang === 'en' ? (tagNamesEn[tag] ?? tag) : tag;
}
