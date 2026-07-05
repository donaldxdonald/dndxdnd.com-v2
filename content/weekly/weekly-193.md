---
title: '#193: Claude Sonnet 5, Fable 5, Mythos 5…'
date: 2026-07-06 00:10
---

## 简讯

- Google 发布了[两个面向开发者的新模型](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/)：Nano Banana 2 Lite 侧重低延迟和低成本的图像生成，Gemini Omni Flash 侧重高质量、可对话式的视频生成与编辑。两者可以串联使用，形成从快速出图到视频生成的多模态工作流。
- Anthropic 发布了 [Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5)，在大多数 Agent 任务测试里表现接近 Opus 4.8 而且价格便宜点，但看许多用户反馈它实际又贵又慢。
- Anthropic 表示，Claude Fable 5 和 Mythos 5 的[出口管制已解除](https://www.anthropic.com/news/redeploying-fable-5)，Fable 5 将从 7 月 1 日起全球恢复提供。

## 有趣

- [野果子](https://www.yeguozi.com/)
  
    从电影里，找家的配色与灵感。精选以家居、空间、色彩见长的电影截图。
    

## 工具

- [shader-lab](https://github.com/basementstudio/shader-lab)
  
    一个帮助调试 shader 的工具。
    
- [Astryx Design System](https://astryx.atmeta.com/)
  
    Meta 发布了他们的设计系统，基于 React 和 StyleX 构建，并且在 Meta 内部开发了 8 年多。
    

## 文章

- [Reverse Engineering ChatGPT Web: How OpenAI Built for a Billion Users](https://performance.dev/chatgpt)
  
    通过逆向分析 ChatGPT Web，说明 OpenAI 把产品目标定成让全球用户能在未知设备、无账号、弱网络环境下立刻开始输入。为了达成这个目标，ChatGPT 采用了以服务器渲染、流式加载、强实验体系和重型反滥用为核心的架构，整体上是一个围绕首屏、可输入性和首个 token 延迟优化到极致的标准前端技术栈。
    
- [Autoresearch: The feedback loop behind self-improving agents](https://www.latent.space/p/autoresearch-introspection)
  
    Autoresearch 的思路就是让一个外层循环持续观察、评估并改进主系统，把 agent 的维护和优化也交给 agent 来做。Roland Gavrilescu 认为，真正的重点已经从模型本身转向 loop、signals 和 recipes，而人类仍然是早期系统里提供判断和隐性知识的关键部分。
    
- [Getting started with loops](https://claude.com/blog/getting-started-with-loops)
  
    Claude Code 官方发布的一份 Agentic Loop 指南。
    
- [Hidden Cost of Hydration Mismatches](https://3perf.com/blog/hydration-mismatch/)
  
    一次 hydration mismatch 就可能让 React 重新创建 DOM。若页面同时使用了会在加载后改变文字尺寸的 web font，浏览器会把这次重建后的更大文本当作新的 LCP 候选，导致 LCP 从较早时点被推迟到 hydration 完成时，性能指标显著变差。