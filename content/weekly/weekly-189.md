---
title: '#189: Claude Opus 4.8, Dynamic Workflows…'
date: 2026-05-31 23:09
---



## 简讯

- Claude Code 推出了 [dynamic workflows](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code)，核心是让 Claude 把复杂任务拆成多个子任务并行执行，再做交叉验证后汇总结果。官方把它定位为适合大规模代码库排查、迁移和高风险任务的新能力，目前处于 research preview。前不久的 Bun 重写就是用的这套机制。
- Anthropic 发布了 [Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)，定位为在 Opus 4.7 基础上的小幅升级，重点改进了编码、代理任务、推理和知识工作表现，价格保持不变。
- npm 的 [staged publishing](https://docs.npmjs.com/staged-publishing) 提供了一个在正式发布前的人工审核环节。包先用 `npm stage publish` 进入暂存区，维护者再通过 CLI 或 npmjs.com 用 2FA 审批后，才会进入公开 registry。

## 有趣

- [State of Web Dev AI 2026](https://2026.stateofai.dev/en-US)
  
    看看过去一年大家使用 AI 的统计。
    

## 工具

- [AudioMass](https://github.com/pkalogiros/AudioMass)
  
    一个免费开源的 Web 多轨音频编辑器。
    

## 文章

- [Building a Predictive Text Input in React](https://matthuggins.com/blog/posts/building-a-predictive-text-input-in-react)
  
    用 `contentEditable` 在 React 里实现一种类似 IDE 的预测式文本输入。核心思路是把预测内容作为灰色的 inline span 插入到光标位置，并通过 Selection 和 Range API 管理光标、接受补全、同步外部值。
    
- [TanStack Router and Query](https://tkdodo.eu/blog/tan-stack-router-and-query)
  
    TanStack Router 的路由缓存适合路由私有数据，而 TanStack Query 的查询缓存适合跨路由共享数据。两者结合时，最佳实践是让路由 loader 负责尽早触发查询，让组件通过 `useQuery` 或 `useSuspenseQuery` 消费数据。
    
- [What's missing in CSS layout](https://patrickbrosset.com/articles/2026-05-20-whats-missing-in-css-layout/)
  
    文章梳理了 CSS Grid 和 Flexbox 的主要痛点，以及开发者最希望补齐的布局能力。
    
- [CSS vs. JavaScript](https://www.joshwcomeau.com/animation/css-vs-javascript/)
  
    动画性能的关键差异不在于 CSS 或 JavaScript 本身的语法开销，而在于它们运行的位置。CSS 动画通常在独立线程上执行，能更稳地抵抗主线程阻塞；传统的 JavaScript `requestAnimationFrame` 循环运行在主线程上，更容易受应用中其他工作影响。