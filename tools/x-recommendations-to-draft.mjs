#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: npm run content:x-draft -- <recommendations.json>");
  process.exit(1);
}

const raw = JSON.parse(await readFile(inputPath, "utf8"));
const items = normalizeItems(raw);

if (items.length === 0) {
  console.error("No recommendation items found.");
  process.exit(1);
}

const today = new Date();
const date = formatDate(today);
const title = `${date.slice(0, 10)} AI 与工具推荐清单`;
const slug = `${date.slice(0, 10)}-x-recommendations`;
const outputPath = path.join("source", "_drafts", `${slug}.md`);

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, renderDraft({ title, date, items }), "utf8");

console.log(`Draft created: ${outputPath}`);

function normalizeItems(value) {
  const source = Array.isArray(value)
    ? value
    : value.items || value.tweets || value.data || value.results || [];

  return source
    .map((item) => {
      const author = item.author || item.user || item.includes?.users?.[0] || {};
      const metrics = item.public_metrics || item.metrics || {};
      const text = cleanText(item.text || item.full_text || item.content || item.note || "");
      const url = item.url || item.link || buildTweetUrl(author.username, item.id || item.tweet_id);

      return {
        authorName: author.name || item.authorName || "",
        authorUsername: author.username || item.username || "",
        createdAt: item.created_at || item.date || "",
        likes: Number(metrics.like_count || metrics.likes || item.likes || 0),
        reposts: Number(metrics.retweet_count || metrics.reposts || item.reposts || 0),
        replies: Number(metrics.reply_count || metrics.replies || item.replies || 0),
        text,
        url,
      };
    })
    .filter((item) => item.text || item.url)
    .sort((a, b) => scoreItem(b) - scoreItem(a))
    .slice(0, 12);
}

function renderDraft({ title, date, items }) {
  const topItems = items.slice(0, 3);

  return `---
title: ${JSON.stringify(title)}
date: ${date}
categories: 工具推荐
tags:
  - AI 工具
  - 科技资讯
  - X 推荐
cover: false
---

今天这组 X 推荐里，值得先看的不是热闹，而是能不能变成真正可用的工具、方法或判断。

**先把素材收进来，再筛掉噪音。下面还是草稿，需要人工复核和重写后再发布。**

## 先看结论

${topItems.map((item) => `- ${renderOneLine(item)}`).join("\n")}

## 推荐清单

${items.map((item, index) => renderItem(item, index + 1)).join("\n\n")}

## 下一步整理

1. 合并重复工具和相同观点。
2. 为每条推荐补充适用人群、使用场景和风险点。
3. 用 \`baoyu-format-markdown\` 优化结构。
4. 用 \`baoyu-cover-image\` 生成 16:9 封面图。
`;
}

function renderItem(item, index) {
  const author = item.authorUsername
    ? `@${item.authorUsername}`
    : item.authorName || "来源";
  const source = item.url ? `[原始链接](${item.url})` : "原始链接待补";

  return `### ${index}. ${author}

${excerpt(item.text)}

- 来源：${source}
- 信号：${item.likes} likes / ${item.reposts} reposts / ${item.replies} replies
- 需要补充：它是什么、解决什么问题、适合谁、有什么限制。`;
}

function renderOneLine(item) {
  const author = item.authorUsername ? `@${item.authorUsername}` : item.authorName || "来源";
  return `**${author}**：${excerpt(item.text, 64)}`;
}

function scoreItem(item) {
  return item.likes + item.reposts * 2 + item.replies;
}

function excerpt(text, max = 140) {
  const normalized = cleanText(text);
  return normalized.length > max ? `${normalized.slice(0, max)}...` : normalized;
}

function cleanText(text) {
  return String(text).replace(/\s+/g, " ").trim();
}

function buildTweetUrl(username, id) {
  if (!username || !id) return "";
  return `https://x.com/${username}/status/${id}`;
}

function formatDate(date) {
  const pad = (number) => String(number).padStart(2, "0");
  return [
    date.getFullYear(),
    "-",
    pad(date.getMonth() + 1),
    "-",
    pad(date.getDate()),
    " ",
    pad(date.getHours()),
    ":",
    pad(date.getMinutes()),
    ":",
    pad(date.getSeconds()),
  ].join("");
}
