---
title: '#187: Gemini Intelligence, Codex Remote Control, Rewrite Bun in Rust…'
date: 2026-05-17 23:50
---



## 简讯

- TanStack 旗下 npm 包[被投毒了](https://socket.dev/blog/tanstack-npm-packages-compromised-mini-shai-hulud-supply-chain-attack)，这次事件的核心不是单点投毒，而是一个连锁供应链入侵。攻击路径覆盖 GitHub Actions、缓存投毒、OIDC 令牌提取、npm 发布和后续仓库篡改。
- Google 宣布了针对[在 Android 上的 Gemini Intelligence](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence) ，旨在把 AI 变成 Android 的操作层。同时还宣布了接入 Gemini Intelligence 的 [Google Book](https://blog.google/products-and-platforms/platforms/android/meet-googlebook/)，目标是把 Gemini 的智能能力、Android 生态和 ChromeOS 的浏览体验整合到一台设备里。
- xAI 终于也发布了其 CLI Coding Agent : [Grok Build](https://x.ai/news/grok-build-cli) 。
- Codex 现在支持在手机或者其它环境[远程连接](https://openai.com/index/work-with-codex-from-anywhere/?)了。
- Bun [合并了 Rust 重写相关 PR](https://github.com/oven-sh/bun/pull/30412)，引发对 Zig、Rust、JS 运行时架构和长期维护的讨论（一百万行新增代码）。Ghostty（也是用 Zig 写的）的作者 [Mitchell](https://x.com/mitchellh/status/2055039647924007222) 表示大家的关注点不应该是语言的争论，而应该是工程复盘。

## 有趣

- [Exploring the HTML-in-Canvas Proposal](https://tympanus.net/codrops/2026/05/13/exploring-the-html-in-canvas-proposal)
  
    探索仍处于实验阶段的 HTML-in-Canvas 提案，想象空间很大。
    

## 工具

- [perry](https://github.com/PerryTS/perry)
  
    一个用 Rust 编写的原生 TypeScript 编译器，目标是把 TypeScript 直接编译成可执行文件，运行时不依赖 Node.js、Electron 或浏览器引擎。它还扩展到了原生 UI、移动端、Web、WASM、线程、国际化和插件等能力，试图把 TypeScript 变成一套跨平台原生开发栈。
    
- [orca](https://github.com/stablyai/orca)
  
    开源版本的 Agent View ，方便管理编排多个 Agent。
    

## 文章

- [The death of design](https://nathanbeck.eu/essays/death-of-design/)
  
    Claude Code 这类 AI 工具正在重塑设计流程，但没有消灭 design。它们更像是放大设计能力的工具，真正变化的是 designer 的工作重心，从画界面转向理解系统、定义约束、验证交互和判断什么该做。
    
- [Reimagining the mouse pointer for the AI era](https://deepmind.google/blog/ai-pointer/)
  
    Google DeepMind 提出一种 AI 化鼠标指针的交互方向。核心目标是让 AI 直接理解用户指向的对象、语境和意图，从而把提示词从长文本压缩为指向加自然语言。
    
- [How Claude Code works in large codebases: Best practices and where to start](https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start)
  
    Claude Code 在大型代码库中的效果，主要取决于外层工程化体系，也就是上下文文件、hooks、skills、插件、MCP、LSP 和 subagents 的组合，而不只是模型本身。在大规模落地时，最关键的不是把更多内容塞进上下文，而是让代码库更可导航、让能力分层加载、让组织层有明确的维护责任。
    
- [A Technical Deep Dive Into the New Raycast](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast)
  
    Raycast 2.0 为了同时支持 macOS 和 Windows，重写为一套以 WebView 为 UI、Node 为业务层、Rust 为性能核心、Swift/C# 为宿主壳的跨平台架构。这样做显著提升了开发效率和跨平台复用能力，但也带来了更高的内存基线和更复杂的调试、兼容与平台适配成本。