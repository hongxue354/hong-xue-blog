import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * 无限滚动加载 composable
 * @param {Array|import('vue').ComputedRef<Array>} allItems - 所有数据数组或计算属性
 * @param {number} itemsPerPage - 每页加载数量，默认 4
 * @returns {{visibleItems: Array, loadMore: Function, hasMore: boolean, isLoading: boolean}}
 */
export function useInfiniteScroll(allItems, itemsPerPage = 4) {
  const currentPage = ref(1)
  const isLoading = ref(false)

  /**
   * 获取当前所有数据
   */
  const getAllItems = () => {
    return allItems.value !== undefined ? allItems.value : allItems
  }

  /**
   * 当前可见的文章列表
   */
  const visibleItems = computed(() => {
    const items = getAllItems()
    return items.slice(0, currentPage.value * itemsPerPage)
  })

  /**
   * 是否还有更多内容可加载
   */
  const hasMore = computed(() => {
    const items = getAllItems()
    return currentPage.value * itemsPerPage < items.length
  })

  /**
   * 加载更多内容
   */
  const loadMore = () => {
    if (!hasMore.value || isLoading.value) return
    isLoading.value = true
    setTimeout(() => {
      currentPage.value++
      isLoading.value = false
    }, 300)
  }

  /**
   * 滚动事件处理函数
   */
  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight - 200) {
      loadMore()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    visibleItems,
    loadMore,
    hasMore,
    isLoading
  }
}
