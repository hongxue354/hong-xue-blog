<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      关于我
    </h1>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/3">
        <div
          class="w-32 h-32 mx-auto md:mx-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4"
        >
          H
        </div>
        <h2
          class="text-xl font-semibold text-gray-900 dark:text-white text-center md:text-left mb-2"
        >
          洪雪
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-center md:text-left">
          前端工程师
        </p>
      </div>
      <div class="md:w-2/3">
        <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          嗨，我是洪雪，一名热爱技术的前端工程师。我专注于使用 Vue.js、React
          等现代前端技术构建高质量的 Web 应用。
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          这个博客是我分享技术心得、学习笔记和生活感悟的地方。希望这里的内容能对你有所帮助。
        </p>
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            技术栈
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >Vue.js</span
            >
            <span
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >React</span
            >
            <span
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >TypeScript</span
            >
            <span
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >TailwindCSS</span
            >
            <span
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >Node.js</span
            >
            <span
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >Vite</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        联系方式
      </h3>
      <div class="flex flex-wrap gap-6">
        <a
          href="#"
          class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481C19.138 20.161 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
          GitHub
        </a>
        <a
          href="#"
          class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
          Twitter
        </a>
        <a
          href="#"
          class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>
