const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
]

export default defineNuxtRouteMiddleware((to) => {
  const hasUtm = UTM_PARAMS.some((param) => param in to.query)
  if (!hasUtm) return

  const cleanQuery = Object.fromEntries(
    Object.entries(to.query).filter(([key]) => !UTM_PARAMS.includes(key)),
  )

  return navigateTo({ ...to, query: cleanQuery }, { replace: true })
})
