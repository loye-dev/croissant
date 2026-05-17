<template>
  <UPopover>
    <UButton
      icon="tabler:share"
      variant="ghost"
      class="text-white/40 hover:text-white hover:bg-white/10 cursor-pointer"
    />
    <template #content>
      <div class="p-3 space-y-2 min-w-56 bg-[#aa0000]/90 backdrop-blur-md rounded-lg">
        <div v-for="link in links" :key="link.url" class="flex items-center justify-between gap-3">
          <span class="text-sm font-mono text-white/80">{{ link.label }}</span>
          <div class="relative w-7 h-7 flex items-center justify-center overflow-hidden">
            <Transition name="icon-pop" mode="out-in">
              <UButton
                v-if="copied !== link.url"
                key="copy"
                icon="tabler:copy"
                variant="ghost"
                size="xs"
                class="text-white/50 hover:text-white absolute cursor-pointer"
                @click="copy(link.url)"
              />
              <UButton
                v-else
                key="check"
                icon="tabler:check"
                variant="ghost"
                size="xs"
                class="text-green-400 absolute cursor-pointer"
              />
            </Transition>
          </div>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
const links = [
  { label: 'croissant.loye.dev', url: 'https://croissant.loye.dev' },
  { label: 'c.loye.dev', url: 'https://c.loye.dev' },
]

const copied = ref<string | null>(null)

async function copy(url: string) {
  await navigator.clipboard.writeText(url)
  copied.value = url
  setTimeout(() => (copied.value = null), 2000)
}
</script>

<style scoped>
.icon-pop-enter-active {
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.icon-pop-leave-active {
  transition: all 0.1s ease-in;
}
.icon-pop-enter-from {
  opacity: 0;
  transform: translateY(6px) scale(0.4);
}
.icon-pop-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.4);
}
</style>
