---
title: 博客方案设计及上手说明
excerpt: 介绍本博客项目的技术方案设计和快速上手指南。
category: 工具
tags:
  - 博客
  - Vue
  - 教程
date: 2024-01-21
readTime: 15
---

## 一、项目概述

本博客项目采用 Vue 3 + Vite + TailwindCSS 技术栈，实现了一个现代化的静态博客网站。

### 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.3+ | 前端框架 |
| Vite | 4.5+ | 构建工具 |
| Vue Router | 4.2+ | 路由管理 |
| TailwindCSS | 3.4+ | 样式框架 |
| Marked | 9.1+ | Markdown 解析 |
| highlight.js | 11.9+ | 代码高亮 |

## 二、项目结构

```
hong-xue-blog/
├── src/
│   ├── components/       # 组件
│   │   ├── Header.vue    # 顶部导航
│   │   ├── Footer.vue    # 页脚
│   │   └── PostCard.vue  # 文章卡片
│   ├── pages/            # 页面
│   │   ├── Home.vue      # 首页
│   │   ├── PostDetail.vue # 文章详情
│   │   ├── Category.vue  # 分类页
│   │   ├── Tag.vue       # 标签页
│   │   └── About.vue     # 关于页
│   ├── content/
│   │   └── posts/        # 文章目录
│   ├── data/
│   │   └── posts.js      # 文章加载器
│   ├── router/
│   │   └── index.js      # 路由配置
│   ├── App.vue           # 根组件
│   ├── main.js           # 入口文件
│   └── style.css         # 全局样式
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 三、快速上手

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 即可查看博客。

### 3. 构建生产版本

```bash
npm run build
```

构建产物在 `dist` 目录。

## 四、新建文章

在 `src/content/posts/` 目录下创建 `.md` 文件，格式如下：

```markdown
---
title: 文章标题
excerpt: 文章摘要（简短描述）
category: 分类名称
tags:
  - 标签一
  - 标签二
date: 2024-01-20
readTime: 10
---

文章正文内容（Markdown 格式）
```

### 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| title | 是 | 文章标题 |
| excerpt | 是 | 文章摘要，显示在列表页 |
| category | 是 | 分类名称 |
| tags | 是 | 标签数组，用于标签筛选 |
| date | 是 | 发布日期，格式 YYYY-MM-DD |
| readTime | 否 | 预计阅读时间（分钟），默认 5 |

## 五、功能特性

### 1. 文章管理
- 支持 Markdown 格式写作
- 自动生成分类和标签
- 按日期排序显示

### 2. 页面功能
- 首页文章列表
- 文章详情页（含代码高亮）
- 分类筛选
- 标签筛选
- 关于页面

### 3. 用户体验
- 响应式设计（移动端适配）
- 暗黑模式切换
- 平滑滚动
- 评论功能

## 六、部署指南

### GitHub Pages

1. 修改 `vite.config.js` 添加 base 路径：

```javascript
export default defineConfig({
  base: '/your-repo-name/'
})
```

2. 构建项目：

```bash
npm run build
```

3. 将 `dist` 目录内容推送到 `gh-pages` 分支。

### Vercel

1. 连接 GitHub 仓库
2. 配置构建命令：`npm run build`
3. 配置输出目录：`dist`
4. 部署完成后自动生成访问地址。

## 七、自定义配置

### 修改主题色

编辑 `tailwind.config.js`：

```javascript
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
```

### 添加导航菜单

编辑 `src/components/Header.vue` 添加新的导航链接。

## 八、注意事项

1. 文章文件名建议使用英文小写，用 `-` 分隔单词
2. 标签和分类名称保持一致，避免重复
3. 代码块建议指定语言类型以获得更好的高亮效果
4. 图片建议使用网络图片或放入 `public` 目录

## 总结

本博客项目提供了完整的静态博客解决方案，易于上手和扩展。祝你写作愉快！