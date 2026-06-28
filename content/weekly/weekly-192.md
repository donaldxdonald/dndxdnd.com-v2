---
title: '#192: SpaceX acquired Cursor, GLM 5.2, GPT 5.6…'
date: 2026-06-28 21:42
---



## 简讯

- SpaceX 最终还是宣布[收购了 Cursor](https://x.com/SpaceX/status/2066873915717136548)。
- 随后，有钱的 Cursor [收购了 Continue](https://www.continue.dev/) 。
- Midjourney 宣布[进军医疗影像和健康服务领域](https://www.midjourney.com/medical/blogpost)，正在从图像生成公司扩展为医疗影像硬件和研究实验室，核心产品是 Midjourney Scanner。（？
- 智谱发布了最新的 [GLM 5.2](https://z.ai/blog/glm-5.2) 模型，核心变化是把上下文升级到 1M token，并把这种能力真正落到长周期编码和代理任务上。成为了开放权重模型的新里程碑，并在海外引起热议。有一些和 Claude Opus 的[对比参考](https://techstackups.com/comparisons/glm-5.2-vs-opus/)。
- Astro 发布了 [7.0](https://astro.build/blog/astro-7/)，以性能提升为主线，将 `.astro` compiler、Markdown/MDX 处理和渲染引擎迁移到 Rust，并同步升级到 Vite 8，从而把构建速度提升 15% 到 61%，同时补齐了 Advanced Routing、route caching 和面向 AI 工具链的开发支持。
- Deno 发布了 [2.9 更新](https://deno.com/blog/v2.9)，其中亮点是 [Deno Desktop](https://docs.deno.com/runtime/desktop/)，可以将 JavaScript 项目转换为适用于 macOS、Windows 和 Linux 的自包含应用程序。与 Electron 不同，你可以选择使用默认的操作系统 WebView 或内置的 Chromium 后端。
- [Babel 8](https://babeljs.io/blog/2026/06/16/8.0.0/) 正式发布，核心变化是改为 ESM-only、默认不再按 ES5 和 CommonJS 进行编译，并为所有 Babel 包提供 TypeScript 类型。
- Vite 发布 [8.1](https://vite.dev/blog/announcing-vite8-1) ，终于有 Full Bundle Mode 了。
- Apple 正准备在继任 CEO 约翰·特纳斯（John Ternus）的领导下[回归设计驱动的产品开发](https://9to5mac.com/2026/06/21/john-ternus-apple-design-team-influence)。
- Gemini 3.5 Flash 也支持 [Computer Use](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/) 了。
- OpenAI 正在对 [GPT-5.6 系列](https://openai.com/index/previewing-gpt-5-6-sol/)做有限开放预览，核心包括旗舰模型 Sol、均衡型 Terra 和低成本的 Luna。（被白宫卡脖子要[推迟发布](https://techcrunch.com/2026/06/25/the-white-house-is-asking-openai-to-slow-roll-the-release-of-its-new-model-over-safety-concerns)了
- Figma 发布了 [Motion](https://www.figma.com/blog/introducing-figma-motion/)，把动画从外部工具和交接环节，直接纳入同一个设计画布中。核心变化是：设计、时间轴、关键帧、评论、Dev Mode 和代码导出被放进同一流程里。（AE? Flash?

## 有趣

- [Messenger](https://messenger.abeto.co/)
  
    一个基于 WebGL 和 Three.js 的 Web 游戏，挺精致的。
    
- [Velvet UI](https://velvet-ui-eight.vercel.app/)
  
    带有音效反馈的 UI。
    
- [CSS Quake](https://cssquake.com/)
  
    基于 CSS 实现的雷神之锤，引擎是 PolyCSS 。
    

## 工具

- [AI SDK v7](https://vercel.com/blog/ai-sdk-7)
  
    AI SDK 7 把原本偏通用的 TypeScript AI SDK，推进到更适合生产级 agent 的阶段。它重点补齐了 agent 的开发、运行、集成、观测和多模态能力，覆盖 reasoning、工具上下文、持久化执行、审批、沙箱、统一观测、实时语音和视频生成。
    
- [eve](https://vercel.com/blog/introducing-eve)
  
    来自 Vercel 的新框架，它通过使用 TypeScript 和 Markdown 提供类似 Next.js 的结构，用于构建 AI Agent。
    
- [nub](https://github.com/nubjs/nub)
  
    Zod 和 tRPC 的作者开发的一个用 Rust 实现的 Node.js 全家桶工具，目标是在保留标准 Node 的前提下，统一承担运行脚本、执行包命令、安装依赖、管理 Node 版本等工作。
    

## 文章

- [Say precisely what you mean.](https://index.how/to/articulate)
  
    一些设计相关的术语。
    
- [Every Frame Perfect](https://tonsky.me/blog/every-frame-perfect)
  
    UI 设计要保证任意时刻截屏都能被解释，尤其要重视动画过程中的每一帧。
    
- [Less is more, more or less](https://jakub.kr/writing/less-is-more)
  
    在 AI 时代，增加内容、功能和代码变得很容易，但真正决定产品质量的，反而是理解、判断力和取舍能力。作者认为，越是强大的工具，越需要人主动决定什么该做、什么该删、什么根本不该做。
    
- [Teaching agents product design at Vercel](https://vercel.com/blog/teaching-agents-product-design-at-vercel)
  
    Vercel 把产品设计决策当作代码资产来管理，做成了一个可被 agent 调用的 `product-design` 体系。核心目标是让 coding agents 不只会复刻界面样式，还能拿到为什么这么设计的上下文，并通过 lint、eval 和人工复审保持规则持续更新。
    
- [The Minimum Viable Unit of Saleable Software](https://brandur.org/minimum-viable-unit)
  
    LLM 让软件开发成本显著下降，但没有降到零，因此很多软件仍然更适合买而不是自己重写。作者提出一个判断标准，即软件存在一个价格和复杂度共同决定的适用区间，只有当价格足够高、复杂度足够高时，才更倾向于自己做。
    
- [The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop)
  
    Armin 认为，coding agents 上层的 harness loop 在代码迁移、性能探索、漏洞扫描、研究和临时性实验里非常有效，但用于长期维护的核心代码时，会显著放大局部防御、复杂化和可理解性下降的问题。循环化开发会成为事实上的主流。真正需要解决的，不是要不要用 loop，而是如何在使用 loop 的同时保留人类判断、工程边界和长期可维护性。
    
- [Meta Harnesses, Agents, and Lessons from the Framework Wars](https://nx.dev/blog/meta-harnesses-agents-and-lessons-from-the-framework-wars)
  
    AI agent 领域正在重复 JavaScript 框架大战的路径。最终胜出的不会是功能最全的 agent，而是更聚焦的 agent，以及位于其上的一层元 harness，用来补齐记忆、协作、权限、跨仓库访问和流程编排等能力。