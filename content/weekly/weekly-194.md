---
title: '#194: Better Auth joins Vercel, Grok 4.5, GPT-5.6…'
date: 2026-07-12 22:06
---



## 简讯

- WebKit 在 Safari Technology Preview 247 中推出了 [Safari MCP server](https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/)。它让支持 MCP 的 AI Agent 直接连接 Safari 浏览器窗口，读取 DOM、网络请求、截图和控制台信息，从而更自动化地做网页调试、兼容性检查、性能分析和可访问性检查。
- [Shadcn UI](https://ui.shadcn.com/docs/changelog) 将默认 UI 库改成了 Base UI 。（一个时代的终结
- Better Auth 宣布[加入 Vercel](https://better-auth.com/blog/better-auth-joins-vercel)，双方将继续推进开源、框架无关的认证基础设施，并把重点扩展到 agent 时代的身份与授权能力。
- Microsoft 正式发布 [TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)，核心变化是将 TypeScript 迁移到 Go 实现的 native 版本，官方称在大型代码库上通常可获得 8x 到 12x 的构建加速
- SpaceXAI 与 Cursor 联合发布 [Grok 4.5](https://x.ai/news/grok-4-5)，这是 SpaceX 以 600 亿美元收购 Cursor 后双方推出的首个联合模型，重点覆盖 coding、agentic tasks 和 knowledge work。
- [Vite+](https://voidzero.dev/posts/announcing-vite-plus-beta) 正式进入 beta，把运行时、包管理、前端构建、测试、打包、格式化、lint 和任务运行统一到一套工作流里。
- 字节跳动推出了新的图像模型 [Seedream 5.0 Pro](https://seed.bytedance.com/zh/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro)，号称不仅能生成图像，还能凭借强大的编辑功能“理解设计”，也是首个看起来接近 OpenAI 的 Images 2.0 所处前沿水平的版本。
- 腾讯发布了新模型 [Hy3](https://hy.tencent.com/research/hy3) 正式版。相比 preview 版本，它在推理、智能体、长上下文和生产力任务上进一步提升，并且在内部盲测中表现优于 GLM5.1，尤其适合软件开发、办公生产、金融建模、前端设计和游戏制作等场景。
- OpenAI推出了一种全双工语音模型 [GPT-Live](https://openai.com/index/introducing-gpt-live)，能够同时倾听和说话，处理自然的对话线索，并在保持对话流畅性的同时将复杂任务委派给 GPT-5.5。
- OpenAI 终于发布了 [GPT-5.6](https://openai.com/index/gpt-5-6/) 系列，包含旗舰模型 Sol、通用型 Terra 和低成本型 Luna。
- 为打造超级 App ，OpenAI 将 ChatGPT 桌面版和 Codex 合并在一起，加上了一个类似 Claude Cowork 的 [ChatGPT Work](https://openai.com/index/chatgpt-for-your-most-ambitious-work/) 模式，并且正式弃用了之前发布的浏览器 Atlas 。
- [Grok Build CLI](https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547) 被爆会上传整个代码库及密钥文件。

## 有趣

- [OpenPrinter](https://www.opentools.studio/)
  
    一款面向长期使用的可维修、可补充墨水、体积紧凑的打印机，重点解决传统打印机在耗材、维护和兼容性上的成本问题。它支持纸张和纸卷两种介质，面向全球多地区耗材标准，定位为开放、可维护、可定制的打印方案。
    

## 工具

- [Cloudflare Drop](https://www.cloudflare.com/drop/)
  
    把文件夹拖到浏览器里，就能获得一个实时网站，无需账号。前阵子 Vercel 也发布了 [Vercel Drop](https://vercel.com/drop) 。
    
- [PocketJS](https://pocketjs.dev/)
  
    PocketJS 是一个把 Solid、Vue Vapor、Tailwind 风格和 60 FPS 动画带到 PSP 这类低资源设备上的 UI 技术栈。它的核心思路是把框架能力和底层运行时拆开，用一套 `no_std` Rust 核心同时服务于 PSP、浏览器、Bun 和测试环境。
    
- [Wordgard](https://wordgard.net/)
  
    CodeMirror/ProseMirror 作者发布了新的 Web 编辑器库 Wordgard 。看[发布博客](https://marijnhaverbeke.nl/blog/wordgard-0.1.html)意思就是说整合了 CodeMirror 和 ProseMirror 的设计，与其发布一个 ProseMirror 2.0 还不如开个新坑不考虑兼容旧代码。
    

## 文章

- [Harness Engineering for Self-Improvement](https://lilianweng.github.io/posts/2026-07-04-harness/)
  
    Lilian Weng 表示短期内更现实的 RSI 路径，主要发生在上下文管理、工作流设计、权限控制、文件系统记忆、子代理协同和评估机制上，而不是直接改写模型权重。
    
- [The Making of Claude Code](https://www.anthropic.com/features/making-of-claude-code)
  
    Claude Code 简史。
    
- [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust)
  
    Bun 的作者 Jarred Sumner 写了篇文章记录用 Rust 重写 Bun 的过程，用了早期版本的 Claude Fable 5 。Zig 语言作者也有[回应](https://andrewkelley.me/post/my-thoughts-bun-rust-rewrite.html)。
    
- [Design Engineering](https://marcelochaman.ca/s/design-engineering)
  
    设计工程正在从设计和工程之间的桥接角色，演化为更强的端到端产品拥有者。核心变化是：随着设计师会写代码、工程师更懂产品、代码代理降低实现门槛，真正稀缺的能力变成了把用户意图直接转化为可交付产品。