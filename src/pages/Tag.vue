<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        标签: {{ tagName }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        共 {{ filteredPosts.length }} 篇文章
      </p>
    </div>
    <div class="space-y-6">
      <PostCard
        v-for="(post, index) in visiblePosts"
        :key="post.id"
        :post="post"
        :ref="(el) => setLastElementRef(el, index, visiblePosts.length - 1)"
      />
    </div>
    <div v-if="isLoading" class="loading-more">
      <div class="loading-spinner"></div>
      <span>加载中...</span>
    </div>
    <div
      v-else-if="!hasMore && visiblePosts.length > 0"
      class="text-center text-gray-500 dark:text-gray-400 py-8"
    >
      —— 没有更多文章了 ——
    </div>
    <div v-if="filteredPosts.length === 0" class="text-center py-16">
      <p class="text-gray-500 dark:text-gray-400">暂无文章</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { posts } from '../data/posts.js'
import { useInfiniteScroll } from '../composables/useInfiniteScroll.js'
import PostCard from '../components/PostCard.vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})

const tagName = computed(() => props.name)

const filteredPosts = computed(() => {
  return posts.filter((post) => post.tags.includes(props.name))
})

const {
  visibleItems: visiblePosts,
  hasMore,
  isLoading,
  setLastElementRef
} = useInfiniteScroll(filteredPosts, 4)
</script>