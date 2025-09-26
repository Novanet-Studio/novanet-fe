import { ref, onMounted, onUnmounted } from 'vue'

export function useSectionColor() {
  const currentColor = ref('default')

  let observer

  const handleIntersect = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const color = entry.target.dataset.color || 'default'
        currentColor.value = color
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 })
    document.querySelectorAll('section[data-color]').forEach(section => {
      observer.observe(section)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { currentColor }
}