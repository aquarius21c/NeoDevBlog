// 공개 저장소에 올라가면 안 되는 내용(API 키, 토큰, 내 PC 경로)이 글에 섞였는지 검사합니다.
// 빌드 전에 자동으로 실행되고, 발견되면 빌드를 멈춥니다.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const roots = ['posts', 'src', 'public'];
const textExt = /\.(md|mdx|astro|ts|js|mjs|json|css|html|svg|txt|ya?ml)$/i;
const rules = [
  ['GitHub 토큰', /\b(ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}\b|\bgithub_pat_[A-Za-z0-9_]{40,}\b/],
  ['Anthropic/OpenAI 키', /\bsk-(ant-)?[A-Za-z0-9_-]{20,}\b/],
  ['AWS 키', /\bAKIA[0-9A-Z]{16}\b/],
  ['Google API 키', /\bAIza[0-9A-Za-z_-]{35}\b/],
  ['Notion 토큰', /\b(secret|ntn)_[A-Za-z0-9]{40,}\b/],
  ['Slack 토큰', /\bxox[abprs]-[A-Za-z0-9-]{10,}\b/],
  ['개인 키', /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
  ['Windows 사용자 경로', /\b[A-Za-z]:\\Users\\[^\\\s]+/i],
  ['macOS/Linux 사용자 경로', /\/(Users|home)\/[A-Za-z0-9._-]+\//],
];

function* walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (name === 'node_modules' || name === '.obsidian' || name === '.trash') continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (textExt.test(name)) yield path;
  }
}

const problems = [];
for (const root of roots) {
  for (const file of walk(root)) {
    readFileSync(file, 'utf8')
      .split('\n')
      .forEach((line, i) => {
        for (const [label, re] of rules) {
          if (re.test(line)) problems.push(`${relative('.', file)}:${i + 1}  ${label}`);
        }
      });
  }
}

if (problems.length) {
  console.error('공개하면 안 되는 내용이 있습니다. 지우거나 가린 뒤 다시 빌드하세요.\n');
  for (const p of problems) console.error('  ' + p);
  process.exit(1);
}
console.log('비밀 정보 검사 통과');
