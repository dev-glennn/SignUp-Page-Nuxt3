<script lang="ts" setup>
defineProps<{
  label: string;
  error?: string;
}>();
</script>

<template>
  <label class="grid grid-cols-[5rem_auto] gap-[3rem] items-baseline">
    <span class="block text-sm font-medium text-slate-700">
      {{ label }}
    </span>
    <div>
      <slot />
      <p
        v-if="error"
        class="mt-2 text-pink-600 text-sm"
      >
        {{ error }}
      </p>
    </div>
  </label>
</template>
