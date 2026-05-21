const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

export default defineNuxtPlugin(() => {
  const route = useRoute()

  const hasUtm = UTM_PARAMS.some((param) => param in route.query)
  if (!hasUtm) return

  const query = Object.fromEntries(
    Object.entries(route.query).filter(([key]) => !UTM_PARAMS.includes(key)),
  )
  const cleanUrl =
    route.path +
    (Object.keys(query).length
      ? '?' + new URLSearchParams(query as Record<string, string>).toString()
      : '')
  window.history.replaceState(window.history.state, '', cleanUrl)
})
