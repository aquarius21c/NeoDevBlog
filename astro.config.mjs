// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages 주소: https://aquarius21c.github.io/NeoDevBlog/
// 나중에 개인 도메인을 붙이면 site를 그 도메인으로 바꾸고 base를 지우세요.
export default defineConfig({
  site: 'https://aquarius21c.github.io',
  base: '/NeoDevBlog',
  trailingSlash: 'ignore',
});
