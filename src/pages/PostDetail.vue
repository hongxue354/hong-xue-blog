<template>
  <article class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
    <header class="mb-8">
      <div
        class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4"
      >
        <router-link
          :to="`/category/${post?.category}`"
          class="text-primary-600 dark:text-primary-400 hover:underline"
        >
          {{ post?.category }}
        </router-link>
        <span class="mx-2">·</span>
        <span>{{ post?.date }}</span>
        <span class="mx-2">·</span>
        <span>{{ post?.readTime }} 分钟阅读</span>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {{ post?.title }}
      </h1>
      <div class="flex flex-wrap gap-2">
        <router-link
          v-for="tag in post?.tags"
          :key="tag"
          :to="`/tag/${tag}`"
          class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          {{ tag }}
        </router-link>
      </div>
    </header>
    <div
      ref="contentRef"
      class="post-content text-gray-700 dark:text-gray-300"
      v-html="renderedContent"
    ></div>
    <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        评论
      </h3>
      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div class="flex items-center mb-2">
            <div
              class="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold"
            >
              G
            </div>
            <span class="ml-3 text-gray-900 dark:text-white font-medium"
              >Guest</span
            >
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            非常棒的文章！学到了很多。
          </p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div class="flex items-center mb-2">
            <div
              class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-semibold"
            >
              U
            </div>
            <span class="ml-3 text-gray-900 dark:text-white font-medium"
              >User123</span
            >
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            感谢分享，期待更多内容！
          </p>
        </div>
      </div>
      <form class="mt-6">
        <textarea
          class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          rows="4"
          placeholder="写下你的评论..."
        ></textarea>
        <button
          type="submit"
          class="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
        >
          提交评论
        </button>
      </form>
    </div>
  </article>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { posts } from '../data/posts.js'
  import { marked } from 'marked'
  import hljs from 'highlight.js'

  const props = defineProps({
    id: {
      type: String,
      default: ''
    }
  })

  const contentRef = ref(null)

  const post = computed(() => {
    return posts.find((p) => p.id === props.id)
  })

  const renderedContent = computed(() => {
    if (!post.value) return ''
    marked.setOptions({
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value
        }
        return hljs.highlightAuto(code).value
      },
      breaks: true,
      gfm: true
    })
    return marked(post.value.content)
  })

  onMounted(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block)
    })
  })

  watch(
    () => props.id,
    () => {
      setTimeout(() => {
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightElement(block)
        })
      }, 100)
    }
  )
</script>
