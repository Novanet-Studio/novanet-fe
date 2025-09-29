import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useSectionColor() {
  const currentColor: Ref<string> = ref('default')

  let observer: IntersectionObserver | undefined

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const color = (entry.target as HTMLElement).dataset.color || 'default'
        currentColor.value = color
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 })
    document.querySelectorAll<HTMLElement>('section[data-color]').forEach(section => {
      observer!.observe(section)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { currentColor }
}