---
title: '#183: Claude Mythos is too risky to release…'
date: 2026-04-13 00:32
---



## 简讯

- Meta 发布了 [Muse Spark](https://ai.meta.com/blog/introducing-muse-spark-msl/)，是 Meta Superintelligence Labs 的首个模型，主打原生多模态推理、工具使用、视觉思维链和多 Agent 协作，目标是走向 “personal superintelligence”。
- AWS 新推出了 [S3 Files](https://aws.amazon.com/blogs/aws/launching-s3-files-making-s3-buckets-accessible-as-file-systems/)，让 Amazon S3 的 bucket 可以像文件系统一样被挂载和直接读写。
- Anthropic 启动 [Project Glasswing](https://www.anthropic.com/glasswing) 计划，向业界提供 Claude Mythos 模型 1 亿美元调用额度。（还说 Claude Mythos 太强大了，不能直接发布
- OpenAI 终于推出了 [100 刀的 pro 版订阅](https://help.openai.com/en/articles/9793128-about-chatgpt-pro-plans)，满足了 200 刀版用不上，plus 又不够用的需求。

## 有趣

- [html-in-canvas](https://github.com/WICG/html-in-canvas)
  
    html in canvas 是一个利用 canvas 定制 HTML 元素的提案，如果实现了能解锁很多场景。
    

## 工具

- [comark](https://github.com/comarkdown/comark)
  
    一个框架无关的 markdown 解析和渲染库，streamdown 的替代品，支持流式渲染。
    
- [agent-device](https://github.com/callstackincubator/agent-device)
  
    一个面向 AI agent 的 CLI 工具，用来对 iOS、Android 及部分桌面平台进行可重复、会话化的 UI 自动化操作。
    

## 文章

- [Under the hood of MDN's new frontend](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/)
  
    MDN 把旧的 React 前端重做了一遍，核心思路不是 “更炫”，而是把页面拆成更轻、更模块化的 Web Components + Server Components，让静态内容、交互组件和样式各司其职。
    
- [Moving Railway's Frontend Off Next.js](https://blog.railway.com/p/moving-railways-frontend-off-nextjs)
  
    Railway 把整个前端从 Next.js 迁移到了 TanStack Start，原因主要是构建太慢、产品形态更偏客户端驱动、以及 Next.js 的 server-first 模式不再适合他们。整个迁移分成两次 PR 完成，零停机上线。
    
- [What To Know in JavaScript (2026 Edition)](https://frontendmasters.com/blog/what-to-know-in-javascript-2026-edition/)
  
    这篇文章概览了 2026 年 JavaScript 生态的重点变化：语言层面上，ES2025/ES2026 带来了迭代器方法、Set 新方法、Temporal、资源管理、`Array.fromAsync` 等实用特性；生态层面则是 React、Vue、Svelte、Node、Bun、Deno、Vite、TypeScript、Next.js、Astro 等工具和框架持续演进，同时 npm 供应链安全问题也变得更值得警惕。
    
- [用 Claude Code 将三万行 Go 项目移植到 Rust：Agent Team 实践与 Harness 效率优化](https://maxlv.net/blog/porting-mihomo-to-rust-with-claude/)
  
    用 Claude Code 的 Agent Team 机制，把一个约 3 万行的 Go 代理内核 mihomo 重写为 Rust，并总结出一套可复用的工程化方法。
    
- [The Intl API: The best browser API you're not using](https://polypane.app/blog/the-intl-api-the-best-browser-api-youre-not-using/)
  
    Intl 是浏览器内置的国际化格式化 API，几乎可以零成本地处理日期、时间、数字、货币、列表、复数、文本分词和排序等需求，很多场景都能替代 Moment.js、date-fns、Luxon、numeral.js 等库。它不仅更轻量、更快，还能自动适配用户的语言与地区习惯，减少格式错误和本地化 bug。