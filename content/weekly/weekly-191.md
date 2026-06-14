---
title: '#191: Claude Fable 5, Ocarina of time Remake…'
date: 2026-06-15 00:40
---



## 简讯

- [npm v12](https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/) 预计在 2026 年 7 月发布，核心变化是把 `npm install` 里几个自动执行的行为改成默认需要显式授权。受影响最大的是依赖脚本执行、Git 依赖解析和远程 URL 依赖，这些都已经能在 npm 11.16.0 及以上版本里看到预警。
- Google 推出了 [Gemini 3.5 Live Translate](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/)，把实时语音翻译能力再往前推了一步。它会先进入 Google Meet 和 Translate 应用，覆盖更多语言和更多使用场景。
- Apple 在 WWDC 上正式推出延迟已久的 [Siri AI](https://arstechnica.com/apple/2026/06/say-hi-to-siri-ai-apple-announces-new-more-conversational-voice-assistant/) 更新，核心是更强的对话能力、跨应用操作能力，以及基于设备个人上下文的任务处理。新功能计划在今年秋季随系统更新上线，但能力会按设备硬件分层，部分高级功能只给最新一代 iPhone、iPad 和 Mac。
- Apple 发布了第三代 [Apple Foundation Models](https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models)，覆盖 5 个模型，分别面向 on-device 和 Private Cloud Compute 场景，核心目标是把 Apple Intelligence 更深地集成进系统，同时把隐私放在架构中心。相比上一代，这批模型在文本、图像理解、语音合成和语音识别上都有明显提升。
- [Safari 27 beta](https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta/) 是一次以质量和标准对齐为主的版本更新。它带来 58 项新特性、525 项修复和 4 项弃用，重点覆盖表单、CSS、JavaScript、WebAssembly、Web API、渲染和 Web Inspector，同时也把大量底层兼容性问题补齐。
- Anthropic 发布了 [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) 和 Claude Mythos 5。前者面向普通用户开放，后者保留更强的 cyber 和 biology 能力给受信任的专业机构，用更严格的 safeguards 控制风险。
- 小米发布 CLI Coding Agent ：[Mimo Code](https://github.com/XiaomiMiMo/MiMo-Code) ，基于 OpenCode 二次开发。
- Kimi 发布并开源了 [Kimi-K2.7-Code](https://x.com/Kimi_Moonshot/status/2065377579130142937)，定位是最新的编码模型。
- 因[美政府发函限制](https://www.anthropic.com/news/fable-mythos-access)，Anthropic 已关闭两款 Mythos 模型对所有客户的访问。
- 趁着 Anthropic 的 Mythos 被迫下线时，智谱 [GLM-5.2](https://mp.weixin.qq.com/s/LDrbtLM0wiCTJorvd5GY9w) 模型全量开放，将于下周开源。
- 任天堂在 2026 年 6 月直面会上正式公布了[《塞尔达传说：时之笛》](https://www.ign.com/articles/the-legend-of-zelda-ocarina-of-time-remake-revealed-for-nintendo-switch-2)重制版，计划登陆 Switch 2，发售窗口指向 2026 年。（爷青回

## 有趣

- [▶️ The Story of C++: The World's Most Consequential Programming Language](https://www.youtube.com/watch?v=lI7tMxzSJ7w)
  
    CultRepo 出品的 C++ 纪录片。
    

## 工具

- [Apple Container 1.0](https://github.com/apple/container)
  
    Apple 的 一个在 Mac 上通过轻量虚拟机运行 Linux 容器的工具，发布 1.0 了。
    
- [Extend UI](https://github.com/extend-hq/ui)
  
    一套面向文档 Agent、用户可见的文档相关开源组件。
    
- [boneyard](https://github.com/0xGF/boneyard)
  
    一个自动生成骨架屏的框架。它会从真实 UI 中捕获布局，生成像素级匹配的加载占位，并支持 React、Vue、Svelte 5、Angular、React Native 等多端框架。
    
- [files-sdk](https://github.com/haydenbleasel/files-sdk)
  
    一个面向对象存储和 Blob 后端的统一存储 SDK。它用一套 Web 标准接口覆盖 S3、GCS、Azure Blob、Vercel Blob、本地文件系统等多种后端，并保留原生客户端入口作为扩展通道。
    

## 文章

- [Correcting Subpixel on Web](https://santos.fyi/writing/correcting-subpixel-on-web)
  
    Web 端字体默认常用的次像素抗锯齿会让文字显得更重、更糊，也更接近浏览器自己的渲染结果，而不是设计稿中的观感。作者建议在大多数项目里用一组全局 CSS 改成灰度抗锯齿，以缩小 Figma 和浏览器之间的差异。
    
- [Software Is Made Between Commits](https://zed.dev/blog/introducing-deltadb)
  
    Zed 认为，软件的真实生成过程正在从提交记录转向持续的对话，尤其是人与 agent 的协作过程。为此，他们提出 DeltaDB，用细粒度 delta 记录每一步编辑和对应对话，让代码、上下文和协作历史保持可追溯且同步演化。
    
- [Building Glass for the Web](https://aave.com/design/building-glass-for-the-web)
  
    Aave 在网页端实现了一套跨浏览器的玻璃折射效果，用于开关、滑块、切换组、二维码和视频控制等组件。核心方法是基于 `feDisplacementMap` 对真实渲染内容做折射，并针对 Safari、Canvas 和视频场景补充了 WebGL 方案与一组性能优化。