const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
]

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const url = new URL(window.location.href)
    const hasUtm = UTM_PARAMS.some((param) => url.searchParams.has(param))
    if (!hasUtm) return

    UTM_PARAMS.forEach((param) => url.searchParams.delete(param))
    window.history.replaceState(window.history.state, '', url.toString())
  })
})
