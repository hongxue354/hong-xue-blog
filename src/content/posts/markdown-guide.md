---
title: Markdown 常见语法讲解
excerpt: 本文介绍 Markdown 的常用语法，帮助你快速掌握文章写作技巧。
category: 工具
tags:
  - Markdown
  - 写作
  - 教程
date: 2024-01-20
readTime: 10
---

## 一、标题

使用 `#` 符号表示标题，从 `#` 到 `######` 分别对应一级到六级标题：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 二、段落与换行

直接输入文字即为段落，段落之间需要空一行。

## 三、强调

```markdown
**粗体文本**
*斜体文本*
~~删除线~~
```

效果：**粗体文本**、*斜体文本*、~~删除线~~

## 四、列表

### 无序列表

```markdown
- 项目一
- 项目二
- 项目三
```

### 有序列表

```markdown
1. 第一步
2. 第二步
3. 第三步
```

### 嵌套列表

```markdown
- 外层项目
  - 内层项目一
  - 内层项目二
- 外层项目二
```

## 五、链接

```markdown
[链接文本](https://example.com)
[带标题的链接](https://example.com "链接标题")
```

## 六、图片

```markdown
![图片描述](https://example.com/image.jpg)
```

## 七、代码

### 行内代码

```markdown
使用 `console.log()` 输出内容
```

### 代码块

```markdown
```javascript
function hello() {
  console.log('Hello, World!')
}
```
```

支持多种语言高亮：

```markdown
```python
def hello():
    print("Hello, World!")
```
```

## 八、引用

```markdown
> 这是一段引用文本
> 引用可以有多行

> 嵌套引用
>> 二级引用
```

## 九、分割线

```markdown
---
***
```

## 十、表格

```markdown
| 姓名 | 年龄 | 职业 |
|------|------|------|
| 张三 | 25 | 工程师 |
| 李四 | 30 | 设计师 |
```

## 十一、任务列表

```markdown
- [x] 已完成任务
- [ ] 待完成任务
- [ ] 另一个待完成任务
```

## 总结

Markdown 语法简单直观，掌握这些常用语法就可以写出结构清晰、格式美观的文章了。