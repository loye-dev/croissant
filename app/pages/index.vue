<template>
  <div
    class="flex min-h-screen w-full cursor-default items-center justify-center bg-[#ff0000] text-white sm:overflow-hidden"
    @click.self="onFirstClick"
  >
    <div class="page-content relative z-10 w-full max-w-3xl px-6 py-10 sm:px-10">
      <CroissantHero />
      <CroissantMessage />
      <CroissantProgress />
      <CroissantGuide />
      <CroissantErrorCode />
    </div>

    <Transition name="fade">
      <div v-if="!isFullscreen" class="fixed top-4 right-4 z-50 flex items-center gap-1">
        <CroissantShare />
        <UButton
          icon="tabler:maximize"
          variant="ghost"
          class="cursor-pointer text-white/40 hover:bg-white/10 hover:text-white"
          @click="enterFullscreen"
        />
      </div>
    </Transition>

    <UButton
      to="https://github.com/loye-dev/croissant"
      target="_blank"
      icon="simple-icons:github"
      variant="ghost"
      class="fixed right-4 bottom-4 z-50 cursor-pointer text-white/30 hover:bg-white/10 hover:text-white/70"
    />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: ':( Vous avez été croissanté !',
  })

  const isFullscreen = ref(false)
  const firstClickDone = ref(false)

  function enterFullscreen() {
    document.documentElement.requestFullscreen().catch(() => {})
  }

  function onFirstClick() {
    if (!firstClickDone.value && !isFullscreen.value) {
      firstClickDone.value = true
      enterFullscreen()
    }
  }

  function onFullscreenChange() {
    isFullscreen.value = !!document.fullscreenElement
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'f' || e.key === 'F') {
      e.preventDefault()
      if (isFullscreen.value) {
        document.exitFullscreen()
      } else {
        enterFullscreen()
      }
    }
  }

  onMounted(() => {
    document.addEventListener('fullscreenchange', onFullscreenChange)
    document.addEventListener('keydown', onKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('fullscreenchange', onFullscreenChange)
    document.removeEventListener('keydown', onKeydown)
  })
</script>

<style>
  .page-content {
    animation: pageEnter 0.8s ease-out;
  }

  @keyframes pageEnter {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
