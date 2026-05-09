---
title: Vue 3 Composition API 入门指南
excerpt: 本文介绍 Vue 3 Composition API 的核心概念和使用方法，帮助你快速上手现代 Vue 开发。
category: Vue
tags:
  - Vue
  - JavaScript
  - 前端
date: 2024-01-15
readTime: 8
---

## 什么是 Composition API

Composition API 是 Vue 3 引入的一组基于函数的 API，它允许我们使用函数来组织组件逻辑，而不是选项对象。

## 核心概念

### ref 和 reactive

`ref` 用于创建响应式的基本类型数据：

```javascript
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

`reactive` 用于创建响应式的对象：

```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  name: 'Vue'
})
```

### computed

计算属性可以根据其他响应式数据计算值：

```javascript
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
```

## 总结

Composition API 提供了更灵活的代码组织方式，特别适合处理复杂的组件逻辑。
