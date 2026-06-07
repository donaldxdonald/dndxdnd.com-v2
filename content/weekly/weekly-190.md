---
title: '#190: VoidZero is joining Cloudflare'
date: 2026-06-08 01:10
---



## 简讯

- 微软在 Build 上发布了 [7 个 MAI 模型](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/)，核心是 MAI-Thinking-1。它被定位为一个从头训练、零第三方蒸馏、强调清晰数据来源的推理模型，同时配套推出了代码、图像、语音识别和语音生成模型。
- Google 推出的多模态模型 [Gemma 4 12B](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/)，主打本地运行、低内存占用和更强的代理式推理能力。它采用统一的无编码器架构，直接把视觉和音频输入送入语言模型骨干，同时原生支持音频输入，面向 16GB 显存或统一内存的笔记本可用。
- Cloudflare CEO Matthew Prince 透露，互联网上的机器人流量现[已超过人类流量](https://x.com/eastdakota/status/2062212701414187452)，这一里程碑比他预期提前了一年。
- Cloudflare 宣布[收购 VoidZero 团队](https://blog.cloudflare.com/voidzero-joins-cloudflare/)，后者继续负责 Vite、Vitest、Rolldown、Oxc 和 Vite+ 的开发。官方强调这些项目保持开源、厂商中立和社区驱动，同时 Cloudflare 会投入工程资源和 100 万美元基金支持 Vite 生态。

## 有趣

- [Design Arena](https://www.designarena.ai/)
  
    设计相关的 AI 排行榜。
    
- [Auth book](https://auth.pilcrowonpaper.com/)
  
    Pilcrow 写了《The Auth book》，其中包括关于会话、通行密钥和 CSRF 防护的章节。
    

## 工具

- [open-code-review](https://github.com/alibaba/open-code-review)
  
    阿里开源的 AI 代码审查 CLI 工具，核心特点是把确定性工程流程和 LLM Agent 结合起来，兼顾覆盖率、定位精度和稳定性。
    

## 文章

- [Animation Vocabulary](https://animations.dev/vocabulary)
  
    动画领域的基础词汇，覆盖进入退出、时序、位移、状态切换、滚动、缓动、弹簧、循环、效果、性能和设计原则。它的核心价值不是讲实现细节，而是给动画讨论提供一套统一术语，方便团队在设计和开发之间对齐。
    
- [A harness for every task: dynamic workflows in Claude Code](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code)
  
    Claude Code 的动态工作流的介绍，Claude 可以根据任务临时生成专用 harness，并用多个子代理分工协作。核心目标是把复杂、长链路、强验证需求的任务拆开处理，提高研究、验证、迁移、排序、排障等场景的可靠性。
    
- [When AI builds itself \ Anthropic](https://www.anthropic.com/institute/recursive-self-improvement)
  
    Anthropic 认为，AI 已经在实质性加速自身研发流程，核心变化是人类从执行者逐步转向目标设定者和审核者。如果当前趋势延续，AI 研发的瓶颈将继续从写代码、跑实验转移到判断方向、验证结果，最终可能进入递归自我改进阶段。
    
- [Lessons from building Claude Code: How we use skills](https://claude.com/blog/lessons-from-building-claude-code-how-we-use-skills)
  
    Claude Code 团队在大量内部 Skills 实践中的经验：Skills 本质上是包含指令、脚本、资源和配置的文件夹，真正有效的 Skills 通常聚焦单一用途，并通过 gotchas、渐进式披露、脚本和 hooks 来提升模型执行质量。
    
- [The Conductor Rewrite: What They Changed to Make It Fast](https://performance.dev/the-conductor-rewrite)
  
    Conductor 的重写主要是把性能瓶颈从网络和基础设施层，转移到 React 渲染层后逐一处理。团队通过本地优先架构、TanStack Router 的稳定引用、聊天列表虚拟化、进程回收和把启动检查点移出关键路径，把多个高频操作的延迟压下来，最终实现了可感知的加速。