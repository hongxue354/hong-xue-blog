# 鸿雪博客

一个使用 Vue 3 + Vite 构建的现代化个人博客网站。

## 功能特性

- ✅ **文章管理** - 基于 Markdown 文件的文章管理系统
- ✅ **分类筛选** - 按分类浏览文章
- ✅ **标签系统** - 标签云展示与筛选
- ✅ **无限滚动** - 滚动加载更多文章
- ✅ **暗黑模式** - 支持亮色/暗色主题切换
- ✅ **响应式设计** - 适配移动端和桌面端
- ✅ **代码高亮** - Markdown 代码块语法高亮
- ✅ **表格渲染** - 支持 Markdown 表格样式

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vue Router 4** - 路由管理
- **Vite 4** - 下一代前端构建工具
- **TailwindCSS 3** - 实用优先的 CSS 框架
- **Marked** - Markdown 解析库
- **highlight.js** - 代码语法高亮

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 <http://localhost:5173/> 查看效果。

### 生产构建

```bash
npm run build
```

构建产物输出到 `dist` 目录。

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
hong-xue-blog/
├── src/
│   ├── components/          # Vue 组件
│   │   ├── Header.vue       # 顶部导航
│   │   ├── Footer.vue       # 底部信息
│   │   └── PostCard.vue     # 文章卡片
│   ├── pages/               # 页面组件
│   │   ├── Home.vue         # 首页
│   │   ├── PostDetail.vue   # 文章详情页
│   │   ├── Category.vue     # 分类页
│   │   ├── Tag.vue          # 标签页
│   │   └── About.vue        # 关于页
│   ├── content/posts/       # Markdown 文章文件
│   ├── router/              # 路由配置
│   ├── composables/         # 组合式函数
│   ├── data/                # 数据加载器
│   ├── App.vue              # 根组件
│   ├── main.js              # 入口文件
│   └── style.css            # 全局样式
├── index.html               # HTML 模板
├── vite.config.js           # Vite 配置
├── tailwind.config.js       # TailwindCSS 配置
└── package.json             # 项目配置
```

## 撰写文章

在 `src/content/posts/` 目录下创建 `.md` 文件，格式如下：

```markdown
---
title: 文章标题
excerpt: 文章摘要
category: 分类名称
tags:
  - 标签1
  - 标签2
date: 2024-01-15
readTime: 5
---

文章内容（支持 Markdown 语法）
```

## 代码规范

- 使用 ESLint 进行代码质量检查
- 使用 Prettier 进行代码格式化
- 遵循 Vue 3 Composition API 风格

## 部署

### GitHub Pages

```bash
npm run build
# 将 dist 目录内容推送到 GitHub Pages
```

### Vercel / Netlify

连接 GitHub 仓库，自动构建部署。

## 许可证

MIT License
