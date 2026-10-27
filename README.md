# NeoDevBlog

언리얼 엔진 AI로 콜 오브 듀티 스타일 게임을 만드는 개발 기록 블로그입니다.
[Astro](https://astro.build)로 만든 정적 사이트이고, GitHub Actions가 GitHub Pages에 자동으로 배포합니다.

주소: https://aquarius21c.github.io/NeoDevBlog/

## 구성

| 경로 | 내용 |
| --- | --- |
| `posts/` | 블로그 글 (Markdown). Obsidian 보관함으로 여는 폴더 |
| `posts/images/` | 글에 넣는 이미지 |
| `posts/_templates/` | Obsidian 새 글 템플릿 (사이트에는 안 나옴) |
| `src/pages/` | 홈, 전체 글, 글 페이지, 태그 페이지 |
| `src/data/profile.ts` | 홈 화면의 소개 문구, 경력, 프로젝트, 연락처(이메일·링크드인) |
| `public/projects/` | 홈 화면 프로젝트 썸네일 |
| `scripts/check-secrets.mjs` | 빌드 전에 API 키나 내 PC 경로가 글에 섞였는지 검사 |

## Obsidian으로 글 쓰기

1. Obsidian에서 **Open folder as vault**로 이 저장소의 `posts` 폴더를 엽니다.
2. 설정 → **Files and links**
   - **Use [[Wikilinks]]**: 끔 (일반 Markdown 링크로 저장되어야 사이트에서 보입니다)
   - **New link format**: Relative path to file
   - **Default location for new attachments**: In the folder specified below → `images`
3. 설정 → Core plugins → **Templates** 켜고, Template folder location을 `_templates`로 지정합니다.
4. 새 글을 만들고 템플릿(`post`)을 넣은 뒤 제목, 날짜, 태그를 채웁니다.

파일 이름이 글 주소가 됩니다. 예: `posts/2026-11-01-behavior-tree.md` → `/NeoDevBlog/posts/2026-11-01-behavior-tree/`
영어 소문자와 하이픈으로 짓는 것을 추천합니다.

### 글 머리말(frontmatter)

```yaml
---
title: "개발기 #1 — Behavior Tree로 순찰하는 적 만들기"
date: 2026-11-01
description: "목록과 검색 결과에 나오는 한 줄 요약"
tags: [개발기, 언리얼엔진, AI]
youtube: "dQw4w9WgXcQ"   # 영상이 있으면 ID만. 글 맨 위에 영상이 붙습니다
draft: true              # true면 사이트에 공개되지 않음
---
```

## 내 컴퓨터에서 미리 보기

Node.js 24 이상이 필요합니다.

```bash
npm install
npm run dev      # http://localhost:4321/NeoDevBlog/ (초안도 보임)
npm run build    # 배포용 빌드 (비밀 정보 검사 포함)
```

## 배포

`main` 브랜치에 올라가면 `.github/workflows/deploy.yml`이 빌드하고 GitHub Pages에 배포합니다.
처음 한 번은 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 바꿔야 합니다.
