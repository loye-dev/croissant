<template>
  <div
    class="min-h-screen w-full bg-[#ff0000] text-white flex items-center justify-center cursor-default overflow-y-auto sm:overflow-hidden"
    @click.self="onFirstClick"
  >
    <!-- <CroissantFloating /> -->

    <div class="page-content max-w-3xl w-full px-6 py-10 sm:px-10 relative z-10">
      <CroissantHero />
      <CroissantMessage />
      <CroissantProgress />
      <CroissantGuide />
      <CroissantErrorCode />
    </div>

    <Transition name="fade">
      <UButton
        v-if="!isFullscreen"
        icon="tabler:maximize"
        variant="ghost"
        class="fixed top-4 right-4 text-white/40 hover:text-white hover:bg-white/10"
        @click="enterFullscreen"
      />
    </Transition>

    <UButton
      to="https://github.com/loye-dev/croissant"
      target="_blank"
      icon="simple-icons:github"
      variant="ghost"
      class="fixed bottom-4 right-4 text-white/30 hover:text-white/70 hover:bg-white/10"
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
