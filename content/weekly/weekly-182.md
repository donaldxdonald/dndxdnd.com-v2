---
title: '#182: Ollama supports MLX, Gemma 4, Claude Code Source Leak…'
date: 2026-04-07 00:30
---



## 简讯

- Ollama 终于也支持 [MLX 推理](https://ollama.com/blog/mlx)了。
- Qwen 发布了 [Qwen3.6-Plus](https://qwen.ai/blog?id=qwen3.6)，主打 “面向真实世界的 Agent”，尤其强化了 Agentic 编程、工具调用、长上下文和多模态理解，并已通过 API 开放使用。
- Google 发布了 [Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)，主打更强的推理、agent 能力、多模态和长上下文，而且还能运行在从手机到高端 GPU 的各种设备上。
- Cursor 发布了最新版的 [Cursor 3](https://cursor.com/blog/cursor-3) ，也就是前阵子的 Cursor Glass ，UI 变得像 Codex App / Conductor 类似了。
- Claude Code 发布新版本到 npm 的时候，不小心带上了 soucemap ，导致[源码被还原出来了](https://x.com/Fried_rice/status/2038894956459290963)。

## 有趣

- [Walkman Land](https://walkman.land/)
  
    一个关于随身听的百科全书网站。
    

## 工具

- [EmDash](https://github.com/emdash-cms/emdash)
  
    Cloudflare 推出了一个叫 EmDash 的新 CMS，把它定位成 WordPress 的 “精神继承者”，核心卖点是用 isolates / Dynamic Workers 把插件彻底隔离起来，解决 WordPress 长期存在的插件安全问题。
    
- [pretext](https://github.com/chenglou/pretext)
  
    一个在 Web 上渲染动态文本的库，通过使用 Canvas 来解决了近三十年来的动态文本触发重排的性能问题，引起网友各种玩梗。
    
- [Memoh](https://github.com/memohai/Memoh)
  
    一套个人 AI 基础设施，类似 OpenClaw。
    

## 文章

- [AI 工程的真实代价：从 Claude Code 泄露源码看新模型接入的工程现实](https://yage.ai/share/claude-code-engineering-cost-20260331.html)
  
    Claude Code 泄露的源码说明：把新模型接入一个成熟的 agentic 系统，真正的工程成本远比 “换个模型接口” 高得多。