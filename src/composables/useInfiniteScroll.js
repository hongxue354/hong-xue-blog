import { ref, computed, onUnmounted } from 'vue'

/**
 * 无限滚动加载 composable
 * 使用 Intersection Observer API 检测最后一个元素进入可视区域时加载更多
 * @param {Array|import('vue').ComputedRef<Array>} allItems - 所有数据数组或计算属性
 * @param {number} itemsPerPage - 每页加载数量，默认 4
 * @returns {{visibleItems: Array, hasMore: boolean, isLoading: boolean, setLastElementRef: Function}}
 */
export function useInfiniteScroll(allItems, itemsPerPage = 4) {
  const currentPage = ref(1)
  const isLoading = ref(false)
  const lastElementRef = ref(null)
  let observer = null

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
   * 初始化 Intersection Observer
   */
  const initObserver = () => {
    if (observer) return

    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && hasMore.value && !isLoading.value) {
          loadMore()
        }
      },
      {
        rootMargin: '0px 0px 200px 0px',
        threshold: 0.1
      }
    )
  }

  /**
   * 获取原生 DOM 元素（处理 Vue 组件实例）
   */
  const getNativeElement = (el) => {
    if (el === null || el === undefined) return null
    if (el instanceof Element) return el
    if (el.$el && el.$el instanceof Element) return el.$el
    return null
  }

  /**
   * 设置最后一个元素的引用
   * @param {HTMLElement|null|undefined|VueComponent} el - DOM 元素或 Vue 组件实例
   * @param {number} index - 当前索引
   * @param {number} lastIndex - 最后一个索引
   */
  const setLastElementRef = (el, index, lastIndex) => {
    const nativeEl = getNativeElement(el)

    if (index === lastIndex && nativeEl) {
      lastElementRef.value = nativeEl
      if (!observer) {
        initObserver()
      }
      if (observer) {
        observer.observe(nativeEl)
      }
    } else if (observer && lastElementRef.value) {
      observer.unobserve(lastElementRef.value)
    }
  }

  /**
   * 停止观察
   */
  const stopObserving = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onUnmounted(() => {
    stopObserving()
  })

  return {
    visibleItems,
    hasMore,
    isLoading,
    setLastElementRef
  }
}