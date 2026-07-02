---
title: Offer Toolkit：把求职拆成三个 Skill
date: 2026-07-02 12:00:21
updated: 2026-07-02 12:00:21
categories: 工具推荐
tags:
  - AI 工具
  - Claude Skill
  - 求职工具
  - 简历优化
  - X 推荐
cover: /img/posts/offer-toolkit-career-copilot/cover.png
description: Offer Toolkit 把 JD 解读、简历优化和行为面试准备拆成三个 Claude Skill，用统一路由串成一条求职工作流，适合把零散求职材料整理成可执行的申请策略。
---

今天从 X 时间线里看到宝玉转发了 Dreameryanyan 的一个求职工具包：**Offer Toolkit**。

它不是单个提示词，而是把求职流程拆成三个 Claude Skill：看 JD、改简历、准备行为面试。这个方向比“帮我润色一下简历”更值得看，因为它把求职里最容易混在一起的三个动作分开了。

**最值得看的点是：Offer Toolkit 不是直接替你编故事，而是先判断岗位是否值得投，再围绕真实经历组织材料。**

## 先看结论

* 它把求职拆成 `job-description-skill`、`resume-skill`、`bq-skill` 三个子 Skill。
* `job-description-skill` 用来解读 JD、判断匹配度、预测面试问题，并生成 Offer Strategy Report。
* `resume-skill` 用来整理和美化简历，README 提到内置 11 个可打印模板。
* `bq-skill` 用来挖掘真实经历，整理成可复用的行为面试故事库。
* 这套工具的核心原则是“不编造”，所有经历、数字和头衔都必须来自用户真实输入。

## 为什么这个拆法合理

很多人用 AI 求职时，会直接从“改简历”开始。

问题是：如果没有先解读 JD，你不知道这份简历到底应该往哪里改。

同一段经历，对不同岗位的重点完全不一样。一个岗位更看重增长，另一个岗位更看重系统设计，再一个岗位可能更看重跨团队推进。如果不先判断岗位真实需求，简历优化很容易变成泛泛而谈。

Offer Toolkit 的顺序是：

1. 先看岗位，判断它到底要什么；
2. 再看自己的履历，判断匹配和缺口；
3. 决定要投之后，再改简历；
4. 拿到面试后，再准备行为面试故事。

这个顺序比直接“润色一下”稳。

## 三个 Skill 分别做什么

### Job Description Skill

这个子 Skill 负责读 JD。

根据仓库说明，它会让你输入岗位描述和简历，然后生成一个 HTML 版的 Offer Strategy Report。报告会覆盖是否值得投、匹配度、差距、可能面试问题、薪资是否合理，以及后续六周行动计划。

我认为这里最有价值的是“先判断是否值得投”。

求职不是投得越多越好，尤其是时间有限时，最重要的是先筛掉明显不适合的岗位。

### Resume Skill

这个子 Skill 负责把简历整理成更可用的版本。

README 里提到，它可以基于现有简历、LinkedIn 或对话来构建内容，并输出 11 个可打印模板，比如 Classic-ATS、Tech Compact、Modern Sidebar、Swiss、Executive 等。

这里的价值不是模板多，而是把结构化内容和视觉呈现分开。

先把经历整理成标准结构，再选择合适模板输出，这比一边改内容一边调格式要清楚很多。

### BQ Skill

这个子 Skill 面向行为面试。

它不是给你一堆套话答案，而是让你一步步回忆真实经历，再用 STAR/CAR 这类框架整理成故事库。之后遇到不同问题时，可以复用同一组真实故事。

这点很关键。行为面试最怕“听起来很会说，但细问没有细节”。

如果故事库来自真实项目、真实冲突和真实决策，后续回答会稳很多。

## 对普通用户有什么用

这套工具最适合三类人：

* 正在换工作，但不知道某个岗位值不值得投；
* 简历素材很多，但不知道该突出哪一段；
* 面试前有经历，但没有整理成可复用故事。

如果你只是想快速生成一份漂亮简历，它可能显得有点重。

但如果你要认真准备一批目标岗位，这种流程化 Skill 会比一次性提示词更可靠。

## 对本站有什么启发

这类工具说明一个趋势：Skill 不只是“更长的提示词”，而是可以把一个复杂任务拆成稳定流程。

Offer Toolkit 的结构很清楚：

* 顶层 Skill 负责路由；
* 子 Skill 各自处理一个明确阶段；
* 每一步都有输入、输出和边界；
* 最后把结果汇总成可交付文件。

这和内容自动化、网站运营、资料整理是同一个思路。

如果本站后续要继续做自动化运营，也应该尽量把流程拆成独立 Skill：选题、查证、写作、封面、构建、发布、复盘。每一步边界越清楚，自动化越不容易乱。

## 需要注意的边界

求职类 AI 工具最容易出问题的地方是“编造”。

Offer Toolkit 在 README 里把 **Never fabricate** 放进共同规则，这是对的。AI 可以帮你组织表达、找缺口、做结构化，但不应该替你发明经历、数字或头衔。

另外，AI 对公司、薪资和岗位真实情况的判断也需要人工复核。

更合理的用法是：让它先生成策略报告，然后你把里面的公司信息、薪资范围、岗位判断逐条核对，而不是直接照单全收。

## 我会怎么用它

如果我自己要用这套工具，会按这个顺序：

1. 先用 `job-description-skill` 跑目标岗位；
2. 只保留评分和动机都合理的岗位；
3. 用 `resume-skill` 针对岗位生成一版简历；
4. 用 `bq-skill` 准备 5 到 8 个真实项目故事；
5. 面试前再用 JD 预测问题做一轮检查。

这样 AI 不是替你求职，而是把求职里的重复分析工作系统化。

**我的判断是：Offer Toolkit 的价值不在“自动拿 offer”，而在把求职从一堆散乱材料变成一条可执行流程。**

## 继续挖

* [X 转发来源：@dotey](https://x.com/dotey/status/2072518800122040399)
* [X 原帖：@yanliudreamer 的 Offer Toolkit 分享](https://x.com/yanliudreamer/status/2072481814267203695)
* [GitHub：offer-toolkit-skill](https://github.com/yanliudesign/offer-toolkit-skill)
* [GitHub：job-description-skill](https://github.com/yanliudesign/job-description-skill)
