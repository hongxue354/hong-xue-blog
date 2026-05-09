<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        最新文章
      </h1>
      <PostCard v-for="post in visiblePosts" :key="post.id" :post="post" />
      <div v-if="isLoading" class="loading-more">
        <div class="loading-spinner"></div>
        <span>加载中...</span>
      </div>
      <div
        v-else-if="!hasMore"
        class="text-center text-gray-500 dark:text-gray-400 py-8"
      >
        —— 没有更多文章了 ——
      </div>
    </div>
    <aside class="lg:w-64 space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          分类
        </h2>
        <ul class="space-y-2">
          <li v-for="category in categories" :key="category.name">
            <router-link
              :to="`/category/${category.name}`"
              class="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span>{{ category.name }}</span>
              <span
                class="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full"
              >
                {{ category.count }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          标签
        </h2>
        <div class="tag-cloud">
          <router-link
            v-for="tag in tags"
            :key="tag.name"
            :to="`/tag/${tag.name}`"
          >
            {{ tag.name }}
          </router-link>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
  import { posts, categories, tags } from '../data/posts.js'
  import { useInfiniteScroll } from '../composables/useInfiniteScroll.js'
  import PostCard from '../components/PostCard.vue'

  const {
    visibleItems: visiblePosts,
    hasMore,
    isLoading
  } = useInfiniteScroll(posts, 4)
</script>
