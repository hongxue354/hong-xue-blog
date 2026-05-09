---
title: Vite 构建工具入门
excerpt: Vite 是新一代前端构建工具，本文介绍其核心特性和使用方法。
category: 工具
tags:
  - Vite
  - 构建工具
  - 前端工程化
date: 2024-01-05
readTime: 5
---

## 为什么选择 Vite

- 极速冷启动
- 即时热模块替换
- 优化的构建输出

## 快速开始

```bash
npm create vite@latest . -- --template vue
```

## 配置文件

`vite.config.js` 示例：

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})
```