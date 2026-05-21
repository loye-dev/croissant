<template>
  <div class="mb-8">
    <div class="relative mb-7 text-8xl leading-none font-light sm:text-9xl">
      <span class="glitch-layer" :style="topStyle">:(</span>
      <span class="glitch-layer" :style="bottomStyle">:(</span>
      <span class="sad-base relative" :style="baseStyle">:(</span>
    </div>
    <h1 class="text-2xl leading-snug font-light sm:text-3xl">Vous avez été croissanté !</h1>
  </div>
</template>

<script setup lang="ts">
  function rand(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const topStyle = ref<Record<string, string>>({ opacity: '0' })
  const bottomStyle = ref<Record<string, string>>({ opacity: '0' })
  const baseStyle = ref<Record<string, string>>({})

  let timeoutId: ReturnType<typeof setTimeout>

  function scheduleNext() {
    timeoutId = setTimeout(runBurst, rand(1500, 5000))
  }

  function runBurst() {
    const steps = Math.floor(rand(3, 7))
    let step = 0

    function nextFrame() {
      topStyle.value = {
        opacity: String(rand(0.6, 1).toFixed(2)),
        color: '#ff8888',
        transform: `translate(${rand(-6, 6).toFixed(1)}px, ${rand(-2, 2).toFixed(1)}px)`,
        clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 40%)',
      }
      bottomStyle.value = {
        opacity: String(rand(0.6, 1).toFixed(2)),
        color: '#cc0000',
        transform: `translate(${rand(-6, 6).toFixed(1)}px, ${rand(-2, 2).toFixed(1)}px)`,
        clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
      }
      baseStyle.value = {
        transform: `translateX(${rand(-2, 2).toFixed(1)}px)`,
        textShadow: `${rand(-2, 2).toFixed(1)}px 0 #ff6666, ${rand(-2, 2).toFixed(1)}px 0 #cc0000`,
      }
      step++
      if (step < steps) {
        timeoutId = setTimeout(nextFrame, rand(40, 120))
      } else {
        topStyle.value = { opacity: '0' }
        bottomStyle.value = { opacity: '0' }
        baseStyle.value = {}
        scheduleNext()
      }
    }

    nextFrame()
  }

  onMounted(scheduleNext)
  onUnmounted(() => clearTimeout(timeoutId))
</script>

<style>
  .sad-base {
    animation: sadIdle 3s infinite;
  }

  @keyframes sadIdle {
    0%,
    93%,
    100% {
      transform: none;
    }
    94% {
      transform: translateX(-2px);
    }
    96% {
      transform: translateX(2px);
    }
    98% {
      transform: translateX(-1px);
    }
  }

  .glitch-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
