import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 글은 저장소 루트의 posts/ 폴더에 있는 Markdown 파일입니다.
// Obsidian에서 posts/ 폴더를 보관함(vault)으로 열어서 쓰면 됩니다.
// 밑줄(_)로 시작하는 파일과 폴더(_templates 등)는 글로 취급하지 않습니다.
const posts = defineCollection({
  loader: glob({ base: './posts', pattern: ['**/*.md', '!**/_*/**', '!**/_*.md'] }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // YouTube 영상 ID (예: https://youtu.be/abc123 이면 abc123)
    youtube: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 영문판 글은 posts-en/ 폴더에 한국어 글과 같은 파일 이름으로 둡니다.
// 날짜, 태그, 영상, 초안 여부는 한국어 글의 값을 그대로 씁니다.
const postsEn = defineCollection({
  loader: glob({ base: './posts-en', pattern: ['**/*.md', '!**/_*/**', '!**/_*.md'] }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { posts, postsEn };
