import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const id = config.public.metaPixelId

  if (!id) return
  if (typeof window === 'undefined') return
  if ((window as any).fbq) return

  ;(function (f: any, b: any, e: any, v?: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return
    n = f.fbq = function () {
      // @ts-ignore
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = true
    t.src = 'https://connect.facebook.net/en_US/fbevents.js'
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script')

  ;(window as any).fbq('init', id)
  ;(window as any).fbq('track', 'PageView')

  const router = useRouter()
  router.afterEach(() => {
    ;(window as any).fbq('track', 'PageView')
  })

  return {
    provide: {
      fbq: (...args: any[]) => (window as any).fbq?.apply(null, args),
    },
  }
})
