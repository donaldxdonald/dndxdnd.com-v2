---
title: '#186: Ghostty Is Leaving GitHub, SpaceXAI, Node.js 26…'
date: 2026-05-11 00:30
---



## 简讯

- Mozilla 对浏览器的 Prompt API 持[明确反对态度](https://github.com/mozilla/standards-positions/issues/1213#issuecomment-4347988313)，理由是它会把 Web 生态锁定在特定模型和特定厂商规则上，进而放大互操作性、可更新性和平台中立性风险。Mozilla 更倾向把这类能力先放在 library、extension 或 web extension 里继续试验，再看是否有足够成熟的标准化空间。
- 终端模拟器项目 Ghostty 宣布[将退出 GitHub 平台](https://mitchellh.com/writing/ghostty-leaving-github)。
- GitHub 正在[执行 30 倍扩容计划](https://github.blog/news-insights/company-news/an-update-on-github-availability/)，重点包括将性能敏感代码从 Ruby 单体架构迁移至 Go，并将数据库负载从 MySQL 移出，同时由自定义数据中心向 Azure 及多云架构迁移以提升抗风险能力。
- [OpenAI 和 AWS 扩大合作](https://openai.com/index/openai-on-aws/)，OpenAI 模型、Codex 以及由 OpenAI 驱动的 Amazon Bedrock Managed Agents 将进入 AWS 体系。
- OpenAI 推出了 GPT-Realtime-2、GPT-Realtime-Translate 和 GPT-Realtime-Whisper，这[三款 API 语音模型](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/)为 AI 语音代理和实时语音带来了新的推理、流式传输、工具使用、更高真实感以及更多能力升级。
- Elon Musk 称，[xAI 不再作为独立公司存在](https://36kr.com/p/3798593828477955)，将更名为 SpaceXAI，即 SpaceX 的 AI 产品。同时宣布 22 万张 GPU 算力租给 Anthropic。
- Bun 正在计划把现在的 Zig 代码库[用 Rust 重写](https://github.com/oven-sh/bun/commit/46d3bc29f270fa881dd5730ef1549e88407701a5)。
- [Node.js 26](https://nodejs.org/en/blog/release/v26.0.0) 正式发布了，核心变化是 Temporal API 默认启用。

## 有趣

- [Cursor Camp](https://neal.fun/cursor-camp/)
  
    Neal fun 的新游戏，用鼠标和全世界用户互动。
    
- [HN SOTA](https://hnup.date/hn-sota)
  
    一个基于 Hacker News 评论的编程模型热度追踪榜单，每日更新。
    

## 工具

- [warp](https://github.com/warpdotdev/warp)
  
    智能终端工具 Warp 居然开源了客户端代码。
    
- [Amp, Neo](https://ampcode.com/news/neo)
  
    Amp 发布了重构后的 CLI 版本 Neo，核心变化是把 threads 远程可控、自动 compaction、插件化和默认放宽权限放到一起，目标是适配 2026 年的 frontier models 工作方式。
    
- [Rolldown](https://voidzero.dev/posts/announcing-rolldown-1-0)
  
    Rolldown 正式发布 1.0，进入 stable 和 production ready 阶段。它主打 Rust 实现、高性能、兼容 Rollup plugin API，并且已经成为 Vite 8 的默认 bundler，RC 升级到 1.0 基本不需要改代码。
    
- [Flue](https://github.com/withastro/flue)
  
    Astro 发布的一个面向 Agent 系统的 TypeScript 框架，核心是内置的 agent harness。它把模型调用、沙箱、会话、技能、任务和外部工具整合在一起，目标是让代理既能在本地、CI、Cloudflare，也能在远程容器环境中稳定运行。
    

## 文章

- [Using Claude Code: The Unreasonable Effectiveness of HTML](https://x.com/trq212/status/2052809885763747935)
  
    Claude Code 的开发者认为当 AI 生成的内容不再只是短文本，而是需求、方案、代码审查、研究报告和交互原型时，HTML 比 Markdown 更适合作为输出载体。它能提供更高的信息密度、更好的可读性和更强的可分享性，也更适合把 Claude Code 作为一个可视化工作台来使用。
    
- [Why Most Product Tours Get Skipped (and the One Pattern That Does Not)](https://productonboarding.com/articles/why-product-tours-get-skipped)
  
    大多数首轮产品 Tour 被快速关闭，核心原因不是文案，而是它打断了用户完成任务的路径。更有效的做法是把引导放进产品内部，用可执行的 checklist 或 walkthrough 让用户边做边学。
    
- [10 Lessons for Agentic Coding](https://www.dbreunig.com/2026/05/04/10-lessons-for-agentic-coding.html)
  
    文章总结了 agentic coding 的 10 条实践原则，核心判断是：当代码生成成本大幅下降时，真正重要的环节转向了学习、验证、维护和判断。写代码的目标不再只是快速产出，而是借助实现、重建、测试和文档持续收敛出更好的系统。
    
- [前端鼠标事件行为参考](https://roriri.one/notes/pointer-events)
  
    参考。