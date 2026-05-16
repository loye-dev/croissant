<template>
  <div class="mb-8">
    <div class="sad-face text-8xl font-light leading-none mb-7 sm:text-9xl">:(</div>
    <h1 class="text-2xl font-light leading-snug sm:text-3xl">
      Vous avez été croissanté !
    </h1>
  </div>
</template>

<style>
.sad-face {
  animation: glitch 3s infinite;
}

@keyframes glitch {
  0%,
  95%,
  100% {
    text-shadow: none;
    transform: none;
  }
  96% {
    text-shadow:
      -2px 0 #ff6666,
      2px 0 #cc0000;
    transform: translateX(-2px);
  }
  97% {
    text-shadow:
      2px 0 #ff6666,
      -2px 0 #cc0000;
    transform: translateX(2px);
  }
  98% {
    text-shadow: none;
    transform: none;
  }
}
</style>
