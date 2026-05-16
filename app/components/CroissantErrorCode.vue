<template>
  <div class="mt-8 space-y-2">
    <p class="text-xs text-white/40 font-mono tracking-wide">
      INCIDENT :&nbsp;&nbsp;{{ formattedDate }}
    </p>
    <p class="text-xs text-white/35 font-mono tracking-wide">
      STOP CODE :&nbsp; CROISSANT_NOT_LOCKED_EXCEPTION (0xC0FFEE42)
    </p>
  </div>
</template>

<script setup lang="ts">
const formattedDate = new Date().toLocaleString('fr-FR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})
</script>
