/**
 * 使用 Vite 的 glob 功能加载所有文章 MD 文件
 * @type {Record<string, string>}
 */
const postFiles = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

/**
 * 解析 Markdown 文件的 Frontmatter 元数据
 * @param {string} content - Markdown 文件内容
 * @returns {{ data: Record<string, unknown>, content: string }} - 返回解析后的元数据和正文内容
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return { data: {}, content }
  }

  const frontmatterStr = match[1]
  const data = {}
  let currentKey = ''
  let currentArray = []

  frontmatterStr.split('\n').forEach((line) => {
    const trimmedLine = line.trim()

    if (!trimmedLine) {
      return
    }

    if (trimmedLine.startsWith('- ')) {
      const item = trimmedLine.slice(2).trim().replace(/['"]/g, '')
      currentArray.push(item)
      if (currentKey) {
        data[currentKey] = currentArray
      }
    } else {
      const colonIndex = trimmedLine.indexOf(':')
      if (colonIndex > 0) {
        currentKey = trimmedLine.slice(0, colonIndex).trim()
        let value = trimmedLine.slice(colonIndex + 1).trim()

        if (value.startsWith('[') && value.endsWith(']')) {
          value = value
            .slice(1, -1)
            .split(',')
            .map((v) => v.trim().replace(/['"]/g, ''))
        } else if (!value) {
          currentArray = []
          value = []
        }

        data[currentKey] = value
      }
    }
  })

  const markdownContent = content.slice(match[0].length).trim()

  return { data, content: markdownContent }
}

/**
 * 根据文章标题生成唯一 ID
 * @param {string} title - 文章标题
 * @returns {string} - 生成的唯一 ID
 */
function generateId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * 加载并解析所有文章
 * @type {Array<{id: string, title: string, excerpt: string, content: string, category: string, tags: string[], date: string, readTime: number}>}
 */
const posts = Object.entries(postFiles).map(([path, fileContent]) => {
  const { data, content } = parseFrontmatter(fileContent)

  return {
    id: generateId(data.title),
    title: data.title || '',
    excerpt: data.excerpt || '',
    content: content,
    category: data.category || '未分类',
    tags: data.tags || [],
    date: data.date || '',
    readTime: parseInt(data.readTime) || 5
  }
})

posts.sort((a, b) => new Date(b.date) - new Date(a.date))

/**
 * 生成分类统计数据
 * @type {Array<{name: string, count: number}>}
 */
const categories = [...new Set(posts.map((post) => post.category))].map(
  (name) => ({
    name,
    count: posts.filter((post) => post.category === name).length
  })
)

/**
 * 生成标签统计数据
 * @type {Array<{name: string, count: number}>}
 */
const tagCounts = {}
posts.forEach((post) => {
  if (Array.isArray(post.tags)) {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  }
})
const tags = Object.entries(tagCounts).map(([name, count]) => ({ name, count }))

export { posts, categories, tags }
