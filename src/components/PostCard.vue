<template>
  <article
    class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 mb-6 group cursor-pointer"
    @click="handleCardClick"
  >
    <div
      class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2"
    >
      <router-link
        :to="`/category/${post.category}`"
        class="text-primary-600 dark:text-primary-400 hover:underline"
        @click.stop
      >
        {{ post.category }}
      </router-link>
      <span class="mx-2">·</span>
      <span>{{ post.date }}</span>
      <span class="mx-2">·</span>
      <span>{{ post.readTime }} 分钟阅读</span>
    </div>
    <h2
      class="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center"
    >
      {{ post.title }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ml-2 text-gray-400 group-hover:text-primary-500 transition-all duration-300 transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </h2>
    <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
      {{ post.excerpt }}
    </p>
    <div class="flex flex-wrap gap-2">
      <router-link
        v-for="tag in post.tags"
        :key="tag"
        :to="`/tag/${tag}`"
        class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        @click.stop
      >
        {{ tag }}
      </router-link>
    </div>
  </article>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })

  const handleCardClick = () => {
    router.push(`/post/${props.post.id}`)
  }
</script>
