---
title: TailwindCSS 3 实战技巧
excerpt: 分享使用 TailwindCSS 3 的一些实用技巧，帮助你更高效地构建美观的界面。
category: CSS
tags:
  - CSS
  - TailwindCSS
  - 样式
date: 2024-01-10
readTime: 6
---

## 自定义主题

在 `tailwind.config.js` 中扩展主题：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      }
    }
  }
}
```

## 响应式设计

使用响应式前缀实现移动端适配：

```html
<div class="text-center sm:text-left md:text-right">
  响应式文本对齐
</div>
```

## 最佳实践

1. 使用 `@apply` 提取重复样式
2. 结合 CSS Grid 和 Flexbox
3. 利用变体（variants）增强交互