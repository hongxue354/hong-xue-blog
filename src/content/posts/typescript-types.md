---
title: TypeScript 类型系统入门
excerpt: 介绍 TypeScript 的核心类型概念，帮助你写出更安全的代码。
category: TypeScript
tags:
  - TypeScript
  - 类型系统
  - 前端
date: 2023-12-28
readTime: 7
---

## 基本类型

```typescript
let name: string = 'John'
let age: number = 30
let isActive: boolean = true
```

## 接口

```typescript
interface User {
  name: string
  age: number
  email?: string
}

const user: User = {
  name: 'John',
  age: 30
}
```

## 泛型

```typescript
function identity<T>(arg: T): T {
  return arg
}

const result = identity<string>('Hello')
```