---
title: '#184: Claude Opus 4.7, Claude Design, Codex Computer Use…'
date: 2026-04-20 01:30
---



## 简讯

- 阿里巴巴发布 AI 模型 [Happy Oyster](https://www.happyoyster.cn/docs)，可生成三维、可交互的视频内容，主要面向游戏开发，也可用于电影和电视剧制作。腾讯同日发布并开源[混元 3D 世界模型 2.0](https://github.com/Tencent-Hunyuan/HY-World-2.0)，支持根据文字、图片、视频生成、重建和模拟 3D 世界，并可导出 Mesh、3DGS、点云等资产，接入现有游戏工作流。
- Qwen 发布了开源 MoE 模型 [Qwen3.6-35B-A3B](https://qwen.ai/blog?id=qwen3.6-35b-a3b)，总参数 35B、激活参数仅 3B，但在 Agent 编程、推理和多模态任务上表现很强。
- 在持续一周的算力不稳之后，Anthropic 发布了 [Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)：代码能力大幅提升，支持超高分辨率视觉。（但实际体验下来很多用户反馈不好
- Anthropic 推出了 [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)，一个让用户与 Claude 协作创建设计、原型、幻灯片和宣传物料的新产品，Figma 当晚股价又暴跌。（果然还是自己下场做 AI Design 工具了
- Google 在 Chrome 中[原生支持了 Skills](https://blog.google/products-and-platforms/products/chrome/skills-in-chrome/)，让用户可以把常用 AI Prompt 保存成 “一键工具”，在需要时直接在 Gemini in Chrome 里运行。
- OpenAI 对 Codex 做了[重大升级](https://openai.com/index/codex-for-almost-everything/)，让它从 “编程助手” 扩展成能跨应用、跨流程工作的工具（SuperApp）：支持了 [Computer Use](https://developers.openai.com/codex/app/computer-use)，能在电脑上操作应用、用浏览器和图像工具。
- Cloudflare Email Service 的 [Email Sending](https://blog.cloudflare.com/email-for-agents/) 终于正式进入公测。（可以替代 Resend 了
- Vercel 内部系统[遭黑客入侵](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident)，核心源码及敏感令牌被公开出售。

## 有趣

- [claude-desktop-buddy](https://github.com/anthropics/claude-desktop-buddy)
  
    Anthropic 官方开放了 Claude Claude/Cowork 的蓝牙 BLE 协议，方便开发者构建生态硬件产品。
    

## 工具

- [pulsar](https://github.com/software-mansion/pulsar)
  
    一个面向 iOS、Android 和 React Native 的触觉反馈库，主打开箱即用的预设震动、可自定义的模式编排，以及支持手势驱动的实时触觉控制。
    
- [Android CLI](https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html)
  
    Google 推出了面向 agentic workflows 的一套 Android 开发工具：Android CLI、Android Skills 和 Android Knowledge Base，目标是在终端、CI 和第三方 AI agent 中更高效、规范地构建 Android 应用。
    
- [Is Your Site Agent-Ready?](https://isitagentready.com/)
  
    Cloudflare 推出 Agent Readiness score 和 isitagentready.com，帮助网站评估自己对 AI agents 的 “可读、可发现、可授权、可交易” 程度，并通过 Cloudflare Radar 持续追踪相关标准的采用情况。
    

## 文章

- [Squash and Stretch](https://www.joshwcomeau.com/animation/squash-and-stretch/)
  
    将动画中的 “squash and stretch（挤压与拉伸）”原则应用在 SVG 中。
    
- [The Agent Stack Bet](https://addyo.substack.com/p/the-agent-stack-bet)
  
    当前很多“生产级 agent” 最大的问题不是模型不够强，而是底层 agent stack 还不成熟：缺少可靠身份、统一上下文、长期持久执行能力和平台化支持。
    
- [Building a CLI for all of Cloudflare](https://blog.cloudflare.com/cf-cli-local-explorer/)
  
    Cloudflare 正在把 Wrangler 重建成一个覆盖 Cloudflare 全平台的 CLI，并推出了技术预览版的 CLI 包 `cf`。
    
- [React Server Components Your Way](https://tanstack.com/blog/react-server-components)
  
    TanStack 认为 React Server Components（RSC）不应该绑定成 “整套服务端优先架构”，而应该只是一个可被按需获取、缓存和组合的基础原语。它在 TanStack Start 中把 RSC 当作可流式传输的数据，并进一步提出 Composite Components，让客户端也能参与最终 UI 组合。
    
- [一行代码的事，Web 为什么做了三十年还没做到](https://yage.ai/web-layout-tradeoff.html)
  
    Web 之所以三十年都没能像原生平台那样通过 “一行代码” 查询文本排版结果，核心不是技术不够，而是 CSS 当年把 “声明式布局” 和 “排版结果可查询” 绑在了同一个黑盒里。这个设计在文档时代合理，但在应用时代成了性能和工程体验的长期负担。
    
- [写作中的 AI 味是哪儿来的](https://yage.ai/share/ai-chinese-translationese-20260418.html)
  
    AI 写中文之所以总有 “AI 味”，很大程度上是因为它带有明显的翻译腔：句子骨架像英文，词汇虽是中文，但表达方式不自然。