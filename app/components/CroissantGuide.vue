<template>
  <div class="mb-8">
    <USeparator size="sm" class="mb-8" />
    <div class="flex items-start gap-5 flex-col sm:flex-row">
      <div
        class="w-24 h-24 shrink-0 bg-white rounded flex items-center justify-center"
        aria-hidden="true"
      >
        <UIcon name="lucide:croissant" class="croissant-bounce size-12 text-[#ff0000]" />
      </div>
      <div class="text-sm leading-relaxed text-white/70 space-y-3">
        <p>Pour vous cyber-éduquer et éviter que cela ne se reproduise :</p>
        <ul class="space-y-1.5">
          <li>
            <ULink
              to="https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/"
              target="_blank"
              rel="noopener"
              class="text-white underline underline-offset-2 hover:text-white/80"
            >
              Guide d'hygiène informatique — ANSSI
            </ULink>
          </li>
          <li>
            <ULink
              to="https://secnumacademie.gouv.fr"
              target="_blank"
              rel="noopener"
              class="text-white underline underline-offset-2 hover:text-white/80"
            >
              SecNumAcadémie — Formation cybersécurité en ligne
            </ULink>
          </li>
        </ul>
        <p class="flex items-center gap-2 flex-wrap text-xs text-white/70 mt-1">
          <span>Rappel :</span>
          <span class="flex items-center gap-1">
            Windows <UKbd value="win" size="sm" variant="subtle" />+<UKbd
              value="L"
              size="sm"
              variant="subtle"
          /></span>
          <span class="text-white/30">·</span>
          <span class="flex items-center gap-1"
            >macOS <UKbd value="ctrl" size="sm" variant="subtle" />+<UKbd
              value="command"
              size="sm"
              variant="subtle" />+<UKbd value="Q" size="sm" variant="subtle"
          /></span>
          <span class="text-white/30">·</span>
          <span class="flex items-center gap-1"
            >Linux <UKbd value="super" size="sm" variant="subtle" />+<UKbd
              value="L"
              size="sm"
              variant="subtle"
          /></span>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.croissant-bounce {
  animation: bounce 2s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0px) rotate(-10deg);
  }
  50% {
    transform: translateY(0px) rotate(10deg);
  }
}
</style>
