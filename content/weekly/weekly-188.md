---
title: '#188: Gemini 3.5 Flash, Gemini Omni, DeepSeek V4 Pro…'
date: 2026-05-25 00:30
---



## 简讯

- Qwen 发布了 [Qwen3.7-Max](https://qwen.ai/blog?id=qwen3.7)，定位是面向 Agent 时代的旗舰模型，重点强化了编程、办公自动化、长周期自主执行和跨框架泛化能力。
- Kimi 正在构建新一版的 CLI Coding 工具 [Kimi Code](https://github.com/MoonshotAI/Kimi-code)，从 Python 技术栈切换到 TypeScript 技术栈了。
- 这次的 [Google IO](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/) 的主题是 Agents ，Google 用更快更便宜的 Gemini 3.5 Flash，把搜索、工作流和个人助理统一进同一个 agent 体验里。这一系列的发布分成两类 agent 体验：一类是与用户协作，例如 AI Mode、Antigravity 2.0；另一类是直接替用户执行任务，例如 Gemini Spark、Daily Brief、Universal Cart。
- 还有就是 Google 首个全模态视频生成模型 [Gemini Omni](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)，支持从图像、音频、视频、文本任意输入生成视频，还能通过自然语言进行对话式视频编辑和角色一致性保持。（期待之后的多模态模型发展
- DeepSeek V4 Pro 宣布 API 价格[折扣永久化](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)。（味大，无需多盐
- Cursor 发布了同样基于 Kimi K2.5 的 [Composer 2.5](https://cursor.com/blog/composer-2-5)，重点提升了长任务执行、复杂指令遵循和协作体验。训练上主要靠更强的强化学习环境、更大规模的合成任务，以及面向具体行为的文本反馈。（有了 SpaceXAI 的资源就是不一样
- 前 Tesla AI 总监、OpenAI 创始成员 [Andrej Karpathy](https://x.com/karpathy/status/2056753169888334312) 宣布加入 Anthropic 的预训练团队。
- 因为 Bun 用 AI 重写为 Rust 实现的风波，`yt-dlp` 项目宣布将[弃用 Bun 作为运行时](https://github.com/yt-dlp/yt-dlp/issues/16766)。

## 有趣

- [铁宋字体 MetroSong](https://www.metrosung.hk/)
  
    《鐵宋》原本是一次复刻香港八十年代古味宋体的字体现代化项目，2024 年已完成；现在团队推出 `MetroSung Plus`，重点补齐常用字、方言俗字、简繁双版本和多文种排版能力，让字体从好看进一步走向好用。
    
- [liquid-dom](https://github.com/AndrewPrifer/liquid-dom)
  
    基于 WebGPU 和 HTML-in-Canvas 的 Liquid Glass 实现，效果很不错。
    

## 工具

- [modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance)
  
    Chrome 团队发布的一套关于现代 Web 开发的指南 Skills。
    

## 文章

- [Native all the way, until you need text](https://justsitandgrin.im/posts/native-all-the-way-until-you-need-text/)
  
    作者用一个很具体的例子说明：在 macOS/iOS 上做带 Markdown、可选中、可流式更新的聊天界面时，SwiftUI、AppKit、TextKit 等原生方案在关键细节上会迅速暴露出限制。相比之下，WebKit 甚至 Electron 反而更容易把文本渲染、选择、排版和性能一起做好。
    
- [Don't Outsource the Learning](https://x.com/addyosmani/article/2056078124346228860)
  
    AI 可以提高交付速度，但如果使用方式只追求出结果，就会在不知不觉中削弱理解能力和长期竞争力。更好的做法是把 AI 当作学习工具，用提问、推演、复盘来保持自己的判断力和技术深度。
    
- [How's Linear so fast? A technical breakdown](https://performance.dev/how-is-linear-so-fast-a-technical-breakdown)
  
    Linear 的快，核心来自架构选择：把浏览器当作数据库，所有修改先本地生效，再异步同步到服务器。首屏通过精简代码、细粒度分包、预加载和服务工作线程提前缓存，把网络等待压到最低；交互层再用键盘优先、短动画和细粒度渲染，把每次操作的成本继续压缩。
    
- [React Server Components in TanStack](https://frontendmasters.com/blog/react-server-components-in-tanstack/)
  
    文章介绍了 TanStack Start 中的 React Server Components（RSC）实现方式。核心观点是：RSC 适合把大而重、交互少的组件留在服务端执行，从而减少客户端 JavaScript 体积，同时保持 TanStack 原有的数据加载能力和流式渲染能力。
    
- [Declarative partial updates](https://developer.chrome.com/blog/declarative-partial-updates)
  
    Chrome 正在推进的 Declarative Partial Updates，一组让 HTML 可以更灵活地分段、异步、流式更新的新能力。核心目标是减少依赖复杂 JavaScript DOM 操作的场景，让内容按可用性和优先级更自然地进入页面，同时保留性能和可维护性。
    
- [AI 正在分裂成两个市场，你选哪一边](https://yage.ai/share/ai-pricing-bifurcation-20260523.html)
  
    AI 市场正在分裂成两个经济逻辑不同的部分。低端模型在开源、低价和推理效率推动下快速降价，高端模型则依靠企业集成、切换成本和 agent 工作负载维持高价。