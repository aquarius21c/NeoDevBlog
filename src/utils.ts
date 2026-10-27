import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'> & { translated?: boolean };

/** base 경로(/NeoDevBlog)를 붙인 내부 링크를 만듭니다. */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/**
 * 공개된 글을 최신순으로 가져옵니다. draft: true 인 글은 개발 서버에서만 보입니다.
 * lang이 'en'이면 posts-en/에 영문판이 있는 글은 제목과 요약을 영문으로 바꾸고 translated를 붙입니다.
 */
export async function getPosts(lang: 'ko' | 'en' = 'ko'): Promise<Post[]> {
  const posts: Post[] = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  if (lang === 'ko') return posts;
  const english = new Map((await getCollection('postsEn')).map((e) => [e.id, e]));
  return posts.map((post) => {
    const en = english.get(post.id);
    if (!en) return post;
    return { ...post, data: { ...post.data, title: en.data.title, description: en.data.description ?? post.data.description }, translated: true };
  });
}

export function getTags(posts: Post[]) {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ko'));
}

export function formatDate(date: Date, lang: 'ko' | 'en' = 'ko') {
  return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'ko-KR', { year: 'numeric', month: lang === 'en' ? 'short' : 'long', day: 'numeric', timeZone: 'Asia/Seoul' });
}
