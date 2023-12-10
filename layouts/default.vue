<template>
  <div
    id="default__wrap"
    class="absolute inset-0 flex items-center justify-center bg-zinc-300"
  >
    <div
      id="default__container"
      class="container min-h-[50%] bg-zinc-100 shadow-zinc-950 py-10 px-5 sm:p-10 opacity-80 sm:rounded-xl overflow-y-auto"
    >
      <slot />
    </div>
  </div>
</template>
