# Editorial Style

This site should turn X recommendations into useful, readable posts instead of raw link dumps.

## Shape

- Use a direct title with a clear judgment.
- Start with the problem or the reason this topic matters.
- Keep paragraphs short: usually 1 to 3 sentences.
- Use sections that move the reader forward.
- Prefer concrete names: tool names, product names, model names, company names.
- End with a practical takeaway.

## Markdown Pattern

```markdown
---
title: 标题
date: YYYY-MM-DD HH:mm:ss
categories: 工具推荐
tags:
  - AI 工具
  - 效率工具
cover: /path/to/cover.png
---

开头先给一句判断。

**最值得看的点是：一句话说清楚价值。**

## 先看结论

- 要点一
- 要点二
- 要点三

## 为什么值得看

短段落解释背景和判断。

## 可以怎么用

1. 第一步
2. 第二步
3. 第三步

## 继续挖

- [来源标题](https://x.com/...)
```

## X Recommendation Rules

- Do not copy full posts into the article.
- Quote only short snippets when needed.
- Link back to the original X post.
- Rewrite around value: what it is, why it matters, who should try it, what to watch out for.
- Mark uncertain claims as uncertain.
- Avoid publishing private, sensitive, or account-specific content.

## Cover Image Direction

Use `baoyu-cover-image` style:

- 16:9 for article covers.
- Prefer clean, modern, editorial illustration.
- Good palettes for this site: cool, vivid, elegant, duotone.
- Rendering defaults: digital, flat-vector, or screen-print.
- Text should be title-only or none. Avoid dense text in generated images.

## Draft Review Checklist

- The post has one clear point.
- Tags are useful for the right sidebar.
- The cover image fits the article topic.
- The source links are present.
- No raw timeline dump remains.
- `npm run clean && npm run build` passes.
