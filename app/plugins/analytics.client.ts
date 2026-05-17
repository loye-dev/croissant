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
  const router = useRouter()

  router.afterEach((to) => {
    const hasUtm = UTM_PARAMS.some((param) => param in to.query)

    // 1. Envoie de pageview avec l'URL complète (UTMs visibles pour Plausible)
    ;(nuxtApp.$plausible as any)?.trackPageview({ url: window.location.href })

    // 2. Nettoyage de l'URL dans le navigateur
    if (hasUtm) {
      const cleanQuery = Object.fromEntries(
        Object.entries(to.query).filter(([key]) => !UTM_PARAMS.includes(key)),
      )
      router.replace({ ...to, query: cleanQuery })
    }
  })
})
