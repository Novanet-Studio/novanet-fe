export const useMetaPixel = () => {
  const track = (eventName: string, params?: Record<string, any>) => {
    if (process.client) {
      ;(window as any).fbq?.('track', eventName, params)
    }
  }

  const trackCustom = (name: string, params?: Record<string, any>) => {
    if (process.client) {
      ;(window as any).fbq?.('trackCustom', name, params)
    }
  }

  return { track, trackCustom }
}

export default useMetaPixel
