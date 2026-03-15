---
title: '#180: Gemini Embedding 2, React Compiler Rust, ARM64 Linux Chrome…'
date: 2026-03-16 00:30
---



## 简讯

- Google 发布旗下首个原生多模态 Embedding 模型：[Gemini Embedding 2](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-embedding-2/)，可以将文本、图像、视频、音频与文档映射到同一向量空间，提供高性能的多模态语义理解能力。
- Cloudflare 的 Browser Rendering [新增 /crawl 端点](https://developers.cloudflare.com/changelog/post/2026-03-10-br-crawl-endpoint/)（开放测试），只需一次 API 调用即可自动爬取整个网站，并提供 HTML、Markdown 与结构化 JSON 输出。（让你帮忙拦爬虫，现在你自己卖起爬虫来了
- Amazon 因近期多起涉及 AI 协助变更的服务中断，正在召开高层会议并[要求高级工程师审核 AI 辅助的代码修改](https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/)，以提升站点可用性。
- Chrome 146 稳定版开始推送，[垂直标签页](https://9to5google.com/2026/01/19/google-chrome-vertical-tabs-beta/)实验功能可用。
- Apple 宣布，根据与中国监管部门的沟通，自 3 月 15 日起[下调中国区 “苹果税”](https://developer.apple.com/cn/news/?id=dadukodv)：付费 App 及内购的抽成佣金由 30% 降至 25%，小开发者计划、小程序伙伴计划由 15% 降至 12%。
- Rust 版本的 [React Compiler](https://x.com/en_JS/status/2031606726689173846?s=20) 也在路上了。
- Google 将在 2026 年第二季度推出 [ARM64 Linux 版 Chrome](https://blog.chromium.org/2026/03/bringing-chrome-to-arm64-linux-devices.html)。（终于

## 有趣

- [Can I Run AI locally?](https://www.canirun.ai/)
  
    在浏览器内自动检测 GPU/CPU/内存 后，结合本地数据库和模型需求计算哪些模型能跑以及速度。
    

## 工具

- [Vite 8](https://vite.dev/blog/announcing-vite8)
  
    Vite 8 正式发布，用 Rust 的 Rolldown 取代了原来的双打包器架构，把开发/构建速度提升到 10-30 倍，同时保持插件兼容；还推出了插件目录、Devtools 等新特性。
    
- [CLI-Anything](https://github.com/HKUDS/CLI-Anything)
  
    通过自动化的方式，一键生成任何软件的 CLI 工具。
    

## 文章

- [The 8 Levels of Agentic Engineering](https://www.bassimeledath.com/blog/levels-of-agentic-engineering)
  
    AI 辅助编程的能力演进路径，从基础的 Tab Completion 到多模型协作的 Autonomous Agent Teams。
    
- [Using skills to accelerate OSS maintenance](https://developers.openai.com/blog/skills-agents-sdk)
  
    OpenAI 分享了他们用 Codex 维护 Agents SDK 的完整方案，结合了仓库级别的 skills、AGENTS.md 规则和 Codex GitHub Action 。
    
- [Temporal: The 9-Year Journey to Fix Time in JavaScript](https://bloomberg.github.io/js-blog/post/temporal/)
  
    Temporal 是 JavaScript 社区历经 9 年、由 Bloomberg、Igalia、Microsoft、Google、Mozilla 等推手共同打造的现代日期时间 API，终于在 ES2026 前就已经实现并在主流浏览器中可用，彻底解决了老旧 Date 的各种痛点。
    
- [Grief and the AI Split](https://blog.lmorchard.com/2026/03/11/grief-and-the-ai-split/)
  
    AI 辅助编程揭示了开发者之间早已存在但此前隐形的分歧：有些人更看重打造成果，有些人更怀念手工塑造代码的工艺感。