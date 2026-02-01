---
title: '#176: OpenClaw, Moltbook, Grok Image API…'
date: 2026-02-01 23:55
---



## 简讯

- DeepSeek 发布新的 OCR 模型：[DeepSeek-OCR-2](https://huggingface.co/deepseek-ai/DeepSeek-OCR-2) ，采用语言模型作为 Vision Encoder。
- 阿里发布 Qwen 旗下的旗舰推理模型：[Qwen3-Max-Thinking](https://qwen.ai/blog?id=qwen3-max-thinking) 。
- 月之暗面发布 [Kimi K2.5](https://www.kimi.com/blog/kimi-k2-5.html) 模型并开源，具备全新视觉理解、代码和 Agent 集群能力。
- 包管理器 Yarn [发布 V6 Preview](https://yarn6.netlify.app/blog/2026-01-28-yarn-6-preview/) ，正在用 Rust 重写。
- Apple 收购了[初创公司 Q.ai](https://techcrunch.com/2026/01/29/apple-buys-israeli-startup-q-ai-as-the-ai-race-heats-up/) ，以推进 Airpods 和 Vision Pro 的语音能力。
- [Android 电脑版 UI](https://9to5google.com/2026/01/27/android-desktop-leak/) 泄露。
- xAI 发布了 [Grok Image API](https://x.ai/news/grok-imagine-api) ，统一了图片生成和视频生成的体验，主打价格便宜。
- 上周爆火的 Clawdbot 因为谐音，被 Anthropic 要求改名变成了 Moltbot ，然后几天后又改成了 [OpenClaw](https://openclaw.ai/blog/introducing-openclaw)。（一周改两次名，网友直呼不看新闻要跟不上 AI 发展了（（
- 因为 Clawdbot 爆火，然后就有人弄了个全是 Clawdbot 的 社交平台：[Moltbook](https://www.moltbook.com/) 。然后很快有人发现这个平台的[数据库被暴露出来](https://x.com/theonejvo/status/2017732898632437932)没有保护，任何人都能获取里面所有 Agent 的 api key。（Vibe 出来的

## 有趣

- [npmx.dev](https://npmx.dev/)
  
    Nuxt 团队成员开发的一个更现代，体验更好的 npm registry 网站，体验完爆 [npmjs.com](http://npmjs.com) 。
    

## 工具

- [LibPDF](https://github.com/libpdf-js/core)
  
    一个更现代的 TypeScript PDF 处理库。
    
- [**Ascii-Motion**](https://github.com/CameronFoxly/Ascii-Motion)
  
    用来创建 ASCII 动画的工具。
    

## 文章

- [the browser is the sandbox](https://aifoc.us/the-browser-is-the-sandbox/)
  
    Paul Kinlan 是 Google 的 Web 平台开发者外宣，他关注 Agent 编程，并强调了一个健壮的沙箱对于 Agent 运作的重要性。Paul Kinlan 提出了浏览器作为沙箱的概念，指出在过去 30 年中，我们已经构建了一个能够运行来自互联网任何地方的恶意、不受信任的代码的沙箱。
    
- [How to Choose Colors for Your CLI Applications](https://blog.xoria.org/terminal-colors)
  
    为命令行界面（CLI）应用程序选择合适的颜色，以确保在不同的终端主题下都能保持良好的可读性和视觉效果。
    
- [On-Device LLMs: State of the Union, 2026](https://v-chandra.github.io/on-device-llms/)
  
    得益于新的部署技术和更智能的模型压缩，实时端侧 LLM 已成为可能。
    
- [The 80% Problem in Agentic Coding](https://addyo.substack.com/p/the-80-problem-in-agentic-coding)
  
    如今，许多工程师使用人工智能代理来编写 80-100% 的代码，从而将他们的角色从直接实现者转变为协调者。这种转变带来了新的挑战，例如概念性 AI 错误、代码库中的理解难题（或“理解上的技术债”），以及导致审查时间大幅延长的生产力悖论。