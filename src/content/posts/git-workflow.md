---
title: Git 工作流最佳实践
excerpt: 分享团队协作中常用的 Git 工作流，提升代码管理效率。
category: 工具
tags:
  - Git
  - 版本控制
  - 团队协作
date: 2023-12-20
readTime: 6
---

## Git Flow

经典的分支管理策略：

- `main` - 主分支
- `develop` - 开发分支
- `feature/*` - 功能分支
- `release/*` - 发布分支
- `hotfix/*` - 修复分支

## 提交规范

使用 Conventional Commits：

```bash
feat: add login feature
fix: resolve bug in payment module
docs: update API documentation
```

## 代码审查

- 保持 PR 小而专注
- 使用模板规范 PR 描述
- 至少需要一个审核者批准