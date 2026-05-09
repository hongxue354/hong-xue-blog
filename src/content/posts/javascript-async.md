---
title: JavaScript 异步编程详解
excerpt: 深入理解 JavaScript 异步编程，包括 Promise、async/await 等概念。
category: JavaScript
tags:
  - JavaScript
  - 异步编程
  - Promise
date: 2024-01-01
readTime: 10
---

## 回调函数

早期的异步处理方式：

```javascript
fetchData(function(error, data) {
  if (error) {
    console.error(error)
    return
  }
  console.log(data)
})
```

## Promise

Promise 提供了更优雅的异步处理方式：

```javascript
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

## async/await

ES2017 引入的语法糖：

```javascript
async function getData() {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
```