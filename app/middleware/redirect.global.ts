const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/') {
    return navigateTo('/', { redirectCode: 301 })
  }

  const hasUtm = UTM_PARAMS.some((param) => param in to.query)
  if (hasUtm && import.meta.client) {
    const query = Object.fromEntries(
      Object.entries(to.query).filter(([key]) => !UTM_PARAMS.includes(key)),
    )
    const cleanUrl =
      to.path +
      (Object.keys(query).length
        ? '?' + new URLSearchParams(query as Record<string, string>).toString()
        : '')
    window.history.replaceState(window.history.state, '', cleanUrl)
  }
})
