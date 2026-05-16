<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <UIcon
      v-for="(d, i) in drops"
      :key="i"
      name="lucide:croissant"
      class="drop absolute select-none text-white"
      :style="
        {
          left: d.left + 'vw',
          '--delay': d.delay + 's',
          '--duration': d.duration + 's',
          '--size': d.size + 'px',
          '--drift': d.drift + 'px',
        } as any
      "
    />
  </div>
</template>

<script setup lang="ts">
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const COUNT = 10

const drops = Array.from({ length: COUNT }, () => {
  const size = rand(16, 40)
  const duration = rand(5, 10)
  const alreadyInView = Math.random() < 0.4
  const delay = alreadyInView ? -rand(0, duration) : rand(0, 6)
  return {
    left: rand(0, 100 - (size / window.innerWidth) * 100),
    delay,
    duration,
    size,
    drift: rand(-20, 20),
  }
})
</script>

<style>
.drop {
  bottom: -2.5rem;
  width: var(--size);
  height: var(--size);
  animation: croissantFloat var(--duration) linear var(--delay) infinite;
  will-change: transform, opacity;
}

@keyframes croissantFloat {
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg);
  }
  10% {
    opacity: 0.35;
  }
  60% {
    opacity: 0.35;
  }
  100% {
    opacity: 0;
    transform: translate(var(--drift), -115vh) rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .drop {
    animation-duration: 1ms;
    animation-iteration-count: 1;
    opacity: 0;
  }
}
</style>
